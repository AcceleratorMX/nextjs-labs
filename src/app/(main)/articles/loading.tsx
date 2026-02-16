import { ArticlesListSkeleton } from "@/app/ui/skeletons";

export default function ArticlesLoading() {
    return (
        <div className="p-6 md:p-8 max-w-6xl mx-auto">
            <div className="mb-8">
                <div className="h-9 w-40 rounded-lg bg-neutral-800 mb-2" />
                <div className="h-5 w-64 rounded-lg bg-neutral-800/50" />
            </div>
            <ArticlesListSkeleton />
        </div>
    );
}
