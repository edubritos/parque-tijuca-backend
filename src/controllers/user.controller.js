const db = require ('../database/connection')

module.exports = {
    //lista usuarios
    async listAllUser(req,res){
        try {
            const users = await db.select().from('users');
            return res.json(users)
        } catch (err) {
            console.log('Erro na consulta.')
            throw err
        }
    },
    //insere no banco
    async createUser(req, res){
        try {
            const {
                regis_users, 
                name_users, 
                email_users, 
                password_users,
                cargo_users,
                urlimg_users,
                
            } = req.body

            const users = await db.insert({
                regis_users, 
                name_users, 
                email_users, 
                password_users,
                cargo_users,
                urlimg_users,
                
            })
            .into('users');
            console.log('Usuário cadastrado com sucesso!.')

            return res.json(users)
        
        } catch (err) {
            console.log('Erro no cadastro do usuário.')
            throw err
        }

    },
    //delete users
    async deleteUser (req, res){
        const { regis_users } = req.body
        
        await db('users')
        .where('regis_users', regis_users)
        .delete()

        return res.status(204).send()
    },
    //update users
    async updateUser (req, res){
        try {
            const {
                regis_users, 
                name_users, 
                email_users, 
                password_users,
                cargo_users,
                urlimg_users,
                
            } = req.body
            
            const users = await db.update({
                regis_users, 
                name_users, 
                email_users, 
                password_users,
                cargo_users,
                urlimg_users
            })
            .into('users')
            console.log('Usuário alterado com sucesso!.')

            return res.status(200).send()
        
        } catch (err) {
            console.log('Erro na alteração do usuário.')
            throw err
        }
    }
    
        
        
}