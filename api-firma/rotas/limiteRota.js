import { Router } from 'express';
import { buscarLimites } from '../DAO/limite_credito/buscar.js';
import { incluirLimite } from '../DAO/limite_credito/inserir.js';
import { editarLimite } from '../DAO/limite_credito/editar.js';
import { deletarLimite } from '../DAO/limite_credito/deletar.js';

const router = Router();

router.get('/limite', async (req, res) => {
    try {
        const limites = await buscarLimites();
        res.json(limites);
    } catch (erro) {
        res.status(500).json({ erro: erro.message });
    }
});

router.post('/limite', async (req, res) => {
    try {
        const { id_limite, nome } = req.body;
        await incluirLimite({ id_limite, nome });
        res.status(201).json({ mensagem: 'Limite de crédito cadastrado com sucesso!' });
    } catch (erro) {
        res.status(500).json({ erro: erro.message });
    }
});

router.put('/limite/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const { nome } = req.body;
        await editarLimite(id, { nome });
        res.json({ mensagem: 'Limite de crédito atualizado com sucesso!' });
    } catch (erro) {
        res.status(500).json({ erro: erro.message });
    }
});

router.delete('/limite/:id', async (req, res) => {
    try {
        const { id } = req.params;
        await deletarLimite(id);
        res.json({ mensagem: `Limite de crédito ${id} deletado com sucesso!` });
    } catch (erro) {
        res.status(500).json({ erro: erro.message });
    }
});

export default router;