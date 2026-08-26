import { conexao } from '../conexao.js';

async function buscarClientes() {
    const pool = await conexao();
    const [rows] = await pool.query('SELECT * FROM tbCliente;');
    return rows;
}

export { buscarClientes };