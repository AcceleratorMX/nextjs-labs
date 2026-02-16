import { Suspense } from "react";
import FavoriteArticle from "@/app/ui/FavoriteArticle";
import { FavoriteArticleSkeleton } from "@/app/ui/skeletons";

const FAVORITE_IDS = [1, 5, 10];

export default function FavoriteArticlesPage() {
    return (
        <div className="p-6 md:p-8 max-w-3xl mx-auto">
            <div className="mb-8">
                <h1 className="text-3xl font-bold mb-2 gradient-text">
                    Favorite Articles
                </h1>
                <p className="text-neutral-500">
                    Your hand-picked collection of the best reads
                </p>
            </div>
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
