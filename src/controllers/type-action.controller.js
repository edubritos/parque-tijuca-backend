const db = require("../database/connection");

module.exports = {
  async listAllTypeAction(req, res) {
    const typeAction = await db.select().from("type_action");

    return res.json(typeAction);
  },
};
