import Tagline from "@/react/components/Tagline/Tagline"
import Typography from "@/react/components/Typography/Typography"
import { experiences } from "@/react/data/experience"
import { VerticalTimeline } from "react-vertical-timeline-component"
import ExperienceCard from "./ExperienceCard/ExperienceCard"

import "react-vertical-timeline-component/style.min.css"

export default function ExperienceBlock() {
  return (
    <div className="relative overflow-hidden flex flex-col z-[50] pt-28 xs:pt-32 sm:pt-32 sl:pt-52 md:pt-52 gap-5 xs:gap-6 sm:gap-7 sl:gap-8 md:gap-10 px-6 xs:px-14 sm:px-24 sl:px-40 md:px-48">
      <Typography
        tag="h2"
        color="text-transparent"
        className="absolute bg-number-gradient top-[84px] xs:top-[75px] sm:top-10 sl:top-[76px] md:top-14 left-3 xs:left-9 sm:left-12 sl:left-24 md:left-[120px]">
        03
      </Typography>
      <div className="flex flex-col gap-2 z-[1]">
        <Tagline text="What I have" />
        <Typography tag="h3">Work Experience</Typography>
      </div>
      <div className="flex flex-col">
        <VerticalTimeline animate={true}>
          {experiences.map((experience) => (
            <ExperienceCard experience={experience} key={experience.id} />
          ))}
        </VerticalTimeline>
      </div>
    </div>
  )
}
