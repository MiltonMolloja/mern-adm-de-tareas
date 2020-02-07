import React, {useState} from 'react';
import { Link } from "react-router-dom";



const NuevaCuenta = () => {
    

    const [usuario, setUsuario] = useState({
        nombre: '',
        email: '',
        password:'',
        confirPassword:''
    })

    const {nombre, email, password, confirPassword} = usuario

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
                    <h1>Crea una nueva Cuenta</h1>

                    <form onSubmit={onSumit}>
                    <div className='campo-form'>
                            <label 
                                htmlFor='nombre'>Nombre</label>
                            <input
                                type='text'
                                id='nombre'
                                name='nombre'
                                placeholder='tu nombre'
                                value={nombre}
                                onChange={onChange}></input>
                        </div>
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
                            <label 
                                htmlFor='confirPassword'>Confirme el password</label>
                            <input
                                type='password'
                                id='confirPassword'
                                name='confirPassword'
                                placeholder='Confirma tu Password'
                                value={confirPassword}
                                onChange={onChange}></input>
                        </div>

                        <div className='campo-form'>
                            <input 
                                type='submit'
                                className='btn btn-primario btn-black'
                                value='Crear Cuenta'></input>
                        </div>

                        <Link 
                            to='/'
                            className='enlace-cuenta'
                            >Volver al Inicio</Link>
                    </form>
                </div>
            </div>            
        </div>
    );
}
 
export default NuevaCuenta;