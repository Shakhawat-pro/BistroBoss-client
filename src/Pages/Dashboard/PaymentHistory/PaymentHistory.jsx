import { useContext } from "react";
import SectionTitle from "../../../components/SectionTitle";
import { AuthContext } from "../../../Context/AuthProvider";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const PaymentHistory = () => {
    const {user} = useContext(AuthContext)
    const axiosSecure = useAxiosSecure()

    const {data: payments = []} = useQuery({
        queryKey:['payments', user.email],
        queryFn: async() => {
            const res = await axiosSecure.get(`/payments/${user.email}`)
            console.log(res.data);
            return res.data
        }
    })


    return (
        <div className="w-11/12 mx-auto pb-16">
            <SectionTitle heading={'payment history'} subHeading={'At a Glance!'}></SectionTitle>
            <div className="shadow-2xl p-5 rounded-md ">
                <div className="flex justify-between text-xl max-[370px]:text-base sm:text-2xl  md:text-4xl my-6 font-bold cinzel">
                    <div className="space-y-2 ">
                         <h2>Total Price: {payments?.length}</h2>
                    </div>
                </div>
                <div className="overflow-x-auto rounded-t-lg">
                    <table className="table">
                        <thead>
                            <tr className="bg-[#D1A054] text-white">
                                <th></th>
                                <th>Email</th>
                                <th>Category</th>
                                <th>Total Price</th>
                                <th>Payment Date</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                payments.map((item, index) => <tr key={item._id}>
                                    <th>
                                        {index + 1}
                                    </th>
                                    <td>
                                        {item.email}
                                    </td>
                                    <td>
                                        {item.status}
                                    </td>
                                    <td className="text-base font-semibold">${item.price}</td>
                                    <th>
                                        {item.date}
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

export default PaymentHistory;