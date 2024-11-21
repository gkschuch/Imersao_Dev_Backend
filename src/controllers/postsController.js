import getTodosPosts from "../models/postsModel.js";

export async function listarPosts(req, res) {
    // Obter todos os posts da função getTodosPosts
    const result = await getTodosPosts();
    // Enviar os posts como resposta JSON com status 200 (OK)
    res.status(200).json(result);
}