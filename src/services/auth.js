const baseUrl = process.env.REACT_APP_API_URL;
const header = process.env.REACT_APP_HEADER;

export const postLogin = async (formData) => {
    try {
        let url = `${baseUrl}/login`
        const response = await fetch(url, {
            method: 'POST',
            body: formData
        });
        const data = await response.json();
        return data.response;
    } catch (err) {
        return err;
    }
}

