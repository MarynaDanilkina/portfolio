import Typography from "@/react/components/Typography/Typography"

export default function Tagline({ text }: { text: string }) {
  return (
    <div className="flex gap-4 items-center">
      <div className="bg-golden w-[72px] h-[2px]"></div>
      <Typography tag="p" color="text-golden" type="Info">
        {text}
      </Typography>
    </div>
  )
}
