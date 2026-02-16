import Link from "next/link";
import api from "@/app/lib/api";
import { Post } from "@/app/lib/types";

async function getPosts(): Promise<Post[]> {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    const { data } = await api.get<Post[]>("/posts");
    return data;
}

export default async function ArticlesPage() {
    const posts = await getPosts();

    return (
        <div className="p-6 md:p-8 max-w-6xl mx-auto animate-fade-in">
            <div className="mb-8">
                <h1 className="text-3xl font-bold mb-2 gradient-text">Articles</h1>
                <p className="text-neutral-500">
                    Explore {posts.length} articles from the community
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {posts.slice(0, 12).map((post) => (
                    <Link key={post.id} href={`/articles/${post.id}`}>
                        <article className="glass rounded-xl p-5 card-hover h-full">
                            <div className="flex items-center gap-2 mb-3">
                                <span className="text-xs font-medium px-2 py-1 rounded-full bg-primary-500/10 text-primary-400">
                                    #{post.id}
                                </span>
                                <span className="text-xs text-neutral-600">
                                    User #{post.userId}
                                </span>
                            </div>
                            <h2 className="text-base font-semibold text-neutral-200 mb-2 line-clamp-2">
                                {post.title}
                            </h2>
                            <p className="text-sm text-neutral-500 line-clamp-3">
                                {post.body}
                            </p>
                        </article>
                    </Link>
                ))}
            </div>
        </div>
    );
}
