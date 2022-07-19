import React, { useEffect, useState, useContext } from "react";
import { ReceptionContext } from "../context/Reception";
import { getClients } from "../services/ClientService";
const ClientDropdown = (props) => {
    const [clients, setClients] = useContext(ReceptionContext);
    const [items, setItems] = useState([]);
    
    const searchClient = (event) => {
        const search = event.target.value
        if(!search){ return setItems([]) }
        const result = clients.filter((item, index) => item.name.toLowerCase().indexOf(search.toLowerCase()) >= 0 && index < 10)
        setItems(result)
    }
    const selectClient = (client) => { 
        document.getElementById('client-search').value = client.name
        document.getElementById('client_id').value = client.id
        setItems([])
    }
    const fetchData = async () => {
        const data = await getClients();
        setClients(data);
        localStorage.setItem('clients', JSON.stringify(data));
    }
    useEffect(() => {
        fetchData();
    }, []);

    return (

        <div className="p-2 flex flex-col items-center">
            <label className="sr-only">Search</label>
            <div className="relative w-full">
                <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                    <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"></path></svg>
                </div>
                <input onChange={searchClient} type="text" id="client-search" 
                    className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 block w-full pl-10 p-2.5" 
                    placeholder="Buscar cliente" required autoComplete="off" />
                <input type="hidden" id="client_id" />
            </div>
            <ul className="flex flex-col w-full shadow-md">
            {items.map(client => {
                return ( 
                        <li key={client.id} 
                            className="text-gray-600 border-b border-gray-200 hover:bg-gray-100 p-4"
                            onClick={() => { selectClient(client) }}>
                                <span>{client.name}</span>
                        </li>
                    )
                }
            )}
            </ul>
        </div>

    );
}

export default ClientDropdown;