import Link from "next/link";
import NavLink from "@/app/ui/NavLink";
import styles from "@/app/ui/NavMenu.module.css";

export default function MainLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="min-h-screen">
            <nav className={styles.nav}>
                <div className="flex items-center">
                    <Link href="/" className={styles.logo}>
                        NextJS Labs
                    </Link>
                    <ul className={styles.navList}>
                        <li>
                            <NavLink
                                href="/articles"
                                className={styles.navLink}
                                activeClassName={styles.navLinkActive}
                            >
                                Articles
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                href="/profile/settings"
                                className={styles.navLink}
                                activeClassName={styles.navLinkActive}
                            >
                                Settings
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                href="/profile/security"
                                className={styles.navLink}
                                activeClassName={styles.navLinkActive}
                            >
                                Security
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
            <main>{children}</main>
        </div>
    );
}
