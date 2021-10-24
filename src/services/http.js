const httpAPI = process.env.NODE_ENV === "production" ? process.env.REACT_APP_HTTP_API_PRO : process.env.REACT_APP_HTTP_API_DEV;


const get = async (endpoint) => {
    try {
        const response = await fetch(`${httpAPI}/${endpoint}`, {
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': JSON.parse(localStorage.getItem("user"))?.token
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
                'Content-Type': 'application/json',
                'x-access-token': JSON.parse(localStorage.getItem("user"))?.token
            }
        });
        return response.json();
    } catch (err) {
        return console.log(err);
    }
};
const put = async (endpoint, data) => {
    try {
        const response = await fetch(`${httpAPI}/${endpoint}`, {
            method: "PUT",
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': JSON.parse(localStorage.getItem("user"))?.token
            }
        });
        return response.json();
    } catch (err) {
        return console.log(err);
    }
};

const deleteR = async (endpoint, data) => {
    try {
        const response = await fetch(`${httpAPI}/${endpoint}`, {
            method: "DELETE",
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': JSON.parse(localStorage.getItem("user"))?.token
            }
        });
        return response.json();
    } catch (err) {
        return console.log(err);
    }
};

export { get, post, put, deleteR };
