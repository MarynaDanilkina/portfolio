export function hideDocumentScroll(hide: boolean) {
  if (window !== undefined) {
    const scrollbarWidth = window.innerWidth - document.body.clientWidth
    const html = document.getElementsByTagName("html")[0]
    const header = document.querySelector("header") as HTMLElement

    if (header) {
      header.classList[hide ? "add" : "remove"]("scroll-class")
    }

    if (header && scrollbarWidth === 0) {
      header.classList.remove("scroll-class")
    }

    html.classList[hide ? "add" : "remove"]("scroll-fixed")
  }
}
export const getWindowScrollTop = () => {
  const doc = document.documentElement
  return (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0)
}
