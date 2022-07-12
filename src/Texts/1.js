 import cardapio from '../cardapio';
 import database from '../database/database';
 const execute=(user,message)=>{
  if(message==="*"){
    database.db[user].stage=0
    return ["Pedido cancelado com sucesso"]
  } if(message==="#"){
    database.db[user].stage=2
    return ["Ok seu pedido foi fechamos seu pedido"]
  
  if(!cardapio.menu[message]){
    return ["Codigo invalido","Digite # para finalizar a o pedido"]

  }
  //Metodo para inserir dentro do banco
  database.db[user].itens.push(cardapio.menu[message])
  return [`Item (${cardapio.menu[message].descricao}) adicionado com sucesso`
  ,"Digite # para finalizar a o pedido"]
}
 }

exports.execute=execute;