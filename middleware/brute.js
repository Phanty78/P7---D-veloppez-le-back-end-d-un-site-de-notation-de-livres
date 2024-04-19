const ExpressBrute = require('express-brute')

let store = new ExpressBrute.MemoryStore()  // Stocke l'état en mémoire

const bruteforce = new ExpressBrute(store, {
    freeRetries: 3,  // Nombre de tentatives autorisées
    minWait: 5*60*1000,  // 5 minutes de temps d'attente après les tentatives échouées
    maxWait: 60*60*1000,  // 1 heure de temps d'attente maximum
    failCallback: function (req, res, next, nextValidRequestDate) {
        res.status(429).send(`Vous êtes bloqué jusqu'à ${nextValidRequestDate}`);
    }
})

module.exports = bruteforce.prevent;