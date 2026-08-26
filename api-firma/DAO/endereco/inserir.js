import { conexao } from '../conexao.js';

async function incluirEndereco(infos) {
    const sql = 'INSERT INTO tbEndereco (id_endereco, logradouro, numero, cep, cidade) VALUES (?, ?, ?, ?, ?);';
    const pool = await conexao();
    const [results] = await pool.query(sql, [infos.id_endereco, infos.logradouro, infos.numero, infos.cep, infos.cidade]);
    return results;
}

export { incluirEndereco };