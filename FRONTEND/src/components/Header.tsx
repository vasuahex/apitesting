import { NavLink } from "react-router-dom"
import '../App.css'
const Header = () => {
  return (
    <div className="header-links">
      <NavLink to="/">home</NavLink>
      <NavLink to="/product">products</NavLink>
      <NavLink to="/contact">Contact</NavLink>
      <NavLink to="/login">Login</NavLink>
      <NavLink to="/allproducts">allproducts</NavLink>
    </div>
  )
}

export default Header