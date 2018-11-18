
exports.up = function(knex, Promise) {
  return knex.schema.createTable('assignedTask', function(tbl) {
    tbl.increments().primary();
    tbl.integer('taskId').references('availableTasks.id').notNullable();
    tbl.integer('forId').references('lookers.id').notNullable();
    tbl.integer('byId').references('doers.id').notNullable();
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('assignedTask');
};
