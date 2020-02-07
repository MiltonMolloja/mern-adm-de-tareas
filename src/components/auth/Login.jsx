import React, {useState} from 'react';
import { Link } from "react-router-dom";



const Login = () => {

    const [usuario, setUsuario] = useState({
        email: '',
        password:''
    })

    const { email, password} = usuario

    const onChange = e => {
        setUsuario({
            ...usuario,
            [e.target.name]:[e.target.value]
        })
    }

    const onSumit = e => {
        e.preventDefault()
     
    }

    return (
        <div>
            <div className='form-usuario'>
                <div className='contenedor-form sombra-dark'>
                    <h1>Iniciar Sesión</h1>

                    <form onSubmit={onSumit}>
                        <div className='campo-form'>
                            <label 
                                htmlFor='email'>Email</label>
                            <input
                                type='email'
                                id='email'
                                name='email'
                                placeholder='tu Email'
                                value={email}
                                onChange={onChange}></input>
                        </div>
                        <div className='campo-form'>
                            <label 
                                htmlFor='password'>Password</label>
                            <input
                                type='password'
                                id='password'
                                name='password'
                                placeholder='tu Password'
                                value={password}
                                onChange={onChange}></input>
                        </div>

                        <div className='campo-form'>
                            <input 
                                type='submit'
                                className='btn btn-primario btn-black'
                                value='Iniciar Sesión'></input>
                        </div>

                        <Link 
                            to='/nueva-cuenta'
                            className='enlace-cuenta'
                            >Crear Cuenta</Link>
                    </form>
                </div>
            </div>            
        </div>
    );
}
 
export default Login;