import { NavLink } from "react-router-dom";
import './navbar.css'

const NavBar = () => {

    const navOptions = <>
        <li><NavLink to="/" className={'px-2'}>Home</NavLink></li>
        <li><NavLink to="/contact" className={'px-2'}>Contact Us</NavLink></li>
        <li><NavLink to="/dashboard" className={'px-2'}>Dashboard</NavLink></li>
        <li><NavLink to="/menu" className={'px-2'}>Our Menu</NavLink></li>
        <li><NavLink to="/shop" className={'px-2'}>Our Shop</NavLink></li>
    </>;


    return (
        <>
            <div className="navbar fixed z-10 bg-black bg-opacity-40 text-white">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
                    <a className="btn">Button</a>
                </div>
            </div>
        </>
    );
};

export default NavBar;