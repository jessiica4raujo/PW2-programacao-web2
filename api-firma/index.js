import express from 'express';
import { testarConexao } from './DAO/conexao.js';

// Importando os arquivos da sua pasta 'rotas'
import produtoRoutes from './rotas/produtoRota.js';
import pedidoRoutes from './rotas/pedidoRota.js';
import enderecoRoutes from './rotas/enderecoRota.js';
import limiteRoutes from './rotas/limiteRota.js';
import clienteRoutes from './rotas/clienteRota.js';

const app = express();

app.use(express.json());
testarConexao();

app.get('/', (req, res) => {
    res.json({ mensagem: 'API da Firma rodando 100%!' });
});

// Registrando as rotas na aplicação
app.use(produtoRoutes);
app.use(pedidoRoutes);
app.use(enderecoRoutes);
app.use(limiteRoutes);
app.use(clienteRoutes);

app.listen(3000, () => {
    console.log('🚀 Servidor rodando em http://localhost:3000');
});