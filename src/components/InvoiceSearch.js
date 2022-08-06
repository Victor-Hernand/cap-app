import React, { useEffect, useState, useContext } from "react";
import { DiagnosticContext } from "../context/Diagnostic";
import { getClients } from "../services/ClientService";
import { getInvoices } from "../services/DiagnosticService";

const InvoiceSearch = (props) => {
    const {invoice, setInvoice, invoiceSelected, setInvoiceSelected, clientName, setClientName} = useContext(DiagnosticContext);
    const [items, setItems] = useState([]);
    const [dataClient, setDataClient] = useState([]);
    
    const searchInvoice = (event) => {
        const search = event.target.value
        if(!search){ return setItems([]) }
        const result = invoice.filter((item, index) => item.invoice_number.toLowerCase().indexOf(search.toLowerCase()) >= 0 ||  item.car_plate?.toLowerCase().indexOf(search.toLowerCase()) >= 0);  
        setItems(result);
    }
    const selectDocument = (item) => { 
        setInvoiceSelected(item);
        dataClient.map((i) => {
            if (i.id == item.client_id) {
                setClientName(i.name);
            }

        })
        document.getElementById('invoice-search').value = item.invoice_number;
        document.getElementById('invoice_id').value = item.id;
        setItems([])
    }
    const fetchData = async () => {
        const data = await getInvoices();
        setInvoice(data);
        localStorage.setItem('invoice', JSON.stringify(data));
    }

    const getClient = async () => {
        setClientName("Cliente");
        const data = await getClients();
        setDataClient(data);
    }
    
    useEffect(() => {
        fetchData();
        getClient();
    }, []);

    return (

        <div className="px-4 pb-2 sm:px-10">
            <label className="sr-only">Search</label>
            <div className="relative w-full">
                <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                    <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"></path></svg>
                </div>
                <input onChange={searchInvoice} type="text" id="invoice-search" 
                    className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 block w-full pl-10 p-2.5" 
                    placeholder="Buscar placa o numero de factura" required autoComplete="off" />
                <input type="hidden" id="invoice_id" name="invoice_id" />
            </div>
            <ul className="flex flex-col w-full shadow-md">
            {items.map(document => {
                return ( 
                        <li key={document.id} 
                            className="text-gray-600 border-b border-gray-200 hover:bg-gray-100 p-4"
                            onClick={() => { selectDocument(document) }}>
                                <span>Factura: {document.invoice_number} Placa: {document.car_plate}</span>
                        </li>
                    )
                }
            )}
            </ul>
        </div>

    );
}

export default InvoiceSearch;