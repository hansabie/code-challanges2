"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function SideNav() {
  const dashboardMenu = [
    { name: "Home", href: "/" },
    { name: "About us", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Our Teams", href: "/teams" },
  ];
  const pathName = usePathname();
  return (
    <aside className="bg-slate-300 p-4 flex-col rounded-lg  ">
      <nav>
        <ul className="grid gap-2">
          {dashboardMenu.map((menu, index) => (
            <li key={index} className="mt-2">
              <Link
                href={menu.href}
                className={`p-2 rounded-lg block transition duration-1000 ease-in-out ${
                  pathName === menu.href ? "bg-red-500" : "bg-slate-200"
                }  `}
              >
                {menu.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}
