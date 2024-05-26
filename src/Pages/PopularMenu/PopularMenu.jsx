import { useEffect, useState } from "react";
import SectionTitle from "../../components/SectionTitle";
import MenuItem from "../Shared/MenuItem/MenuItem";

const PopularMenu = () => {
    const [menu, setMenu] = useState([])
    useEffect( () =>{
        fetch('menu.json')
        .then(res => res.json())
        .then(data => setMenu(data.filter(item => item.category === 'popular')))
    },[])
    console.log(menu);
    return (
        <section className="w-11/12 max-w-screen-xl mx-auto">
            <SectionTitle heading={'from our menu'} subHeading={'Check it out'}></SectionTitle>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                {
                    menu.map(item => <MenuItem key={item._id} item={item}></MenuItem>)
                }
            </div>
        </section>

    );
};

export default PopularMenu;