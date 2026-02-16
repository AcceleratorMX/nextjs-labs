import { Suspense } from "react";
import FavoriteArticle from "@/app/ui/FavoriteArticle";

const FAVORITE_IDS = [1, 5, 10];

export default function FavoriteArticlesPage() {
    return (
        <main>
            <h1>Favorite Articles</h1>
            <div>
                {FAVORITE_IDS.map((id) => (
                    <Suspense key={id} fallback={<p>Loading article #{id}...</p>}>
                        <FavoriteArticle id={id} />
                    </Suspense>
                ))}
            </div>
        </main>
    );
}
