import React, { useState, useEffect } from 'react'

const Context = React.createContext()

const getUrl = (firstName, lastName, category, numberOfJokes) => {
    const URL_PREFIX = `http://api.icndb.com/jokes/random`
    // To do
    // 1- input field empty / Get random jokes

    if (firstName === '' && lastName === '' && category.length < 1 && numberOfJokes === 1) {
        return URL_PREFIX + '/1'
    }



    // 2- Impersonate joke/ input field 
    else if (firstName && lastName) {
        return URL_PREFIX + '/1' + `?firstName=${firstName}` + `&lastName=${lastName}`
    }


    // 3- Category selected 
    else if (category) {
        return URL_PREFIX + '/1' + `?exclude=[${category}]`
    }

    // 4- Number selected

    else if (numberOfJokes) {
        return URL_PREFIX + '/1' + `${numberOfJokes}`
    }

    // const numberOfJokes = `${num}`
}

function ContextProvider({ children }) {
    const [isloading, setIsloading] = useState(true)
    const [jokes, setJokes] = useState([])
    const [numberOfJokes, setNumberOfJokes] = useState(1)
    const [categories, setCategories] = useState([])
    const [selectedCategory, setSelectedCategory] = useState([])
    const [inputValue, setInputValue] = useState({ firstName: '', lastName: '' })


    // Fetching data
    let URL_API_CATEGORY = `http://api.icndb.com/categories`
    const catego = `${categories}`

    let URL_NUMBER_JOKE = `http://api.icndb.com/jokes/`
    const jokeNumber = `${numberOfJokes}`

    let URL_CATEGORY = URL_API_CATEGORY + catego

    const getRandomJoke = async () => {
        try {
            const URL = getUrl(inputValue.firstName, inputValue.lastName, selectedCategory, numberOfJokes)
            const response = await fetch(URL);
            const data = await response.json();
            setJokes([data]);
        } catch (e) {
            console.error(e);
        }
    };

    const getCategoryList = async () => {
        try {
            const response = await fetch(URL_CATEGORY);
            const dataCategory = await response.json();
            setCategories(dataCategory.value);
        } catch (e) {
            console.error(e);
        }
    };


    let URL_NUMBER_OF_JOKES = URL_NUMBER_JOKE + jokeNumber

    const getNumberOfJokes = async () => {
        try {
            const response = await fetch(URL_NUMBER_OF_JOKES);
            const jokesNumber = await response.json();
            setNumberOfJokes(jokesNumber.value);
        } catch (e) {
            console.error(e);
        }
    };


    useEffect(() => {
        getRandomJoke();
        getCategoryList();
        getNumberOfJokes();
        setTimeout(() => setIsloading(false), 1000)
    }, []);


    return (
        <Context.Provider value={{
            isloading,
            numberOfJokes,
            jokes,
            categories,
            getRandomJoke,
            inputValue,
            setInputValue,
            setCategories,
            selectedCategory,
            setSelectedCategory,
            setNumberOfJokes
        }}>
            {children}
        </Context.Provider>
    )
}

export { ContextProvider, Context }