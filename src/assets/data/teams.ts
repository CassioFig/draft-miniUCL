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
        name: 'Forest',
        image: require('../images/times-b/kisspng-nottingham-forest-f-c-nottingham-forest-tickets-r-5bfe2b0450efc3.6931177315433838123315.png'),
        players: [],
        width: 110,
        height: 110,
    },
    {
        name: 'Everton',
        image: require('../images/times-b/everton-logo-escudo-3.png'),
        players: [],
        width: 100,
        height: 110
    },
    {
        name: 'Leeds',
        image: require('../images/times-b/leeds-united-fc-logo-3.png'),
        players: [],
        width: 110,
        height: 110
    },
    {
        name: 'Crystal Palace',
        image: require('../images/times-b/crystal-palace-logo-3.png'),
        players: [],
        width: 100,
        height: 90
    },
    {
        name: 'Bournemouth',
        image: require('../images/times-b/bournemouth-fc-logo-2.png'),
        players: [],
        width: 100,
        height: 90
    },
    {
        name: 'Brighton',
        image: require('../images/times-b/brighton-hove-albion-logo-2.png'),
        players: [],
        width: 100,
        height: 90
    },
 
]