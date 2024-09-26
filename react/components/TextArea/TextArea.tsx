import classNames from "classnames"
import {
  type DetailedHTMLProps,
  forwardRef,
  type TextareaHTMLAttributes,
  useMemo,
} from "react"

interface TextAreaProps
  extends DetailedHTMLProps<
    TextareaHTMLAttributes<HTMLTextAreaElement>,
    HTMLTextAreaElement
  > {
  classes?: string
}

const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(
  ({ value, classes, ...rest }, ref) => {
    const styles = useMemo(
      () =>
        classNames(
          "bg-white bg-opacity-[0.04] outline-none rounded-3xl font-manrope text-xs sm:text-sm sl:text-base font-semibold leading-6 flex items-center justify-center py-2 xs:py-3 sm:py-4 sl:py-5 md:py-6 px-6 xs:px-7 sm:px-8 sl:px-9 md:px-10 text-white h-44 resize-none",
          classes
        ),
      [classes]
    )

    return (
      <div className="relative flex flex-col border_gradient">
        <textarea ref={ref} value={value} className={styles} {...rest} />
      </div>
    )
  }
)

TextArea.displayName = "TextArea"

export default TextArea
