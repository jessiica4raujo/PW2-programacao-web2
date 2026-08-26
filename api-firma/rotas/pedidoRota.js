import { Router } from 'express';
import { buscarPedidos } from '../DAO/pedido/buscar.js';
import { incluirPedido } from '../DAO/pedido/inserir.js';
import { editarPedido } from '../DAO/pedido/editar.js';
import { deletarPedido } from '../DAO/pedido/deletar.js';

const router = Router();

router.get('/pedido', async (req, res) => {
    try {
        const pedidos = await buscarPedidos();
        res.json(pedidos);
    } catch (erro) {
        res.status(500).json({ erro: erro.message });
    }
});

router.post('/pedido', async (req, res) => {
    try {
        const { numero, data_elaboracao, id_cliente, produtos } = req.body;
        const resultado = await incluirPedido({ numero, data_elaboracao, id_cliente, produtos });
        res.status(201).json(resultado);
    } catch (erro) {
        res.status(500).json({ erro: erro.message });
    }
});

router.put('/pedido/:numero', async (req, res) => {
    try {
        const { numero } = req.params;
        const { data_elaboracao, id_cliente } = req.body;
        await editarPedido(numero, { data_elaboracao, id_cliente });
        res.json({ mensagem: 'Pedido atualizado com sucesso!' });
    } catch (erro) {
        res.status(500).json({ erro: erro.message });
    }
});

router.delete('/pedido/:numero', async (req, res) => {
    try {
        const { numero } = req.params;
        await deletarPedido(numero);
        res.json({ mensagem: `Pedido ${numero} deletado com sucesso!` });
    } catch (erro) {
        res.status(500).json({ erro: erro.message });
    }
});

export default router;