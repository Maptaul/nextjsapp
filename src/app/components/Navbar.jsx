"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  console.log(pathname, pathname.includes("/dashboard"));
  if (pathname.includes("/dashboard")) {
    return (
      <div>
        <nav>
          <ul className="flex justify-center space-x-4">
            <Link href="/">
              <li>Home</li>
            </Link>
            <Link href="/services">
              <li>Service</li>
            </Link>
            <Link href="/about">
              <li>About</li>
            </Link>
          </ul>
        </nav>
      </div>
    );
  } else {
    return <></>;
  }
}
