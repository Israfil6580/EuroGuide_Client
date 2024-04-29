import { useContext, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { OwnContext } from "../../context/ContextComponents"
import { CiLogin } from "react-icons/ci";
import { CiLogout } from "react-icons/ci";

const Navbar = () => {
    const { users, logoutUser, themeControl, theme } = useContext(OwnContext);

    useEffect(() => {
        localStorage.setItem("theme", theme)
        const localTheme = localStorage.getItem('theme')
        document.querySelector('html').setAttribute('data-theme', localTheme)
    }, [theme])

    let displayName = "";
    let email = "";
    let photoURL = "";

    if (users) {
        displayName = users.displayName;
        email = users.email;
        photoURL = users.photoURL;
    }

    const NavLinks = (
        <>
            <NavLink to={'/'}>Home</NavLink>
            <NavLink to={'/all_tourists_spot'}>All Tourists Spot</NavLink>
            <NavLink to={'/add_tourists_spot'}>Add Tourists Spot</NavLink>
            <NavLink to={'/my_list'}>My List</NavLink>
        </>
    );

    return (
        <section className="fixed w-[96%] mx-[2%] z-50 top-2 rounded-full" >
            <div className="flex justify-between items-center max-w-7xl mx-auto px-1 lg:px-4 py-1 without_glassmorphism rounded-2xl">
                <div className="flex items-center lg:w-auto w-full justify-between">
                    {/* for mobile device */}
                    <div className="flex items-center">
                        <div className="dropdown">
                            <div tabIndex={0} role="button" className="btn btn-ghost hover:bg-transparent lg:hidden p-0 m-0 pr-2">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </div>
                            <div className="flex justify-between">
                                <ul tabIndex={0} className="menu-sm dropdown-content flex flex-col mt-3 z-[1] p-2 bg-base-200 rounded-box lg:w-60 w-72 space-y-6">
                                    {NavLinks}
                                    <label className="swap swap-rotate">

                                        {/* this hidden checkbox controls the state */}
                                        <input onChange={themeControl} type="checkbox" className="theme-controller" value="light" />

                                        {/* sun icon */}
                                        <svg className="swap-off fill-current w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" /></svg>

                                        {/* moon icon */}
                                        <svg className="swap-on fill-current w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" /></svg>

                                    </label>
                                </ul>
                            </div>
                        </div>
                        {/* ============= */}
                        <Link to={"/"} className="btn btn-ghost logo p-0 bg-transparent hover:bg-transparent lg:text-3xl text-xl font-logo tracking-wider">EuroGuide</Link>
                    </div>
                    <div>
                        {
                            !users && <div className="space-x-4">
                                <Link className='flex items-center lg:hidden btn btn-neutral text-white text-base font-normal' to={"/login"}>Login <CiLogin className="text-xl" /></Link>
                            </div>
                        }
                    </div>
                </div>
                {/* for desktop */}
                <div className="hidden lg:flex">
                    <ul className="menu-horizontal px-1 lg:space-x-5">
                        {NavLinks}
                        <label className="swap swap-rotate">

                            {/* this hidden checkbox controls the state */}
                            <input onChange={themeControl} type="checkbox" className="theme-controller" value="light" />

                            {/* sun icon */}
                            <svg className="swap-off fill-current w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" /></svg>

                            {/* moon icon */}
                            <svg className="swap-on fill-current w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" /></svg>

                        </label>
                    </ul>
                </div>
                <div className=" flex items-center">
                    {
                        users ? (
                            <div className="flex items-center gap-4 ml-4" >
                                <div className="dropdown dropdown-end">
                                    <div tabIndex={0} className="tooltip tooltip-left btn btn-ghost btn-circle avatar flex items-center" data-tip={displayName}>
                                        <div className="rounded-full">
                                            <img alt="Profile" src={photoURL} />
                                        </div>
                                    </div>
                                    <div tabIndex={0} className="flex flex-col dropdown-content mt-3 z-[1] p-5 text-center space-y-2 bg-base-100 rounded-box min-w-52">
                                        <div className="mx-auto">
                                            <img className="h-14 w-14 rounded-full object-cover" src={photoURL} alt="Profile" />
                                        </div>
                                        <h4 className="text-base">{displayName}</h4>
                                        <h4 className="text-base">{email}</h4>
                                        <Link onClick={logoutUser} to={'/'} className="btn btn-neutral text-white rounded-md lg:hidden">Logout</Link>
                                    </div>
                                </div>
                                <Link onClick={logoutUser} to={'/'} className="lg:flex hidden btn btn-neutral text-white text-base font-normal animate__animated animate__heartBeat"><CiLogout className="text-xl" /> Logout</Link>
                            </div>
                        ) : (
                            <div className="space-x-4 ml-4">
                                <Link className='lg:flex hidden btn btn-neutral text-white text-base font-normal animate__animated animate__heartBeat' to={"/login"}>Login <CiLogin className="text-xl" /></Link>
                            </div>

                        )
                    }
                </div>
            </div>
        </section>
    );
};

export default Navbar;
