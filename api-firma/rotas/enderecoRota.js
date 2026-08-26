import { Router } from 'express';
import { buscarEnderecos } from '../DAO/endereco/buscar.js';
import { incluirEndereco } from '../DAO/endereco/inserir.js';
import { editarEndereco } from '../DAO/endereco/editar.js';
import { deletarEndereco } from '../DAO/endereco/deletar.js';

const router = Router();

router.get('/endereco', async (req, res) => {
    try {
        const enderecos = await buscarEnderecos();
        res.json(enderecos);
    } catch (erro) {
        res.status(500).json({ erro: erro.message });
    }
});

router.post('/endereco', async (req, res) => {
    try {
        const { id_endereco, logradouro, numero, cep, cidade } = req.body;
        await incluirEndereco({ id_endereco, logradouro, numero, cep, cidade });
        res.status(201).json({ mensagem: 'Endereço cadastrado com sucesso!' });
    } catch (erro) {
        res.status(500).json({ erro: erro.message });
    }
});

router.put('/endereco/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const { logradouro, numero, cep, cidade } = req.body;
        await editarEndereco(id, { logradouro, numero, cep, cidade });
        res.json({ mensagem: 'Endereço atualizado com sucesso!' });
    } catch (erro) {
        res.status(500).json({ erro: erro.message });
    }
});

router.delete('/endereco/:id', async (req, res) => {
    try {
        const { id } = req.params;
        await deletarEndereco(id);
        res.json({ mensagem: `Endereço ${id} deletado com sucesso!` });
    } catch (erro) {
        res.status(500).json({ erro: erro.message });
    }
});

export default router;