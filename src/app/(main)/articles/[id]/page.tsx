import Link from "next/link";
import api from "@/app/lib/api";
import { Post, Comment } from "@/app/lib/types";

interface ArticlePageProps {
    params: Promise<{ id: string }>;
}

async function getPost(id: string): Promise<Post> {
    const { data } = await api.get<Post>(`/posts/${id}`);
    return data;
}

async function getComments(id: string): Promise<Comment[]> {
    const { data } = await api.get<Comment[]>(`/posts/${id}/comments`);
    return data;
}

export async function generateStaticParams() {
    return Array.from({ length: 10 }, (_, i) => ({
        id: String(i + 1),
    }));
}

export default async function ArticlePage({ params }: ArticlePageProps) {
    const { id } = await params;
    const [post, comments] = await Promise.all([getPost(id), getComments(id)]);

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
            <article className="glass rounded-2xl p-6 md:p-8 mb-8">
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
                <p className="text-neutral-400 leading-relaxed">{post.body}</p>
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
                                    {comment.name.charAt(0)}
                                </div>
                                <div>
                                    <p className="text-sm font-medium text-neutral-300">
                                        {comment.name}
                                    </p>
                                    <p className="text-xs text-neutral-600">{comment.email}</p>
                                </div>
                            </div>
                            <p className="text-sm text-neutral-400 leading-relaxed pl-11">
                                {comment.body}
                            </p>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}
