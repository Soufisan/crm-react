import React from 'react'
import { Outlet } from 'react-router'

const Layout = () => {
    return (
        <div className="md:flex md:min-h-screen">
            <div className="md:w-1/4 bg-blue-900 px-5 py-10">
                <h2 className="text-4xl font-black uppercase text-center text-white">CRM Client</h2>
                <nav className="mt-10">
                    <a
                        className="text-2xl uppercase block text-white mt-2 hover:text-yellow-300"
                        href="/client"
                    >Clientes
                    </a>

                    <a
                        className="text-2xl uppercase block text-white mt-2 hover:text-yellow-300"
                        href="/client/new"
                    >Nuevo Cliente
                    </a>
                </nav>
            </div>
            <div className="md:w-3/4">
                <Outlet />
            </div>

        </div>
    )
}

export default Layout
