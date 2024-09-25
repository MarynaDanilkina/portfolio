import Header from "@/react/components/Header/Header"
import AboutBlock from "@/react/widgets/AboutBlock/AboutBlock"
import ExperienceBlock from "@/react/widgets/ExperienceBlock/ExperienceBlock"
import MainBlock from "@/react/widgets/MainBlock/MainBlock"
import TechnologiesBlock from "@/react/widgets/TechnologiesBlock/TechnologiesBlock"
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
        "max-w-[1920px] mx-auto my-0"
      )}>
      <Header />
      <main>
        <MainBlock />
        <AboutBlock />
        <TechnologiesBlock />
        <ExperienceBlock />
      </main>
    </div>
  )
}
