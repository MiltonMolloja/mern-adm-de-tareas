import React, {Fragment} from 'react'
import Proyecto from "./Proyecto";

    const proyectos = [
        {nombre: 'Tienda Virtual'},
        {nombre: 'Intranet'},
        {nombre: 'Diseño de Sitio Virtual'},
    ]

const Listado = () => {
    return (
        <Fragment>
            <ul className='listado-proyectos'>
                {proyectos.map( proyecto => (
                    <Proyecto 
                        key={proyecto.nombre}
                        proyecto={proyecto}></Proyecto>
                ))}
            </ul>
        </Fragment>
      );
}
 
export default Listado;