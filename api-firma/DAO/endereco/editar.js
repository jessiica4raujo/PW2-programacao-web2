import { conexao } from '../conexao.js';

async function editarEndereco(id, infos) {
    const sql = 'UPDATE tbEndereco SET logradouro = ?, numero = ?, cep = ?, cidade = ? WHERE id_endereco = ?;';
    const pool = await conexao();
    const [results] = await pool.query(sql, [infos.logradouro, infos.numero, infos.cep, infos.cidade, id]);
    return results;
}

export { editarEndereco };