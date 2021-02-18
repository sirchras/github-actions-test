exports.seed = (knex) => {
  return knex('tests').del()
    .then(() => {
      return knex('tests').insert([
        { id: 1, name: 'test1' },
        { id: 2, name: 'test2' },
        { id: 3, name: 'test3' }
      ])
    })
}
