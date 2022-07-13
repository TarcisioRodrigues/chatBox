import database from '../database/database'
const execute=(user,message)=>{
  if(message==="*"){
    database.db[user].stage=0
    return ["Pedido cancelado com sucesso"]
  } if(message==="#"){
    database.db[user].stage=3
    return ["Digite seu endereço por favor"]
  }
  let resumo="Resumo"
  let total=0;
  database.db[user].itens.forEach((value)=>{
    total+=`${value.descricao} -------------- ${value.preco} \n`
  })
  resumo+='----------------------- \n'
  resumo+=`Total R$ ${total}`
  return [resumo,"Para confirmar digite # ou para cancelar digite *"]
}


exports.execute=execute