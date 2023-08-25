import { IPlayer } from './players'

export type ITeams = {
    name    : string,
    image   : string,
    players : IPlayer[],
    width?  : number,
    height? : number,
}

export const teams: ITeams[] = [
    {
        name: 'Borussia',
        image: require('../images/times-b/borussia-dortmund-2048.png'),
        players: [],
        width: 110,
        height: 110,
    },
    {
        name: 'United',
        image: require('../images/times-b/manchester-united-football-club-2048.png'),
        players: [],
        width: 110,
        height: 110
    },
    {
        name: 'Porto',
        image: require('../images/times-b/logo-porto-2048.png'),
        players: [],
        width: 110,
        height: 110
    },
    {
        name: 'Arsenal',
        image: require('../images/times-b/arsenal-football-club-2048.png'),
        players: [],
        width: 100,
        height: 100
    },
    {
        name: 'Lyon',
        image: require('../images/times-b/olympique-lyonnais-2048.png'),
        players: [],
        width: 100,
        height: 100
    },
    {
        name: 'Olympique',
        image: require('../images/times-b/olympique-de-marseille-2048.png'),
        players: [],
        width: 100,
        height: 100
    },
    {
        name: 'Roma',
        image: require('../images/times-b/associazione-sportiva-roma-2048.png'),
        players: [],
        width: 100,
        height: 100
    },
    {
        name: 'Juventus',
        image: require('../images/times-b/juventus-logo-5.png'),
        players: [],
        width: 100,
        height: 100
    },
    {
        name: 'Newcastle',
        image: require('../images/times-b/newcastle-united-football-club-2048.png'),
        players: [],
        width: 100,
        height: 100
    },
    {
        name: 'Monaco',
        image: require('../images/times-b/as-monaco-2048.png'),
        players: [],
        width: 100,
        height: 100
    },
    {
        name: 'Sevilla',
        image: require('../images/times-b/logo-sevilla-2048.png'),
        players: [],
        width: 100,
        height: 100
    },
    {
        name: 'Atalanta',
        image: require('../images/times-b/atalanta-bergamasca-calcio-2048.png'),
        players: [],
        width: 100,
        height: 100
    },
 
]