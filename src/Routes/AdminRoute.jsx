import { useContext } from "react";
import { AuthContext } from "../Context/AuthProvider";
import { Navigate } from "react-router-dom";
import useAdmin from "../hooks/useAdmin";
import PropTypes from 'prop-types';


const AdminRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const [isAdmin, isAdminLoading] = useAdmin();

    if (loading || isAdminLoading) {
        return <div className="text-center h-screen flex justify-center items-center"><span className="loading text-[#FCCB05] loading-infinity w-32"></span></div>
    }

    if (user && isAdmin) {
        return children;
    }
    return <Navigate to="/login" state={'/dashboard'} replace></Navigate>

};

export default AdminRoute;

AdminRoute.propTypes = {
    children: PropTypes.node
};