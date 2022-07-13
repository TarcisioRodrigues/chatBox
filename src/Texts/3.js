import database from '../database/database'
import stages from '../stages/stages'
const execute=(user,message)=>{
  if(message==="*"){
    database.db[user].stage=0
    return ["Pedido cancelado com sucesso"]
  } if(message==="#"){
    return stages.step[4].obj.execute(user,"")
  }
  return [`Confirmar endereço de entrega: \n ${message}`,
  "Digite # para confirmar ou * para cancelar"]
}

exports.execute=execute