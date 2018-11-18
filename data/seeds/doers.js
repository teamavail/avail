
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('doers').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('doers').insert([
        {name: 'Jack Ryan'},
        {name: 'Dana Scully'},
        {name: 'James Bond'}
      ]);
    });
};
