import Link from "next/link";

export default function Navbar() {
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
}
