const express = require("express");

const games = require("../games/gamesModel.js");

const server = express();

server.use(express.json());

server.get("/", async (req, res) => {
  res.status(200).json({ api: "It is working!!!" });
});

server.get("/games", async (req, res) => {
  const rows = await games.getAll();

  res.status(200).json(rows);
});

server.post("/games", async (req, res) => {
  try {
    const row = await games.insert(req.body);

    res.status(201).json(row);
  } catch (error) {
    res.status(500).json({ error });
  }
});

module.exports = server;
