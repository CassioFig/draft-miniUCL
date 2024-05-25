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
        name: 'Flamengo',
        image: require('../images/times-a/flamengo-15.png'),
        players: [],
        width: 110,
        height: 110,
    },
    {
        name: 'Vasco',
        image: require('../images/times-a/vasco.png'),
        players: [],
        width: 100,
        height: 110
    },
    {
        name: 'New Castle',
        image: require('../images/times-a/newcastle-united-logo.png'),
        players: [],
        width: 110,
        height: 110
    },
    {
        name: 'United',
        image: require('../images/times-a/kisspng-manchester-united-f-c-logo-encapsulated-postscrip-united-vector-5adcea22434ec9.2689607715244272982757.png'),
        players: [],
        width: 100,
        height: 90
    },
    {
        name: 'Tottenham',
        image: require('../images/times-a/tottenham-logo-escudo-2.png'),
        players: [],
        width: 50,
        height: 100
    },
    {
        name: 'Liverpool',
        image: require('../images/times-a/liverpool-fc-logo-escudo-2.png'),
        players: [],
        width: 90,
        height: 100
    },
    {
        name: 'Chelsea',
        image: require('../images/times-a/chelsea-fc-logo-2.png'),
        players: [],
        width: 100,
        height: 100
    },
    {
        name: 'Leicester',
        image: require('../images/times-a/leicester-city-logo-3.png'),
        players: [],
        width: 100,
        height: 100
    },
    {
        name: 'Aston Villa ',
        image: require('../images/times-a/aston-villa-logo-2.png'),
        players: [],
        width: 90,
        height: 100
    },
    {
        name: 'Fulham',
        image: require('../images/times-a/fulham-fc-logo-2.png'),
        players: [],
        width: 100,
        height: 100
    },
    {
        name: 'West ham',
        image: require('../images/times-a/west-ham-united-logo-3.png'),
        players: [],
        width: 90,
        height: 100
    },
    {
        name: 'Wolves',
        image: require('../images/times-a/wolverhampton-logo-escudo-1.png'),
        players: [],
        width: 90,
        height: 100
    },
]