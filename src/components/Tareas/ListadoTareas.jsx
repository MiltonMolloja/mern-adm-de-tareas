import React, {Fragment} from 'react'
import Tarea from "./tarea";
const ListadoTareas = () => {

    const TareasProyecto = [
        { nombre: 'Elegir Plataforma' , estado:true},
        { nombre: 'Elegir Color' , estado:false},
        { nombre: 'Elegir Style' , estado:true},
        { nombre: 'Elegir Hosting' , estado:false},
        { nombre: 'Elegir BackEnd' , estado:true},
    ]

    return (
        <Fragment>
            <h2>Proyectos</h2>

            <ul
                className='listado-tareas'>
                {TareasProyecto.length === 0 
                    ?
                        <li className='tarea'> No hay Tareas</li>                    
                    :(
                        TareasProyecto.map( tarea =>(
                            <Tarea
                                tarea={tarea}></Tarea>
                        ))
                    ) 
                }
            </ul>
            
            <button
                type='button'
                className='btn btn-primario'
                >Eliminar &times;</button>
        </Fragment>
      );
}
 
export default ListadoTareas;