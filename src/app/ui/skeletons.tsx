// Loading animation
const shimmer =
    "before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_2s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/5 before:to-transparent";

export function ArticleCardSkeleton() {
    return (
        <div
            className={`${shimmer} relative overflow-hidden rounded-xl bg-neutral-900/50 border border-neutral-800/50 p-5`}
        >
            <div className="flex flex-col gap-3">
                <div className="flex gap-2">
                    <div className="h-5 w-10 rounded-full bg-neutral-800" />
                    <div className="h-5 w-16 rounded-full bg-neutral-800/50" />
                </div>
                <div className="h-4 w-3/4 rounded-md bg-neutral-800" />
                <div className="h-4 w-full rounded-md bg-neutral-800/70" />
                <div className="h-4 w-5/6 rounded-md bg-neutral-800/50" />
            </div>
        </div>
    );
}

export function ArticlesListSkeleton() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[...Array(6)].map((_, i) => (
                <ArticleCardSkeleton key={i} />
            ))}
        </div>
    );
}

export function FavoriteArticleSkeleton() {
    return (
        <div
            className={`${shimmer} relative overflow-hidden rounded-xl bg-neutral-900/50 border border-neutral-800/50 p-6`}
        >
            <div className="flex flex-col gap-3">
                <div className="flex items-center gap-2">
                    <div className="h-5 w-5 rounded bg-neutral-800" />
                    <div className="h-5 w-24 rounded-full bg-neutral-800" />
                </div>
                <div className="h-5 w-2/3 rounded-md bg-neutral-800" />
                <div className="h-4 w-full rounded-md bg-neutral-800/70" />
                <div className="h-4 w-full rounded-md bg-neutral-800/50" />
                <div className="mt-2 pt-3 border-t border-neutral-800/50">
                    <div className="h-3 w-32 rounded-md bg-neutral-800/40" />
                </div>
            </div>
        </div>
    );
}

export function ArticleDetailSkeleton() {
    return (
        <div className="flex flex-col gap-6 animate-fade-in">
            <div
                className={`${shimmer} relative overflow-hidden rounded-2xl bg-neutral-900/50 border border-neutral-800/50 p-8`}
            >
                <div className="flex flex-col gap-4">
                    <div className="flex gap-3">
                        <div className="h-6 w-20 rounded-full bg-neutral-800" />
                        <div className="h-8 w-8 rounded-full bg-neutral-800" />
                        <div className="h-6 w-20 rounded bg-neutral-800/50" />
                    </div>
                    <div className="h-8 w-3/4 rounded-md bg-neutral-800" />
                    <div className="h-4 w-full rounded-md bg-neutral-800/70" />
                    <div className="h-4 w-full rounded-md bg-neutral-800/50" />
                    <div className="h-4 w-2/3 rounded-md bg-neutral-800/40" />
                </div>
            </div>
        </div>
    );
}
