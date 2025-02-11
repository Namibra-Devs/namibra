
const SignUpForNewsLetters = () => {
  return (
    <section className="bg-newslettersbg bg-cover bg-center bg-no-repeat px-6 lg:px-24 py-24 flex flex-col items-center">
          <h2 className="text-4xl font-medium my-2 text-white">
          Sign up to our newsletter
          </h2>
          <h3 className="text-lg text-white">
          Lorem Ipsum is simply dummy
          </h3>
          {/* Form */}
        <div className="mt-12 flex w-full max-w-2xl bg-white p-2 rounded-lg">
            <input
            type="email"
            placeholder="Enter your email"
            className="w-full p-4 rounded-l-lg outline-none border-none text-gray-800"
            />
            <button className="bg-primary hover:bg-black/80  duration-700 text-white px-6 rounded-lg font-medium">
            Subscribe
            </button>
        </div>
    </section>
  )
}

export default SignUpForNewsLetters