import { MdDeleteForever } from "react-icons/md";
import SectionTitle from "../../../components/SectionTitle";
import useMenu from "../../../hooks/useMenu";
import { Link } from "react-router-dom";
import { FaEdit } from "react-icons/fa";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const ManageItems = () => {
    const [menu, , refetch] = useMenu()
    const axiosSecure = useAxiosSecure()


    const handleDelete = id => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then(async (result) => {
            if (result.isConfirmed) {
                console.log(id);
                const res = await axiosSecure.delete(`/menu/${id}`)
                console.log(res.data);
                if (res.data.deletedCount > 0) {
                    refetch();
                    Swal.fire({
                        title: "Deleted!",
                        text: "Your file has been deleted.",
                        icon: "success",
                        timer: 2000
                    });
                }
            }
        });
    }


    return (
        <div className="w-11/12 mx-auto pb-16">
            <SectionTitle heading={'Manage all items'} subHeading={"hurry Up!"}></SectionTitle>
            <div className="shadow-2xl p-5 rounded-md ">
                <div className="sm:text-2xl  md:text-4xl my-6 font-bold cinzel">
                    <div className="space-y-2 ">
                        <h2>Total Items: {menu.length}</h2>
                    </div>
                </div>
                <div className="overflow-x-auto rounded-t-lg">
                    <table className="table">
                        <thead>
                            <tr className="bg-[#D1A054] text-white ">
                                <th></th>
                                <th>Item Image</th>
                                <th>Item Name</th>
                                <th>Price</th>
                                <th>Edit</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                menu.map((item, index) => <tr key={item._id}>
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
                                    <td>
                                        <Link to={`/dashboard/updateItem/${item._id}`}>
                                            <button
                                                className="btn btn-ghost bg-orange-500">
                                                <FaEdit className="text-white"></FaEdit>
                                            </button>
                                        </Link>
                                    </td>
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

export default ManageItems;