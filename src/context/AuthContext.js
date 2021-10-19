import { createContext, useEffect, useState } from "react";

const AuthContext = createContext();

const AuthProvider = (props) => {
    const [user, setUser] = useState({});

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem("user"));
        setUser(user);
    }, []);

    const login = (user) => {
        setUser(user);
        localStorage.setItem("user", JSON.stringify(user));
    };

    const logout = () => {
        console.log("logout user", user)
        setUser({});
        localStorage.removeItem("user");
    };

    const isLoggedIn = () => {
        return user ? !!Object.keys(user).length : false;
    };

    const token = () => {
        return user?.token
    };

    return (<AuthContext.Provider value={{ login, logout, isLoggedIn, user, token }}>
        {props.children}
    </AuthContext.Provider>);
};

export { AuthContext, AuthProvider };