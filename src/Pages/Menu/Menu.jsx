import { Helmet } from "react-helmet-async";
import Cover from "../../components/Cover";
import bannerImg from "../../assets/menu/banner3.jpg"
import PopularMenu from "../PopularMenu/PopularMenu";
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
            <Cover
            img={bannerImg}
            name={"Our Menu"}
            des={"Would you like to try a dish?"}></Cover>
            <SectionTitle heading={"todays offer"} subHeading={"Don't Miss"}></SectionTitle>
            <MenuCategory menu={offered}></MenuCategory>
            <Cover
            img={bannerImg}
            name={"dessert"}
            des={"Would you like to try a dish?"}></Cover>
            <MenuCategory menu={dessert}></MenuCategory>
            <Cover
            img={bannerImg}
            name={"pizza"}
            des={"Would you like to try a dish?"}></Cover>
            <MenuCategory menu={pizza}></MenuCategory>
            <Cover
            img={bannerImg}
            name={"soup"}
            des={"Would you like to try a dish?"}></Cover>
            <MenuCategory menu={soup}></MenuCategory>
            <Cover
            img={bannerImg}
            name={"salad"}
            des={"Would you like to try a dish?"}></Cover>
            <MenuCategory menu={salad}></MenuCategory>
        </div>
    );
};

export default Menu;