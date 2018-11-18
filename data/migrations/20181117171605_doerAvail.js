
exports.up = function(knex, Promise) {
  return knex.schema.createTable('doerAvail', function(tbl) {
    tbl.increments().primary();
    tbl.integer('doerId').references('doers.id').notNullable();
    tbl.integer('taskId').references('availableTasks.id').notNullable();
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('doerAvail')
};
