import Link from 'next/link'
import TripSelector from './TripSelector'

// const links = [
//   { href: '', label: 'Link' },
//   { href: '', label: 'Docs' },
// ]

export default function Nav() {
  return (
    <nav className="flex h-24 border-b-2 border-gray-200">
      <Link href="/">
        <img
          className="cursor-pointer"
          src="/assets/img/logo-sm.svg"
          alt="logo"
        />
      </Link>
      <div className="self-center w-full">
        <TripSelector isNav={true}/>
      </div>
    </nav>
  )
}
