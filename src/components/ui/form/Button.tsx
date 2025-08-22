import Link from "next/link"

interface Props {
  label: string,
  className?: string,
  onClick?: () => void, 
  type?: 'button' | 'link',
  href?: string,
  variant?: 'primary' | 'secondary' | 'outline',
  size?: 'sm' | 'md' | 'lg'
}

const Button = ({
  label, 
  className = "", 
  onClick, 
  type = "button", 
  href = "", 
  variant = "primary",
  size = "md"
}: Props) => {

  const baseClasses = "inline-flex items-center justify-center font-medium rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2"
  
  const variantClasses = {
    primary: "bg-violet-600 text-white hover:bg-violet-700 focus:ring-violet-500",
    secondary: "bg-gray-600 text-white hover:bg-gray-700 focus:ring-gray-500",
    outline: "border border-gray-300 text-gray-700 bg-white hover:bg-gray-50 focus:ring-violet-500"
  }
  
  const sizeClasses = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg"
  }

  const buttonClasses = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`

  if (type === "link") {
    return (
      <Link
        href={href} 
        onClick={onClick}
        className={buttonClasses}
      >
        {label}
      </Link>
    )
  } 
  
  return (
    <button 
      onClick={onClick}
      className={buttonClasses}
    >
      {label}
    </button>
  )
}

export default Button