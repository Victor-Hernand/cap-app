import React, { useEffect, useState, useContext } from "react";
import { ReceptionContext } from "../../context/Reception";
import { useParams } from "react-router-dom";

const ReceptionPdf = (props) => {

    const { receptions, setReceptions } = useContext(ReceptionContext);
    const { id } = useParams();
    const [data, setData] = useState(receptions ?? []);
    const [categories, setCategories] = useState([]);

    const getReception = () => {
        receptions.map((i) => {
            if (i.id == id) {
                setData(i);
                setCategories(i.items);
            }

        })
    }

    const print = () => {
        window.print();
    }

    useEffect(() => {
        getReception();
    }, []);

    return (
        <div className="px-4 py-6">
            <button className="py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75" onClick={print}>Imprimir</button>
            <div className="grid grid-cols-12">
                <div className=" col-span-3">
                    Logo
                </div>
                <div className="col-span-9 text-right">
                    <h1 className="font-bold text-4xl">ORDEN DE RECEPCIÓN Y TRABAJO</h1> <br />
                    <p>Fecha de emisión: {data.reception_date}</p>
                    <p>Técnico: {data.mechanic_id}</p>
                </div>
            </div>

            <div className="grid grid-cols-12">
                <div className=" col-span-4">
                    <h3 className="font-bold pb-2 border-b border-black mr-1">Datos del cliente</h3>
                    <p className="pt-2">{data.client_name}</p>
                    <p>Tel. </p>
                </div>
                <div className=" col-span-4">
                    <h3 className="font-bold pb-2 border-b border-black mr-1">Datos del vehículo</h3>
                    <p className="pt-2">Placa: {data.car_plate}</p>
                    <p>Marca: {data.car_brand}</p>
                    <p>Modelo: {data.car_model}</p>
                    <p>Año: {data.car_year}</p>
                </div>
                <div className=" col-span-4">
                    <h3 className="font-bold pb-2 border-b border-black">Datos de la empresa</h3>
                    <p className="pt-2">INVERSIONES CASTRO S. DE R.L.</p>
                    <p>RTN: 08019019103201</p>
                    <p>Correo: inversionescastro19@gmail.com</p>
                    <p>Tel: 88551238 / 98991522</p>
                </div>
            </div>

            <div className="p-2 grid ">
                <h1 className="font-bold py-2">INTERIOR DE VEHÍCULOS</h1>
                <table className="border-collapse border border-slate-400 text-left ...">
                    <thead>
                        <tr>
                            <th className="border border-slate-900 ...">Descripción</th>
                            <th className="border border-slate-900 ...">Estado</th>
                            <th className="border border-slate-900 ...">Observaciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {categories ? categories.map((i, idx) => {
                            if (i.category == 'INTERIOR DE VEHICULOS') {
                                return (
                                    <tr key={idx}>
                                        <td className="border border-slate-900 ...">{i.name}</td>
                                        <td className="border border-slate-900 ...">{i.is_good}</td>
                                        <td className="border border-slate-900 ...">{i.notes}</td>
                                    </tr>
                                );
                            }
                        }) : null}
                    </tbody>
                </table>
            </div>

            <div className="p-2 grid ">
                <h1 className="font-bold py-2">PARTE FRONTAL</h1>
                <table className="border-collapse border border-slate-400 text-left ...">
                    <thead>
                        <tr>
                            <th className="border border-slate-900 ...">Descripción</th>
                            <th className="border border-slate-900 ...">Estado</th>
                            <th className="border border-slate-900 ...">Observaciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {categories ? categories.map((i, idx) => {
                            if (i.category == 'PARTE FRONTAL') {
                                return (
                                    <tr key={idx}>
                                        <td className="border border-slate-900 ...">{i.name}</td>
                                        <td className="border border-slate-900 ...">{i.is_good}</td>
                                        <td className="border border-slate-900 ...">{i.notes}</td>
                                    </tr>
                                );
                            }
                        }) : null}
                    </tbody>
                </table>
            </div>

            <div className="p-2 grid ">
                <h1 className="font-bold py-2">PARTE TRASERA</h1>
                <table className="border-collapse border border-slate-400 text-left ...">
                    <thead>
                        <tr>
                            <th className="border border-slate-900 ...">Descripción</th>
                            <th className="border border-slate-900 ...">Estado</th>
                            <th className="border border-slate-900 ...">Observaciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {categories ? categories.map((i, idx) => {
                            if (i.category == 'PARTE TRASERA') {
                                return (
                                    <tr key={idx}>
                                        <td className="border border-slate-900 ...">{i.name}</td>
                                        <td className="border border-slate-900 ...">{i.is_good}</td>
                                        <td className="border border-slate-900 ...">{i.notes}</td>
                                    </tr>
                                );
                            }
                        }) : null}
                    </tbody>
                </table>
            </div>

            <div className="pt-4 pb-2 grid grid-cols-1">
                <h3 className="font-bold">Observaciones del cliente: </h3>
                <span>{data.public_notes}</span>
            </div>

            <div className="pt-2 pb-2 grid grid-cols-1">
                <h3 className="font-bold">Trabajos a realizar: </h3>
                <span>{data.private_notes}</span>
            </div>

            <div className="pt-2 pb-8 grid grid-cols-1">
                <p className="font-bold">El cliente autoriza la reparacion de su vehiculo de acuerdo a las siguientes clausulas:</p>
                <p>1.-No somos responsables por articulos o daños del vehiculo NO reportados por el cliente 2.-En caso de ser
                    necesario, se podran hacer pruebas del vehiculo en carretera 3.-Los reclamos por reparacion defectuosas
                    solamente se atenderan si son reportados antes que trasncurran 24 horas de la entrega 4.-Se cobrara recargo
                    de L. 200 diarios por estacionamiento de vehiculo, si no es retirado a mas tardar 24 horas despues de la
                    notificacion de finalizado el proceso de reparacion 5.-Los repuestos cambiados en una reparacion son
                    propiedad del cliente, sin embargo repuestos que no son reclamados son descartados 3 dias despues. 6.-
                    Garantia: 1,000 kms o 30 dias lo que sucede primero</p>
            </div>
            <div className="mt-4 pt-8 pb-2 grid grid-cols-2">
                <div className="text-center">
                    <h3 className="pt-2 border-t border-black mr-1">Nombre y firma del cliente</h3>
                </div>
                <div className="text-center">
                    <h3 className="pt-2 border-t border-black mr-1">Nombre y firma del receptor</h3>
                </div>
            </div>
        </div>
    )
}

export default ReceptionPdf;