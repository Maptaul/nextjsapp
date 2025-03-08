import Link from "next/link";

export default function NotFoundPage404() {
  return (
    <div className="container w-full h-screen flex flex-col justify-center items-center">
      <h1>404</h1>
      <p>Page not found</p>
      go back to <Link href="/">home</Link>
    </div>
  );
}
