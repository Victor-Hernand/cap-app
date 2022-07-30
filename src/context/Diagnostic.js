import {React, createContext, useState, useMemo } from "react";

export const DiagnosticContext = createContext();

export const DiagnosticProvider = (props) => {
    const [diagnostic, setDiagnostic] = useState([])

     const providerValue = useMemo(() => ({
        diagnostic, setDiagnostic
     }), [diagnostic]);
    return (
        <DiagnosticContext.Provider value={providerValue}>
            {props.children}
        </DiagnosticContext.Provider>
    )

}
