import { Router } from 'express';
import { buscarProdutos } from '../DAO/produto/buscar.js';
import { incluirProduto } from '../DAO/produto/inserir.js';

const router = Router();

router.get('/produto', async (req, res) => {
    try {
        const produtos = await buscarProdutos();
        res.json(produtos);
    } catch (erro) {
        res.status(500).json({ erro: erro.message });
    }
});

router.post('/produto', async (req, res) => {
    try {
        const { codigo, nome, descricao, preco } = req.body;
        await incluirProduto({ codigo, nome, descricao, preco });
        res.status(201).json({ mensagem: 'Produto cadastrado com sucesso!' });
    } catch (erro) {
        res.status(500).json({ erro: erro.message });
    }
});

export default router;