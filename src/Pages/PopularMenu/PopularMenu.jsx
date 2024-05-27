import SectionTitle from "../../components/SectionTitle";
import MenuItem from "../Shared/MenuItem/MenuItem";
import useMenu from "../../hooks/useMenu";

const PopularMenu = () => {
    const [menu] = useMenu()
    const popular = menu.filter(item => item.category === 'popular')
    // console.log(menu);
    return (
        <section className="w-11/12 max-w-screen-xl mx-auto mb-20">
            <SectionTitle heading={'from our menu'} subHeading={'Check it out'}></SectionTitle>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                {
                    popular.map(item => <MenuItem key={item._id} item={item}></MenuItem>)
                }
            </div>
        </section>

    );
};

export default PopularMenu;