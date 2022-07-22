import {React, createContext, useState, useMemo } from "react";

export const ReceptionContext = createContext();

export const ReceptionProvider = (props) => {
    const [clients, setClients] = useState([])
    const [types, setTypes] = useState([])
    const [mechanics, setMechanics] = useState([])
    const [brands, setBrands] = useState([])
    const [models, setModels] = useState([])

     const providerValue = useMemo(() => ({
        clients, setClients,
        mechanics, setMechanics,
        brands, setBrands,
        models, setModels,
        types, setTypes,
     }), [clients, mechanics, brands, models, types]);
    return (
        <ReceptionContext.Provider value={providerValue}>
            {props.children}
        </ReceptionContext.Provider>
    )

}
