const baseUrl = process.env.REACT_APP_API_URL;
const header = process.env.REACT_APP_HEADER;

export const getReceptions = async (limit = 25, offset = 0) => {
    try {
        let url = `${baseUrl}/receptions`
        const response = await fetch(url);
        const data = await response.json();
        return data;
    } catch (err) {
        console.log(err);
    }

}

export const searchReception = async (client_name_or_invoice_number) => {
    try {
        let url = `${baseUrl}/receptions/${client_name_or_invoice_number}`
        const response = await fetch(url);
        const data = await response.json();
        return data;
    } catch (err) {
        console.log(err);
    }

}


export const postReception = async (formData) => {
    try {
        let url = `${baseUrl}/receptions`
        const response = await fetch(url, {
            method: 'POST',
            body: formData
        });
        const data = await response.json();
        console.log(data);
        return data;
    } catch (err) {
        console.log(err);
    }

}