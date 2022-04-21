import { GetServerSideProps, NextPage } from "next";
import styled from "styled-components"
import TodoList from "../components/TodoList";
import { getTodosAPI } from "../lib/api/todo";
import { TodoType } from "../types/todo";




const index :NextPage = ({data}:any) => {
    
    return <TodoList todos={data}/>

  
};

export const getServerSideProps :GetServerSideProps = async () =>{
    try{
        const {data} = await getTodosAPI();
        console.log(data);
        return {props:{data}}
    }catch(e){
        console.log(e)
        return {props:{}}
    }
}

export default index;