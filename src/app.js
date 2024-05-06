import express from "express";
import connectWithDB from "./config/dbConnect.js";

const conexao = await connectWithDB()

conexao.on("error",(erro) => console.error("Erro de conexao", erro))
conexao.once("open",() => console.log("Conexao com o banco feita com sucesso"))

const app = express();

export default app