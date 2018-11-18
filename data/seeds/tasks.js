
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('availableTasks').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('availableTasks').insert([
        {name: 'Dry Cleaning Pickup'},
        {name: 'Fence Repair'},
        {name: 'Router Troubleshooting'}
      ]);
    });
};
