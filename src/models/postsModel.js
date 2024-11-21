import conectarAoBanco from '../config/dbconfig.js';

// Conexão com o banco de dados
const conexao = await conectarAoBanco(process.env.STRING_CONEXAO);

// Função assíncrona para obter todos os posts do banco de dados
export default async function getTodosPosts() {
    // Selecionar o banco de dados 'Imersao_Dev'
    const db = conexao.db('Imersao_Dev');
    // Selecionar a coleção 'posts'
    const colecao = db.collection('posts');
    // Buscar todos os documentos da coleção e retornar como um array
    return colecao.find().toArray();
}