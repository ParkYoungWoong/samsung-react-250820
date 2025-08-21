import Link from 'next/link'

export default function Header() {
  return (
    <header>
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
      <Link href="/signin">Sign In</Link>
      <Link href="/movies/tt4520988?plot=full">Sample Movie</Link>
    </header>
  )
}
