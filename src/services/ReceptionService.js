const baseUrl = process.env.REACT_APP_API_URL;
const header = process.env.REACT_APP_HEADER;

const getURLParams = async() => {
    const user = await JSON.parse(localStorage.getItem('user'))
    const accountId = user ? user.account_id : 3
    const params = new URLSearchParams({
        account_id: accountId
    })
    return params
}

export const getReceptions = async (limit = 25, offset = 0) => {
    try {
        const params = await getURLParams()
        let url = `${baseUrl}/receptions?${params}`
        const response = await fetch(url);
        const data = await response.json();
        return data;
    } catch (err) {
        console.log(err);
    }

}

export const searchReception = async (client_name_or_invoice_number) => {
    try {
        const params = await getURLParams()
        let url = `${baseUrl}/receptions/${client_name_or_invoice_number}?${params}`
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
	    const config = {
            headers: { 'content-type': 'multipart/form-data' }
        }
        const user = await JSON.parse(localStorage.getItem('user'))
        const accountId = user ? user.account_id : 3
        formData.append('account_id', accountId)
        const response = await fetch(url, {
            method: 'POST',
	        config,
            body: formData
        });
        const data = await response.json();
        console.log(data);
        return data;
    } catch (err) {
        console.log(err);
    }

}

export const deleteReception = async(id) => {
    try {
        let url = `${baseUrl}/receptions/${id}`
        const user = await JSON.parse(localStorage.getItem('user'))
        const response = await fetch(url, {
            method: 'DELETE',
        });
        const data = await response.json();
        console.log(data);
        return data;
    } catch (err) {
        console.log(err);
    }
}
