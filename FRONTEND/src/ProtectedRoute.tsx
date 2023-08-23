import { Navigate } from "react-router-dom";


const ProtectedRoute = ({ children }: any) => { 
    const getToken = localStorage.getItem("token")
    console.log(getToken);
    
    return getToken !== null ? children : (<Navigate to="/login" replace={true}/>)
}

export default ProtectedRoute