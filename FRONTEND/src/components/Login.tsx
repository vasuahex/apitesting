import { useState } from "react"
import { NavLink } from "react-router-dom"
import { loginUser } from "../features/user/UserSlice"
import { useDispatch, useSelector } from "react-redux"

const Login = () => {
    const { user } = useSelector((state: any) => state.auth)
    console.log(user);



    const dispatch = useDispatch()
    const [login, setLogin] = useState({
        email: "",
        password: ""
    })

    const log = (e: any) => {
        setLogin({ ...login, [e.target.name]: e.target.value })
    }
    // console.log(login);

    return (
        <form onSubmit={(e) => e.preventDefault()}>
            <center>
                <h1 className="text-center">Login user</h1>
                <input type="email" placeholder="enter your email" name="email" value={login.email} onChange={(e) => log(e)} />
                <br />
                <input type="password" placeholder="enter your password" name="password" value={login.password} onChange={(e) => log(e)} />
                <br />
                <button onClick={() => dispatch(loginUser(login))}>Login</button>
                <NavLink to="/register"><button>SignUp</button></NavLink>
            </center>
        </form>
    )
}

export default Login