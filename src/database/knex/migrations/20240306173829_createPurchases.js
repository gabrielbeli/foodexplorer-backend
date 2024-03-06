exports.up = (knex) =>
  knex.schema.createTable('purchases', (table) => {
    table.increments('id').primary();

    table
      .integer('dish_id')
      .references('id')
      .inTable('dishes')
      .onDelete('CASCADE')
      .notNullable();

    table.text('status').defaultTo('pending');
    table.text('details').notNullable();
    
    table.timestamp('created_at').defaultTo(knex.fn.now());
    table.timestamp('updated_at').defaultTo(knex.fn.now());
  });

  exports.down = (knex) => knex.schema.dropTable('purchases');