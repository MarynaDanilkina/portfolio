import Typography from "@/react/components/Typography/Typography"
import useWindowSize from "@/react/hooks/useWindwoSize"
import classNames from "classnames"
import { useMemo } from "react"
import { VerticalTimelineElement } from "react-vertical-timeline-component"

interface ExperiencesType {
  id: number
  title: string
  company: string
  date: string
  text: string
}

export default function ExperienceCard({
  experience,
}: {
  experience: ExperiencesType
}) {
  const size = useWindowSize()

  const desktop = useMemo(() => size && size >= 1170, [size])

  const dateClassName = (index: number) =>
    classNames(
      "text-golden font-manrope text-[8px] sl:text-base md:text-lg font-normal tracking-custom-wide uppercase opacity-100 flex items-center w-[110%] py-0 top-[2px] whitespace-nowrap",
      {
        "before:content-[''] before:block before:bg-golden before:h-[2px] before:w-0 xs:before:w-7 sl:before:w-16 md:before:w-[72px] before:mr-0 xs:before:mr-4 before:flex-shrink-0 left-[113%]":
          index % 2 === 0 || (index % 2 !== 0 && !desktop),
        "after:content-[''] after:block after:bg-golden after:h-[2px] after:w-7 xs:after:w-10 sl:after:w-16 md:after:w-[72px] after:ml-4 after:flex-shrink-0 justify-end right-[113%]":
          index % 2 !== 0 && desktop,
      }
    )

  return (
    <VerticalTimelineElement
      contentStyle={{ background: "rgba(255, 255, 255, 0.04)" }}
      contentArrowStyle={{ display: "none" }}
      date={experience.date}
      dateClassName={dateClassName(experience.id)}
      iconStyle={{ background: "#0B1D26" }}
      icon={
        <Typography
          className="h-full flex justify-center items-center"
          tag="p"
          type="BodyM"
          color="text-golden">
          {experience.id + 1}
        </Typography>
      }>
      <div className="flex flex-col gap-2">
        <div className="flex flex-col gap-1 xs:gap-2 sm:gap-3 md:gap-4">
          <Typography tag="h4">{experience.title}</Typography>
          <Typography className="m-0" tag="p" type="BodyM" color="text-golden">
            {experience.company}
          </Typography>
        </div>
        <Typography
          tag="p"
          type="BodyS"
          htmlContent={experience.text}
          className="pb-2"
        />
      </div>
    </VerticalTimelineElement>
  )
}
