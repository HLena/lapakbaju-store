import Link from "next/link"

const RegisterPage = () => {
  return (
    <div className="rounded-md m-auto my-auto border border-gray-200 p-8 lg:shadow-xl">
      <h1 className="text-violet-500 font-bold text-xl text-center my-3">Sign up</h1>
      <p className="text-gray-400 text-center text-sm">Join the comunity today</p>
      <form className="flex flex-col gap-2">
        <div>
          <label className="text-gray-600 font-semibold text-sm">Name</label>
          <input type="text" className="border text-gray-400 outline-0 w-full rounded-lg p-2" placeholder="Sandra Guillen" />
        </div>
        <div>
          <label className="text-gray-600 font-semibold text-sm">Email</label>
          <input type="text" className="border text-gray-400 outline-0 w-full rounded-lg p-2" placeholder="example@emial.com" />
        </div>
        
        <div>
          <label className="text-gray-800 font-semibold text-sm">Password</label>
          <input type="text" className="border text-gray-400 outline-0 w-full rounded-lg p-2" placeholder="******" />
        </div>

        <div>
          <label className="text-gray-800 font-semibold text-sm">Confirm password</label>
          <input type="text" className="border text-gray-400 outline-0 w-full rounded-lg p-2" placeholder="******" />
        </div>
        
        <button className="bg-violet-600 outline-0 w-full rounded-lg p-2 my-2">Sign up</button>

        <div className="border"/>

        <p className="text-center text-sm text-gray-500">
          Have an account? 
          <Link href="/auth/login" className="text-violet-700 font-semibold"> Log in</Link>
        </p>


      </form>
    </div>
  )
}

export default RegisterPage