import { React, useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { setRol, setName, setToken, getToken, getName, getRol } from "../helpers/auth-helper"

import axios from 'axios';
// estilos css Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import './Login.css'
import logo from '../imgs/user-login.png'


const Login = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [clickButton, setClickButton] = useState(false);
    let history = useHistory();
    const user = {
        nombre: "",
        rol: "",
        token: ""
    }


    const getAccessToken = async () => {
        try {
            const response = await axios.post('http://localhost:9093/api/login', { //authServer
                email: email,
                clave: password
            })

            user.token = response.data.access_token
            console.log('access_token', response.data.access_token)

            setToken(user.token)
            getUserType(user.token)


        } catch (error) {
            console.log(error)
            return
        }
    }

    const verifyToken = async (token) => {
        try {
            const response = await axios.get('http://localhost:9093/api/verify', {
                headers: {
                    'authorization': token
                }
            })
            console.log('token expirado?: ', response.data.error)
            if (response.data.error) getAccessToken()
            else getUserType(user.token)

        } catch {
            console.log('catchhh verifyToken')
        }
    }

    const getUserType = async (token) => {

        try {
            const response = await axios.get('http://localhost:9093/api/verify', {
                headers: {
                    'authorization': token
                }
            })
            ///console.log('response ramon: ', response.data.error)
            user.rol = response.data.rol
            user.nombre = response.data.nombre
            setRol(user.rol)
            setName(user.nombre)

            console.log('rol', response.data.rol)
            console.log('nombre', response.data.nombre)
            // return history.replace("/perfil");
            if (!user.rol) return
            history.push('/perfil')

        } catch (error) {
            console.log(error)
            return
        }

    }


    useEffect(() => {

        user.token = getToken()
        console.log('user.token', user.token)
        if (user.token === undefined || user.token == null) {
            getAccessToken()

        } else {
            // validar token
            verifyToken(user.token)
            

        }

    }, [clickButton])



    return (


        <div className="container">

            <div className="row text-center login-page">
                <div className="col-md-12 login-form"></div>
                <div>
                    <img className='login-logo' src={logo} alt='soy un alt prop' />

                    {/* <form action="/user/dashboard/" method="GET"> */}

                    <div className="row">
                        <div className="col-md-12 login-form-header">
                            <p className="login-form-font-header">
                            </p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="login-field">
                            <input
                                name="email"
                                type="text"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Correo electrónico"
                                required
                            />
                        </div>
                    </div>

                    <br />
                    <div className="row">
                        <div className="login-field">
                            <input
                                name="password"
                                type="password"
                                onChange={(e) => setPassword(e.target.value)}
                                value={password}
                                placeholder="Contraseña"
                                required
                            />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12 login-form-row">
                            <br />
                            <button onClick={(e) => {
                                setClickButton(!clickButton)

                            }} className="btn btn-info" type="submit">Iniciar Sesión</button>

                            <br />

                        </div>
                    </div>
                    {/* </form> */}

                </div>
            </div>
        </div>





    )
};


export default Login;