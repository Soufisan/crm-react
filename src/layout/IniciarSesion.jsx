import React from 'react'
import { Outlet } from 'react-router'

const IniciarSesion = () => {
    return (
        <div>
            <h1>Iniciando sesión</h1>

            <Outlet />
        </div>
    )
}

export default IniciarSesion
