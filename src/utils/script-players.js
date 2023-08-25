const fs = require('fs');
const jsdom = require('jsdom');
const { JSDOM } = jsdom;

const playersTxt = fs.readFileSync('./src/assets/data/players.txt', 'utf8');
const dom = new JSDOM(playersTxt);
const document = dom.window.document;

const editableDiv = document.querySelectorAll('.editable');

let class_ = 1;
for (const div of editableDiv) {
    let content = div.textContent;
    if (String(content).includes('--')) class_++;
    else {
        const player = `{
            name: "${content}",
            class: "${class_}",
            image: require('../images/player-default.png')
        },
        `
        fs.appendFileSync('./src/assets/data/players_.txt', player,'utf-8')
    }
}