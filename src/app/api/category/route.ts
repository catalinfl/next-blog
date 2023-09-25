import prisma from "@/utils/connect"
import { NextResponse } from "next/server"

export const GET = async () => {
    try {
        const categories = await prisma.category.findMany()
        
        const catmod = categories.map((category) => {
            const randomN = Math.floor(Math.random() * 5)
            console.log(randomN)
            var getColour = ""
            switch (randomN) {
                case 0:
                    getColour = "primary"
                    break
                case 1:
                    getColour = "secondary"
                    break
                case 2:
                    getColour = "neutral"
                    break
                case 3: 
                    getColour = "accent"
                    break;
                case 4:
                    getColour = "ghost"
                    break
            }
            return { ...category, colour: getColour}
        })
        
        return new NextResponse(JSON.stringify(catmod), { status: 200 })
    }
    catch(err) {
        return new NextResponse(JSON.stringify({ error: err }), { status: 404 })
    }
}