import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import BasicLayout from "../../components/BasicLayout";
import { DiagnosticContext } from "../../context/Diagnostic";

const ShowDiagnostic = () => {
    const { diagnostic, setDiagnostic } = useContext(DiagnosticContext);
    const { id } = useParams();
    const [data, setData] = useState(diagnostic ?? []);
    const [categories, setCategories] = useState([]);

    const getReception = () => {
        diagnostic.map((i) => {
            if (i.id == id) {
                setData(i);
                setCategories(i.items);
            }

        })
    }

    useEffect(() => {
        getReception();
    }, []);

    return (
        <BasicLayout>
            <h2 className="my-4 text-center font-semibold text-xl text-gray-500">Diagnóstico</h2>
            <div className="mx-4 px-6 py-4 sm:px-10 bg-white mt-4 grid grid-cols-1 md:grid-cols-2 sm:grid-cols-1 ">
                <div className="">
                    <ul>
                        <li>
                            <p><span className="font-semibold">Cliente:</span> {data.client_name ?? ''}</p>
                        </li>
                        <li>
                            <p><span className="font-semibold">Placa:</span> {data.car_plate ?? ''}</p>
                        </li>
                        <li>
                            <p><span className="font-semibold">Mecanico:</span> {data.mechanic_id ?? ''}</p>
                        </li>
                        <li>
                            <p><span className="font-semibold">Marca:</span> {data.car_brand ?? ''}</p>
                        </li>
                        <li>
                            <p><span className="font-semibold">Modelo:</span> {data.car_model ?? ''}</p>
                        </li>
                    </ul>
                </div>
                <div className="">
                    <ul>
                        <li>
                            <p><span className="font-semibold">Motor:</span> {data.car_motor ?? ''}</p>
                        </li>
                        <li>
                            <p><span className="font-semibold">Año:</span> {data.car_year ?? ''}</p>
                        </li>
                        <li>
                            <p><span className="font-semibold">Kilometraje:</span> {data.car_mileage ?? ''}</p>
                        </li>
                        <li>
                            <p><span className="font-semibold">Tracción:</span> {data.car_traction ?? ''}</p>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="w-full grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-4 mb-4 md:mb-0 items-center p-8">
                {categories ? categories.map((i, idx) => {

                    return (
                        <div key={idx} className="bg-white dark:bg-gray-800 shadow-lg rounded-xl p-4">
                            <p className="font-bold text-gray-600 dark:text-white">
                                {i.name}
                            </p>
                            <span className="text-gray-600 text-sm">
                                {i.notes}
                            </span>
                            <div className="flex items-center mt-4">
                                <div className="flex flex-col ml-2 justify-between">
                                    <span className="font-semibold text-indigo-500 text-xs">
                                        {i.category}
                                    </span>
                                </div>
                            </div>
                        </div>)
                }) : null}
            </div>

            <div className="mx-4 mb-4 shadow-lg rounded-xl p-4 sm:px-10 bg-white mt-2 grid grid-cols-1 md:grid-cols-2 sm:grid-cols-1 ">
                <div className="my-4">
                    <h3 className="font-semibold text-gray-500">Observaciones del cliente</h3>
                    <p>{data.private_notes}</p>
                </div>
                <div className="my-4">
                    <h3 className="font-semibold text-gray-500">Trabajos a realizar</h3>
                    <p>{data.public_notes}</p>
                </div>
            </div>

        </BasicLayout>
    );

}

export default ShowDiagnostic;