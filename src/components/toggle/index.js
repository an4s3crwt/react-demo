import React, { useEffect, useState } from 'react'

/*el icono de luna menguante*/
import { WiMoonAltWaningCrescent4 } from "react-icons/wi";

const Themetoggle = () => {
    //variable de añadir tema y el tema actual 
    //useState inicializa el estado con el localStorage
    const[theme, settheme] = useState(localStorage.getItem("theme"));


    //funcion que cambia de tema con ifelse 
    const themetoggle = () => {
        const newTheme = theme === "dark" ? "light" : "dark";
        settheme(newTheme);
        localStorage.setItem("theme" , newTheme);
    };

    //useEFFECT se ejecuta cada vez que el valor theme cambia
    //cambiar los estilos del documento html a los de theme
    //guarda el valor del tema de localStorage del anterior theme al actual
    useEffect (() =>{
        document.documentElement.setAttribute("data-theme", theme);
        
    }, [theme]);

  return (
    //contenedor div que actúa como botón //
    //<WiMoonAltWaningCrescent4 />: Renderiza el icono de la luna menguante.//
    <div className='nav_ac' onClick={themetoggle}>
        <WiMoonAltWaningCrescent4 />
    </div>
  )
}

export default Themetoggle;