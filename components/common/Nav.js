import Link from 'next/link'

// const links = [
//   { href: '', label: 'Link' },
//   { href: '', label: 'Docs' },
// ]

export default function Nav() {
  return (
    <nav>
      <ul className="flex justify-between items-center p-8">
        <li>
          <Link href="/">
            <a className="text-blue-500 no-underline">Home</a>
          </Link>
        </li>
        <li>
          <Link href="/Gallery" as="gallery">
            <a className="text-blue-500 no-underline">Gallery</a>
          </Link>
        </li>
        {/* <ul className="flex justify-between items-center space-x-4">
          {links.map(({ href, label }) => (
            <li key={`${href}${label}`}>
              <a href={href} className="">
                {label}
              </a>
            </li>
          ))}
        </ul> */}
      </ul>
    </nav>
  )
}