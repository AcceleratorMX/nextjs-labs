"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavLinkProps {
    href: string;
    children: React.ReactNode;
    className?: string;
    activeClassName?: string;
}

export default function NavLink({
    href,
    children,
    className = "",
    activeClassName = "",
}: NavLinkProps) {
    const pathname = usePathname();
    const isActive = pathname === href || pathname.startsWith(href + "/");

    return (
        <Link
            href={href}
            className={`${className} ${isActive ? activeClassName : ""}`}
        >
            {children}
        </Link>
    );
}
