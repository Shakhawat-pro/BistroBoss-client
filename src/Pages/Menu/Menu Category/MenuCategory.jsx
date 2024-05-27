import MenuItem from "../../Shared/MenuItem/MenuItem";
import PropTypes from 'prop-types'; // ES6


const MenuCategory = ({menu}) => {

    return (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-screen-xl mx-auto w-11/12 my-20">
                {
                    menu.map(item => <MenuItem key={item._id} item={item}></MenuItem>)
                }
            </div>
    );
};

export default MenuCategory;

MenuCategory.propTypes = {
    menu: PropTypes.object
}