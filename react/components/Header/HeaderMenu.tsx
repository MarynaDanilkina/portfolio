import NAVBAR_LINKS from "@/react/data/navigation"
import cn from "classnames"
import Link from "next/link"
import Typography from "../Typography/Typography"

type Props = {
  isOpen: boolean
  closeMenu: () => void
}

function HeaderMenu({ closeMenu, isOpen }: Props) {

  return (
    <nav
      className={cn(
        "fixed left-0 top-0 z-[99] h-full w-full justify-between overflow-y-auto bg-teal px-4 transition-all duration-500 sm:px-8 sl:hidden",
        { "pointer-events-none invisible opacity-0": !isOpen }
      )}>
      <div className="flex h-full flex-col justify-between pb-14 pt-32">
        <div className="flex flex-col gap-10">
          <ul className="flex flex-col items-center gap-6 sm:gap-10">
            {NAVBAR_LINKS.map((link) => (
              <li key={link.value}>
                <Link href={link.href} onClick={() => closeMenu()}>
                  <Typography tag="h5">{link.value}</Typography>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default HeaderMenu
