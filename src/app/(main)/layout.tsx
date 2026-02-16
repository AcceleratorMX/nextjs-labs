import NavLink from "@/app/ui/NavLink";

export default function MainLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div>
            <nav>
                <ul>
                    <li>
                        <NavLink href="/articles">Articles</NavLink>
                    </li>
                    <li>
                        <NavLink href="/profile/settings">Settings</NavLink>
                    </li>
                    <li>
                        <NavLink href="/profile/security">Security</NavLink>
                    </li>
                </ul>
            </nav>
            <div>{children}</div>
        </div>
    );
}
