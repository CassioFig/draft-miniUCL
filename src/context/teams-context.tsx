import React, { createContext, useState, useEffect, useContext } from 'react';
import { ITeams } from '../assets/data';
import { getTeams } from '../firebase';
import { Champ } from '../enum';
import { ChampContext } from './champ-context';

export const TeamsContext = createContext({
    teams: [],
    setTeams: (teams: ITeams[]) => {}
});

export const TeamsProvider = ({ children }) => {
    const { champ } = useContext(ChampContext)
    const [teams, setTeams] = useState([])

    useEffect(() => {
        getTeams(champ).then((t) => { setTeams(t) })
    }, [teams.length, champ])

    return (
        <TeamsContext.Provider value={{ teams: teams, setTeams }}>
            { children }
        </TeamsContext.Provider>
    )
}