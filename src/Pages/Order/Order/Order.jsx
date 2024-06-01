import Cover from "../../../components/Cover";
import img from "../../../assets/shop/banner2.jpg";

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { useState } from "react";
import './tabs.css';
import FoodCard from "../../../components/FoodCard/FoodCard";
import SmoothScroll from "../../../components/SmoothScroll";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import useMenu from "../../../hooks/useMenu";

const Order = () => {
    const categories = ['salad', 'pizza', 'soup', 'dessert', 'drinks'];
    const [menu] = useMenu()
    const { category } = useParams()
    const initialIndex = categories.indexOf(category);
    // console.log(initialIndex);
    const [tabIndex, setTabIndex] = useState(initialIndex !== -1 ? initialIndex : 0);
    const drinks = menu.filter(item => item.category === 'drinks');
    const dessert = menu.filter(item => item.category === 'dessert');
    const pizza = menu.filter(item => item.category === 'pizza');
    const soup = menu.filter(item => item.category === 'soup');
    const salad = menu.filter(item => item.category === 'salad');

    return (
        <div>
            <Helmet>
                <title>Bistro | Order Food</title>
            </Helmet>
            <SmoothScroll />
            <Cover img={img} name={"order now"} des={"WOULD YOU LIKE TO TRY A DISH?"}></Cover>
            <div className="max-w-screen-xl mx-auto mt-20 px-4">
                <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                    <TabList className="flex justify-between mx-auto flex-wrap mb-10 max-w-[700px]">
                        <Tab>Salad</Tab>
                        <Tab>Pizza</Tab>
                        <Tab>Soups</Tab>
                        <Tab>Desserts</Tab>
                        <Tab>Drinks</Tab>
                    </TabList>

                    <TabPanel>
                        <div className="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                            {salad.map(item => <FoodCard key={item._id} item={item}></FoodCard>)}
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                            {pizza.map(item => <FoodCard key={item._id} item={item}></FoodCard>)}
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                            {soup.map(item => <FoodCard key={item._id} item={item}></FoodCard>)}
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                            {dessert.map(item => <FoodCard key={item._id} item={item}></FoodCard>)}
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                            {drinks.map(item => <FoodCard key={item._id} item={item}></FoodCard>)}
                        </div>
                    </TabPanel>
                </Tabs>
            </div>
        </div>
    );
};

export default Order;
