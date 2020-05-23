
exports.up = (knex) => {
    return knex.schema.createTable('team', (tbl) => {
        tbl.integer('id_team', 10).primary().notNullable()
        tbl.string('name_team', 128).notNullable()
        tbl.string('leader_team', 128).notNullable()
        tbl.string('place_team', 256).notNullable()
    })
};

exports.down = (knex) => {
    return knex.schema.dropTableIfExists('users')
};
