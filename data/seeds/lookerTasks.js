
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('lookerTasks').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('lookerTasks').insert([
        {lookerId: 1, taskId: 2},
        {lookerId: 2, taskId: 1},
        {lookerId: 3, taskId: 3},
      ]);
    });
};
