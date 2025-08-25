'use client';

interface TitleProps {
  title: string;
  subtitle?: string;
  className?: string;
}

const Title = ({ title, subtitle, className = "" }: TitleProps) => {
  
  return (
    <div className={`flex-1 ${className}`}>
        <div>
          <h1 className="text-3xl font-bold text-gray-900 capitalize mb-2">
            {title}
          </h1>
          {subtitle && (
            <p className="text-lg text-gray-600 font-medium">
              {subtitle}
            </p>
          )}
        </div>
    </div>
  )
}

export default Title