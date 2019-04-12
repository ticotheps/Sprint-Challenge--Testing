const express = require('express');

const games = require('../games/gamesModel.js');

const server = express();

server.use(express.json());

server.get('/api', async (req, res) => {
    res.status(200).json({ api: "It's working!!!" });
});

server.get('/api/games', async (req, res) => {
    const rows = await games.getAll();

    res.status(200).json(rows);
});

server.post('/api/games', async (req, res) => {
    try {
      const [id] = await db('games').insert(req.body);
  
      const role = await db('games')
        .where({ id })
        .first();
  
      res.status(201).json(role);
    } catch (error) {
      const message = errors[error.errno] || 'We ran into an error trying to add a game to the database';
      res.status(500).json({ message, error });
    }
});

module.exports = server;
