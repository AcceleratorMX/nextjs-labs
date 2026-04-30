"use client";

import Link from "next/link";
import useSWR from "swr";
import api from "@/app/lib/api";
import { Post, Comment } from "@/app/lib/types";
import { use } from "react";

type PostWithComments = Post & { comments: Comment[] };

const fetcher = (url: string) => api.get<PostWithComments>(url).then((res) => res.data);

interface ArticlePageProps {
    params: Promise<{ id: string }>;
}

export default function ArticlePage({ params }: ArticlePageProps) {
    const { id } = use(params);
    const { data: post, error, isLoading } = useSWR(`/articles/${id}`, fetcher);

    if (isLoading) {
        return (
            <div className="p-6 md:p-8 max-w-3xl mx-auto flex justify-center items-center h-64">
                <div className="text-xl text-neutral-400 animate-pulse">Loading article...</div>
            </div>
        );
    }

    if (error || !post) {
        return (
            <div className="p-6 md:p-8 max-w-3xl mx-auto">
                <div className="bg-red-500/10 text-red-500 p-4 rounded-xl">
                    Failed to load article.
                </div>
                <Link href="/articles" className="text-primary-500 mt-4 inline-block hover:underline">
                    ← Back to Articles
                </Link>
            </div>
        );
    }

    const comments = post.comments || [];

    return (
        <div className="p-6 md:p-8 max-w-3xl mx-auto animate-fade-in">
            {/* Back link */}
            <Link
                href="/articles"
                className="inline-flex items-center text-sm text-neutral-500 hover:text-neutral-300 mb-6 transition-colors"
            >
                ← Back to Articles
            </Link>

            {/* Article */}
            <article className="glass rounded-2xl p-6 md:p-8 mb-8 relative">
                <div className="flex items-center gap-3 mb-4">
                    <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-primary-500/10 text-primary-400">
                        Article #{post.id}
                    </span>
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 flex items-center justify-center text-xs font-bold text-white">
                        {post.userId}
                    </div>
                    <span className="text-sm text-neutral-500">User #{post.userId}</span>
                </div>
                
                <h1 className="text-2xl md:text-3xl font-bold text-neutral-100 mb-4 leading-tight">
                    {post.title}
                </h1>
                <p className="text-neutral-400 leading-relaxed whitespace-pre-wrap">{post.body}</p>
            </article>

            {/* Comments */}
            <section>
                <h2 className="text-xl font-bold text-neutral-200 mb-4">
                    Comments
                    <span className="ml-2 text-sm font-normal text-neutral-500">
                        ({comments.length})
                    </span>
                </h2>
                <div className="flex flex-col gap-3">
                    {comments.map((comment) => (
                        <div key={comment.id} className="glass rounded-xl p-4">
                            <div className="flex items-center gap-3 mb-2">
                                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-secondary-600 to-accent-500 flex items-center justify-center text-xs font-bold text-white uppercase">
                                    {comment.name?.charAt(0) || "U"}
                                </div>
                                <div>
                                    <p className="text-sm font-medium text-neutral-300">
                                        {comment.name || "Anonymous"}
                                    </p>
                                    <p className="text-xs text-neutral-600">{comment.email}</p>
                                </div>
                            </div>
                            <p className="text-sm text-neutral-400 leading-relaxed pl-11">
                                {comment.body}
                            </p>
                        </div>
                    ))}
                    {comments.length === 0 && (
                        <p className="text-neutral-500 text-sm">No comments yet.</p>
                    )}
                </div>
            </section>
        </div>
    );
}
