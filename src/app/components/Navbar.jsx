"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  console.log(pathname.includes("/dashboard"));
  if (pathname.includes("/dashboard")) {
    return (
      <nav>
        {/* 👇 Added proper list structure */}
        <ul className="flex justify-center space-x-4">
          {/* 👇 Wrapped Link INSIDE <li> (not the other way around) */}
          <li className="p-2">
            {" "}
            {/* 👈 Added padding for clickable area */}
            <Link href="/">Home</Link>
          </li>
          <li className="p-2">
            <Link href="/services">Service</Link>
          </li>
          <li className="p-2">
            <Link href="/about">About</Link>
          </li>
        </ul>
      </nav>
    );
  } else {
    return null;
    {
      /* 👈 Changed from empty fragment to null for better performance */
    }
  }
}
