import React, { useEffect, useState } from "react";
import BasicLayout from "../../components/BasicLayout";
import ClientDropdown from "../../components/ClientDropdown";
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
                <ClientDropdown />
                <CarPlateSearch />
            </form>
        </BasicLayout>
            
    )
}

export default ReceptionPage;