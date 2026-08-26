import { conexao } from '../conexao.js';

async function incluirPedido(infos) {
    const pool = await conexao();
    
    // 1. Insere na tabela Pedido
    const sqlPedido = 'INSERT INTO tbPedido (numero, data_elaboracao, id_cliente) VALUES (?, ?, ?);';
    await pool.query(sqlPedido, [infos.numero, infos.data_elaboracao, infos.id_cliente]);

    // 2. Insere na tabela Pedido_Produto (relacionamento N:N)
    // Supondo que "infos.produtos" seja um array com os IDs dos produtos [101, 102]
    if (infos.produtos && infos.produtos.length > 0) {
        const sqlAssociativa = 'INSERT INTO Pedido_Produto (id_pedido, id_produto) VALUES (?, ?);';
        for (const id_produto of infos.produtos) {
            await pool.query(sqlAssociativa, [infos.numero, id_produto]);
        }
    }

    return { mensagem: 'Pedido e produtos vinculados com sucesso!' };
}

export { incluirPedido };