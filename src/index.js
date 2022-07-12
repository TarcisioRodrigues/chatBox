
const sulla=require ('sulla')
import database from '../src/database/database'
import stages from '../src/stages/stages'
sulla.create().then((client) => start(client));
const start=(client)=> {
  client.onMessage((message) => {
    let resp=stages.step[getStage(message.from)].obj.execute(message.from,message.body)
    //Percorrendo o Array para 
    for(let index=0;index<resp.length;index++){
      const element=resp[index]
      client.sendText(message.from,element);
    }
   
    
  });
}


const getStage=(user)=>{
  return database.db[user].stage
}

