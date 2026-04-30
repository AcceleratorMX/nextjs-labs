import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

// GET /api/articles/[id]
export async function GET(
    request: Request,
    { params }: { params: { id: string } }
) {
    try {
        const article = await prisma.article.findUnique({
            where: { id: params.id },
        });

        if (!article) {
            return NextResponse.json({ error: "Article not found" }, { status: 404 });
        }

        return NextResponse.json(article);
    } catch (error) {
        return NextResponse.json(
            { error: "Failed to fetch article" },
            { status: 500 }
        );
    }
}

// PATCH /api/articles/[id]
export async function PATCH(
    request: Request,
    { params }: { params: { id: string } }
) {
    try {
        const body = await request.json();
        const { title, body: content } = body;

        const updatedArticle = await prisma.article.update({
            where: { id: params.id },
            data: {
                ...(title && { title }),
                ...(content && { body: content }),
            },
        });

        return NextResponse.json(updatedArticle);
    } catch (error) {
        return NextResponse.json(
            { error: "Failed to update article" },
            { status: 500 }
        );
    }
}

// DELETE /api/articles/[id]
export async function DELETE(
    request: Request,
    { params }: { params: { id: string } }
) {
    try {
        await prisma.article.delete({
            where: { id: params.id },
        });

        // 204 No Content
        return new NextResponse(null, { status: 204 });
    } catch (error) {
        return NextResponse.json(
            { error: "Failed to delete article" },
            { status: 500 }
        );
    }
}
