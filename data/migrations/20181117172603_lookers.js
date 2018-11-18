
exports.up = function(knex, Promise) {
  return knex.schema.createTable('lookers', function(tbl) {
    tbl.increments().primary();
    tbl.string('name', 140).notNullable();
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('lookers');
};
