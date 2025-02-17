"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function AboutPage() {
  const router = useRouter();
  const isLoggedIn = true;
  const handleNavigation = () => {
    if (isLoggedIn) {
      router.push("/about/address");
    } else {
      router.push("/");
    }
  };
  return (
    <div>
      <h1 className="text-center text-5xl">About Page</h1>
      <p>
        <Link href="/about/address">address Page</Link>
      </p>
      <button type="button" onClick={handleNavigation}>
        Address Page
      </button>
    </div>
  );
}
