import classNames from "classnames"

interface CardProps {
  children: JSX.Element
  className?: string
}
export default function Card({ children, className }: CardProps) {
  return (
    <div
      className={classNames(
        "bg-white bg-opacity-[0.04] rounded-3xl border_gradient",
        className
      )}>
      {children}
    </div>
  )
}
