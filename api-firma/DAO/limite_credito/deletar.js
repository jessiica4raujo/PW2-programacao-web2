import { conexao } from '../conexao.js';

async function deletarLimite(id) {
    const pool = await conexao();
    const [results] = await pool.query('DELETE FROM tbLimiteDeCredito WHERE id_limite = ?;', [id]);
    return results;
}

export { deletarLimite };