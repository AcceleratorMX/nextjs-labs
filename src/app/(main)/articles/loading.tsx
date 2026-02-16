import { ArticlesListSkeleton } from "@/app/ui/skeletons";

export default function ArticlesLoading() {
    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold mb-4">Articles</h1>
            <ArticlesListSkeleton />
        </div>
    );
}
