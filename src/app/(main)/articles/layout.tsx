import NavLink from "@/app/ui/NavLink";
import styles from "@/app/ui/NavMenu.module.css";

export default function ArticlesLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div>
            <nav className={styles.subNav}>
                <ul className={styles.subNavList}>
                    <li>
                        <NavLink
                            href="/articles/favorite"
                            className={styles.subNavLink}
                            activeClassName={styles.subNavLinkActive}
                        >
                            Favorite
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            href="/articles/create"
                            className={styles.subNavLink}
                            activeClassName={styles.subNavLinkActive}
                        >
                            Create
                        </NavLink>
                    </li>
                </ul>
            </nav>
            <div>{children}</div>
        </div>
    );
}
