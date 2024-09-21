import classNames from "classnames"
import React, { useMemo } from "react"
import typographyConst from "./const/const"
import type { ColorsType, SizeType, TagsType } from "./types"

export interface TypographyTypes {
  className?: string
  children?: React.ReactNode
  tag?: TagsType
  type?: SizeType
  color?: ColorsType
}

function Typography({
  children,
  className,
  tag = "p",
  type = "BodyS",
  color = "text-white",
}: TypographyTypes) {
  const tagDefault = tag === "p"
  const Component = useMemo(() => tag, [tag])
  const classes = useMemo(
    () =>
      classNames({
        [typographyConst.h1]: tag === "h1",
        [typographyConst.h2]: tag === "h2",
        [typographyConst.h3]: tag === "h3",
        [typographyConst.h4]: tag === "h4",
        [typographyConst.h5]: tag === "h5",
        [typographyConst.bodyL]: type === "BodyL" && tagDefault,
        [typographyConst.bodyM]: type === "BodyM" && tagDefault,
        [typographyConst.bodyS]: type === "BodyS" && tagDefault,
        [typographyConst.info]: type === "Info" && tagDefault,
        [color]: true,
      }),
    [type, tag, tagDefault, color]
  )

  return <Component className={`${classes} ${className}`}>{children}</Component>
}

export default Typography
