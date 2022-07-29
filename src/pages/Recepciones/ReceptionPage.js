import React, { useEffect, useState } from "react";
import BasicLayout from "../../components/BasicLayout";
import BrandDropdown from "../../components/BrandDropdown";
import ModelDropdown from "../../components/ModelDropdown";
import CarPlateSearch from "../../components/CarPlateSearch";
import ClientDropdown from "../../components/ClientDropdown";
import MechanicDropdown from "../../components/MechanicDropdown";
import Loading from "../../components/Loading";
import CategoriesCard from "../../components/CategoriesCard";
import { getCategories } from "../../services/CategoriesService";
import { postReception } from "../../services/ReceptionService";
import Resizer from "react-image-file-resizer";
import { useNavigate } from "react-router-dom";
const ReceptionPage = () => {
    const [categories, setCategories] = useState();
    const [pictures, setPictures] = useState([]);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
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
        setLoading(true)
        const form = document.getElementById("reception-form");
        const formData = new FormData(form);
        formData.delete("files");
	    let filesData = []
        for (let i = 0; i < pictures.length; i++) {
            formData.append(`files[${i}]`, pictures[i]);
        }   
        const response = await postReception(formData);
        setLoading(false)
        if(response){
            return navigate('/');
        }

    }


    const onFileResize = (event) => {
        var fileInput = false;
        let files = event.target.files;
        let images = [];
    if (files) {
        fileInput = true;
    }
    if (fileInput) {
        for (let i = 0; i < files.length; i++) {
            try {
                Resizer.imageFileResizer(
                    files[i],
                    1024,
                    720,
                    "JPEG",
                    100,
                    0,
                    (uri) => {
                        images.push(uri);
                        setPictures(images);
                    },
                    "file",
                    200,
                    200
                );
            } catch (err) {
                console.log(err);
            }
        }
    }
    }

    return (
        <BasicLayout>
            {loading ? (
                <Loading />
            ) : (
             <>
            <h2 className="my-4 text-center font-semibold text-xl text-gray-500">Formulario de recepcion</h2>
            <div className="mt-4 grid grid-cols-1 md:grid-cols-1 sm:grid-cols-1 ">
                <div className="px-4 pb-6 sm:px-10">
                    <form method="POST" id="reception-form" onSubmit={(e) => submitReceptionForm(e)}>
                        <CarPlateSearch />
                        <ClientDropdown />
                        <MechanicDropdown />
                        <BrandDropdown />
                        <ModelDropdown />

                        <div className="flex flex-col items-center p-2">
                            <label className="sr-only" htmlFor="car_motor">Motor</label>
                            <input autoComplete="false" type="text" id="car_motor" name="car_motor" className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 block w-full pl-10 p-2.5" placeholder="Motor" />
                        </div>
                        <div className="flex flex-col items-center p-2">
                            <label className="sr-only" htmlFor="car_year">Año</label>
                            <input autoComplete="false" type="text" id="car_year" name="car_year" className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 block w-full pl-10 p-2.5" placeholder="Año" />
                        </div>
                        <div className="flex flex-col items-center p-2">
                            <label className="sr-only" htmlFor="car_mileage">Kilometraje</label>
                            <input autoComplete="false" type="text" id="car_mileage" name="car_mileage" className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 block w-full pl-10 p-2.5" placeholder="Kilometraje" />
                        </div>
                        <div className="flex flex-col items-center p-2">
                            <label className="sr-only" htmlFor="car_traction">Tracción</label>
                            <input autoComplete="false" type="text" id="car_traction" name="car_traction" className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 block w-full pl-10 p-2.5" placeholder="Traccion" />
                        </div>
                        {/*<div className="flex flex-col items-center p-2">
                            <label className="sr-only" htmlFor="date">Fecha</label>
                            <input type="date" id="date" name="date" className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 block w-full pl-10 p-2.5" placeholder="Traccion"  />
                        </div>*/}

                        <CategoriesCard categories={categories} />
                        <div className="p-2 flex">
                            <div className="mb-3 w-96">
                                <label htmlFor="formFileMultiple" className="form-label inline-block mb-2 font-semibold text-indigo-600">Agregar Imagenes</label>
                                <input onChange={onFileResize} name="files" accept="image/jpeg,image/png" className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" type="file" id="formFileMultiple" multiple />
                            </div>
                        </div>
                        <div className="pr-2 float-right my-4 ">
                            <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
                                Guardar
                            </button>
                        </div>

                    </form>
                </div>
            </div>
            </>
            )}
        </BasicLayout>

    )
}

export default ReceptionPage;
