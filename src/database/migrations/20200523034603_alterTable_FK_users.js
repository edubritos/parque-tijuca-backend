
exports.up = (knex) => {
    return knex.schema.alterTable('users', (tbl) => {
        tbl.integer('id_team', 10).references('id_team').inTable('team')
    })
   
};
exports.down = function(knex) {
  
};
