import { useContext } from "react";
import { UserContext } from "../context/user";
import { Navigate } from "react-router-dom";
export const AuthMiddleware = ({children}) => {
    const [user] = useContext(UserContext);
    let isAuthenticated = user ? true : false;
    if(!isAuthenticated){
        const _user = JSON.parse(localStorage.getItem("user"))
        isAuthenticated = _user?.id ? true : false;
    }
    if(!isAuthenticated) {
        return <Navigate to="/login" />
    }
    return children
}