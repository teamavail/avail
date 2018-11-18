
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('assignedTask').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('assignedTask').insert([
        {taskId: 2, forId: 1, byId: 1},
      ]);
    });
};
