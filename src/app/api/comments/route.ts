import { NextResponse } from "next/server"
import prisma from "@/utils/connect"
type Params = {
    params: {
        id: string
    }
}

export const GET = async (req: Request) => {
    const { searchParams } = new URL(req.url)
    const id = searchParams.get("id") as string
    const reputation = searchParams.get("reputation") as string  
 
    const comm = await prisma.comment.update({
        where: {
            id
        },
        data: {
            reputation: reputation === "like" ? { increment: 1 } : { decrement: 1 }
        }   
    })
    
    return new NextResponse(JSON.stringify(comm), { status: 200 })
}