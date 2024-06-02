import PropTypes from 'prop-types';
import { useContext } from 'react';
import { AuthContext } from '../../Context/AuthProvider';
import Swal from "sweetalert2";
import useAxiosSecure from '../../hooks/useAxiosSecure';
import useCart from '../../hooks/useCart';

const FoodCard = ({ item }) => {
    const { name, price, recipe, image, } = item;
    const { user } = useContext(AuthContext)
    const axiosSecure = useAxiosSecure()
    const [, refetch] = useCart()
    const handleAddToCart = food => {
        console.log(food);
        if (user && user.email) {
            // console.log(food);
            const cartItem = {
                menuId: food._id,
                customerEmail: user.email,
                name,
                price,
                recipe,
                image
            }
            axiosSecure.post('/carts', cartItem)
            .then(res => {
                if (res.data.insertedId) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: `${name} added to your cart`,
                        showConfirmButton: false,
                        timer: 1500
                    });
                    refetch()
                }
            })
        }
        else {
            alert('Please Login')
        }                 
    }

    return (
        <div className="card rounded-none mx-auto shadow-xl bg-[#F3F3F3]">
            <div className="h-64 overflow-hidden relative">
                <img className="object-cover w-full h-full" src={image} alt={name} />
                <p className="text-lg font-semibold text-white absolute top-3 right-3 py-1 w-16 text-center bg-[#111827] ">${price}</p>
            </div>
            <div className="card-body text-center p-4">
                <h2 className="text-xl font-bold">{name}</h2>
                <p className="text-gray-700">{recipe}</p>
                <div className="card-actions justify-center mt-4">
                    <button onClick={() => handleAddToCart(item)} className="w-24 pb-1 rounded-lg shadow-none text-[#BB8506] border-b-2 border-[#BB8506]">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

FoodCard.propTypes = {
    item: PropTypes.object
};

export default FoodCard;
