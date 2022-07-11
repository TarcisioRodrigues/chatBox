
import { create, Whatsapp } from 'sulla';
import {db}from '../src/database/database'
import stages from '../src/stages/stages'
sulla.create().then((client) => start(client));
const start=(client)=> {
  client.onMessage((message) => {
    if (message.body === 'Hi') {
      client.sendText(message.from, stages.step[getStage(message.from)].obj.execute());
    }
  });
}


const getStage=(user)=>{
  return db[user].stage
}

