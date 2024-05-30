import { Helmet } from "react-helmet-async";
import Cover from "../../components/Cover";
import bannerImg from "../../assets/menu/banner3.jpg"
import dessertImg from "../../assets/menu/dessert-bg.jpeg"
import pizzaImg from "../../assets/menu/pizza-bg.jpg"
import saladImg from "../../assets/menu/salad-bg.jpg"
import soupImg from "../../assets/menu/soup-bg.jpg"
import useMenu from "../../hooks/useMenu";
import MenuCategory from "./Menu Category/MenuCategory";
import SectionTitle from "../../components/SectionTitle";

const Menu = () => {
    const [ menu ] = useMenu()
    const offered = menu.filter(item => item.category === 'offered')
    const dessert = menu.filter(item => item.category === 'dessert')
    const pizza = menu.filter(item => item.category === 'pizza')
    const soup = menu.filter(item => item.category === 'soup')
    const salad = menu.filter(item => item.category === 'salad')

    return (
        <div>
            <Helmet>
                <title>Bistro | Menu</title>
            </Helmet>
            {/* Main Cover  ---------------------------------------*/}
            <Cover
            img={bannerImg}
            name={"Our Menu"}
            des={"Would you like to try a dish?"}></Cover>

            {/* Offer */}
            <SectionTitle heading={"todays offer"} subHeading={"Don't Miss"}></SectionTitle>
            <MenuCategory menu={offered}></MenuCategory>

            {/*dessert ---------------------------------------*/}
            <Cover
            img={dessertImg}
            name={"dessert"}
            des={"Would you like to try a dish?"}></Cover>
            <MenuCategory menu={dessert}></MenuCategory>

            {/* pizza  ---------------------------------------*/}
            <Cover
            img={pizzaImg}
            name={"pizza"}
            des={"Would you like to try a dish?"}></Cover>
            <MenuCategory menu={pizza}></MenuCategory>

            {/*  soup   ---------------------------------------*/}
            <Cover
            img={soupImg}
            name={"soup"}
            des={"Would you like to try a dish?"}></Cover>
            <MenuCategory menu={soup}></MenuCategory>

            {/*  salad   ---------------------------------------*/}                        
            <Cover
            img={saladImg}
            name={"salad"}
            des={"Would you like to try a dish?"}></Cover>
            <MenuCategory menu={salad}></MenuCategory>
        </div>
    );
};

export default Menu;