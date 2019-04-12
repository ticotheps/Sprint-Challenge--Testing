const express = require('express');

const games = ["Assassin's Creed III", "Gears of War II", "Super Mario World 3", "NBA JAM"];

const server = express();

server.use(express.json());

server.get('/', async (req, res) => {
  res.status(200).json({ api: "It's working!!!" });
});

server.get('/games', async (req, res) => {
  const rows = await games.getAll();

  res.status(200).json(rows);
});

module.exports = server;
