const httpAPI = process.env.REACT_APP_HTTP_API;

const get = async (endpoint) => {
    try {
        const response = await fetch(`${httpAPI}/${endpoint}`,{
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': JSON.parse(localStorage.getItem("user")).token
            }
        });
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