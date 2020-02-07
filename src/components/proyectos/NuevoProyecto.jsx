import React , { Fragment, useState }from 'react'

const NuevoProyecto = () => {

    const [proyecto, setProyecto] = useState({
        nombre:''
    })

    const {nombre} = proyecto

    const onChangeProyecto = e => {
        setProyecto({
            ...proyecto,
            [e.target.name] : e.target.value
        })
    }

    const onSumit = e => {
        e.preventDefaulft();
    }

    return ( 
        <Fragment>
            <button
                type='button'
                className='btn btn-block btn-primario'>
            Nuevo Proyecto</button>
            <form
                className='formulario-nuevo-proyecto'
                onSubmit={onSumit}>
                <input
                    type='text'
                    className='input-text'
                    placeholder='Nombre del Proyecto'
                    name='nombre'
                    onChange={onChangeProyecto}
                    value={nombre}
                    ></input>

                <input
                    tyoe='submit'
                    className='btn btn-primario btn-block'
                    value='Agregar Proyecto'></input>
            </form>
        </Fragment>
     );
}
 
export default NuevoProyecto;