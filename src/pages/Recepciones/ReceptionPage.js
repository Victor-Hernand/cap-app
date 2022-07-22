import React, { useEffect, useState } from "react";
import BasicLayout from "../../components/BasicLayout";
import BrandDropdown from "../../components/BrandDropdown";
import ModelDropdown from "../../components/ModelDropdown";
import CarPlateSearch from "../../components/CarPlateSearch";
import ClientDropdown from "../../components/ClientDropdown";
import MechanicDropdown from "../../components/MechanicDropdown";

import CategoriesCard from "../../components/CategoriesCard";
import { getCategories } from "../../services/CategoriesService";
import { postReception } from "../../services/ReceptionService";
const ReceptionPage = () => {
    const [categories, setCategories] = useState();

    const getAllCategories = async () => {
        try {
            const result = await getCategories();
            setCategories(result);
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        getAllCategories();
    }, []);
    const submitReceptionForm = async (e) => {
        e.preventDefault();
        const form = document.getElementById("reception-form");
        const formData = new FormData(form);

        for(const item of formData.entries()){
            console.log(item)
        }
        return
        const response = await postReception(formData);
        
        
    }
    return (
        <BasicLayout>
            <h2 className="my-4 text-center font-semibold text-xl text-gray-500">Formulario de recepcion</h2>
            <div className="mt-4 grid grid-cols-1 md:grid-cols-1 sm:grid-cols-1 ">
                <div className="px-4 pb-6 sm:px-10">
                    <form method="POST" id="reception-form" onSubmit={(e) => submitReceptionForm(e)}>
                        <ClientDropdown />
                        <CarPlateSearch />
                        <MechanicDropdown />
                        <BrandDropdown />
                        <ModelDropdown />

                        <div className="flex flex-col items-center p-2">
                            <label className="sr-only" htmlFor="car_motor">Motor</label>
                            <input type="text" id="car_motor" name="car_motor" className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 block w-full pl-10 p-2.5" placeholder="Motor"  />
                        </div>
                        <div className="flex flex-col items-center p-2">
                            <label className="sr-only" htmlFor="car_year">Año</label>
                            <input type="text" id="car_year" name="car_year" className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 block w-full pl-10 p-2.5" placeholder="Año"  />
                        </div>
                        <div className="flex flex-col items-center p-2">
                            <label className="sr-only" htmlFor="car_mileage">Kilometraje</label>
                            <input type="text" id="car_mileage" name="car_mileage" className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 block w-full pl-10 p-2.5" placeholder="Kilometraje"  />
                        </div>
                        <div className="flex flex-col items-center p-2">
                            <label className="sr-only" htmlFor="car_traction">Tracción</label>
                            <input type="text" id="car_traction" name="car_traction" className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 block w-full pl-10 p-2.5" placeholder="Traccion"  />
                        </div>
                        {/*<div className="flex flex-col items-center p-2">
                            <label className="sr-only" htmlFor="date">Fecha</label>
                            <input type="date" id="date" name="date" className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 block w-full pl-10 p-2.5" placeholder="Traccion"  />
                        </div>*/}

                        <CategoriesCard categories={categories} />

                        <div className="pr-2 float-right my-4 ">
                            <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
                                Guardar
                            </button>
                        </div>

                    </form>
                </div>
            </div>
        </BasicLayout>

    )
}

export default ReceptionPage;