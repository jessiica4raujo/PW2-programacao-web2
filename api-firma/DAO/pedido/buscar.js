import { conexao } from '../conexao.js';

async function buscarPedidos() {
    const pool = await conexao();
    // Trazendo os pedidos
    const [rows] = await pool.query('SELECT * FROM tbPedido;');
    return rows;
}

export { buscarPedidos };