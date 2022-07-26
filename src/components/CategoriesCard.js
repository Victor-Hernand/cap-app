import React, { useState } from "react";
const CategoriesCard = (props) => {
    const { categories } = props;
    const categoryArray = Object.entries(categories ?? [])
    return (
        <>
            <div className="pl-3 my-2 grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 bg-slate-50">
                {categoryArray.map((items, idx) => {
                    return (
                    <div key={idx}>
                        <h4 className="font-semibold pl-3 my-8 text-indigo-600">{items[0]}</h4>
                        {items[1].map((item, index) => { return (
                            <div key={item.id} className="bg-white max-w-sm rounded overflow-hidden shadow-lg my-2 mr-2" >
                            
                            <div className="px-6 py-2">
                                <div className="mb-2">
                                    <p className="font-semibold">{item.name}</p>
                                </div>
                                <div>
                                    <textarea name={"types[" + item.id + "][notes]"} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 block w-full p-2.5" placeholder="Comentar..." required="" />
                                </div>
                            </div>
                            <div className="px-6 pt-2 pb-2">

                                <div className="flex flex-wrap">
                                    <div className="flex items-center mr-4">
                                        <input value="1" type="radio" name={"types[" + item.id + "][is_good]"} className="w-4 h-4" />
                                        <label className="ml-2 text-sm py-2 font-medium text-green-600">Bueno</label>
                                    </div>
                                    <div className="flex items-center mr-4">
                                        <input value="0" type="radio" name={"types[" + item.id + "][is_good]"} className="w-4 h-4" />
                                        <label className="ml-2 text-sm py-2 font-medium text-red-600">Malo</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        )
                        })}
                    </div>
                    );
                }) }
            </div>
            <div className="flex flex-col p-2">
                <label className="block mb-2 text-sm font-medium text-indigo-600" htmlFor="car_motor">Observaciones del Cliente</label>
                <textarea rows="3" name="private_notes" className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 block w-full p-2.5" placeholder="" required="" />
            </div>
            <div className="flex flex-col p-2">
                <label className="block mb-2 text-sm font-medium text-indigo-600" htmlFor="private_notes">Trabajos a realizar</label>
                <textarea rows="3" name="public_notes" className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 block w-full p-2.5" placeholder="" required="" />
            </div>
        </>
    );
}
export default CategoriesCard;