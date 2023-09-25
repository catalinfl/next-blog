import { NextResponse } from "next/server"
import prisma from "@/utils/connect"
import { getAuthSession } from "../auth/[...nextauth]/route"


export const GET = async (req: Request) => {
    const { searchParams } = new URL(req.url)
    
    const page = searchParams.get("page") ? parseInt(searchParams.get("page") as string) : 1
    
    const POST_PER_PAGE = 2
 
    try {
        const [posts, count] = await prisma.$transaction([
            prisma.post.findMany({
                take: POST_PER_PAGE,
                skip: POST_PER_PAGE * (page - 1),
                orderBy: { createdAt: "desc" },
            }),
            prisma.post.count(),
        ])
        return new NextResponse(JSON.stringify({ posts, count }), { status: 200 })
    }
    catch(err) {
        return new NextResponse(JSON.stringify({ error: err }), { status: 404 })
    }
}

export const POST = async (req: Request) => {
    const body = await req.json()
 
    const user = await getAuthSession().then(session => session?.user?.name)
    
    console.log(user)
    if (user === null || user === undefined) return NextResponse.json({"Error": "You are not authenticated"}) 
    
    try {
        const post = await prisma.post.create({
            data: { ...body,
                    userName: user
            }
        })
        return NextResponse.json(post)
        
    }
    catch(err) {
        console.log(err)
        return NextResponse.json(err)
    }
}