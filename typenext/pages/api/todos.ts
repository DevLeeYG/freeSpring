import { NextApiRequest,NextApiResponse } from "next";

import { TodoType } from "../../types/todo";
import fs from 'fs';


export default async (req:NextApiRequest,res:NextApiResponse) =>{
  if(req.method === "GET"){
      try{
          const todos = await new Promise<TodoType[]>((resolve,reject)=>{
              fs.readFile("data/todos.json",(err,data)=>{
                  if(err){
                      return reject(err.message);
                  }
                  const todosData = data.toString();
                  if(!todosData){
                      return resolve([])
                  }
                  const todos = JSON.parse(data.toString())
                  return resolve(todos);
              })
          })
          res.status(200).send(todos);
      }catch(e){
          console.log(e)
          res.status(500).send(e)
      }
  }
}