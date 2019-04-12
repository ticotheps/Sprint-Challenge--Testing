exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries and resets ids
  return knex('games')
    .truncate()
    .then(function() {
      return knex('games').insert([
        { 
          title: 'The Legend of Zelda',
          genre: 'Adventure',
          releaseYear: 1986
        },
        { 
          title: 'Donkey Kong Country',
          genre: 'Adventure',
          releaseYear: 1994
        },
        { 
          title: 'Street Fighter II',
          genre: 'Action',
          releaseYear: 1991
        },
      ]);
    });
};
