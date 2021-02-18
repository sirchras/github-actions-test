exports.up = (knex) => {
  return knex.schema.createTable('tests', table => {
    table.increments('id').primary()
    table.string('name')
  })
}

exports.down = (knex) => {
  return knex.schema.dropTable('tests')
}
