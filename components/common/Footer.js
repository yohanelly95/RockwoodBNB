import Link from 'next/link'

const Footer = () => (
  <footer>
    <div className="flex py-8">
      <div className="w-1/4 h-16 flex items-center">
        <img className="w-56" src="../assets/img/rockwood-logo-blk.svg"></img>
      </div>
      <div className="w-3/4 h-16 flex justify-evenly items-center">
        <Link href="/"><a>Facebook</a></Link>
        <Link href="/"><a>Whatsapp</a></Link>
        <Link href="/"><a>About the team</a></Link>
      </div>
    </div>
  </footer>
);

export default Footer;