import { NavLink, Outlet } from "react-router-dom";
import { FaCalendarAlt, FaHome, FaList, FaShoppingCart, FaShoppingBag, FaUtensils, FaBook, FaUsers  } from "react-icons/fa";
import { TbLayoutSidebarLeftExpand } from "react-icons/tb";
import { MdReviews, MdMail } from "react-icons/md";
import { BiSolidFoodMenu } from "react-icons/bi";
import { TfiMenuAlt } from "react-icons/tfi";



import useCart from "../hooks/useCart";
import './dashboard.css'
import useAdmin from "../hooks/useAdmin";

const Dashboard = () => {
    const [cart] = useCart();

    //TODO: GET isAdmin from database
    const [isAdmin] = useAdmin()
    // console.log(isAdmin);

    return (
        <div className="drawer lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content ">
                <label htmlFor="my-drawer-2" className="btn btn-ghost fixed drawer-button text-4xl z-50  lg:hidden"><TbLayoutSidebarLeftExpand /></label>
                <Outlet></Outlet>
            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                <ul className=" px-12 text-xl space-y-4 w-80 min-h-full bg-[#D1A054] ">
                    <div className="flex flex-col items-center -space-y-1 pt-12 pb-10 cinzel ">
                        <p className="text-xl font-extrabold">BISTRO BOSS</p>
                        <p className=" tracking-[.3rem] font-semibold">Restaurant</p>
                    </div>
                    {
                        isAdmin ? (<>
                            <li><NavLink className={'flex items-center gap-2'} to="/dashboard/userHome"><FaHome />Admin Home</NavLink></li>
                            <li><NavLink className={'flex items-center gap-2'} to="/dashboard/addItems"><FaUtensils />Add Items</NavLink></li>
                            <li><NavLink className={'flex items-center gap-2'} to="/dashboard/manageItems"><TfiMenuAlt />Manage Items</NavLink></li>
                            <li><NavLink className={'flex items-center gap-2'} to="/dashboard/review"><FaBook />Manage Bookings</NavLink></li>
                            <li><NavLink className={'flex items-center gap-2'} to="/dashboard/users"><FaUsers />All Users</NavLink></li>
                        </> ) :( <>
                            <li><NavLink className={'flex items-center gap-2'} to="/dashboard/userHome"><FaHome />User Home</NavLink></li>
                            <li><NavLink className={'flex items-center gap-2'} to="/dashboard/reservation"><FaCalendarAlt />Reservation</NavLink></li>
                            <li><NavLink className={'flex items-center gap-2'} to="/dashboard/reservation"><FaCalendarAlt />Payment History</NavLink></li>
                            <li><NavLink className={'flex items-center gap-2'} to="/dashboard/cart"><FaShoppingCart />My Cart ({cart.length})</NavLink></li>
                            <li><NavLink className={'flex items-center gap-2'} to="/dashboard/review"><MdReviews />Add a Review</NavLink></li>
                            <li><NavLink className={'flex items-center gap-2'} to="/dashboard/bookings"><FaList />My Bookings</NavLink></li>
                        </>)
                    }

                    {/* Shared NavLink */}
                    <div className="divider"></div>
                    <li><NavLink className={'flex items-center gap-2'} to="/"><FaHome />Home</NavLink></li>
                    <li><NavLink className={'flex items-center gap-2'} to="/menu"><BiSolidFoodMenu />Menu</NavLink></li>
                    <li><NavLink className={'flex items-center gap-2'} to="/order"><FaShoppingBag />Shop</NavLink></li>
                    <li><NavLink className={'flex items-center gap-2'} to="/contact"><MdMail />Contact</NavLink></li>
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;