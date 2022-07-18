import React, { useEffect, useState, useContext } from "react";
import { ReceptionContext } from "../context/Reception";

const ModelDropdown = (props) => {

    const [brands, setBrands] = useContext(ReceptionContext);
    const [items, setItems] = useState([]);
    
    const searchModel = (event) => {
        const search = event.target.value
        if(!search){ return setItems([]) }
        const result = brands.map(item => item.car_models.filter(model => model.name.toLowerCase().indexOf(search.toLowerCase()) >= 0)).filter(item => item.length > 0)
        const models = result.length > 0 ? result.flat() : []
        setItems(models)
    }
    const selectModel = (model) => { 
        document.getElementById('model-search').value = model.name
        document.getElementById('model_id').value = model.id
        setItems([])
    }
    
    return (

        <div className="m-3 flex flex-col items-center">
            <label className="sr-only">Search</label>
            <div className="relative w-full">
                <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                    <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"></path></svg>
                </div>
                <input onChange={searchModel} type="text" id="model-search" 
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full pl-10 p-2.5 " 
                    placeholder="Buscar modelo" required autoComplete="off" />
                <input type="hidden" id="model_id" />
            </div>
            <ul className="flex flex-col w-full shadow-md">
            {items.map(model => {
                return ( 
                        <li key={model.id} 
                            className="text-gray-600 border-b border-gray-200 hover:bg-gray-100 p-4"
                            onClick={() => { selectModel(model) }}>
                                <span>{model.name}</span>
                        </li>
                    )
                }
            )}
            </ul>
        </div>

    );
}

export default ModelDropdown;