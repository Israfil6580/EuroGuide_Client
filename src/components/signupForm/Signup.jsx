import { useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { OwnContext } from "../../context/ContextComponents";
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";
import { Helmet } from "react-helmet-async";

const Signup = () => {
    const { signUpWithNewUser, seeOrNot, see } = useContext(OwnContext);
    const location = useLocation();
    const navigate = useNavigate();

    const handleSignUp = (e) => {
        signUpWithNewUser(e, navigate, location);
    };
    return (

        <div className="flex justify-center bg-base-200 relative h-screen items-center">
            <Helmet>
                <title>EuroGuide - Signup</title>
            </Helmet>
            <div className="h-40 w-40 absolute bg-black rounded-full blur-3xl top-12"></div>
            <div className="flex flex-col justify-center px-6 py-10 lg:px-8 border w-full h-[550px] mx-2 md:w-2/4 lg:w-96 z-10 rounded-3xl glassmorphism">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <h2 className="text-center text-2xl font-bold leading-9 tracking-tight">
                        Please Register
                    </h2>
                </div>

                <div className="mt-4 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form onSubmit={handleSignUp} className="space-y-2">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium leading-6">
                                Name
                            </label>
                            <div className="mt-2">
                                <input
                                    id="name"
                                    name="name"
                                    type="text"
                                    autoComplete="name"
                                    placeholder="Enter Your Name"
                                    required
                                    className="block w-full rounded-md border-0 py-1.5 without_glassmorphism focus:ring-2 outline-none px-4 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>
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
                                    placeholder="Enter Valid Email"
                                    required
                                    className="block w-full rounded-md border-0 py-1.5 without_glassmorphism focus:ring-2 outline-none px-4 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        <div>
                            <div className="flex items-center justify-between">
                                <label htmlFor="password" className="block text-sm font-medium leading-6">
                                    Photo URL
                                </label>
                            </div>
                            <div className="mt-2">
                                <input
                                    id="photo"
                                    name="photo"
                                    type="url"
                                    placeholder="Provide Your Image URL"
                                    required
                                    className="block w-full rounded-md border-0 py-1.5 without_glassmorphism focus:ring-2 outline-none px-4 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>
                        <div>
                            <div className="flex items-center justify-between">
                                <label htmlFor="password" className="block text-sm font-medium leading-6">
                                    Password
                                </label>
                            </div>
                            <div className="mt-2 relative">
                                <input
                                    type={see ? "password" : "text"}
                                    name="password"
                                    placeholder="Password"
                                    className="block w-full rounded-md border-0 py-1.5 without_glassmorphism focus:ring-2 outline-none px-4 sm:text-sm sm:leading-6"
                                    required
                                />
                                <div onClick={seeOrNot} className="absolute top-2/4 -translate-y-2/4 right-2 px-2">
                                    <span className="cursor-pointer">{see ? <IoEyeOffOutline className="text-xl" /> : <IoEyeOutline className="text-xl" />}</span>
                                </div>
                            </div>
                        </div>

                        <div>
                            <button
                                type="submit"
                                className="flex w-full min-h-[2rem] h-[2.5rem] btn btn-neutral justify-center rounded-md px-3 py-1.5 text-sm font-semibold leading-6 shadow- focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
                            >
                                Register
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Signup;