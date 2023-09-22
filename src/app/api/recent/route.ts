import { NextResponse } from "next/server"
import prisma from "@/utils/connect"

export const GET = async () => {

    try {
        const posts = await prisma.post.findMany(
            { take: 5,
              orderBy: {
                createdAt: 'desc'
              } 
            }
        )
        
        return new NextResponse(JSON.stringify(posts), { status: 200 })
    }
    catch(err) {
        return new NextResponse(JSON.stringify({"err": err}))
    }
}