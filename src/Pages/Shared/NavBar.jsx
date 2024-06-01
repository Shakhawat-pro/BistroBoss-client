import { NavLink } from "react-router-dom";
import './navbar.css'
import { useContext } from "react";
import { AuthContext } from "../../Context/AuthProvider";

const NavBar = () => {
    const { user, logOut } = useContext(AuthContext)

    const navOptions = <>
        <li><NavLink to="/" className={'px-2'}>Home</NavLink></li>
        <li><NavLink to="/contact" className={'px-2'}>Contact Us</NavLink></li>
        <li><NavLink to="/dashboard" className={'px-2'}>Dashboard</NavLink></li>
        <li><NavLink to="/menu" className={'px-2'}>Our Menu</NavLink></li>
        <li><NavLink to="/order" className={'px-2'}>Order Now</NavLink></li>
        <li><NavLink to="/login" className={'px-2'}>Login</NavLink></li>
    </>;


    return (
        <>
            <div className="navbar fixed z-10 bg-black bg-opacity-40 text-white">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className=" hover:text-[#FCCB05] lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-black bg-opacity-40 rounded-box w-52">
                            {navOptions}
                        </ul>
                    </div>
                    <div className="flex flex-col items-center -space-y-1 px-3">
                        <p className="text-xl">BISTRO BOSS</p>
                        <p className="cinzel tracking-[.3rem]">Restaurant</p>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="space-x-4  menu-horizontal px-1">
                        {navOptions}
                    </ul>
                </div>
                <div className="navbar-end">
                    {
                        user ?
                            <>
                                <button onClick={logOut} className="mr-3 border-2 border-transparent px-2 py-2 hover:text-[#FCCB05] hover:border-[#FCCB05] transition-colors duration-300 ease-in-out rounded-md"><NavLink>Log Out</NavLink></button>
                                <div className="avatar">
                                    <div className="w-12 rounded-full">
                                        <img src={user.photoURL} />
                                    </div>
                                </div>
                            </> :
                            <>
                                <button className="mr-3 border-2 border-transparent px-2 py-2 hover:text-[#FCCB05] hover:border-[#FCCB05] transition-colors duration-300 ease-in-out rounded-md"><NavLink to="/login" >Login</NavLink></button>
                                <button className="border-2 border-transparent px-2 py-2 hover:text-[#FCCB05] hover:border-[#FCCB05] transition-colors duration-300 ease-in-out rounded-md"><NavLink to="/register" >Register</NavLink></button>
                            </>
                    }
                </div>
            </div>
        </>
    );
};

export default NavBar;