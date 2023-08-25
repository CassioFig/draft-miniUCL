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
        name: 'City',
        image: require('../images/times-a/kisspng-manchester-city-f-c-organization-brand-clip-art-5bf2d15e4c4e55.1024146415426399663126.png'),
        players: [],
        width: 110,
        height: 110,
    },
    {
        name: 'Real',
        image: require('../images/times-a/logo-real-madrid-escudo-2048.png'),
        players: [],
        width: 110,
        height: 110
    },
    {
        name: 'Barça',
        image: require('../images/times-a/logo-barcelona-1536.png'),
        players: [],
        width: 110,
        height: 110
    },
    {
        name: 'PSG',
        image: require('../images/times-a/paris-saint-germain-2048.png'),
        players: [],
        width: 110,
        height: 110
    },
    {
        name: 'Bayern',
        image: require('../images/times-a/bayern-munchen-2048.png'),
        players: [],
        width: 100,
        height: 100
    },
    {
        name: 'Liverpool',
        image: require('../images/times-a/liverpool-fc-logo-escudo-2.png'),
        players: [],
        width: 100,
        height: 110
    },
    {
        name: 'Benfica',
        image: require('../images/times-a/logo-benfica-1.png'),
        players: [],
        width: 100,
        height: 100
    },
    {
        name: 'Napoli',
        image: require('../images/times-a/societa-sportiva-calcio-napoli-2048.png'),
        players: [],
        width: 100,
        height: 100
    },
    {
        name: 'Milan',
        image: require('../images/times-a/associazione-calcio-milan-2048.png'),
        players: [],
        width: 100,
        height: 100
    },
    {
        name: 'Inter',
        image: require('../images/times-a/football-club-internazionale-milano-2048.png'),
        players: [],
        width: 100,
        height: 100
    },
    {
        name: 'Atletico',
        image: require('../images/times-a/logo-atletico-madrid-2048.png'),
        players: [],
        width: 100,
        height: 100
    },
    {
        name: 'Ajax',
        image: require('../images/times-a/logo-ajax-1.png'),
        players: [],
        width: 100,
        height: 100
    },
]