const db = require("../database/connection");

module.exports = {
  async logon(req, res) {
    const { login, password } = req.body;

    const user = await db
      .select(["users.*", "team.name_team AS team"])
      .from("users")
      .join("team", "team.id_team", "=", "users.id_team")
      .where("regis_user", login);

    if (!user) {
      return res.status(401).json({ message: "Usuário ou senha incorreto" });
    }

    if (user[0].password_user !== password) {
      return res.status(401).json({ message: "Usuário ou senha incorreto" });
    }

    const userResult = {
      id_user: user[0].id_user,
      regis_user: user[0].regis_user,
      nome_user: user[0].nome_user,
      email_user: user[0].email_user,
      cargo_user: user[0].cargo_user,
      urlfoto_user: user[0].urlfoto_user,
      id_team: user[0].id_team,
      team: user[0].team,
    };

    return res.status(200).json(userResult);
  },
};
