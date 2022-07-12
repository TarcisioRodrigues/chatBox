import cardapio from '../cardapio'
import database from '../database/database'
//Parametros user,message usados para pegar o usuario 
const execute=(user,message)=>{
  let menu="Cardapio /n /n"
  Object.keys(cardapio.menu).forEach((value)=>{
    let element=cardapio.menu[value]
    menu+=`${value}-${element.descricao}     R$ ${element.preco} /n`
  })
  database.db[user].stage=1
  return ["Olá sou um bot criado pelo Tarcisio afim de estudos","Veja nosso cardapio",menu
]}

exports.execute=execute