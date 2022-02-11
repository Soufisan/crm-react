import React from 'react'
import { Outlet, Link, useLocation } from 'react-router-dom'

const Layout = () => {
    const location = useLocation()
    const urlActual = location.pathname

    return (
        <div className="md:flex md:min-h-screen">
            <div className="md:w-1/4 bg-blue-900 px-5 py-10">
                <h2 className="text-4xl font-black uppercase text-start text-white">Idea Mejora</h2>
                <nav className="mt-10">
                    <Link
                        className={`${urlActual === "/dpto" ? 'text-yellow-300' : 'text-white'}
                        text-2xl uppercase block text-white mt-2 hover:text-yellow-300`}
                        to="/dpto"
                    >Departamentos
                    </Link>

                    <Link
                        className={`${urlActual === "/dpto/new" ? 'text-yellow-300' : 'text-white'}
                        text-2xl uppercase block text-white mt-2 hover:text-yellow-300`}
                        to="/dpto/new"
                    >Nuevo Departamento
                    </Link>
                </nav>
            </div>

            <div className="md:w-3/4 p-10 md:h-screen overflow-scroll">
                <Outlet />
            </div>

        </div>
    )
}

export default Layout
