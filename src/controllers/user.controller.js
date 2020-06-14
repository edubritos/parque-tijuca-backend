const db = require("../database/connection");

module.exports = {
  //lista usuarios
  async listAllUser(req, res) {
    const search = req.query.search;

    const users = await db
      .select(["users.*", "team.name_team"])
      .count("action.id_user")
      .as("amount_regis")
      .from("users")
      .join("team", "team.id_team", "=", "users.id_team")
      .leftJoin("action", "action.id_user", "=", "users.id_user")
      .groupBy(["users.id_user", "team.name_team"])
      .where((qb) => {
        if (search) {
          // qb.orWhere("users.regis_user", "=", `${search}`);
          qb.orWhere("users.nome_user", "ilike", `%${search}%`);
          qb.orWhere("users.email_user", "ilike", `%${search}%`);
          qb.orWhere("users.cargo_user", "ilike", `%${search}%`);
          qb.orWhere("team.name_team", "ilike", `%${search}%`);
        }
      });

    return res.json(users);
  },
  async getUser(req, res) {
    const id_user = req.params.id;

    const users = await db
      .select(["users.*", "team.name_team"])
      .count("action.id_user")
      .as("amount_regis")
      .from("users")
      .join("team", "team.id_team", "=", "users.id_team")
      .leftJoin("action", "action.id_user", "=", "users.id_user")
      .groupBy(["users.id_user", "team.name_team"])
      .where("users.id_user", "=", id_user);

    return res.json(users);
  },
  //insere no banco
  async createUser(req, res) {
    try {
      const {
        regis_user,
        nome_user,
        email_user,
        password_user,
        cargo_user,
        urlfoto_user,
        id_team,
      } = req.body;

      const users = await db
        .insert({
          regis_user,
          nome_user,
          email_user,
          password_user,
          cargo_user,
          urlfoto_user,
          id_team,
        })
        .into("users")
        .returning("*");

      return res.json(users);
    } catch (err) {
      console.log("Erro no cadastro do usuário.");
      throw err;
    }
  },
  //delete users
  async deleteUser(req, res) {
    const { regis_users } = req.body;

    await db("users").where("regis_users", regis_users).delete();

    return res.status(204).send();
  },
  //update users
  async updateUser(req, res) {
    try {
      const {
        regis_users,
        name_users,
        email_users,
        password_users,
        cargo_users,
        urlimg_users,
      } = req.body;

      const users = await db
        .update({
          regis_users,
          name_users,
          email_users,
          password_users,
          cargo_users,
          urlimg_users,
        })
        .into("users");
      console.log("Usuário alterado com sucesso!.");

      return res.status(200).send();
    } catch (err) {
      console.log("Erro na alteração do usuário.");
      throw err;
    }
  },
};
