import { conexao } from '../conexao.js';

async function deletarEndereco(id) {
    const pool = await conexao();
    const [results] = await pool.query('DELETE FROM tbEndereco WHERE id_endereco = ?;', [id]);
    return results;
}

export { deletarEndereco };