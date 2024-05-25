const fs = require('fs');
const jsdom = require('jsdom');
const { JSDOM } = jsdom;
const firebase = require('firebase/app');
const firebaseStorage = require("firebase/storage");

const firebaseConfig = {
    apiKey: "AIzaSyBvlvXWniNbWMatTfJ0HfOigJFFqeSNank",
    authDomain: "la-league-7b25c.firebaseapp.com",
    projectId: "la-league-7b25c",
    storageBucket: "la-league-7b25c.appspot.com",
    messagingSenderId: "1064102697591",
    appId: "1:1064102697591:web:ba8d703433693e11ad4472",
    measurementId: "G-DP1QQGV3D4"
};

firebase.initializeApp(firebaseConfig);

const storage = firebaseStorage.getStorage();

const playersTxt = fs.readFileSync('./src/utils/data/listaB.txt', 'utf8');
const dom = new JSDOM(playersTxt);
const document = dom.window.document;

const editableDiv = document.querySelectorAll('.editable');

const originalPhoto = fs.createReadStream('./src/assets/images/player-default.png');

let class_ = -1;
for (const div of editableDiv) {
    let content = div.textContent;
    if (String(content).includes('--')) class_++;
    else {
        const poteRef = firebaseStorage.ref(storage, `serie-b/pote-${class_ === 0 ? 'goleiros' : class_}/sf-${content}.png`);
        const image = fs.readFileSync(`./src/assets/images/player-default.png`);
        firebaseStorage.uploadBytes(poteRef, image).then((snapshot) => {
            console.log('Uploaded a blob or file!');
        });
               
        /*const player = `{
            name: "${content}",
            class: "${class_}",
            image: require('../images/player-default.png')
        },
        `
        fs.appendFileSync('./src/utils/playersB_.txt', player,'utf-8')*/
    }
}