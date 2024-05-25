import React, { createContext, useEffect, useState } from 'react';
import { Champ } from '../enum';

export const ChampContext = createContext({
    champ: Champ.A,
    setChamp: (champ: Champ) => {},
    handleChangeChamp: (champ: Champ) => {}
});

export const ChampProvider = ({ children }) => {
    const [champ, setChamp] = useState(Champ.A)

    useEffect(() => {
        const champ = localStorage.getItem('champ') as Champ
        if (champ) {
            setChamp(champ)
        }
    }, [])

    const handleChangeChamp = (champ: Champ) => {
        localStorage.setItem('champ', champ)
        window.location.reload()
    }

    return (
        <ChampContext.Provider value={{ champ: champ, setChamp, handleChangeChamp }}>
            { children }
        </ChampContext.Provider>
    )
}