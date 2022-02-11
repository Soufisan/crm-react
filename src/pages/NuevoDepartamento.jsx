import React from 'react'
import Fomulario from '../components/Fomulario'

const NuevoDepartamento = () => {
    return (
        <div>
            <h1 className="font-black text-4xl text-blue-900">Nuevo Departamento</h1>
            <p className="mt-3">Llena los campos para registrar un departamento</p>

            <Fomulario />
        </div>
    )
}

export default NuevoDepartamento
