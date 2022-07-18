import React from "react";
import Loading from "../../components/Loading";

const CardReception = (props) => {
    const { data, loading } = props;

    return (
        <>
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
        </>
    );
}

export default CardReception;