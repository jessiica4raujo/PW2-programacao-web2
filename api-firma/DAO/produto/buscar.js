import { conexao } from '../conexao.js';

async function buscarProdutos() {
    const pool = await conexao();
    const [rows] = await pool.query('SELECT * FROM tbProduto;');
    return rows;
}

async function buscarProdutoPorId(codigo) {
    const pool = await conexao();
    const [rows] = await pool.query('SELECT * FROM tbProduto WHERE codigo = ?;', [codigo]);
    return rows[0];
}

export { buscarProdutos, buscarProdutoPorId };