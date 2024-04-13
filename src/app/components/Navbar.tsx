"use client";
import React, { useState } from "react";
import { Menu } from "@/interfaces";
import Link from "next/link";
import { GiHamburgerMenu } from "react-icons/gi";

const menu: Menu[] = [
  {
    option: "Home",
    href: "",
  },
  {
    option: "New in",
    href: "newin",
  },
  {
    option: "Classics",
    href: "classics",
  },
  {
    option: "About us",
    href: "aboutus",
  },
];

export default function Navbar() {
  const [showMenu, setShowMenu] = useState(false);

  const toggleShowMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div
      className="flex w-full relative"
    >
      <button className="absolute top-0 right-0 z-30 p-2" onClick={toggleShowMenu}><GiHamburgerMenu /></button>
      <div style={{ display: `${showMenu ? "flex" : "none"}` }} className="flex-col w-full text-center absolute top-0 left-0 bg-primary-color/20">
        {menu.map((e, i) => {
          return (
            <Link key={i} href={e.href} className="p-2">
              {e.option}
            </Link>
          );
        })}
      </div>
    </div>
  );
}
