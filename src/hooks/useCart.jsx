import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import { useContext } from "react";
import { AuthContext } from "../Context/AuthProvider";
const useCart = () => {
    const axiosSecure = useAxiosSecure()
    const {user} = useContext(AuthContext)
    const { refetch ,data: carts = [] } = useQuery({
        queryKey: ['carts', user?.email],
        queryFn: async() =>{
            const res = await axiosSecure(`/carts?email=${user.email}`)
            return res.data
        }
        })
    return [carts, refetch]
};

export default useCart;