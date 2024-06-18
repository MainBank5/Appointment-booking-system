import { useContext } from "react";
import { Outlet, Navigate } from "react-router-dom";
import { AppContext } from "../context/UserContext";

const PrivateRoutes = () => {
    const {token} = useContext(AppContext);

    return (
        token ? <Outlet/> : <Navigate to="/login" replace:true />
    )
}

export default PrivateRoutes;