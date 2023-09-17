import { NextRequest, NextResponse } from "next/server";
import { Prisma, PrismaClient } from "@prisma/client";
let prisma = new PrismaClient()


export const GET = async (req: NextRequest, res: NextResponse) => {
    try {
        const categories = await prisma.category.findMany()
        return new NextResponse(JSON.stringify(categories), { status: 200 })
    }
    catch(err) {
        console.log(err)
        return new NextResponse(JSON.stringify({ message: "test lol"}), { status: 404 })
    }
}