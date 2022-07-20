import React, { useState } from "react";
const CategoriesCard = (props) => {
    const { categories } = props;

    return (
        <>
            <h4 className="font-semibold pl-3 mt-4">Interior de Vehículos</h4>
            <div className="pl-3 mt-2 grid grid-cols-1 md:grid-cols-2 sm:grid-cols-2 bg-slate-50">

                {categories ? categories["INTERIOR DE VEHICULOS"].map((item, idx) => {
                    return (
                        <div key={idx} className="bg-white max-w-sm rounded overflow-hidden shadow-lg my-2 mr-2">
                            <div className="px-6 py-2">
                                <div className="mb-2">
                                    <p className="font-semibold">{item.name}</p>
                                    {/*<span>{document.getElementById("comment" + idx)?.value}</span>*/}
                                </div>
                                <div>
                                    <textarea name={"comment" + idx} id={"comment" + idx} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 block w-full p-2.5" placeholder="Comentar..." required="" />
                                </div>
                            </div>
                            <div className="px-6 pt-2 pb-2">

                                <div className="flex flex-wrap">
                                    <div className="flex items-center mr-4">
                                        <input id={"bueno" + idx} value="true" type="radio" name={'interior' + idx} className="w-4 h-4" />
                                        <label htmlFor={"bueno" + idx} className="ml-2 text-sm font-medium text-green-600">Bueno</label>
                                    </div>
                                    <div className="flex items-center mr-4">
                                        <input id={"malo" + idx} type="radio" value="false" name={'interior' + idx} className="w-4 h-4" />
                                        <label htmlFor={"malo" + idx} className="ml-2 text-sm font-medium text-red-600">Malo</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                }) : null}
            </div>

            <h4 className="font-semibold pl-3 mt-4">Parte Frontal</h4>
            <div className="pl-3 mt-2 grid grid-cols-1 md:grid-cols-2 sm:grid-cols-2 bg-slate-50">
                {categories ? categories["PARTE FRONTAL"].map((item, idx) => {
                    return (
                        <div key={idx} className="bg-white max-w-sm rounded overflow-hidden shadow-lg my-2 mr-2">
                            <div className="px-6 py-2">
                                <div className="mb-2">
                                    <p className="font-semibold">{item.name}</p>
                                    {/*<span>{document.getElementById("comment" + idx)?.value}</span>*/}
                                </div>
                                <div>
                                    <textarea name={"comment_pf" + idx} id={"comment_pf" + idx} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 block w-full p-2.5" placeholder="Comentar..." required="" />
                                </div>
                            </div>
                            <div className="px-6 pt-2 pb-2">

                                <div className="flex flex-wrap">
                                    <div className="flex items-center mr-4">
                                        <input id={"bueno_pf" + idx} value="true" type="radio" name={'frontal' + idx} className="w-4 h-4" />
                                        <label htmlFor={"bueno_pf" + idx} className="ml-2 text-sm font-medium text-green-600">Bueno</label>
                                    </div>
                                    <div className="flex items-center mr-4">
                                        <input id={"malo_pf" + idx} type="radio" value="false" name={'frontal' + idx} className="w-4 h-4" />
                                        <label htmlFor={"malo_pf" + idx} className="ml-2 text-sm font-medium text-red-600">Malo</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                }) : null}
            </div>

            <h3 className="font-semibold pl-3 mt-4">Parte Trasera</h3>
            <div className="pl-3 mt-2 grid grid-cols-1 md:grid-cols-2 sm:grid-cols-2 bg-slate-50">
                {categories ? categories["PARTE TRASERA"].map((item, idx) => {
                    return (
                        <div key={idx} className="bg-white max-w-sm rounded overflow-hidden shadow-lg my-2 mr-2">
                            <div className="px-6 py-2">
                                <div className="mb-2">
                                    <p className="font-semibold">{item.name}</p>
                                </div>
                                <div>
                                    <textarea name={"comment_pt" + idx} id={"comment_pt" + idx} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 block w-full p-2.5" placeholder="Comentar..." required="" />
                                </div>
                            </div>
                            <div className="px-6 pt-2 pb-2">

                                <div className="flex flex-wrap">
                                    <div className="flex items-center mr-4">
                                        <input id={"bueno_pt" + idx} value="true" type="radio" name={'trasera' + idx} className="w-4 h-4" />
                                        <label htmlFor={"bueno_pt" + idx} className="ml-2 text-sm font-medium text-green-600">Bueno</label>
                                    </div>
                                    <div className="flex items-center mr-4">
                                        <input id={"malo_pt" + idx} type="radio" value="false" name={'trasera' + idx} className="w-4 h-4" />
                                        <label htmlFor={"malo_pt" + idx} className="ml-2 text-sm font-medium text-red-600">Malo</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                }) : null}
            </div>

        </>
    );
}

export default CategoriesCard;