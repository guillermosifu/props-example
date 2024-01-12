import React from 'react'
import Hijo from './Hijo';
import Hermano from './hermano';


const Padre = () => {
  const nombre ="juan";
  const edad = 35;
  const sexo = "masculino"

  return (
    <div>
        <h1>Componente Padre</h1>
        {/* pasar datos al componete hijo mediante props */}
        <Hijo name={nombre} edad={edad}años sexo={sexo}/>
        <Hermano edad={edad} sexo={sexo} name={nombre}/>
        
    </div>
  )
}

export default Padre