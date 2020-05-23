
exports.up = (knex) => {
    return knex.schema.createTable('users', (tbl) => {
        tbl.integer('regis_users', 10).primary().notNullable()
        tbl.string('name_users', 128).notNullable()
        tbl.string('email_users', 128).notNullable()
        tbl.string('password_users', 256).notNullable()
        tbl.string('cargo_users', 128).notNullable()
        tbl.string('urlimg_users', 256).notNullable()
        
    })
};

exports.down = (knex) => {
    return knex.schema.dropTableIfExists('team')
};
