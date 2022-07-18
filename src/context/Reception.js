import {React, createContext, useState } from "react";

export const ReceptionContext = createContext();

export const ReceptionProvider = (props) => {
    const [clients, setClients] = useState([])
    const [types, setTypes] = useState([])
    const [mechanics, setMechanics] = useState([])
    const [brands, setBrands] = useState([])
    const [models, setModels] = useState([])
    return (
        <ReceptionContext.Provider value={[clients, setClients, types, setTypes, mechanics, setMechanics, brands, setBrands, models, setModels]}>
            {props.children}
        </ReceptionContext.Provider>
    )

}
