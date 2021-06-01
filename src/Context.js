import React, { useState, useEffect } from 'react'
import { useParams } from 'react-dom';

const Contex = React.createContext()

const getUrl = (firstName, lastName, category, numberOfJokes) => {

    const URL_PREFIX = `http://api.icndb.com/jokes/random`
    // To do
    // 1- input field empty / Get random jokes

    if (firstName === '' && lastName === '' && category.length < 1 && numberOfJokes === 1) {

        return URL_PREFIX + '/1'
    }

    // 2- Category selected 

    else if (category.length) {
        debugger
        return URL_PREFIX + '/1' + `?exclude=${category}`
    }
    // 3- Impersonate joke/ input field 
    // 4- Number selected
    // http://api.icndb.com/jokes/random?exclude=[nerdy] 
    let URL_API = `http://api.icndb.com/jokes/random/`
    let URL_API_FIRSTNAME = `firstName=${firstName}`
    let URL_API_LASTNAME = `&lastName=${lastName}`

    let URL_API_CATEGORY = `http://api.icndb.com/categories`
    // const catego = `${category}`
    // const numberOfJokes = `${num}`
}

function ContextProvider({ children }) {
    const [isloading, setIsloading] = useState(true)
    const [jokes, setJokes] = useState([])
    const [numberOfJokes, setNumberOfJokes] = useState(1)
    const [categories, setCategories] = useState([])
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [inputValue, setInputValue] = useState({ firstName: '', lastName: '' })



    // Fetching data
    // let URL = `http://api.icndb.com/jokes/random?`

    let URL_API = `http://api.icndb.com/jokes/random/`
    let URL_API_FIRSTNAME = `firstName=${firstName}`
    let URL_API_LASTNAME = `&lastName=${lastName}`

    let URL_API_CATEGORY = `http://api.icndb.com/categories`
    const catego = `${categories}`




    let URL_API1 = URL_API + numberOfJokes + URL_API_CATEGORY + URL_API_FIRSTNAME + URL_API_LASTNAME
    let URL_CATEGORY = URL_API_CATEGORY + catego

    const randomeJoke = async () => {
        try {
            const URL = getUrl(firstName, lastName, categories, numberOfJokes)
            console.log("oo", URL);
            const response = await fetch(URL);
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
            debugger
            setCategories(dataCategory.value);
        } catch (e) {
            console.error(e);
        }
    };


    useEffect(() => {
        randomeJoke();
        categoryList();
        setTimeout(() => setIsloading(false), 1000)
    }, []);


    return (
        <Contex.Provider value={{
            isloading,
            setIsloading,
            numberOfJokes,
            jokes,
            categories,
            randomeJoke,
            firstName,
            inputValue,
            lastName,
            setFirstName,
            setInputValue,
            setLastName,
            setCategories

        }}>
            {children}
        </Contex.Provider>
    )
}

export { ContextProvider, Contex }