process.env.NODE_ENV = "test";
const db = require('../data/dbConfig.js');
const Games = require('./gamesModel.js');


describe('games model', () => {
    beforeEach(async () => {
        await db('games').truncate();
    });

    afterEach(async () => {
      await db('games').truncate();
    });

  describe('insert()', () => {
    it('should insert the provided games', async () => {
      await Games.insert({ title: 'Super Mario World 3', genre: 'Adventure', releaseYear: 1988 });
      await Games.insert({ title: 'NBA JAM', genre: 'Sports', releaseYear: 1993 });
      await Games.insert({ title: 'Gears of War', genre: 'Action', releaseYear: 2006 });

      const games = await db('games');
      expect(games).toHaveLength(3);
    });

    it('should insert the provide games', async () => {
      await Games.insert({ title: 'Super Mario World 3', genre: 'Adventure', releaseYear: 1988 });

      const games = await db('games');
      expect(games).toHaveLength(1);
    });
  });
});