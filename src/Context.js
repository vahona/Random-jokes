import React from 'react'

const Contex = React.createContext()

function contextProvider({ children }) {
    return (
        <Contex.Provider>
            {children}
        </Contex.Provider>
    )
}

export { contextProvider, Contex }