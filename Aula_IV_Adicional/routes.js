import express from 'express';
import { listarSelecoes, obterSelecao, criarSelecao, atualizarSelecao, deletarSelecao } from './src/app/controllers/SelecaoControllers.js';

const router = express.Router();

// Rotas para seleções
router.get('/selecoes', listarSelecoes);
router.get('/selecoes/:id', obterSelecao);
router.post('/selecoes', criarSelecao);
router.put('/selecoes/:id', atualizarSelecao);
router.delete('/selecoes/:id', deletarSelecao);

export default router;