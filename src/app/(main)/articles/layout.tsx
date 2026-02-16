import NavLink from "@/app/ui/NavLink";

export default function ArticlesLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div>
            <nav>
                <ul>
                    <li>
                        <NavLink href="/articles/favorite">Favorite</NavLink>
                    </li>
                    <li>
                        <NavLink href="/articles/create">Create</NavLink>
                    </li>
                </ul>
            </nav>
            <div>{children}</div>
        </div>
    );
}
