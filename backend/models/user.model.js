const { Model } = require('objection');
const knexConfig = require('../knexfile');
const _knex = require('knex')(knexConfig[process.env.NODE_ENV]);
Model.knex(_knex);

class User extends Model {

    static get tableName(){
        return 'users';
    }

    static get idColumn() {
        return 'id';
    }

    static async getAllUsers(){
        const _user =  await User.query().where('isDeleted', 0)
        return _user
    }

    static async getAllActiveUsers(){
        const _user =  await User.query().where('status', 1).where('isDeleted', 0)
        return _user
    }

    static async getUserBy(id){
        const _user =  await User.query().findById(id)
        return _user
    }

    static async insertUser(data){
        const _user =  await User.query().insert(data)
        return _user
    }

    static async updateUser(id,data){
        data['updated_at'] = new Date()
        await User.query().findById(id).patch(data)
        return User.getUserBy(id)
    }

    static async deleteUser(id){
        const _user =  await User.query().deleteById(id)
        return _user
    }
}

module.exports = User