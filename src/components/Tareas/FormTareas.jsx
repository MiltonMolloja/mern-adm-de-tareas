import React from 'react'

const FormTareas = () => {
    return (
        <div className='formulario'>
            <form>
                <div className='contenedor-input'>
                    <input
                        type='text'
                        className='input-text'
                        placeholder='Nombre de la Tarea...'
                        name='nombre'></input>
                </div>
                <div className='contenedor-input'>
                    <input
                        type='submit'
                        className='btn btn-primario btn-submit btn-block'
                        value='Agregar Tarea'></input>
                </div>
            </form>
        </div>
    );
}
 
export default FormTareas;