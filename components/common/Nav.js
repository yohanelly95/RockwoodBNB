import Link from 'next/link'

// const links = [
//   { href: '', label: 'Link' },
//   { href: '', label: 'Docs' },
// ]

export default function Nav() {
  return (
    <nav>
      <Link href="/">
        <a className="text-white">Home</a>
      </Link>
    </nav>
  )
}
