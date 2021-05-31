import React, { useState, useEffect } from 'react'
import { useParams } from 'react-dom';

const Contex = React.createContext()

function ContextProvider({ children }) {
    const [loading, setLoading] = useState('')
    const [jokes, setJokes] = useState([])
    const [num, setNum] = useState(1)
    const [category, setCategory] = useState([])
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [inputValue, setInputValue] = useState({ firstName: '', lastName: '' })

    // console.log(inputValue);

    // Fetching data

    let URL = `http://api.icndb.com/jokes/random?`

    let URL_API = `http://api.icndb.com/jokes/random/`
    let URL_API_FIRSTNAME = `firstName=${firstName}`
    let URL_API_LASTNAME = `&lastName=${lastName}`
    // const firstname = `${firstName}`
    // const lastname = `${lastName}`
    let URL_API_CATEGORY = `http://api.icndb.com/categories`
    const catego = `${category}`
    const numbers = `${num}`



    let URL_API1 = URL_API + numbers + URL_API_CATEGORY + URL_API_FIRSTNAME + URL_API_LASTNAME
    let URL_CATEGORY = URL_API_CATEGORY + catego

    const loadData = () => {
        if (loading == '') {
            return loading
        }

        else {

        }
    }

    const randomeJoke = async () => {
        try {
            const response = await fetch(URL_API1);
            const data = await response.json();
            setJokes([data]);
        } catch (e) {
            console.error(e);
        }
    };

    const categoryList = async () => {
        try {
            const response = await fetch(URL_CATEGORY);
            const dataCategory = await response.json();
            setCategory([dataCategory]);
        } catch (e) {
            console.error(e);
        }
    };



    useEffect(() => {
        randomeJoke();
        categoryList();
        setLoading()
    }, []);


    return (
        <Contex.Provider value={{
            loading,
            setLoading,
            num,
            jokes,
            category,
            randomeJoke,
            firstName,
            inputValue,
            lastName,
            setFirstName,
            setInputValue,
            setLastName,
        }}>
            {children}
        </Contex.Provider>
    )
}

export { ContextProvider, Contex }