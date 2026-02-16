import { Suspense } from "react";
import FavoriteArticle from "@/app/ui/FavoriteArticle";
import { FavoriteArticleSkeleton } from "@/app/ui/skeletons";

const FAVORITE_IDS = [1, 5, 10];

export default function FavoriteArticlesPage() {
    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold mb-4">Favorite Articles</h1>
            <div className="flex flex-col gap-4">
                {FAVORITE_IDS.map((id) => (
                    <Suspense key={id} fallback={<FavoriteArticleSkeleton />}>
                        <FavoriteArticle id={id} />
                    </Suspense>
                ))}
            </div>
        </div>
    );
}
