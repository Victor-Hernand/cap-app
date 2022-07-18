import React, { useEffect, useState } from "react";
import BasicLayout from "../../components/BasicLayout";
import BrandDropdown from "../../components/BrandDropdown";
import ModelDropdown from "../../components/ModelDropdown";
import CarPlateSearch from "../../components/CarPlateSearch";
import ClientDropdown from "../../components/ClientDropdown";
import MechanicDropdown from "../../components/MechanicDropdown";
import { postReception } from "../../services/recepcionesService";
const ReceptionPage = () => {
    const submitReceptionForm = async() => {
        const form = document.getElementById("reception-form");
        const formData = new FormData(form);
        const response = await postReception(formData);
        console.log(response)
    }
    return (
        <BasicLayout>
            <h2 className="my-4 text-center font-semibold text-xl text-gray-500">Formulario de recepcion</h2>
            <form method="POST" id="reception-form" onSubmit={() => submitReceptionForm }>
                <CarPlateSearch />
                <ClientDropdown />
                <MechanicDropdown />
                <BrandDropdown />
                <ModelDropdown />
                
                <div className="flex flex-col items-center p-2">
                    <label className="sr-only" htmlFor="motor">Motor</label>
                    <input type="text" id="motor" name="motor" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full pl-10 p-2.5" placeholder="Motor" required />
                </div>
                <div className="flex flex-col items-center p-2">
                    <label className="sr-only" htmlFor="car_year">Año</label>
                    <input type="text" id="car_year" name="car_year" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full pl-10 p-2.5" placeholder="Año" required />
                </div>
                <div className="flex flex-col items-center p-2">
                    <label className="sr-only" htmlFor="mileage">Kilometraje</label>
                    <input type="text" id="mileage" name="mileage" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full pl-10 p-2.5" placeholder="Kilometraje" required />
                </div>
                <div className="flex flex-col items-center p-2">
                    <label className="sr-only" htmlFor="traction">Traccion</label>
                    <input type="text" id="traction" name="traction" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full pl-10 p-2.5" placeholder="Traccion" required />
                </div>
            </form>
        </BasicLayout>
            
    )
}

export default ReceptionPage;