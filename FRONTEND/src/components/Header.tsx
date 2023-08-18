import { NavLink } from "react-router-dom"
import '../App.css'
const Header = () => {
  return (
    <div className="header-links">
      <NavLink to="/">home</NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/contact">Contact</NavLink>
      <NavLink to="/login">Login</NavLink>
    </div>
  )
}

export default Header