import express from 'express';
import { listarPosts } from '../controllers/postsController.js';

const routes = (app) => {
    // Middleware para analisar JSON no corpo das requisições
    app.use(express.json());
    // Rota para obter todos os posts
    app.get('/posts', listarPosts);
};

export default routes

