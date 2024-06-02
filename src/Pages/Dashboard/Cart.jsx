import { Link } from "react-router-dom";
import SectionTitle from "../../components/SectionTitle";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useCart from "../../hooks/useCart";
import { MdDeleteForever } from "react-icons/md";
import Swal from "sweetalert2";


const Cart = () => {
    const [cart, refetch] = useCart()
    const totalPrice = cart.reduce((total, item) => total + item.price, 0);
    const axiosSecure = useAxiosSecure();


    const handleDelete = id => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                axiosSecure.delete(`/carts/${id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            refetch();
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                        }
                    })
            }
        });
    }

    return (
        <div className="w-11/12 mx-auto pb-16">
            <SectionTitle heading={'wanna add more?'} subHeading={"MY Cart"}></SectionTitle>
            <div className="shadow-2xl p-5 rounded-md ">
                <div className="flex justify-between text-xl max-[370px]:text-base sm:text-2xl  md:text-4xl my-6 font-bold cinzel">
                    <div className="space-y-2 ">
                        <h2>items: {cart.length}</h2>
                        <h2>Total Price: $ {totalPrice}</h2>
                    </div>
                    {cart.length ?
                        <Link to={'/dashboard/payment'}>
                            <button disabled={!cart.length} className="btn bg-[#D1A054] text-white">Pay Now</button>
                        </Link> :
                        <button disabled={!cart.length} className="btn bg-[#D1A054] text-white">Pay Now</button>
                    }
                </div>
                <div className="overflow-x-auto rounded-t-lg">
                    <table className="table">
                        <thead>
                            <tr className="bg-[#D1A054] text-white">
                                <th></th>
                                <th>Item Image</th>
                                <th>Item Name</th>
                                <th>Price</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                cart.map((item, index) => <tr key={item._id}>
                                    <th>
                                        {index + 1}
                                    </th>
                                    <td>
                                        <div className="avatar w-full">
                                            <div className="mask mx-auto mask-squircle w-12 h-12">
                                                <img src={item.image} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                    </td>
                                    <td className="text-lg font-bold">
                                        {item.name}
                                    </td>
                                    <td className="text-base font-semibold">${item.price}</td>
                                    <th>
                                        <button onClick={() => handleDelete(item._id)} className="btn btn-ghost px-0 text-red-600 text-2xl sm:text-5xl "><MdDeleteForever /></button>
                                    </th>
                                </tr>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Cart;