import Link from 'next/link'
import { routes } from '@/lib/routes'

export default function NavBar() {
  return (
    <nav className="flex items-center justify-center gap-4 px-6 py-4 border-b border-zinc-200 dark:border-zinc-800">
      {routes.map((route) => (
        <Link
          key={route.path}
          href={route.path}
          className="inline-flex items-center justify-center h-10 px-5 rounded-full bg-zinc-900 text-white text-sm font-medium hover:bg-zinc-700 transition-colors dark:bg-white dark:text-black dark:hover:bg-zinc-200"
        >
          {route.label}
        </Link>
      ))}
    </nav>
  )
}
