import { createContext, useState, useEffect } from "react";

const UserContext = createContext();

const initialState = {
    user: '',
    password: '',
    admin: false,
    login: false
};

const UserContextProvider = ({children}) => {

    const [form, setForm] = useState(initialState);

    useEffect(() => {

        const login = JSON.parse(localStorage.getItem('userD')) || initialState;

        setForm(login)

    }, [])


    useEffect(() => {

        localStorage.setItem('userD', JSON.stringify(form))

    }, [form])


    const data = {
        form,
        setForm
    }

    return(
        <UserContext.Provider value={data}>
            {children}
        </UserContext.Provider>
    )
}


export {
    UserContext as default,
    UserContextProvider
}