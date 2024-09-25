import Typography from "@/react/components/Typography/Typography"

export default function Tagline({ text }: { text: string }) {
  return (
    <div className="flex gap-4 items-center">
      <Typography
        tag="p"
        color="text-golden"
        type="Info"
        className="relative flex items-center before:content-[''] before:block before:bg-golden before:h-[2px] before:w-7 xs:before:w-10 sl:before:w-16 md:before:w-[72px] before:mr-4 before:flex-shrink-0">
        {text}
      </Typography>
    </div>
  )
}
