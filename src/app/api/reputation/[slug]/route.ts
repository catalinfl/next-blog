import { NextResponse } from "next/server"

type Params = {
    params: {
        slug: string
    }
}

export const GET = async (req: Request, { params }: Params) => {
    const param = params.slug
    
    return new NextResponse(JSON.stringify(param), { status: 200 })
}