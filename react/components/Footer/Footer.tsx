import Link from "next/link"
import In from "../Icons/In"
import Logo from "../Icons/Logo"
import Tg from "../Icons/Tg"
import Typography from "../Typography/Typography"

export default function Footer() {
  return (
    <footer className="flex flex-col gap-2 sm:grid sm:grid-cols-3 max-w-[1920px] mx-auto my-0 px-5 xs:px-7 sm:px-8 sl:px-10 md:px-16 py-2 sl:py-4 border-t">
      <Link
        href="/"
        title="Maryna Danilkina"
        className="flex justify-center sm:justify-start">
        <Logo className="w-auto h-7 xs:h-8 sm:h-9 sl:h-11 md:h-16" />
      </Link>
      <Typography className="flex items-center justify-center uppercase">
        © 2024 MD. All rights reserved
      </Typography>
      <div className="flex items-center justify-center sm:justify-end gap-4">
        <Link href="https://www.linkedin.com/in/marynadanilkina/">
          <In />
        </Link>
        <Link href="https://t.me/Marynadanilkina">
          <Tg />
        </Link>
      </div>
    </footer>
  )
}
