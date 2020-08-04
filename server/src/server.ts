import express from 'express';
import cors from 'cors';
import routes from './routes';

const app = express();
app.use(cors());
app.use(express.json());
app.use(routes)

// métodos:
// GET = buscar ou listar uma informação
// POST = criar alguma nova informação
// PUT = atualizar uma informação existente
// DELETE = deletar uma informação existente

// Corpo (Request Body) = Dados para criação ou atualização de um registro
// Route Params = identificar qual recurso eu quero atualizar ou deletar
// Query Params = paginação, filtros, ordenação



// http://localhost:3333/
app.listen(3333);