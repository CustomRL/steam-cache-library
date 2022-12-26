const { readFileSync } = require('fs');
const fetch = require('node-fetch');

const { FILE_PATH } = require('./config.json');

const cachedGames = [];

function parseData() {

    const data = readFileSync(FILE_PATH, 'utf-8');

    const lines = data.split(/\n/);

    const hitLines = lines.filter(line => line.includes(`"HIT"`));

    hitLines.filter(m => {
        let matches = m.match(/(?<=\/depot\/\s*).*?(?=\s*\/chunk\/)/g);
        if (matches) {
            let id = matches[0];
            if (!cachedGames.includes(id)) {
                cachedGames.push(id);
            }

        }
    });
    return cachedGames;

}

parseData();

(async () => {




    for (const game of cachedGames) {
        // let result = await (await fetch(`https://steamdb.info/depot/${game}/`)).text();
        console.log(game);
        // console.log(res.applist.apps.find(id => id.appid === game));

        // console.log(result);
    }



})()