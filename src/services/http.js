const httpAPI = process.env.REACT_APP_HTTP_API;

const get = async (endpoint) => {
    try {
        const response = await fetch(`${httpAPI}/${endpoint}`);
        return response.json();
    } catch (err) {
        return console.log(err);
    }
};

const post = async (endpoint, data) => {
    try {
        const response = await fetch(`${httpAPI}/${endpoint}`, {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        return response.json();
    } catch (err) {
        return console.log(err);
    }
};

export { get, post };