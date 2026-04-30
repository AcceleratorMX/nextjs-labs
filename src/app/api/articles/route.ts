import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

// GET /api/articles
export async function GET() {
    try {
        const articles = await prisma.article.findMany({
            orderBy: { createdAt: "desc" },
        });
        return NextResponse.json(articles);
    } catch (error) {
        return NextResponse.json(
            { error: "Failed to fetch articles" },
            { status: 500 }
        );
    }
}

// POST /api/articles
export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { title, body: content, userId } = body;

        // Валідація
        if (!title || !content) {
            return NextResponse.json(
                { error: "Title and body are required" },
                { status: 400 }
            );
        }

        const newArticle = await prisma.article.create({
            data: {
                title,
                body: content,
                userId: userId || 1,
            },
        });

        return NextResponse.json(newArticle, { status: 201 });
    } catch (error) {
        return NextResponse.json(
            { error: "Failed to create article" },
            { status: 500 }
        );
    }
}
