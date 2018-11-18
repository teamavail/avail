
exports.up = function(knex, Promise) {
  return knex.schema.createTable('lookerTasks', function(tbl) {
    tbl.increments().primary();
    tbl.integer('lookerId').references('lookers.id');
    tbl.integer('taskId').references('availableTasks.id');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('lookerTasks')
};
