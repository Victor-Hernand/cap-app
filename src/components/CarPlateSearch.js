import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { UserContext } from "../context/User";
import { ReceptionContext } from "../context/Reception";
const CarPlateSearch = (props) => {
    const {clients, setClients} = useContext(ReceptionContext);
    const [items, setItems] = useState([]);
    
    const searchCarPlate = (event) => {
        const search = event.target.value
        const result = clients.map(item => item.car_plates.filter(plate => plate.plate.toLowerCase() === search.toLowerCase())).filter(item => item.length > 0)
        const plates = result.length > 0 ? result[0] : []
        setItems(plates)
    }
    const selectCarPlate = (carPlate) => { 
        document.getElementById('client_id').value = carPlate.client_id
        document.getElementById('car_plate').value = carPlate.plate
        const client = clients.find(item => item.id === carPlate.client_id)
        document.getElementById('client-search').value = client.name
        setItems([])
    }
    

    return (

        <div className="p-2 flex flex-col items-center">
            <label className="sr-only">Search</label>
            <div className="relative w-full">
                <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                    <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"></path></svg>
                </div>
                <input onChange={searchCarPlate} type="text" id="car_plate"  name="car_plate"
                    className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 block w-full pl-10 p-2.5" 
                    placeholder="Buscar placa" autoComplete="off" />
            </div>
            <ul className="flex flex-col w-full shadow-md">
            {items.map(item => {
                return ( 
                        <li key={item.id} 
                            className="text-gray-600 border-b border-gray-200 hover:bg-gray-100 p-4 "
                            onClick={() => { selectCarPlate(item) }}>
                                <span>{item.plate}</span>
                        </li>
                    )
                }
            )}
            </ul>
        </div>

    );
}

export default CarPlateSearch;