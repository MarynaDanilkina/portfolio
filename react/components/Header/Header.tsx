import NAVBAR_LINKS from "@/react/data/navigation"
import { getWindowScrollTop } from "@/react/helpers/document"
import useDeviceType from "@/react/hooks/useDeviceType"
import classNames from "classnames"
import Link from "next/link"
import { useCallback, useEffect, useMemo, useRef, useState } from "react"
import Download from "../Icons/Download"
import Logo from "../Icons/Logo"
import Typography from "../Typography/Typography"
import HeaderBurger from "./HeaderBurger"
import HeaderMenu from "./HeaderMenu"

export default function Header() {
  const [open, setOpen] = useState(false)
  const [show, setShow] = useState(true)
  const [scrollValues, setScrollValues] = useState<number[]>([])

  const lastScrollTop = useRef(0)

  const getOpen = useCallback(() => {
    setOpen(!open)
  }, [open])

  const handleCloseMenu = useCallback(() => {
    setOpen(false)
  }, [setOpen])

  const { desktop, tab, mobile } = useDeviceType()

  const calculateSum = useCallback(
    () => scrollValues.reduce((sum, value) => sum + value, 0),
    [scrollValues]
  )

  const totalScrollSum = useMemo(calculateSum, [calculateSum])

  useEffect(() => {
    const onScroll = () => {
      const viewportHeight = window.innerHeight * 0.7
      const scrollTop = getWindowScrollTop()

      if (lastScrollTop.current - scrollTop > 0) {
        const directionCheck = lastScrollTop.current - scrollTop
        setScrollValues((prevScrollValues) => [
          ...prevScrollValues,
          directionCheck,
        ])
      }

      if (lastScrollTop.current - scrollTop < 0) {
        setScrollValues([])
      }

      if (
        (scrollTop - lastScrollTop.current <= 0 &&
          scrollTop > viewportHeight &&
          (desktop || tab)) ||
        (totalScrollSum > 250 && mobile) ||
        scrollTop <= viewportHeight
      ) {
        setShow(true)
      } else {
        setShow(false)
      }

      lastScrollTop.current = scrollTop
    }

    window.addEventListener("scroll", onScroll)

    return () => {
      window.removeEventListener("scroll", onScroll)
    }
  })

  return (
    <>
      <header
        className={classNames(
          "fixed top-0 z-[100] w-full bg-white bg-opacity-10 backdrop-blur shadow-2xl max-w-[1920px] mx-auto my-0 px-5 xs:px-7 sm:px-8 sl:px-10 md:px-16 py-2 sl:py-4 transition-header bg-black_1",
          show ? "translate-y-0" : "-translate-y-full"
        )}>
        <div className="grid grid-cols-2 sl:grid-cols-4">
          <Link href="/" title="Maryna Danilkina">
            <Logo className="w-auto h-7 xs:h-8 sm:h-9 sl:h-11 md:h-16" />
          </Link>
          <nav className="hidden sl:flex items-center justify-center col-span-2">
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
          <div className="hidden sl:flex items-center justify-end">
            <Link
              href={"/MarynaDanilkina_Frontend.pdf"}
              className="flex gap-1 items-center"
              download
              target="_blank">
              <Typography tag="h5">Download CV</Typography>
              <Download />
            </Link>
          </div>
          <div className="flex items-center justify-end sl:hidden">
            <HeaderBurger isOpen={open} onToggle={getOpen} />
          </div>
        </div>
      </header>
      <HeaderMenu closeMenu={handleCloseMenu} isOpen={open} />
    </>
  )
}
