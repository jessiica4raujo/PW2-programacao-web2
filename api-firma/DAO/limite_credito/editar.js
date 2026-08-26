import { conexao } from '../conexao.js';

async function editarLimite(id, infos) {
    const sql = 'UPDATE tbLimiteDeCredito SET nome = ? WHERE id_limite = ?;';
    const pool = await conexao();
    const [results] = await pool.query(sql, [infos.nome, id]);
    return results;
}

export { editarLimite };