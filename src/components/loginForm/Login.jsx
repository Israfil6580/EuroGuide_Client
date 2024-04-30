import { useContext } from "react";
import { FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";
import { Link, ScrollRestoration, useLocation, useNavigate } from "react-router-dom";
import { OwnContext } from "../../context/ContextComponents";
import { Helmet } from "react-helmet-async";
const Login = () => {
    const { logInWithUser, seeOrNot, see, googleSignin, githubSignin } = useContext(OwnContext);
    const location = useLocation();
    const navigate = useNavigate();

    const handleLogin = (e) => {
        logInWithUser(e, navigate, location);
    };

    const handleGoogleLogin = (e) => {
        googleSignin(e, navigate, location);
    };

    const handleGithubLogin = (e) => {
        githubSignin(e, navigate, location);
    };
    return (

        <div className="flex justify-center bg-base-200 relative h-screen items-center">
            <Helmet>
                <title>EuroGuide - Login</title>
            </Helmet>
            <div className="h-40 w-40 absolute bg-black rounded-full blur-3xl top-12"></div>
            <div className="flex flex-col justify-center px-6 py-12 lg:px-8 border w-full h-[550px] mx-2 md:w-2/4 lg:w-96 z-10 rounded-3xl glassmorphism lg:mt-0 mt-20">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <h2 className="mt-2 text-center text-2xl font-bold leading-9 tracking-tight">
                        Login to your account
                    </h2>
                </div>

                <div className="mt-5 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form onSubmit={handleLogin} className="space-y-6">
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium leading-6">
                                Email address
                            </label>
                            <div className="mt-2">
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    autoComplete="email"
                                    required
                                    className="block w-full without_glassmorphism rounded-md border-0 py-1.5 shadow-sm placeholder:text-gray-400 px-4 focus:ring-2 sm:text-sm sm:leading-6 outline-none"
                                />
                            </div>
                        </div>

                        <div>
                            <div className="flex items-center justify-between">
                                <label htmlFor="password" className="block text-sm font-medium leading-6">
                                    Password
                                </label>
                                <div className="text-sm">
                                    <a href="#" className="font-semibold">
                                        Forgot password?
                                    </a>
                                </div>
                            </div>
                            <div className="mt-2 relative">
                                <input
                                    id="password"
                                    name="password"
                                    type={see ? "password" : "text"}
                                    autoComplete="current-password"
                                    required
                                    className="block w-full rounded-md border-0 py-1.5 placeholder:text-gray-400 without_glassmorphism focus:ring-2 outline-none px-4 sm:text-sm sm:leading-6"
                                />
                                <div onClick={seeOrNot} className="absolute top-2/4 -translate-y-2/4 right-0 px-2">
                                    <span className="cursor-pointer">{see ? <IoEyeOffOutline className="text-xl" /> : <IoEyeOutline className="text-xl" />}</span>
                                </div>
                            </div>
                        </div>

                        <div>
                            <button
                                type="submit"
                                className="flex w-full min-h-[2rem] h-[2.5rem] btn btn-neutral justify-center rounded-md px-3 py-1.5 text-sm font-semibold leading-6 shadow- focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
                            >
                                Login
                            </button>
                        </div>
                    </form>

                    <p className="mt-2 text-center text-sm">
                        Don‘t have an account?{' '}
                        <Link to={"/signup"} href="#" className="font-semibold leading-6">
                            Register
                        </Link>
                    </p>
                    <div className="divider text-sm">or connect with</div>
                    <div className="flex gap-2 justify-center items-center">
                        <Link onClick={handleGoogleLogin} className="text-4xl btn btn-ghost hover:bg-transparent hover:text-gray-200 p-0"><FaGoogle /></Link>
                        <Link onClick={handleGithubLogin} className="text-4xl btn btn-ghost hover:bg-transparent hover:text-gray-200 p-0"><FaGithub /></Link>
                    </div>
                </div>
            </div>
            <ScrollRestoration />
        </div>
    );
};

export default Login;