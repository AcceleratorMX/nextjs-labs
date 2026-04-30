import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

// GET /api/articles/[id]
export async function GET(
    request: Request,
    { params }: { params: Promise<{ id: string }> }
) {
    try {
        const { id } = await params;
        const article = await prisma.article.findUnique({
            where: { id },
        });

        if (!article) {
            return NextResponse.json({ error: "Article not found" }, { status: 404 });
        }

        const comments = await prisma.comment.findMany({
            where: { articleId: id },
            orderBy: { createdAt: "asc" }
        });

        return NextResponse.json({ ...article, comments });
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
    { params }: { params: Promise<{ id: string }> }
) {
    try {
        const { id } = await params;
        const body = await request.json();
        const { title, body: content } = body;

        const updatedArticle = await prisma.article.update({
            where: { id },
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
    { params }: { params: Promise<{ id: string }> }
) {
    try {
        const { id } = await params;
        await prisma.article.delete({
            where: { id },
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
