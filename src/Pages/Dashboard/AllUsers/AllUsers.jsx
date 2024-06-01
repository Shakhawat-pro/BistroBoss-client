import { useQuery } from "@tanstack/react-query";
import SectionTitle from "../../../components/SectionTitle";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { FaTrashAlt, FaUsers } from "react-icons/fa";
import Swal from "sweetalert2";


const AllUsers = () => {
    const axiosSecure = useAxiosSecure()
    const { refetch, data: users = [] } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosSecure.get('/users');
            return res.data
        }
    })

    const handleDelete = (id) => {
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

                axiosSecure.delete(`/users/${id}`)
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

    const handleMakeAdmin = (item) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You want to change this user to admin!",
            icon: "question",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, Change it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.patch(`/users/admin/${item._id}`)
                    .then(res => {
                        if (res.data.modifiedCount > 0) {
                            refetch()
                            Swal.fire({
                                title: "Success!",
                                text: "Role has been changed to Admin.",
                                icon: "success"
                            });
                        } else {
                            Swal.fire({
                                title: "Error",
                                text: "The role change was not successful. Please try again.",
                                icon: "error"
                            });
                        }
                    })
                    .catch(error => {
                        console.error('Error updating user role:', error);
                        Swal.fire({
                            title: "Error",
                            text: "There was an error updating the user role. Please try again.",
                            icon: "error",
                            footer: `${error.message}`
                        });
                    });
            }
        });
    };

    return (
        <div className="w-11/12 mx-auto pb-16">
            <SectionTitle heading={'MANAGE ALL USERS'} subHeading={"How Many??"}></SectionTitle>
            <div className="shadow-2xl p-5 rounded-md ">
                <div className="sm:text-2xl  md:text-4xl my-6 font-bold cinzel">
                    <div className="space-y-2 ">
                        <h2>Total Users: {users.length}</h2>
                    </div>
                </div>
                <div className="overflow-x-auto rounded-t-lg">
                    <table className="table">
                        <thead>
                            <tr className="bg-[#D1A054] text-white uppercase inter">
                                <th></th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Roll</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                users.map((item, index) => <tr key={item._id}>
                                    <th>
                                        {index + 1}
                                    </th>
                                    <td className="">
                                        {item.name}
                                    </td>
                                    <td className="">
                                        {item.email}
                                    </td>
                                    <td>
                                        {item.role === 'admin' ? 'Admin' : <button
                                            onClick={() => handleMakeAdmin(item)}
                                            className="btn  bg-orange-500">
                                            <FaUsers className="text-white 
                                        text-2xl"></FaUsers>
                                        </button>}
                                    </td>
                                    <th>
                                        <button onClick={() => handleDelete(item._id)} className="btn border-2 w-full btn-ghost px-0 text-red-600 text-center text-xl sm:text-3xl "><FaTrashAlt /></button>
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

export default AllUsers;