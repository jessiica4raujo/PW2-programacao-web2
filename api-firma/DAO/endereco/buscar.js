import { conexao } from '../conexao.js';

async function buscarEnderecos() {
    const pool = await conexao();
    const [rows] = await pool.query('SELECT * FROM tbEndereco;');
    return rows;
}

export { buscarEnderecos };