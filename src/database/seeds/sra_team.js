
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('team').del()
    .then(function () {
      // Inserts seed entries
      return knex('team').insert([
        {
          name_team: 'Equipe A', 
          leader_team: 'Douglas', 
          place_team: 'Floresta'
        },
        {
          name_team: 'Equipe B', 
          leader_team: 'Azevedo', 
          place_team: 'Floresta'
        },
        {
          name_team: 'Equipe C', 
          leader_team: 'Márcio', 
          place_team: 'Carioca'
        }
      ]);
    });
};
