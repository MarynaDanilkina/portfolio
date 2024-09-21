import { hideDocumentScroll } from "@/react/helpers/document"
import cn from "classnames"
import { useEffect } from "react"

interface MenuButtonTypes {
  isOpen: boolean
  onToggle: () => void
}

function HeaderBurger({ isOpen, onToggle }: MenuButtonTypes) {
  const styles =
    "relative w-full border border-solid border-white transition-all duration-300"

  useEffect(() => {
    hideDocumentScroll(isOpen)

    return () => {
      hideDocumentScroll(false)
    }
  }, [isOpen])

  return (
    <button
      className="flex items-center justify-center"
      onClick={() => onToggle()}
      type="button"
      aria-label="menu-toggler">
      <span className="flex w-7 flex-col justify-between gap-[6px]">
        <span
          className={cn(styles, {
            "translate-y-[8px] rotate-45": isOpen,
          })}
        />
        <span className={cn(styles, { "opacity-0": isOpen })} />
        <span
          className={cn(styles, {
            "-translate-y-[7px] -rotate-45": isOpen,
          })}
        />
      </span>
    </button>
  )
}

export default HeaderBurger
