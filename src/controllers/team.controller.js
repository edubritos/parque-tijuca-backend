const db = require ('../database/connection')

module.exports = {
    //lista usuarios
    async listAllTeam(req,res){
        try {
            const team = await db.select().from('team');
            return res.json(team)
        } catch (err) {
            console.log('Erro na consulta.')
            throw err
        }
    },
    //insere no banco
    async createTeam(req, res){
        try {
            const {
                name_team, 
                leader_team, 
                place_team,
                
            } = req.body

            const team = await db.insert({
                name_team, 
                leader_team, 
                place_team,
                
            })
            .into('team');
            console.log('Equipe cadastrada com sucesso!.')

            return res.json(team)
        
        } catch (err) {
            console.log('Erro no cadastro da equipe.')
            throw err
        }

    },
    //delete team
    async deleteTeam (req, res){
        const { id_team } = req.body
        
        await db('team')
        .where('id_team', id_team)
        .delete()

        return res.status(204).send()
    },
    //update team
    async updateTeam (req, res){
        try {
            const {
                id_team,
                name_team, 
                leader_team, 
                place_team,
            } = req.body
            

            const team = await db.update({
                name_team, 
                leader_team, 
                place_team,
            })
            .where('id_team', id_team)
            .into('team')
            console.log('Equipe alterada com sucesso!.')

            return res.status(200).send()
        
        } catch (err) {
            console.log('Erro na alteração da equipe.')
            throw err
        }
    }
    
        
        
}