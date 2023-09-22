import { NextResponse } from "next/server"
import prisma from "@/utils/connect"

export const GET = async (req: Request) => {
    const { searchParams } = new URL(req.url)
    
    const page = searchParams.get("page") ? parseInt(searchParams.get("page") as string) : 1
    
    const POST_PER_PAGE = 2
    
    const query = {
        take: POST_PER_PAGE,
        skip: POST_PER_PAGE * (page - 1)
    }

    try {
        const [posts, count] = await prisma.$transaction([
            prisma.post.findMany(query),
            prisma.post.count(),
        ])
        return new NextResponse(JSON.stringify({ posts, count }), { status: 200 })
    }
    catch(err) {
        return new NextResponse(JSON.stringify({ error: err }), { status: 404 })
    }
}