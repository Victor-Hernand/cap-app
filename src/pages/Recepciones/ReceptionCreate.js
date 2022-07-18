import React from "react";
import BasicLayout from "../../components/BasicLayout";

const ReceptionCreate = () => {

    return (
        <BasicLayout >
            <div className="grid grid-cols-1 p-4 solid text-2xl text-gray-500">
                <h1>Recepciones / Crear</h1>
            </div>
            <div className="mt-4 grid grid-cols-1 md:grid-cols-1 sm:grid-cols-1 ">
                <div className="px-4 pb-6 sm:px-10">
                    <form>
                        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 sm:grid-cols-1 ">
                            <div className="mb-6">
                                <label htmlFor="placa" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Placa</label>
                                <input type="text" id="placa" className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 block w-full p-2.5 " required />
                            </div>
                            <div className="mb-6">
                                <label htmlFor="cliente" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Seleccionar cliente</label>
                                <select id="clientes" className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                    <option value="1">Option 1</option>
                                </select>
                                <p>Nuevo cliente</p>
                            </div>
                            <div className="mb-6">
                                <label htmlFor="tecnico" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Seleccionar tecnico</label>
                                <select id="tecnico" className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                    <option>United States</option>
                                </select>
                            </div>
                            <div className="mb-6">
                                <label htmlFor="fecha" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Fecha</label>
                                <input type="date" id="fecha" className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 block w-full p-2.5 " required />
                            </div>
                            <div className="mb-6">
                                <label htmlFor="cliente" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Seleccionar cliente</label>
                                <select id="clientes" className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                    <option value="1">Option 1</option>
                                </select>
                                <p>Nueva Marca</p>
                            </div>
                            <div className="mb-6">
                                <label htmlFor="modelo" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Seleccionar Modelo</label>
                                <select id="modelo" className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                    <option value="1">Option 1</option>
                                </select>
                                <p>Nuevo Modelo</p>
                            </div>
                            <div className="mb-6">
                                <label htmlFor="año" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Año</label>
                                <input type="number" id="year" className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 block w-full p-2.5 " required />
                            </div>
                            <hr /> <br />
                            <div className="mb-6">
                                <label htmlFor="motor" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Motor</label>
                                <input type="text" id="motor" className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 block w-full p-2.5 " required />
                            </div>
                            <div className="mb-6">
                                <label htmlFor="kilometro" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">kilometro</label>
                                <input type="number" id="kilometro" className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 block w-full p-2.5 " required />
                            </div>
                            <div className="mb-6">
                                <label htmlFor="tracción" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Tracción</label>
                                <input type="text" id="tracción" className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 block w-full p-2.5 " required />
                            </div>
                        </ div>
                        <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
                    </form>

                </div>
            </ div>
        </BasicLayout>
    );
}

export default ReceptionCreate;