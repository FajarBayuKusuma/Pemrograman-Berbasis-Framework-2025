'use client';

import { usePathname } from 'next/navigation';

type NavItemProps = {
    title: string;
    url: string;
    isSelected: boolean;
}

function NavItem({ title, url, isSelected }: NavItemProps) {
    return (
        <li>
            <a 
                className={`block px-3 py-2 transition hover:text-teal-500 ${
                    isSelected ? "text-teal-500" : ""
                }`}
                href={url}
            >
                {title}
            </a>
        </li>
    );
}

export default function Navbar(){
    const pathname = usePathname();

    return(
        <div className="flex justify-center mx-auto max-w-7xl h-20 pt-5 ">
            <nav>
                <ul className="flex rounded-full bg-blue px-3 text-sm font-medium text-black opacity-100 bg-white   ">
                    <NavItem
                    title="Tentang Saya"
                    url="/"
                    isSelected={pathname === '/'}
                    />
                    <NavItem
                    title="Proyek"
                    url="/projects"
                    isSelected={pathname === '/projetcs'}
                    />
                    <NavItem
                    title="Esai"
                    url="/essays"
                    isSelected={pathname === '/essays'}
                    />
                </ul>
            </nav>
        </div>
    );
}