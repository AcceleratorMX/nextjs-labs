import { Post, Comment } from "@/app/lib/types";

interface ArticlePageProps {
    params: Promise<{ id: string }>;
}

async function getPost(id: string): Promise<Post> {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    return res.json();
}

async function getComments(id: string): Promise<Comment[]> {
    const res = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${id}/comments`
    );
    return res.json();
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
        <main>
            <article>
                <h1>{post.title}</h1>
                <p>By User #{post.userId}</p>
                <p>{post.body}</p>
            </article>

            <section>
                <h2>Comments ({comments.length})</h2>
                <ul>
                    {comments.map((comment) => (
                        <li key={comment.id}>
                            <h4>{comment.name}</h4>
                            <small>{comment.email}</small>
                            <p>{comment.body}</p>
                        </li>
                    ))}
                </ul>
            </section>
        </main>
    );
}
