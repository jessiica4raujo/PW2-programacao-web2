import { conexao } from '../conexao.js';

async function editarProduto(codigo, infos) {
    const sql = 'UPDATE tbProduto SET nome = ?, descricao = ?, preco = ? WHERE codigo = ?;';
    const pool = await conexao();
    const [results] = await pool.query(sql, [infos.nome, infos.descricao, infos.preco, codigo]);
    return results;
}

export { editarProduto };