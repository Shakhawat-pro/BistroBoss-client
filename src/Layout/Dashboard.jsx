import { NavLink, Outlet } from "react-router-dom";
import { FaAd, FaCalendar, FaHome, FaList, FaSearch, FaShoppingCart } from "react-icons/fa";
import { TbLayoutSidebarLeftExpand } from "react-icons/tb";

import useCart from "../hooks/useCart";
import './dashboard.css'

const Dashboard = () => {
    const [cart] = useCart();

    return (
        <div className="drawer lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content ">
                <label htmlFor="my-drawer-2" className="btn btn-ghost fixed drawer-button text-4xl  lg:hidden"><TbLayoutSidebarLeftExpand/></label>
                <Outlet></Outlet>
            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                <ul className=" px-12 text-xl space-y-4 w-80 min-h-full bg-[#D1A054] ">
                    <div className="flex flex-col items-center -space-y-1 pt-12 pb-10 cinzel ">
                        <p className="text-xl font-extrabold">BISTRO BOSS</p>
                        <p className=" tracking-[.3rem] font-semibold">Restaurant</p>
                    </div>
                    {/* Sidebar content here */}
                    <li><NavLink className={'flex items-center gap-2'} to="/dashboard/userHome"><FaHome />User Home</NavLink></li>
                    <li><NavLink className={'flex items-center gap-2'} to="/dashboard/reservation"><FaCalendar />Reservation</NavLink></li>
                    <li><NavLink className={'flex items-center gap-2'} to="/dashboard/cart"><FaShoppingCart />My Cart ({cart.length})</NavLink></li>
                    <li><NavLink className={'flex items-center gap-2'} to="/dashboard/review"><FaAd />Add a Review</NavLink></li>
                    <li><NavLink className={'flex items-center gap-2'} to="/dashboard/bookings"><FaList />My Bookings</NavLink></li>
                    <div className="divider"></div>
                    <li><NavLink className={'flex items-center gap-2'} to="/"><FaHome />Home</NavLink></li>
                    <li><NavLink className={'flex items-center gap-2'} to="/order/salad"><FaSearch />Menu</NavLink></li>
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;