import { conexao } from '../conexao.js';

async function editarCliente(codigo, infos) {
    const sql = 'UPDATE tbCliente SET nome = ?, sobreNome = ?, cpf = ?, telefone = ?, id_limite = ?, id_endereco = ? WHERE codigo = ?;';
    const pool = await conexao();
    const [results] = await pool.query(sql, [
        infos.nome, 
        infos.sobreNome, 
        infos.cpf, 
        infos.telefone, 
        infos.id_limite, 
        infos.id_endereco, 
        codigo
    ]);
    return results;
}

export { editarCliente };