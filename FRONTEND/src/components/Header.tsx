import { NavLink } from "react-router-dom"
import { toast } from 'react-toastify'
import { useDispatch, useSelector } from "react-redux"
import { loginCountFunc } from "../features/user/UserSlice"
import { useEffect, useState } from "react"
import '../App.css'
const Header = () => {
  console.log("header");
  const { loginCount } = useSelector((state: any) => state.auth)
  const dispatch = useDispatch()
  const logout = () => {
    let token = localStorage.getItem("token");
    localStorage.removeItem("token");
    if (token === null) {
      toast.error("user already logged out");
    } else {
      toast.info("user logout successfully");
      dispatch(loginCountFunc());
    }
  }

  const [tokenForLogout, setTokenForLogout] = useState<string | null>(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    console.log("useEffect");
    setTokenForLogout(token);
  }, [loginCount]);
  console.log(tokenForLogout);

  const btn = () => {
    return (
      tokenForLogout !== null ? <button onClick={() => logout()}>Logout</button> : null
    );
  };

  return (
    <div className="header-links">
      <NavLink to="/">home</NavLink>
      <NavLink to="/product">products</NavLink>
      <NavLink to="/contact">Contact</NavLink>
      <NavLink to="/login">Login</NavLink>
      <NavLink to="/allproducts">allproducts</NavLink>
      {btn()}
    </div>
  )
}

export default Header