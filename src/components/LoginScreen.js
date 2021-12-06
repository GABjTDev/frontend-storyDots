import { useContext } from "react";
import { Redirect } from "react-router";
import UserContext from "../context/UserContext";

import './LoginScreen.css';

const LoginScreen = ({history}) => {

    const { form, setForm } = useContext(UserContext);

    if(form.login) return <Redirect to="/products" />

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if(form.user === 'admin' && form.password === 'admin'){
            setForm({
                ...form,
                admin: true,
                login: true
            });

            history.replace('/');
        }else if(form.user === 'gabriel' && form.password === '1234'){
            setForm({
                ...form,
                admin: false,
                login: true
            });

            history.replace('/');
        }else{
            alert('No existe usuario');
        }

    }

    return (
        <div className="container">
            <div className="login">
            <h1>Login</h1>

            <form onSubmit={handleSubmit} className="form">
                <div className="boxInput">
                    <label forhtml="user">User</label>
                    <input type="text" placeholder="Ingresa el usuario" name="user" id="user" value={form.user} onChange={handleChange} />
                </div>

                <div className="boxInput">
                    <label forhtml="pass">Password</label>
                    <input type="password" placeholder="Ingresa la contraseña" name="password" id="password" value={form.password} onChange={handleChange}  />
                </div>

                <button>Entrar</button>
            </form>
            </div>
        </div>
    )
}

export default LoginScreen
