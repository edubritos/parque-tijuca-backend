const db = require("../database/connection");

module.exports = {
  //lista ações
  async listAllAction(req, res) {
    const search = req.query.search;

    const action = await db
      .select([
        "action.*",
        "type_action.description AS type_action",
        "type_trail.description AS type_trail",
        "users.nome_user",
      ])
      .from("action")
      .join(
        "type_action",
        "type_action.id_type_action",
        "=",
        "action.id_type_action"
      )
      .leftJoin(
        "type_trail",
        "type_trail.id_type_trail",
        "=",
        "action.id_type_trail"
      )
      .leftJoin("users", "users.id_user", "=", "action.id_user")
      .where((qb) => {
        if (search) {
          qb.orWhere("type_trail.description", "ilike", `%${search}%`);
          qb.orWhere("type_action.description", "ilike", `%${search}%`);
          qb.orWhere("users.nome_user", "ilike", `%${search}%`);
          qb.orWhere("action.area_location", "ilike", `%${search}%`);
          qb.orWhere("action.sector_location", "ilike", `%${search}%`);
        }
      });

    return res.json(action);
  },

  //cria uma ação
  async createAction(req, res) {
    const {
      sector_location,
      area_location,
      date_action,
      peoples_action,
      amount_action,
      unit_action,
      description_action,
      id_type_action,
      id_type_trail,
      id_user,
    } = req.body;

    const action = await db
      .insert({
        sector_location,
        area_location,
        date_action,
        peoples_action,
        amount_action,
        unit_action,
        description_action,
        id_type_action,
        id_type_trail,
        id_user,
      })
      .into("action")
      .returning("*");

    return res.status(201).json(action);
  },

  async findAction(req, res) {
    const { id } = req.params;

    const result = await db.select().from("action").where("id_action", id);

    if (result != 0) {
      return res.status(200).json(result);
    } else {
      return res.status(404).json({ message: "Ação não encontrada" });
    }
  },

  //delete action
  async deleteAction(req, res) {
    const { id_action } = req.body;

    const result = await db("action").where("id_action", id_action).delete();

    if (result != 0) {
      return res.status(200).send();
    } else {
      return res.status(404).json({ message: "Ação não encontrada" });
    }
  },

  //update action
  async updateAction(req, res) {
    const {
      id_action,
      sector_location,
      area_location,
      date_action,
      peoples_action,
      amount_action,
      unit_action,
      description_action,
      id_type_action,
      id_type_trail,
      id_user,
    } = req.body;

    const result = await db
      .update({
        sector_location,
        area_location,
        date_action,
        peoples_action,
        amount_action,
        unit_action,
        description_action,
        id_type_action,
        id_type_trail,
        id_user,
      })
      .where("id_action", id_action)
      .into("action");

    if (result != 0) {
      return res.status(200).send();
    } else {
      return res.status(404).json({ message: "Ação não encontrada" });
    }
  },
};
