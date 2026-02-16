import Link from "next/link";
import { Post } from "@/app/lib/types";

async function getPosts(): Promise<Post[]> {
    // Artificial delay to demonstrate loading state
    await new Promise((resolve) => setTimeout(resolve, 2000));

    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    return res.json();
}

export default async function ArticlesPage() {
    const posts = await getPosts();

    return (
        <main>
            <h1>Articles</h1>
            <ul>
                {posts.map((post) => (
                    <li key={post.id}>
                        <Link href={`/articles/${post.id}`}>
                            <h2>{post.title}</h2>
                        </Link>
                        <p>{post.body.slice(0, 100)}...</p>
                    </li>
                ))}
            </ul>
        </main>
    );
}
