import React from "react";
import { Menu } from "@/interfaces";
import Link from "next/link";

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
  return (
    <div className="flex w-full">
      <div>
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
