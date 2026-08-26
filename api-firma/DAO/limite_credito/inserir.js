import { conexao } from '../conexao.js';

async function incluirLimite(infos) {
    const sql = 'INSERT INTO tbLimiteDeCredito (id_limite, nome) VALUES (?, ?);';
    const pool = await conexao();
    const [results] = await pool.query(sql, [infos.id_limite, infos.nome]);
    return results;
}

export { incluirLimite };