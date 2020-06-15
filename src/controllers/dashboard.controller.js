const db = require("../database/connection");

module.exports = {
  async getCountPerTypeAction(req, res) {
    const count = await db
      .select(["type_action.description"])
      .count("*")
      .from("action")
      .join(
        "type_action",
        "type_action.id_type_action",
        "=",
        "action.id_type_action"
      )
      .groupBy(["action.id_type_action", "type_action.description"])
      .orderBy("action.id_type_action");

    return res.json(count);
  },
};
