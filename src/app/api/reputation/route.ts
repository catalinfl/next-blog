import { NextResponse } from "next/server"

export const GET = async (req: Request) => {
    const url = new URL(req.url)
    return new NextResponse(JSON.stringify(url), { status: 200 })
}