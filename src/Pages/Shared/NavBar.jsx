import {  NavLink } from "react-router-dom";
import './navbar.css'
import { useContext } from "react";
import { AuthContext } from "../../Context/AuthProvider";
import useCart from "../../hooks/useCart";

const NavBar = () => {
    const { user, logOut } = useContext(AuthContext)
    const [carts] = useCart()
    const totalPrice = carts.reduce((total, item) => total + item.price, 0);
    // console.log(carts);

    const navOptions = <>
        <li><NavLink to="/" className={'px-2'}>Home</NavLink></li>
        <li><NavLink to="/contact" className={'px-2'}>Contact Us</NavLink></li>
        <li><NavLink to="dashboard" className={'px-2'}>Dashboard</NavLink></li>
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
                                <div className="dropdown dropdown-end mr-2">
                                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                                        <div className="indicator">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                                            <span className="badge badge-sm indicator-item">{carts.length}</span>
                                        </div>
                                    </div>
                                    <div tabIndex={0} className="mt-3 z-[1] text-black card card-compact dropdown-content w-52 bg-base-100 shadow">
                                        <div className="card-body">
                                            <span className="font-bold text-lg">{carts.length} Items</span>
                                            <span className="text-info">Subtotal: ${totalPrice}</span>
                                            <div className="card-actions">
                                                <button className="btn btn-primary btn-block">View cart</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="dropdown dropdown-end">
                                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                        <div className="w-10 rounded-full">
                                            <img alt="Tailwind CSS Navbar component" src={user.photoURL} />
                                        </div>
                                    </div>
                                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 text-black">
                                        <li>
                                            <a className="justify-between">
                                                Profile
                                                <span className="badge">New</span>
                                            </a>
                                        </li>
                                        <li><a>Settings</a></li>
                                        <li onClick={logOut}><a>Logout</a></li>
                                    </ul>
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