const db = require("../database/connection");

module.exports = {
  async listAllTypeTrail(req, res) {
    const typeTrail = await db.select().from("type_trail");

    return res.json(typeTrail);
  },
};
