
exports.up = function(knex, Promise) {
  return knex.schema.createTable('availableTasks', function(tbl) {
    tbl.increments().primary();
    tbl
    .string('name', 140)
    .notNullable()
    .unique('name');
  })
};

exports.down = function(knex, Promise) {
return knex.schema.dropTableIfExists('availableTasks');
};
