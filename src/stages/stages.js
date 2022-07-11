//Estagios do menu
const  stages={
  0:{
    descricao:"Boas vindas",
    obj:require("../Texts/0"),
  },
  1:{
    descricao:"Vendas",
    obj:require("../Texts/1"),
  },
  2:{
    descricao:"Resumo",
    obj:require("../Texts/2"),
  },
  3:{
    descricao:"Endereço",
    obj:require("../Texts/3"),
  },
  4:{
    descricao:"Encerramento",
    obj:require("../Texts/4"),
  }
}
exports.step=stages