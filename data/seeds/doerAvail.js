
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('doerAvail').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('doerAvail').insert([
        {doerId: 1, taskId: 1},
        {doerId: 1, taskId: 2},
        {doerId: 2, taskId: 3},
        {doerId: 2, taskId: 1},
        {doerId: 3, taskId: 2},
      ]);
    });
};
