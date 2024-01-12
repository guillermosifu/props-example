import React from 'react'

const Hijo = (props) => {
  return (
    <div>
        <p>mo nombre es {props.name}</p>
        <p>tengo {props.edad}años</p>
        <p>soy:{props.sexo}</p>
    </div>
  )
}

export default Hijo