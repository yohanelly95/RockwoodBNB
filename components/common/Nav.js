import Link from 'next/link'
import TripSelector from './TripSelector'

// const links = [
//   { href: '', label: 'Link' },
//   { href: '', label: 'Docs' },
// ]

export default function Nav() {
  return (
    <nav className="flex h-24">
      <Link href="/" className="self-start">
        <img
          className="cursor-pointer"
          src="/assets/img/logo-sm.svg"
          alt="Gray Prismic logo"
        />
      </Link>
      <div className="self-center w-full">
        <TripSelector />
      </div>
    </nav>
  )
}
