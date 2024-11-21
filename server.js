import express from 'express';
import routes from './src/routes/postsRoutes.js';

// Inicialização do servidor Express
const app = express();
routes(app)

// Iniciar o servidor na porta 3000
app.listen(3000, () => {
    console.log('Servidor escutando na porta 3000...');
});