import { Post } from "@/app/lib/types";

interface FavoriteArticleProps {
    id: number;
}

export default async function FavoriteArticle({ id }: FavoriteArticleProps) {
    await new Promise((resolve) =>
        setTimeout(resolve, 1000 + Math.random() * 2000)
    );

    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    const post: Post = await res.json();

    return (
        <article className="glass rounded-xl p-6 card-hover animate-fade-in">
            <div className="flex items-center gap-2 mb-3">
                <span className="text-lg">⭐</span>
                <span className="text-xs font-medium px-2 py-1 rounded-full bg-accent-500/10 text-accent-400">
                    Favorite #{post.id}
                </span>
            </div>
            <h3 className="text-lg font-semibold text-neutral-200 mb-2">
                {post.title}
            </h3>
            <p className="text-sm text-neutral-400 leading-relaxed">{post.body}</p>
            <div className="mt-4 pt-3 border-t border-neutral-800">
                <small className="text-neutral-600">
                    Post #{post.id} · User #{post.userId}
                </small>
            </div>
        </article>
    );
}
