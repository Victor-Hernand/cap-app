const baseUrl = process.env.REACT_APP_API_URL;
const header = process.env.REACT_APP_HEADER;

export const getModels = async () => {
    try {
        let url = `${baseUrl}/car-models`
        const response = await fetch(url);
        const data = await response.json();
        return data;
    } catch (err) {
        console.log(err);
    }

}