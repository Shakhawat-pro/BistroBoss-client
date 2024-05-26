import SectionTitle from "../../../components/SectionTitle";
import img from "../../../assets/home/featured.jpg"
import './featured.css'

const Featured = () => {
    return (
        <div className="featured-item pt-10 pb-20 mt-20 ">
            <SectionTitle heading={"FROM OUR MENU"} subHeading={"Check it out"}></SectionTitle>
            <div className="flex  gap-10 items-center max-w-screen-xl w-11/12 mx-auto">
                <div className="w-1/2">
                    <img src={img} className="w-full" alt="" />
                </div>
                <div className="space-y-4 w-1/2 text-white border-white">
                    <h3>Aug 20, 2024</h3>
                    <h3 className="uppercase">Where can i get some?</h3>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta iusto aliquam odit nisi nihil ab rerum reiciendis, quisquam dignissimos asperiores, eveniet atque aut facere obcaecati saepe labore eligendi incidunt repellat?</p>
                    <button className=" hover:text-yellow-600 hover:border-yellow-600  w-24 rounded-md pb-1 cursor-pointer border-b-2">Order Now</button>
                </div>
            </div>                        
        </div>
    );
};

export default Featured;