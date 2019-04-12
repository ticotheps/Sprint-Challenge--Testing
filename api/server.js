const express = require('express');

const games = require('../games/gamesModel.js');

const server = express();

server.use(express.json());

server.get('/', async (req, res) => {
    res.status(200).json({ api: 'It is working!!!' });
});

server.get('/games', async (req, res) => {
    const rows = await games.getAll();

    const game = await games.('games')
    .where({ id })
    .first();

    res.status(200).json(rows);
});

server.post('/games', async (req, res) => {
    try {
        const [id] = await games.insert(req.body);
    
        const game = await games.where({ id }).first();
    
        res.status(201).json(game);
    } catch (error) {

        const message = errors[error.errno] || 'We ran into an error trying to add a game to the database';
        res.status(500).json({ message, error });
    }
});

module.exports = server;
