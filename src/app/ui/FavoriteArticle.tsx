import { Post } from "@/app/lib/types";

interface FavoriteArticleProps {
    id: number;
}

export default async function FavoriteArticle({ id }: FavoriteArticleProps) {
    // Artificial delay to demonstrate independent loading
    await new Promise((resolve) => setTimeout(resolve, 1000 + Math.random() * 2000));

    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    const post: Post = await res.json();

    return (
        <article>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
            <small>Post #{post.id} by User #{post.userId}</small>
        </article>
    );
}
