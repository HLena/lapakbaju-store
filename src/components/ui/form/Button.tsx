import Link from "next/link"

interface Props {
  label: string,
  className?: string,
  onClick?: () => void, 
  type?: string,
  href?: string
}
const Button = ({label, className, onClick, type = "btn", href ="" }: Props) => {

  if(type === "link") {
    return (
      <Link
        href={ href } 
        onClick={ onClick }
        className={`block p-4 bg-violet-700 text-white rounded-lg w-full mb-4 text-sm text-center ${className}`}>
          {label}
      </Link>
    )
  } 
  return (
    <button 
      onClick={ onClick }
      className={`p-4 bg-violet-700 text-white rounded-lg w-full mb-4 text-sm text-center${className}`}>
        {label}
    </button>
  )
  
}

export default Button