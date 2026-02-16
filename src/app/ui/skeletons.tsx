// Loading animation
const shimmer =
    "before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_2s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/10 before:to-transparent";

export function ArticleCardSkeleton() {
    return (
        <div
            className={`${shimmer} relative overflow-hidden rounded-lg bg-neutral-800 p-4 shadow-md`}
        >
            <div className="flex flex-col gap-3">
                <div className="h-5 w-3/4 rounded-md bg-neutral-700" />
                <div className="h-4 w-full rounded-md bg-neutral-700" />
                <div className="h-4 w-5/6 rounded-md bg-neutral-700" />
                <div className="h-3 w-1/3 rounded-md bg-neutral-700" />
            </div>
        </div>
    );
}

export function ArticlesListSkeleton() {
    return (
        <div className="flex flex-col gap-4">
            {[...Array(6)].map((_, i) => (
                <ArticleCardSkeleton key={i} />
            ))}
        </div>
    );
}

export function FavoriteArticleSkeleton() {
    return (
        <div
            className={`${shimmer} relative overflow-hidden rounded-lg bg-neutral-800 p-6 shadow-md`}
        >
            <div className="flex flex-col gap-3">
                <div className="h-6 w-2/3 rounded-md bg-neutral-700" />
                <div className="h-4 w-full rounded-md bg-neutral-700" />
                <div className="h-4 w-full rounded-md bg-neutral-700" />
                <div className="h-3 w-2/5 rounded-md bg-neutral-700" />
            </div>
        </div>
    );
}

export function ArticleDetailSkeleton() {
    return (
        <div className="flex flex-col gap-6">
            <div
                className={`${shimmer} relative overflow-hidden rounded-lg bg-neutral-800 p-6`}
            >
                <div className="flex flex-col gap-4">
                    <div className="h-8 w-3/4 rounded-md bg-neutral-700" />
                    <div className="h-4 w-1/4 rounded-md bg-neutral-700" />
                    <div className="h-4 w-full rounded-md bg-neutral-700" />
                    <div className="h-4 w-full rounded-md bg-neutral-700" />
                    <div className="h-4 w-2/3 rounded-md bg-neutral-700" />
                </div>
            </div>
            <div className="flex flex-col gap-3">
                <div className="h-6 w-1/3 rounded-md bg-neutral-700" />
                {[...Array(3)].map((_, i) => (
                    <div
                        key={i}
                        className={`${shimmer} relative overflow-hidden rounded-lg bg-neutral-800 p-4`}
                    >
                        <div className="flex flex-col gap-2">
                            <div className="h-4 w-1/2 rounded-md bg-neutral-700" />
                            <div className="h-3 w-1/4 rounded-md bg-neutral-700" />
                            <div className="h-3 w-full rounded-md bg-neutral-700" />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
