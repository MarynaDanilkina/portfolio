import classNames from "classnames"
import { useMemo } from "react"
import "swiper/css"
import { Autoplay, FreeMode, Navigation } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
import Card from "../../Card/Card"
import Typography from "../../Typography/Typography"

interface TechProps {
  direction: "rtl" | "ltr"
  tech: {
    id: number
    name: string
  }[]
}

export default function Tech({ direction, tech }: TechProps) {
  const styles = useMemo(
    () =>
      classNames({
        "tech-swiper": direction === "ltr",
        "tech-left-swiper": direction === "rtl",
      }),
    [direction]
  )

  return (
    <Swiper
      className={styles}
      navigation
      freeMode
      autoplay={{
        delay: 0,
        disableOnInteraction: false,
      }}
      speed={4000}
      onSwiper={(swiper) => swiper.changeLanguageDirection(direction)}
      modules={[Navigation, Autoplay, FreeMode]}
      spaceBetween={16}
      centeredSlides={false}
      slidesPerView={"auto"}
      loop={true}>
      {tech.map((data) => (
        <SwiperSlide key={data.id}>
          <Card className="flex items-center justify-center py-2 xs:py-3 sm:py-4 sl:py-5 md:py-6 px-6 xs:px-7 sm:px-8 sl:px-9 md:px-10">
            <Typography tag="p" type="BodyM">
              {data.name}
            </Typography>
          </Card>
        </SwiperSlide>
      ))}
    </Swiper>
  )
}
