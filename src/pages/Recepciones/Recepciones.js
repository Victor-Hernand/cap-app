import React, { useEffect, useState } from "react";
import BasicLayout from "../../components/BasicLayout";
import Loading from "../../components/Loading";
import Pagination from "../../components/Pagination";
import { getClientes} from "../../services/recepcionesService";

const Recepciones = () => {
    const [page, setPage] = useState(0);
    const [total, setTotal] = useState(0);
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState();

    const getClients = async () => {
        try {
            setLoading(true);
            const result = await getClientes(25, 25 * page);
           
            setData(result);
            setTotal(Math.ceil(result.length / 25));
            setLoading(false);
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        getClients();
    }, []);
    /*useEffect(() => {
        getClients();
    }, [page]);

    const lastPage = () => {
        const nextPage = Math.max(page - 1, 0);
        setPage(nextPage);
    };

    const nextPage = () => {
        const nextPage = Math.min(page + 1, total - 1);
        setPage(nextPage);
    }; */

    return (
        <BasicLayout>
            <div className="grid grid-cols-1 p-4 solid text-2xl text-gray-500">
                <h1>Recepciones de vehículos</h1>
            </div>
            <div className="pl-3 mb-4">
                <button type="button" className="py-2 px-4 flex justify-center items-center bg-blue-500 hover:bg-blue-600 text-white w-18 transition ease-in duration-200 text-center text-base font-semibold rounded-md ">
                    Recepción de vehículo
                    <svg width="20" height="20" fill="currentColor" className="ml-2" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1408 960V832q0-26-19-45t-45-19h-320V448q0-26-19-45t-45-19H832q-26 0-45 19t-19 45v320H448q-26 0-45 19t-19 45v128q0 26 19 45t45 19h320v320q0 26 19 45t45 19h128q26 0 45-19t19-45v-320h320q26 0 45-19t19-45zm256-544v960q0 119-84.5 203.5T1376 1664H416q-119 0-203.5-84.5T128 1376V416q0-119 84.5-203.5T416 128h960q119 0 203.5 84.5T1664 416z">
                        </path>
                    </svg>
                </button>
            </div>

            {loading ? (
                <Loading />
            ) : (
                <div className="pl-3 mt-4 grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 bg-slate-50">

                    {data.map((item, idx) => {
                        return (
                            <div key={idx} className="bg-white max-w-sm rounded overflow-hidden shadow-lg my-2 mr-2">
                                {/*<img className="w-full" src="/img/card-top.jpg" alt="Sunset in the mountains" />*/}
                                <div className="px-6 py-4">
                                    <div className="mb-2">
                                        <p className="font-bold text-lg  ">Cliente: {item.client_name}</p>
                                        <p className="text-lg">N. Factura: {item.invoice_number}</p>
                                    </div>
                                    <p className="text-gray-700 text-base">
                                        {item.reception_number}
                                    </p>
                                </div>
                                <div className="px-6 pt-4 pb-2">
                                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Identificador: {item.id}</span>
                                    
                                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Recepción: {item.reception_date}</span>
                                </div>
                            </div>

                        );
                    })}
                </div>
            )}
            {/*<Pagination
                page={page + 1}
                totalPages={total}
                onLeftClick={lastPage}
                onRightClick={nextPage}
                />*/}

        </BasicLayout>
    )
}

export default Recepciones;