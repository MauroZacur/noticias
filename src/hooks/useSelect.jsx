import React, {useState} from 'react'


const Select = (stateInicial,opciones) => {
    
    const [state,setState]= useState (stateInicial);



    const selectNoticias = () => (

        <select
            className= "browser-default"
            value= {state}
            onChange={e=> setState (e.target.value)}
        >
            {opciones.map(opcion =>(
                <option key= {opcion.value} value={opcion.value}>{opcion.label}</option>
            ))}
        </select>
    );

    return [state, selectNoticias];
}
 
export default Select;