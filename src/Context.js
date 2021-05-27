import React, { useState, useEffect } from 'react'

const Contex = React.createContext()

function ContextProvider({ children }) {
    const [jokes, setJokes] = useState([])
    const [num, setNum] = useState(1)
    const [category, setCategory] = useState([])


    // Fetching data


    let URL_API = `http://api.icndb.com/jokes/random/`
    let URL_API_CATEGORY = `http://api.icndb.com/categories`
    const catego = `${category}`
    const numbers = `${num}`


    let URL_API1 = URL_API + numbers + URL_API_CATEGORY

    const randomeJoke = async () => {
        try {
            const response = await fetch(URL_API1);
            const data = await response.json();
            setJokes([data]);
        } catch (e) {
            console.error(e);
        }
    };

    useEffect(() => {
        randomeJoke();
    }, []);


    return (
        <Contex.Provider value={{ num, jokes, setJokes, setNum, randomeJoke }}>
            {children}
        </Contex.Provider>
    )
}

export { ContextProvider, Contex }