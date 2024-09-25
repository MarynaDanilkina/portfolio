import Tagline from "@/react/components/Tagline/Tagline"
import Technologies from "@/react/components/Technologies/Technologies"
import Typography from "@/react/components/Typography/Typography"

export default function TechnologiesBlock() {
  return (
    <div className="relative flex flex-col z-[50] pt-28 xs:pt-32 sm:pt-32 sl:pt-52 md:pt-52 gap-5 xs:gap-6 sm:gap-7 sl:gap-8 md:gap-10">
      <Typography
        tag="h2"
        color="text-transparent"
        className="absolute bg-number-gradient top-[84px] xs:top-[75px] sm:top-10 sl:top-[76px] md:top-14 right-32 xs:right-36 sm:right-44 sl:right-64 md:right-80">
        02
      </Typography>
      <div className="flex flex-col items-end gap-2 z-[1] px-6 xs:px-14 sm:px-24 sl:px-40 md:px-56">
        <Tagline text="What I use" />
        <Typography tag="h3">technologies</Typography>
      </div>
      <Technologies />
    </div>
  )
}
