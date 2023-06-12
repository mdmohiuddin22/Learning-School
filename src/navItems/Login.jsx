
const Login = () => {
    const handleLogin =event =>{
        event.preventDefault();
        const form =event.target;
        const email =form.email.value;
        const password =form.password.value;
        console.log(email,password)
    }
    return (
        <div  className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="max-w-md w-full px-6 py-8 bg-white rounded-lg shadow-md">
        <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">Login Now</h2>
        <form onSubmit={handleLogin} className="card-body">
          <div className="form-control">
            <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              className="w-full px-3 py-2 border border-gray-300 rounded-sm focus:outline-none"
              placeholder="Enter your email"
            />
          </div>
          <div className="form-control">
            <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              className="w-full px-3 py-2 border border-gray-300 rounded-sm focus:outline-none"
              placeholder="Enter your password"
            />
          </div>
          <div className="form-control mt-6">
            <input className="btn btn-primary" type="submit" value="Login" />
          </div>
        </form>
      </div>
    </div>
  );
}


export default Login;