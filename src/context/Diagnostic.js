import {React, createContext, useState, useMemo } from "react";

export const DiagnosticContext = createContext();

export const DiagnosticProvider = (props) => {
    const [diagnostic, setDiagnostic] = useState([]);
    const [invoice, setInvoice] = useState([]);
    const [invoiceSelected, setInvoiceSelected] = useState([]);
     const providerValue = useMemo(() => ({
        diagnostic, setDiagnostic,
        invoice, setInvoice,
        invoiceSelected, setInvoiceSelected
     }), [diagnostic, invoice, invoiceSelected]);
    return (
        <DiagnosticContext.Provider value={providerValue}>
            {props.children}
        </DiagnosticContext.Provider>
    )

}
