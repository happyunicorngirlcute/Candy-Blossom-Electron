import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center gap-6 p-16 text-center">
      <h1 className="text-4xl font-semibold tracking-tight">Candy Blossom</h1>
      <p className="text-lg text-zinc-600 dark:text-zinc-400 max-w-md">
        Welcome to Candy Blossom Desktop
      </p>
      <Link
        href="/auth/login"
        className="inline-flex items-center justify-center h-12 px-8 rounded-full bg-zinc-900 text-white font-medium hover:bg-zinc-700 transition-colors dark:bg-white dark:text-black dark:hover:bg-zinc-200"
      >
        Go to Login
      </Link>
    </div>
  );
}
