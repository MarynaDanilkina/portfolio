import Tagline from "@/react/components/Tagline/Tagline"
import Typography from "@/react/components/Typography/Typography"
import { variant } from "@/react/data/variant"
import { easeInOut, motion } from "framer-motion"

export default function AboutBlock() {
  return (
    <div className="relative flex flex-col z-[50] pt-0 xs:pt-0 sm:pt-0 sl:pt-52 md:pt-52 px-6 xs:px-14 sm:px-24 sl:px-40 md:px-56 gap-5 xs:gap-6 sm:gap-7 sl:gap-8 md:gap-10">
      <Typography
        tag="h2"
        color="text-transparent"
        className="absolute bg-number-gradient -top-7 xs:-top-12 sm:-top-20 sl:top-[76px] md:top-14 left-3 xs:left-9 sm:left-12 sl:left-24 md:left-[120px]">
        01
      </Typography>
      <div className="flex flex-col gap-2 z-[1]">
        <Tagline text="Introduction" />
        <Typography tag="h3">About me</Typography>
      </div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.8, ease: easeInOut }}
        viewport={{ once: true }}
        variants={variant}>
        <Typography
          type="BodyL"
          tag="p"
          className="max-w-full sl:max-w-[540px] md:max-w-[795px] text-left">
          As a Front-end developer with over 2 years of experience, I specialize
          in creating interfaces and web projects using technologies such as
          JavaScript, TypeScript, and React. I have worked on projects of
          varying complexity — from simple single-page websites to complex
          applications with rich functionality. I have successfully brought
          applications to release and actively supported and enhanced existing
          projects. My experience with Git version control systems enables me to
          effectively participate in the development and maintenance of
          projects. I work closely with the development team, from designers to
          QA engineers, ensuring the quality and consistency of the project.
        </Typography>
      </motion.div>
    </div>
  )
}
