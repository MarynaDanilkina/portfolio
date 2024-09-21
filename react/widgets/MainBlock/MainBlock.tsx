export default function MainBlock() {
  return (
    <div>
      <div>
        <div className="relative flex flex-col h-dvh">
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
          <div className="gradient-hero absolute inset-0 w-full h-dvh opacity-60 bg-gradient-to-tr from-[#0b1d26] to-transparent"></div>
        </div>
      </div>
    </div>
  )
}
