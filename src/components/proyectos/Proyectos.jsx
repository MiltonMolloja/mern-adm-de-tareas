import React from 'react';
import Sidebar from "../layout/Sidebar";
import Barra from "../layout/Barra";
import FormTareas from "../Tareas/FormTareas";
import ListadoTareas from '../Tareas/ListadoTareas';

const Proyectos = () => {
    return ( 
        <div className='contenedor-app'>
            <Sidebar/>
            <div className='seccion-principal'>
                <Barra/>
                <main>              
                    <FormTareas></FormTareas>      
                    <div className='contenedor-tareas'>
                        <ListadoTareas></ListadoTareas>
                    </div>
                </main>                
            </div>
        </div>
        );
}
 
export default Proyectos;