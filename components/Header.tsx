import Link from 'next/link'

export default function Header() {
  return (
    <header className="flex gap-[10px]">
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
      <Link href="/signin">Sign In</Link>
      <Link href="/movies/tt4520988?plot=full">Sample Movie</Link>
      <Link href="/async">Async</Link>
      <Link href="/parallel">Parallel</Link>
    </header>
  )
}
