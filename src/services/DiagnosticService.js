const baseUrl = process.env.REACT_APP_API_URL;

const getURLParams = async() => {
    const user = await JSON.parse(localStorage.getItem('user'))
    const accountId = user ? user.account_id : 3
    const params = new URLSearchParams({
        account_id: accountId
    })
    return params
}

export const getDiacnostic = async () => {
    try {
        const params = await getURLParams()
        let url = `${baseUrl}/exams?${params}`
        const response = await fetch(url);
        const data = await response.json();
        return data;
    } catch (err) {
        console.log(err);
    }

}

export const searchDiagnostic = async (plate) => {
    try {
        const params = await getURLParams()
        let url = `${baseUrl}/exams/${plate}?${params}`
        const response = await fetch(url);
        const data = await response.json();
        return data;
    } catch (err) {
        console.log(err);
    }
}

export const postDiagnostic = async (formData) => {
    try {
        let url = `${baseUrl}/exams`
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

export const deleteDiagnostic = async(id) => {
    try {
        let url = `${baseUrl}/exams/${id}`
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