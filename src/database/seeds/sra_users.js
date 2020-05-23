
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {
          regis_users: '520', 
          name_users: 'Joao', 
          email_users: 'joao@gmail.com', 
          password_users: 'jjj123',
          cargo_users: 'monitor',
          urlimg_users: 'http://foto.com/jj',
          
        },
        {
          regis_users: '530', 
          name_users: 'Pedro', 
          email_users: 'pp@gmail.com', 
          password_users: 'jjj123',
          cargo_users: 'monitor',
          urlimg_users: 'http://foto.com/jj',
          
        },

      ]);
    });
};
