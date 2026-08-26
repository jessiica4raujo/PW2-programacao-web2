import { conexao } from '../conexao.js';

async function buscarLimites() {
    const pool = await conexao();
    const [rows] = await pool.query('SELECT * FROM tbLimiteDeCredito;');
    return rows;
}

export { buscarLimites };