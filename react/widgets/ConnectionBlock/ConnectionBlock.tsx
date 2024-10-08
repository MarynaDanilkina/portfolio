import Card from "@/react/components/Card/Card"
import Input from "@/react/components/Input/Input"
import Tagline from "@/react/components/Tagline/Tagline"
import TextArea from "@/react/components/TextArea/TextArea"
import Typography from "@/react/components/Typography/Typography"
import { contact } from "@/react/data/contact"
import { variant } from "@/react/data/variant"
import emailjs from "@emailjs/browser"
import { ConfigProvider, notification } from "antd/lib"
import { easeInOut, motion } from "framer-motion"
import Link from "next/link"
import { useState } from "react"
import { Controller, SubmitHandler, useForm } from "react-hook-form"

interface IValidationSchema {
  name: string
  email: string
  comment: string
}

export default function ConnectionBlock() {
  const [api, contextHolder] = notification.useNotification()

  const [loading, setLoading] = useState(false)

  const { control, handleSubmit, reset } = useForm<IValidationSchema>({
    defaultValues: {
      name: "",
      email: "",
      comment: "",
    },
  })

  const openNotification = ({
    title,
    text,
  }: {
    title: string
    text: string
  }) => {
    api.open({
      message: title,
      description: text,
    })
  }

  const onSubmit: SubmitHandler<IValidationSchema> = async (data) => {
    setLoading(true)

    emailjs
      .send(
        "service_k101qpv",
        "template_ohcctsh",
        {
          ...data,
        },
        "0L5_It5s0-5Ujf69L"
      )
      .then(
        () => {
          setLoading(false)
          openNotification({
            title: "Thank you!",
            text: "Your application has been received and is currently being reviewed and you will be contacted.",
          })
          reset({
            name: "",
            email: "",
            comment: "",
          })
        },
        (error) => {
          setLoading(false)
          openNotification({ title: "Error", text: "An error has occurred" })
          console.error(error)
        }
      )
  }

  return (
    <div className="relative overflow-hidden flex flex-col z-[50] pt-28 xs:pt-32 sm:pt-32 sl:pt-52 md:pt-52 pb-16 xs:pb-20 sm:pb-24 sl:pb-28 md:pb-32 gap-5 xs:gap-6 sm:gap-7 sl:gap-8 md:gap-10 px-6 xs:px-14 sm:px-24 sl:px-40 md:px-48">
      <Typography
        tag="h2"
        color="text-transparent"
        className="absolute bg-number-gradient top-[84px] xs:top-[75px] sm:top-10 sl:top-[76px] md:top-14 left-3 xs:left-9 sm:left-12 sl:left-24 md:left-[120px]">
        05
      </Typography>
      <div className="flex flex-col gap-2 z-[1]" id="contact">
        <Tagline text="Contact" />
        <Typography tag="h3">Get in touch</Typography>
      </div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.8, ease: easeInOut }}
        viewport={{ once: true }}
        variants={variant}
        className="flex flex-col-reverse sl:flex-row justify-between gap-6">
        <form
          className="grid grid-cols-1 md:grid-cols-2 gap-3 xs:gap-3 sl:gap-6 col-span-4 w-full"
          onSubmit={handleSubmit(onSubmit)}>
          <Controller
            name="name"
            control={control}
            render={({ field }) => (
              <Input placeholder="Name" type="text" {...field} />
            )}
          />
          <Controller
            name="email"
            control={control}
            render={({ field }) => (
              <Input placeholder="Email" type="text" {...field} />
            )}
          />
          <div className="md:col-span-2">
            <Controller
              name="comment"
              control={control}
              render={({ field }) => (
                <TextArea placeholder="Comment" {...field} />
              )}
            />
          </div>

          <button className="w-fit">
            <Card className="flex items-center justify-center py-2 xs:py-3 sm:py-4 sl:py-5 md:py-6 px-6 xs:px-7 sm:px-8 sl:px-9 md:px-10">
              <Typography tag="p" type="Info" color="text-golden">
                {loading ? "Sending..." : "Send"}
              </Typography>
            </Card>
          </button>
        </form>
        <div className="flex flex-col gap-3 xs:gap-3 sl:gap-6">
          {contact.map((data) => (
            <Link
              key={data.text}
              className="flex items-center gap-2"
              target="_blank"
              href={data.href}>
              {data.logo}
              <Typography>{data.text}</Typography>
            </Link>
          ))}
        </div>
      </motion.div>
      <ConfigProvider
        theme={{
          token: {
            colorBgElevated: "#366977",
            colorText: "#fff",
            colorIcon: "#fff",
          },
        }}>
        {contextHolder}
      </ConfigProvider>
    </div>
  )
}
