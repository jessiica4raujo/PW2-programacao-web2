import { Router } from 'express';
import { buscarClientes } from '../DAO/cliente/buscar.js';
import { incluirCliente } from '../DAO/cliente/inserir.js';
import { editarCliente } from '../DAO/cliente/editar.js';
import { deletarCliente } from '../DAO/cliente/deletar.js';

const router = Router();

router.get('/cliente', async (req, res) => {
    try {
        const clientes = await buscarClientes();
        res.json(clientes);
    } catch (erro) {
        res.status(500).json({ erro: erro.message });
    }
});

router.post('/cliente', async (req, res) => {
    try {
        const { codigo, nome, sobreNome, cpf, telefone, id_limite, id_endereco } = req.body;
        await incluirCliente({ codigo, nome, sobreNome, cpf, telefone, id_limite, id_endereco });
        res.status(201).json({ mensagem: 'Cliente cadastrado com sucesso!' });
    } catch (erro) {
        res.status(500).json({ erro: erro.message });
    }
});

router.put('/cliente/:codigo', async (req, res) => {
    try {
        const { codigo } = req.params;
        const { nome, sobreNome, cpf, telefone, id_limite, id_endereco } = req.body;
        await editarCliente(codigo, { nome, sobreNome, cpf, telefone, id_limite, id_endereco });
        res.json({ mensagem: 'Cliente atualizado com sucesso!' });
    } catch (erro) {
        res.status(500).json({ erro: erro.message });
    }
});

router.delete('/cliente/:codigo', async (req, res) => {
    try {
        const { codigo } = req.params;
        await deletarCliente(codigo);
        res.json({ mensagem: `Cliente ${codigo} deletado com sucesso!` });
    } catch (erro) {
        res.status(500).json({ erro: erro.message });
    }
});

export default router;