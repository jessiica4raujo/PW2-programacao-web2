import { conexao } from '../conexao.js';

async function incluirCliente(infos) {
    const sql = 'INSERT INTO tbCliente (codigo, nome, sobreNome, cpf, telefone, id_limite, id_endereco) VALUES (?, ?, ?, ?, ?, ?, ?);';
    const pool = await conexao();
    const [results] = await pool.query(sql, [
        infos.codigo, 
        infos.nome, 
        infos.sobreNome, 
        infos.cpf, 
        infos.telefone, 
        infos.id_limite, 
        infos.id_endereco
    ]);
    return results;
}

export { incluirCliente };