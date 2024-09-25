import { technologies } from "@/react/data/technologies"
import { variant } from "@/react/data/variant"
import { easeInOut, motion } from "framer-motion"
import Tech from "./Tech/Tech"

export default function Technologies() {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      transition={{ duration: 0.8, ease: easeInOut }}
      viewport={{ once: true }}
      variants={variant}
      className="flex flex-col gap-4 xs:gap-5 sm:gap-6 sl:gap-7 md:gap-8">
      <div>
        <Tech tech={technologies} direction="ltr" />
      </div>
      <div>
        <Tech tech={technologies} direction="rtl" />
      </div>
    </motion.div>
  )
}
