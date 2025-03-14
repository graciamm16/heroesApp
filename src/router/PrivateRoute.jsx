import { useContext } from "react"
import { AuthContext } from "../auth"
import { Navigate, useLocation } from "react-router-dom";

//Sólo se permite el acceso a los usuarios autenticados.
//Si un usuario no está autenticado, lo redirige a la página de inicio.
export const PrivateRoute = ({children}) => {
    const {logged} = useContext(AuthContext);
    const {pathname, search} = useLocation();

    const lastPath = pathname + search;
    localStorage.setItem('lastPath', lastPath);
    // console.log('rerender');

    return(logged)
        ? children
        : <Navigate to='/login'/>
}