
exports.up = function(knex, Promise) {
  return knex.schema.createTable('doers', function(tbl) {
    tbl.increments().primary();
    tbl.string('name', 250).notNullable();
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('doers');
};
