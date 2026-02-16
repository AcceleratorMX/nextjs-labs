import Link from "next/link";

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden">
      {/* Background gradient blobs */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary-600/20 rounded-full blur-[128px] animate-float" />
        <div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary-500/20 rounded-full blur-[128px] animate-float"
          style={{ animationDelay: "2s" }}
        />
        <div
          className="absolute top-1/2 left-1/2 w-64 h-64 bg-accent-500/10 rounded-full blur-[128px] animate-float"
          style={{ animationDelay: "4s" }}
        />
      </div>

      {/* Hero content */}
      <div className="text-center px-6 animate-fade-in">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 gradient-text">
          NextJS Labs
        </h1>
        <p className="text-lg md:text-xl text-neutral-400 max-w-xl mx-auto mb-10 leading-relaxed">
          Laboratory project exploring Next.js App Router, data fetching,
          styling with Tailwind CSS, and Ant Design components.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/articles"
            className="px-8 py-3 rounded-xl font-semibold text-white gradient-bg
                       hover:opacity-90 transition-all duration-300
                       hover:shadow-lg hover:shadow-primary-500/25 hover:scale-105"
          >
            Browse Articles
          </Link>
          <Link
            href="/articles/create"
            className="px-8 py-3 rounded-xl font-semibold text-neutral-300
                       border border-neutral-700 hover:border-neutral-500
                       hover:text-white transition-all duration-300
                       hover:bg-neutral-800/50"
          >
            Create Article
          </Link>
        </div>
      </div>

      {/* Bottom decorative line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary-500/50 to-transparent" />
    </div>
  );
}
