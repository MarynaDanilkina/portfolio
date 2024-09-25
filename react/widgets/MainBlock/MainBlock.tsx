import Tagline from "@/react/components/Tagline/Tagline"
import Typography from "@/react/components/Typography/Typography"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/dist/ScrollTrigger"
import { useEffect, useRef } from "react"

gsap.registerPlugin(ScrollTrigger)

export default function MainBlock() {
  const blockRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    gsap.to(blockRef.current, {
      opacity: 0,
      scrollTrigger: {
        trigger: blockRef.current,
        start: "0px",
        end: "500px",
        scrub: true,
      },
    })
  }, [])

  return (
    <div className="relative flex flex-col h-dvh">
      <div className="fixed flex justify-center z-[1] top-[25%] w-full items-center max-w-[1920px]">
        <div className="flex flex-col gap-2" ref={blockRef}>
          <Tagline text="Hi!" />
          <Typography tag="h1" className="max-w-[950px]">
            I’m Maryna danilkina,
            <br /> a Front-End Developer
          </Typography>
        </div>
      </div>
      <img
        src="webp/sky.webp"
        alt="sky"
        className="absolute object-[30%_50%] h-[600px] inset-0 w-full sm:object-center sm:h-auto object-cover"
      />
      <img
        src="webp/mountains.webp"
        alt="mountains"
        className="absolute inset-x-0 bottom-0 z-0 object-[30%_50%] xs:object-center object-cover h-[600px] sm:h-auto w-full top-[35%] sm:top-[30%] sl:top-[40%]"
      />
      <img
        src="webp/hill.webp"
        alt="hill"
        className="absolute inset-x-0 bottom-0 top-[55%] sm:top-[45%] sl:top-[60%] z-50 object-[30%_50%] xs:object-[50%_0%] w-full h-[600px] sm:h-auto object-cover"
      />
      <div className="gradient-hero absolute inset-0 w-full h-dvh opacity-60 bg-custom-gradient"></div>
    </div>
  )
}
