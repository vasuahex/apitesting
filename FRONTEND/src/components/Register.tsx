import { useState } from "react"
import { NavLink } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux/es/exports"
import { registerUser } from "../features/user/UserSlice"
import { useNavigate } from "react-router-dom"
const Register = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { isSuccess } = useSelector((state: any) => state.auth)
    if (isSuccess) {
        navigate("/login")
    }
    const [register, setRegister] = useState({
        firstname: "",
        lastname: "",
        email: "",
        password: "",
        mobile: ""
    })
    const regi = (e: React.ChangeEvent<HTMLInputElement>) => {
        setRegister({ ...register, [e.target.name]: e.target.value })
    }
    console.log(register);

    return (
        <form onSubmit={(e) => e.preventDefault()}>
            <center>
                <h1 className="text-center">Register User</h1>
                <input type="text" name="firstname" placeholder="firstname" value={register.firstname} onChange={(e) => regi(e)} />
                <br />
                <input type="text" name="lastname" placeholder="lastname" value={register.lastname} onChange={(e) => regi(e)} />
                <br />

                <input type="email" name="email" placeholder="email" value={register.email} onChange={(e) => regi(e)} />
                <br />

                <input type="password" name="password" placeholder="password" value={register.password} onChange={(e) => regi(e)} />
                <br />

                <input type="number" name="mobile" placeholder="mobile" value={register.mobile} onChange={(e) => regi(e)} />
                <br />
                <button onClick={() => dispatch(registerUser(register))}>Register</button>
                <NavLink to="/login"><button>Login</button></NavLink>
            </center>
        </form>
    )
}

export default Register