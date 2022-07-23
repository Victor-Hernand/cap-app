import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";

import BasicLayout from "../../components/BasicLayout";
import { ReceptionContext } from "../../context/Reception";


const ShowReception = () => {
    const { receptions, setReceptions } = useContext(ReceptionContext);
    const { id } = useParams();
    const [data, setData] = useState(receptions ?? []);

    const getReception = () => {
        console.log(receptions);
        receptions.map((i) => {
            if (i.id == id) {
                console.log(i);
                setData(i);
            }

        })

    }

    useEffect(() => {
        getReception();
    },[])
    return (
        <BasicLayout>
            <h2 className="my-4 text-center font-semibold text-xl text-gray-500">Recepción</h2>
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
                            <p><span className="font-semibold">Placa:</span> {data.car_brand ?? ''}</p>
                        </li>
                        <li>
                            <p><span className="font-semibold">Placa:</span> {data.car_model ?? ''}</p>
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

        </BasicLayout>
    );

}

export default ShowReception;