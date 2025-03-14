import { useContext } from "react";
import { AuthContext } from "../auth";
import { Navigate } from "react-router-dom";

//Sólo permite el acceso a los usuarios no autenticados.
//Si un usuario está autenticado, lo redirige a la página principal.
export const PublicRoute = ({children}) => {
    const {logged} = useContext(AuthContext);
    const lastPath = localStorage.getItem('lastPath');
    
    return(!logged)
        ? children
        : <Navigate to={lastPath}/>
}