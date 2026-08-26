import { conexao } from '../conexao.js';

async function deletarCliente(codigo) {
    const pool = await conexao();
    const [results] = await pool.query('DELETE FROM tbCliente WHERE codigo = ?;', [codigo]);
    return results;
}

export { deletarCliente };