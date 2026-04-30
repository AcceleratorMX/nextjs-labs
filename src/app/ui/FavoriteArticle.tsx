"use client";

import useSWR from "swr";
import api from "@/app/lib/api";
import { Post } from "@/app/lib/types";

const fetcher = (url: string) => api.get<Post>(url).then((res) => res.data);

interface FavoriteArticleProps {
    id: number | string;
}

export default function FavoriteArticle({ id }: FavoriteArticleProps) {
    const { data: post, error, isLoading } = useSWR(`/articles/${id}`, fetcher);

    if (isLoading) {
        return (
            <article className="glass rounded-xl p-6 h-40 flex items-center justify-center animate-pulse border border-neutral-800">
                <span className="text-neutral-500 text-sm">Loading favorite...</span>
            </article>
        );
    }

    if (error || !post) {
        return (
            <article className="glass rounded-xl p-6 h-40 flex items-center justify-center border border-red-900/30">
                <span className="text-red-500 text-sm">Failed to load favorite.</span>
            </article>
        );
    }

    return (
        <article className="glass rounded-xl p-6 card-hover animate-fade-in">
            <div className="flex items-center gap-2 mb-3">
                <span className="text-lg">⭐</span>
                <span className="text-xs font-medium px-2 py-1 rounded-full bg-accent-500/10 text-accent-400">
                    Favorite #{post.id}
                </span>
            </div>
            <h3 className="text-lg font-semibold text-neutral-200 mb-2 truncate">
                {post.title}
            </h3>
            <p className="text-sm text-neutral-400 leading-relaxed line-clamp-2">{post.body}</p>
            <div className="mt-4 pt-3 border-t border-neutral-800">
                <small className="text-neutral-600">
                    User #{post.userId}
                </small>
            </div>
        </article>
    );
}
