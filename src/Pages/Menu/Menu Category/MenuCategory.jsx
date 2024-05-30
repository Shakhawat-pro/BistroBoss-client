import { Link } from "react-router-dom";
import MenuItem from "../../Shared/MenuItem/MenuItem";
import PropTypes from 'prop-types'; // ES6

const MenuCategory = ({ menu = [] }) => {
    if (menu.length === 0) {
        return <div>Loading...</div>; 
    }

    return (
        <div className="text-center">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-screen-xl mx-auto w-11/12 my-20">
                {
                    menu.map(item => <MenuItem key={item._id} item={item}></MenuItem>)
                }
            </div>
            <Link to={`/order/${menu[0].category}`}>
                <button className="hover:text-yellow-600 hover:border-yellow-600 mb-10 px-5 rounded-md pb-1 cursor-pointer border-b-2 text-black border-black">
                    Order Your Favorite Food
                </button>
            </Link>
        </div>
    );
};

MenuCategory.propTypes = {
    menu: PropTypes.array.isRequired
};

export default MenuCategory;
