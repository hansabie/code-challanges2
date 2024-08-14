"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Header = () => {
  const pathname = usePathname();

  return (
    <div className="flex justify-between items-center gap-7 p-7 bg-black text-white sticky top-0 sm:px-20 z-10">
      <img
        className="xs:hidden sm:block w-12"
        src="boxing-icon.svg"
        alt="icon"
      />
      <ul className="flex justify-end text-center items-center gap-7">
        <li
          className={`${pathname == "/" && "bg-white rounded text-black p-2"}`}
        >
          <Link href="/">Home</Link>
        </li>
        <li
          className={`${
            pathname == "/about" && "bg-white rounded text-black p-2"
          }`}
        >
          <Link href="/about">About Us</Link>
        </li>
        <li
          className={`${
            pathname == "/services" && "bg-white rounded text-black p-2"
          }`}
        >
          <Link href="/services">Services</Link>
        </li>
        <li
          className={`${
            pathname == "/teams" && "bg-white rounded text-black p-2"
          }`}
        >
          <Link href="/teams">Our Teams</Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
