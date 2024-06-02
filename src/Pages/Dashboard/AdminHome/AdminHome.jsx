import { useContext } from "react";
import { AuthContext } from "../../../Context/AuthProvider";

const AdminHome = () => {
    const { user } = useContext(AuthContext)
    return (
        <div className="w-11/12 mx-auto mt-16">
            <h1 className="text-3xl font-bold ">Hi, Welcome {user?.displayName ? user.displayName : 'Back'}</h1>            
        </div>
    );
};

export default AdminHome