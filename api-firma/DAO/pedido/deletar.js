import { conexao } from '../conexao.js';

async function deletarPedido(numero) {
    const pool = await conexao();
    
    // 1. Apaga os registros da tabela associativa (Pedido_Produto)
    await pool.query('DELETE FROM tbPedido_Produto WHERE id_pedido = ?;', [numero]);
    
    // 2. Apaga o pedido principal
    const [results] = await pool.query('DELETE FROM Pedido WHERE numero = ?;', [numero]);
    return results;
}

export { deletarPedido };