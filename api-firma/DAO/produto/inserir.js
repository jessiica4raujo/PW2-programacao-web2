import { conexao } from '../conexao.js';

async function incluirProduto(infos) {
    const sql = 'INSERT INTO tbProduto (codigo, nome, descricao, preco) VALUES (?, ?, ?, ?);';
    const pool = await conexao();
    const [results] = await pool.query(sql, [infos.codigo, infos.nome, infos.descricao, infos.preco]);
    return results;
}

export { incluirProduto };