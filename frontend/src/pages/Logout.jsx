import { useContext } from "react";
import { UserContext } from "../contexts/ContextUser";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const  useLogout = () => {
    const { setUser } = useContext(UserContext);
    const navigate = useNavigate();

    return async ()=>{
        await axios.post("http://localhost:8000/api/users/logout",{},{withCredentials:true});
        setUser(null);
        navigate("/login");
    };
};