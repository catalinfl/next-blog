import prisma from "@/utils/connect"
import { NextResponse } from "next/server"
type ParamsType = {
    params: {
        slug: string
    }
}

export const GET = async (req: Request, { params }: ParamsType) => {
    const slug = params.slug
    try {
        const post = await prisma.post.update({
            where: { slug },
            data: { views: { increment: 1 }},
            include: { user: true, comments: true }
        })
        return new NextResponse(JSON.stringify(post), { status: 200 })
    }
    catch(err) {
        return new NextResponse(JSON.stringify({ message: "Hey hey there's an error "}), { status: 200 })
    }
}