import { initializeApp } from 'firebase/app';
import { getStorage, ref, listAll } from "firebase/storage";
import { IPlayer, ITeams } from '../assets/data';
import { Champ } from '../enum';

const firebaseConfig = {
    apiKey: "AIzaSyBvlvXWniNbWMatTfJ0HfOigJFFqeSNank",
    authDomain: "la-league-7b25c.firebaseapp.com",
    projectId: "la-league-7b25c",
    storageBucket: "la-league-7b25c.appspot.com",
    messagingSenderId: "1064102697591",
    appId: "1:1064102697591:web:ba8d703433693e11ad4472",
    measurementId: "G-DP1QQGV3D4"
};

initializeApp(firebaseConfig);

const storage = getStorage();

const getUrlPath = (path: string): string => {
    return `https://firebasestorage.googleapis.com/v0/b/la-league-7b25c.appspot.com/o/${path.replace(/\//g, '%2F')}?alt=media`
}

export const getTeams = async (champ: Champ): Promise<ITeams[]> => {
    const teamsRef = ref(storage, champ === Champ.A ? 'serie-a/times' : 'serie-b/times');
    const data = await listAll(teamsRef);
    const teams: ITeams[] = [];
    data.items.forEach((team) => {
        teams.push({
            name: team.name,
            image: getUrlPath(team.fullPath),
            players: [],
            width: 100,
            height: 100
        })
    })
    return teams;
}

export const getPlayersByClass = async (champ: Champ): Promise<IPlayer[]> => {
    const players: IPlayer[] = [];

    const champName = champ === Champ.A ? 'serie-a' : 'serie-b';
    const playersRefs = Array.from({ length: 10 }, (_, i) => {
        if (i === 0) return ref(storage, `${champName}/pote-goleiros`);
        return ref(storage, `${champName}/pote-${i}`);
    });
    playersRefs.forEach(async (playerRef, index) => {
        const data = await listAll(playerRef);
        data.items.forEach((player) => {
            if (index === 0) {
                players.push({
                    name: player.name.replace(/\.[^/.]+$/, ''),
                    image: getUrlPath(player.fullPath),
                    class: 'G'
                })
            } else {
                players.push({
                    name: player.name.replace(/\.[^/.]+$/, ''),
                    image: getUrlPath(player.fullPath),
                    class: index.toString()
                })
            }
        })
    })
    return players;
}