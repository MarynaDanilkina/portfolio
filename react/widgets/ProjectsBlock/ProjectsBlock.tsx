import Card from "@/react/components/Card/Card"
import Tagline from "@/react/components/Tagline/Tagline"
import Typography from "@/react/components/Typography/Typography"
import { projects } from "@/react/data/projects"
import Link from "next/link"

export default function ProjectsBlock() {
  return (
    <div className="relative flex flex-col z-[50] pt-28 xs:pt-32 sm:pt-32 sl:pt-52 md:pt-52 gap-5 xs:gap-6 sm:gap-7 sl:gap-8 md:gap-10 px-6 xs:px-14 sm:px-24 sl:px-40 md:px-48">
      <Typography
        tag="h2"
        color="text-transparent"
        className="absolute bg-number-gradient top-[84px] xs:top-[75px] sm:top-10 sl:top-[76px] md:top-14 right-32 xs:right-36 sm:right-44 sl:right-64 md:right-80">
        04
      </Typography>
      <div className="flex flex-col items-end gap-2 z-[1]" id="projects">
        <Tagline text="My work" />
        <Typography tag="h3">Projects</Typography>
      </div>
      <div className="grid grid-cols-1 sll:grid-cols-2 xmd:grid-cols-3 gap-6">
        {projects.map((project) => (
          <Card key={project.id} className="p-6">
            <div className="flex flex-col h-full justify-between gap-4">
              <div className="flex flex-col gap-4">
                <Typography tag="h4">{project.title}</Typography>
                <Typography htmlContent={project.description} />
              </div>

              <Link href={project.href} target="_blank">
                <div className="rounded-xl bg-white bg-opacity-[0.04] sll:h-[280px] md:h-[300px] xmd:h-[260px]">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="rounded-xl object-cover max-w-none w-full w-full h-full"
                  />
                </div>
              </Link>
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}
