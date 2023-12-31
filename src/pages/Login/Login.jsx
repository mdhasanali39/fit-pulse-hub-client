/* eslint-disable react/no-unescaped-entities */
import toast from "react-hot-toast";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { saveUser } from "../../api/auth";

const Login = () => {
    const {signIn, signInWithGoogle} = useAuth()
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
    
        
        // create user
        signIn(email, password)
          .then((result) => {
            if (result.user.email) {
              toast.success("Your login successful");
              navigate("/",{replace:true});
            }
            console.log(result.user);
          })
          .catch((err) => {
            console.log(err.message);
            if (
              err.message === "Firebase: Error (auth/invalid-login-credentials)."
            ) {
              toast.error("email or password does not matched");
              return;
            }
            toast.error(err.message.split(" ")[2].split("/")[1].slice(0, -2));
          });
      };

       // easy login with google 
  const handleGoogleLogin = async() => {
    try {
      const result = await signInWithGoogle();
      console.log(result.user);

      if (result?.user?.email) {
        toast.success("Login with google Successful");
        navigate("/",{replace:true});
        // save user if new user 
        const acknowledge = await saveUser(result?.user);
      console.log(acknowledge);
      }
    } catch (err) {
      console.error(err.message);
    }
  };

    return (
        <div className="w-1/2 mx-auto min-h-[86vh] my-14">
      <div className="shadow-lg rounded-lg p-8 border">
        <h2 className="text-center font-semibold text-3xl">
          Create a new account
        </h2>
        {/* easy login  */}
        <div className="flex justify-center my-4">
          <button
            onClick={handleGoogleLogin}
            className="flex gap-3 items-center border rounded-md p-3"
          >
            <span className="text-action-text text-2xl">
              <FcGoogle />
            </span>
            <span>Continue with Google </span>
          </button>
        </div>
        {/* separator  */}
        <div className="flex gap-3 items-center justify-center pb-8">
          <span className="border w-[100px] h-[5px] bg-action-bg"></span>
          <span className="text-3xl font-bold text-black-text">Or</span>
          <span className="border w-[100px] h-[5px] bg-action-bg"></span>
        </div>

        <form onSubmit={handleLogin}>
          <div className="space-y-4">
            {/* user email  */}
            <div className="flex flex-col">
              <label
                htmlFor="email"
                className="text-lg text-black-text font-semibold "
              >
                Your Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Your Email"
                required
                className=" outline-none border placeholder-black px-3 py-4 rounded-md"
              />
            </div>
            {/* user password  */}
            <div className="flex flex-col">
              <label
                htmlFor="password"
                className="text-lg text-black-text font-semibold "
              >
                Your Password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Your Password"
                required
                className=" outline-none border placeholder-black px-3 py-4 rounded-md"
              />
            </div>
            {/* login button  */}
            <div className="text-center py-7">
              <button
                type="submit"
                className="text-lg text-white font-semibold px-7 py-2 rounded-lg bg-action-bg border hover:bg-white hover:text-black hover:border-action-text transition ease-linear duration-300"
              >
                Login
              </button>
            </div>
            {/* already have an account */}
            <p className="text-center text-black-text text-lg">
              Don't have an account ?
              <Link
                to={"/register"}
                className="text-action-text ml-1 font-semibold hover:underline"
              >
                Register
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
    );
};

export default Login;