import classNames from "classnames"
import {
  forwardRef,
  useMemo,
  type DetailedHTMLProps,
  type InputHTMLAttributes,
} from "react"

interface InputTypes
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  classes?: string
}

const Input = forwardRef<HTMLInputElement, InputTypes>(
  ({ value, classes, ...rest }, ref) => {
    const styles = useMemo(
      () =>
        classNames(
          "bg-white bg-opacity-[0.04] outline-none rounded-3xl font-manrope text-xs sm:text-sm sl:text-base font-semibold leading-6 flex items-center justify-center py-2 xs:py-3 sm:py-4 sl:py-5 md:py-6 px-6 xs:px-7 sm:px-8 sl:px-9 md:px-10 text-white",
          classes
        ),
      [classes]
    )

    return (
      <div className="relative flex flex-col border_gradient">
        <input ref={ref} value={value} className={styles} {...rest} />
      </div>
    )
  }
)

Input.displayName = "Input"

export default Input
