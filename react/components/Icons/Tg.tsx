import { memo } from "react"

const SvgComponent = ({ ...rest }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="33"
    height="33"
    fill="none"
    {...rest}>
    <rect
      x="0.5"
      y="0.5"
      width="32"
      height="32"
      rx="16"
      fill="white"
      fill-opacity="0.04"
    />
    <path
      d="M21.2823 10.6432L7.99299 15.784C7.45821 16.0233 7.27733 16.5028 7.86371 16.763L11.273 17.8498L19.5162 12.7394C19.9663 12.4185 20.4271 12.5041 20.0306 12.857L12.9508 19.2874L12.7284 22.0087C12.9344 22.4289 13.3115 22.4308 13.5521 22.222L15.5109 20.3628L18.8655 22.8827C19.6446 23.3454 20.0686 23.0468 20.2362 22.1987L22.4366 11.7472C22.665 10.7032 22.2754 10.2432 21.2823 10.6432Z"
      fill="#F8F8F8"
    />
  </svg>
)
const Tg = memo(SvgComponent)
export default Tg
