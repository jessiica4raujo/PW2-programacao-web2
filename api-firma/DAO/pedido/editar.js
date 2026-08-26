import { conexao } from '../conexao.js';

async function editarPedido(numero, infos) {
    const sql = 'UPDATE tbPedido SET data_elaboracao = ?, id_cliente = ? WHERE numero = ?;';
    const pool = await conexao();
    const [results] = await pool.query(sql, [infos.data_elaboracao, infos.id_cliente, numero]);
    return results;
}

export { editarPedido };