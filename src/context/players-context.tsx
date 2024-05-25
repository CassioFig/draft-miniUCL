import React, { createContext, useState, useEffect, useContext } from 'react';
import { IPlayer } from '../assets/data';
import { getPlayersByClass } from '../firebase';
import { Champ } from '../enum';
import { ChampContext } from './champ-context';

export const PlayersContext = createContext({
    players: [] as IPlayer[],
    selectedPlayers: [] as string[],
    setPlayers: (teams: IPlayer[]) => {},
    setSelectedPlayers: (players: string[]) => {}
});

export const PlayersProvider = ({ children }) => {
    const { champ } = useContext(ChampContext)
    const [players, setPlayers] = useState<IPlayer[]>([])
    const [selectedPlayers, setSelectedPlayers] = useState<string[]>([])

    useEffect(() => {
        getPlayersByClass(champ).then((t) => { setPlayers(t) })
        setSelectedPlayers([])
    }, [players.length, champ])

    return (
        <PlayersContext.Provider value={{ players: players, selectedPlayers: selectedPlayers, setPlayers, setSelectedPlayers }}>
            { children }
        </PlayersContext.Provider>
    )
}