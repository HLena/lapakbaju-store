
const AuthLayout = ({children}: {children: React.ReactNode}) => {
  return (
    <div className="bg-white h-screen flex justify-center">
      { children }
    </div>
  )
}

export default AuthLayout;
