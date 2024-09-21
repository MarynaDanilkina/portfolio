import Header from "@/react/components/Header/Header"
import classNames from "classnames"
import { Acme, ADLaM_Display, Manrope } from "next/font/google"

const manrope = Manrope({
  weight: ["400", "500", "600", "700"],
  style: ["normal"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-manrope",
})

const acme = Acme({
  weight: ["400"],
  style: ["normal"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-acme",
})

const aDLaM = ADLaM_Display({
  weight: ["400"],
  style: ["normal"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-aDLaM",
})

export default function Home() {
  return (
    <div
      className={classNames(
        manrope.variable,
        acme.variable,
        aDLaM.variable,
        "flex justify-center items-center h-dvh"
      )}>
      <Header />
    </div>
  )
}
