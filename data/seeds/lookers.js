
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('lookers').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('lookers').insert([
        {name: 'Fox Mulder'},
        {name: 'Monica Geller'},
        {name: 'Buffy Summers'}
      ]);
    });
};
