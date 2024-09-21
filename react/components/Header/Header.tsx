import NAVBAR_LINKS from "@/react/data/navigation"
import Link from "next/link"
import Download from "../Icons/Download"
import Logo from "../Icons/Logo"
import Typography from "../Typography/Typography"

export default function Header() {
  return (
    <header className="fixed left-0 top-0 z-[100] w-full bg-white bg-opacity-10 backdrop-blur shadow-2xl px-16 py-5">
      <div className="grid grid-cols-4">
        <div className="">
          <Link href="/" title="Maryna Danilkina">
            <Logo />
          </Link>
        </div>
        <nav className="flex items-center justify-center col-span-2">
          <ul className="flex gap-3">
            {NAVBAR_LINKS.map((link) => (
              <li key={link.value}>
                <Link href={link.href}>
                  <Typography tag="h5">{link.value}</Typography>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="flex items-center justify-end">
          <button className="flex gap-1 items-center">
            <Typography tag="h5">Download CV</Typography>
            <Download />
          </button>
        </div>
      </div>
    </header>
  )
}
