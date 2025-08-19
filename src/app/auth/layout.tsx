
const AuthLayout = ({children}: {children: React.ReactNode}) => {
  return (
    <div className="bg-white h-screen py-12">
      <div className="rounded-md m-auto w-80 p-4 shadow-xl">
        { children }
      </div>
    </div>
  )
}

export default AuthLayout;
