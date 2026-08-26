import { conexao } from '../conexao.js';

async function deletarProduto(codigo) {
    const pool = await conexao();
    const [results] = await pool.query('DELETE FROM tbProduto WHERE codigo = ?;', [codigo]);
    return results;
}

export { deletarProduto };