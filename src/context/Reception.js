import {React, createContext, useState, useMemo } from "react";

export const ReceptionContext = createContext();

export const ReceptionProvider = (props) => {
    const [clients, setClients] = useState([])
    const [types, setTypes] = useState([])
    const [mechanics, setMechanics] = useState([])
    const [brands, setBrands] = useState([])
    const [models, setModels] = useState([])
    const [receptions, setReceptions] = useState([])

     const providerValue = useMemo(() => ({
        clients, setClients,
        mechanics, setMechanics,
        brands, setBrands,
        models, setModels,
        types, setTypes,
        receptions, setReceptions
     }), [clients, mechanics, brands, models, types, receptions]);
    return (
        <ReceptionContext.Provider value={providerValue}>
            {props.children}
        </ReceptionContext.Provider>
    )

}
