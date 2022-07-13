import database from '../database/database'
const execute=(user,message)=>{
 database.db[user].stage=0
 return ['Obrigado pela preferencia']
}


exports.execute=execute