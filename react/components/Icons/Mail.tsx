import { memo } from "react"

const SvgComponent = ({ ...rest }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="18"
    height="18"
    fill="none"
    {...rest}>
    <path
      d="M16.125 13.5L11.1429 9M6.85714 9L1.87503 13.5M1.5 5.25L7.62369 9.53658C8.11957 9.8837 8.36751 10.0573 8.6372 10.1245C8.87542 10.1839 9.12458 10.1839 9.3628 10.1245C9.63249 10.0573 9.88043 9.8837 10.3763 9.53658L16.5 5.25M5.1 15H12.9C14.1601 15 14.7902 15 15.2715 14.7548C15.6948 14.539 16.039 14.1948 16.2548 13.7715C16.5 13.2902 16.5 12.6601 16.5 11.4V6.6C16.5 5.33988 16.5 4.70982 16.2548 4.22852C16.039 3.80516 15.6948 3.46095 15.2715 3.24524C14.7902 3 14.1601 3 12.9 3H5.1C3.83988 3 3.20982 3 2.72852 3.24524C2.30516 3.46095 1.96095 3.80516 1.74524 4.22852C1.5 4.70982 1.5 5.33988 1.5 6.6V11.4C1.5 12.6601 1.5 13.2902 1.74524 13.7715C1.96095 14.1948 2.30516 14.539 2.72852 14.7548C3.20982 15 3.83988 15 5.1 15Z"
      stroke="white"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)
const Mail = memo(SvgComponent)
export default Mail
