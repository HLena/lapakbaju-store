import Link from "next/link"

const LoginPage = () => {
  return (
    <div className="rounded-md m-auto my-auto border border-gray-200 p-8 lg:shadow-xl ">
      <h1 className="text-violet-500 font-bold text-xl text-center my-3">Log in</h1>
      <p className="text-gray-400 text-center text-sm">Join the comunity today</p>
      <form className="flex flex-col gap-2">
        <div>
          <label className="text-gray-600 font-semibold text-sm">Email</label>
          <input type="text" className="border w-full rounded-lg p-2 border-gray-400 outline-0 text-gray-400" placeholder="example@emial.com" />
        </div>
        <div>
          <label className="text-gray-800 font-semibold text-sm">Password</label>
          <input type="text" className="border w-full rounded-lg p-2 border-gray-400 outline-0 text-gray-400" placeholder="******" />
        </div>
        <Link href={''} className="text-end text-violet-600 text-xs font-semibold">
          Forget Password?
        </Link>
        <button className="bg-violet-600 w-full rounded-lg p-2 my-2">Sign in</button>

        <div className="border"/>

        <p className="text-center text-sm text-gray-500">
          Don't have an account? 
          <Link href="/auth/register" className="text-violet-700 font-semibold"> Sing up</Link>
        </p>

      </form>
    </div>
  )
}

export default LoginPage