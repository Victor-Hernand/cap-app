import React, { useEffect, useState, useContext } from "react";
import { ReceptionContext } from "../context/Reception";
import { getMechanics } from "../services/MechanicService";
const MechanicDropdown = (props) => {
    const [mechanics, setMechanics] = useContext(ReceptionContext);
    const [items, setItems] = useState([]);
    
    const searchMechanic = (event) => {
        const search = event.target.value
        if(!search){ return setItems([]) }
        const result = mechanics.filter((item, index) => item.first_name.toLowerCase().indexOf(search.toLowerCase()) >= 0 || item.last_name.toLowerCase().indexOf(search.toLowerCase()) >= 0)
        setItems(result)
    }
    const selectMechanic = (mechanic) => { 
        document.getElementById('mechanic-search').value = `${mechanic.first_name}  ${mechanic.last_name}`
        document.getElementById('mechanic_id').value = mechanic.id
        setItems([])
    }

    const fetchData = async () => {
        const data = await getMechanics();
        setMechanics(data);
    }
    useEffect(() => {
        fetchData();
    }, []);
    
    return (

        <div className="m-3 flex flex-col items-center">
            <label className="sr-only">Search</label>
            <div className="relative w-full">
                <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                    <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"></path></svg>
                </div>
                <input onChange={searchMechanic} type="text" id="mechanic-search" 
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full pl-10 p-2.5 " 
                    placeholder="Buscar tecnico" required autoComplete="off" />
                <input type="hidden" id="mechanic_id" />
            </div>
            <ul className="flex flex-col w-full shadow-md">
            {items.map(mechanic => {
                return ( 
                        <li key={mechanic.id} 
                            className="text-gray-600 border-b border-gray-200 hover:bg-gray-100 p-4"
                            onClick={() => { selectMechanic(mechanic) }}>
                                <span>{mechanic.first_name} {mechanic.last_name}</span>
                        </li>
                    )
                }
            )}
            </ul>
        </div>

    );
}

export default MechanicDropdown;