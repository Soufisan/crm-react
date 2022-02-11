
import React from 'react'
import { Formik, Form, Field } from 'formik'

const Fomulario = () => {
    const handelSubmit = (valores) => {
        console.log(valores)
    }
    return (
        <div className="bg-white mt-10 px-5 py-10 rounded-md shadow-md md:w-3/4 mx-auto">
            <h1 className="text-gray-600 font-bold text-center text-xl uppercase"
            >Agregar Departamento
            </h1>

            <Formik
                InitialValues={{
                    departamento: '',
                    responsable: '',
                    unidad: '',
                    email: '',
                }}
                onSubmit={(values) => {
                    handelSubmit(values)

                }}
            >
                {() => (
                    <Form
                        className="mt-10"
                    >
                        <div className="mb-4">
                            <label
                                className="text-gray-800"
                                htmlFor="dpto"
                            >Nombre de Departamento:
                            </label>
                            <Field
                                id="dpto"
                                type="text"
                                className="mt-2 block w-full p-3 bg-gray-50"
                                placeholder="PrintRoom"
                                name="departamento"
                            />
                        </div>

                        <div className="mb-4">
                            <label
                                className="text-gray-800"
                                htmlFor="nombre"
                            >Nombre del Responsable:
                            </label>
                            <Field
                                id="nombre"
                                type="text"
                                className="mt-2 block w-full p-3 bg-gray-50"
                                placeholder="Soufian"
                                name="responsable"
                            />
                        </div>

                        <div className="mb-4">
                            <label
                                className="text-gray-800"
                                htmlFor="unidad"
                            >Unidad de Negocio:
                            </label>
                            <Field
                                id="unidad"
                                type="text"
                                className="mt-2 block w-full p-3 bg-gray-50"
                                placeholder="Operaciones"
                                name="unidad"
                            />
                        </div>

                        <div className="mb-4">
                            <label
                                className="text-gray-800"
                                htmlFor="email"
                            >E-mail grupal:
                            </label>
                            <Field
                                id="email"
                                type="email"
                                className="mt-2 block w-full p-3 bg-gray-50"
                                placeholder="ejemplo@dpto.com"
                                name="email"
                            />
                        </div>
                        <input
                            value="Agregar departamento"
                            className="text-white p-3 w-full uppercase font-bold text-lg bg-blue-800"
                            type="submit"
                        />
                    </Form>
                )}
            </Formik>

        </div>
    )
}

export default Fomulario
