// IMPORTS
import express from 'express'

import { contarAteDez, somarNumeros, milImpares, somaPares, fatorial, numerosQntd, numerosMultiplicados } from './LacosRepeticao.js'
import { mostrarNome, mostrarIdade } from './tiposVariaveis.js'
import { acessoNot, meiaEntrada, podeDirigir } from './operadoresLogicos.js'
import { notaMaxima, maiorMenorIdade, valorSalario, ifComp } from './condicoes.js'
import { imparPar, multiploQuatro, raizQuadrada, areaCirculo } from './operacoesAritmeticas.js'
import { posicaoComida, mostrarNumeros, removerNome, somarVetores, somaNotas } from './vetores.js'
import { sub, adicao, div, mult, potencia } from "./opcMatematicas.js";
import {ternario} from "./ternario.js";
import {escolherFruta} from "./switch.js";
import {igual, maiorQue, menorQue, maiorIgual, menorIgual} from "./opcRelacionais.js";

// rota
const app = express();
const PORT = 4000;

app.get('/', (req, res) => {
    
  res.send('Servidor funcionando!');
});

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});


// OPERAÇÕES MATEMATICAS

// -01 adicao
app.get('/adicao', (req, res) => {
    const n1 = Number(req.query.n1) || 0; 
    const n2 = Number(req.query.n2) || 0;
    let resultado = adicao(n1, n2)
    res.json({ resposta: resultado })
});

// 02 - substracao
app.get('/sub', (req, res) => {
    const n1 = Number(req.query.n1) || 0; 
    const n2 = Number(req.query.n2) || 0;
    let resultado = sub(n1, n2); 
    res.json({ resposta: resultado })
});


// 03 - divisao
app.get('/divisao', (req, res) => {
    const n1 = Number(req.query.n1) || 0; 
    const n2 = Number(req.query.n2) || 0;
    let resultado = div(n1, n2); 
    res.json({ resposta: resultado })
});
// 04 - multiplicacao
app.get('/multiplicacao', (req, res) => {
    const n1 = Number(req.query.n1) || 0; 
    const n2 = Number(req.query.n2) || 0;
    let resultado = mult(n1, n2); 
    res.json({ resposta: resultado })
});

// 05 - potencia
app.get('/potencia', (req, res) => {
    const n1 = Number(req.query.n1) || 0; 
    const n2 = Number(req.query.n2) || 0;
    let resultado = potencia(n1, n2); 
    res.json({ resposta: resultado })
});


//  OPERACOES RELACIONAIS

// 01 - igual
app.get('/igual', (req, res) => {
    const n1 = Number(req.query.n1) || 0; 
    const n2 = Number(req.query.n2) || 0;
    let resultado = igual(n1, n2); 
    res.json({ resposta: resultado })
});


// 02 - maior que
app.get('/maiorQue', (req, res) => {
    const n1 = Number(req.query.n1) || 0; 
    const n2 = Number(req.query.n2) || 0;
    let resultado = maiorQue(n1, n2); 
    res.json({ resposta: resultado })
});

// 03 - menor que
app.get('/menorQue', (req, res) => {
    const n1 = Number(req.query.n1) || 0; 
    const n2 = Number(req.query.n2) || 0;
    let resultado = menorQue(n1, n2); 
    res.json({ resposta: resultado })
});

// 04 - menor Igual
app.get('/menorIgual', (req, res) => {
    const n1 = Number(req.query.n1) || 0; 
    const n2 = Number(req.query.n2) || 0;
    let resultado = menorIgual(n1, n2); 
    res.json({ resposta: resultado })
});

// 05 - maior Igual
app.get('/maiorIgual', (req, res) => {
    const n1 = Number(req.query.n1) || 0; 
    const n2 = Number(req.query.n2) || 0;
    let resultado = maiorIgual(n1, n2); 
    res.json({ resposta: resultado })
});


// 01 - TERNARIO

app.get('/ternario', (req, res) => {
    const n1 = Number(req.query.n1) || 0; 
    const n2 = Number(req.query.n2) || 0;
    let resultado = ternario(n1, n2); 
    res.json({ resposta: resultado })
});

// SWITCH CASE
app.get('/switch', (req, res) => {
    const fruta = req.query.fruta;
    let resultado = escolherFruta(fruta);
    res.json({ resposta: resultado })
});

//  ROTAS  (min)

// Ex 01 - While
app.get('/contar', (req, res) => {
    let resultado = contarAteDez()
    res.json({ resposta: resultado })
})

// Ex 02 - While
app.get('/soma', (req, res) => {
    let lista = [1, 2, 3, 4]
    let resultado = somarNumeros(lista)
    res.json({ resposta: resultado })
})

// Ex 03 - Const
app.get('/nome', (req, res) => {
    let resultado = mostrarNome("Yasmin")
    res.json({ resposta: resultado })
})

// Ex 04 - Let
app.get('/idade', (req, res) => {
    let resultado = mostrarIdade(16)
    res.json({ resposta: resultado })
})

// Ex 05 - NOT
app.get('/acesso', (req, res) => {
    let resultado = acessoNot(false)
    res.json({ resposta: resultado })
})

// Ex 06 - OU
app.get('/meia', (req, res) => {
    let resultado = meiaEntrada(40)
    res.json({ resposta: resultado })
})

// Ex 07 - E
app.get('/dirigir', (req, res) => {
    let resultado = podeDirigir(18, "sim")
    res.json({ resposta: resultado })
})

// Ex 08 - For
app.get('/impares', (req, res) => {
    let resultado = milImpares()
    res.json({ resposta: resultado })
})

// Ex 09 - For
app.get('/somapares', (req, res) => {
    let resultado = somaPares(1, 10)
    res.json({ resposta: resultado })
})

// Ex 10 - Do While
app.get('/fatorial', (req, res) => {
    let resultado = fatorial(5)
    res.json({ resposta: resultado })
})

// Ex 11 - Do While
app.get('/numerosQntd', (req, res) => {
    let lista = [1, 2, 3, 4]
    let resultado = numerosQntd(lista)
    res.json({ resposta: resultado })
})

// Ex 12 - If simples
app.get('/notaMaxima', (req, res) => {
    let resultado = notaMaxima(10)
    res.json({ resposta: resultado })
})

// Ex 13 - If else
app.get('/maiorMenorIdade', (req, res) => {
    let resultado = maiorMenorIdade(18)
    res.json({ resposta: resultado })
})

// Ex 14 - If else
app.get('/valorSalario', (req, res) => {
    let resultado = valorSalario(1500)
    res.json({ resposta: resultado })
})

// Ex 16 - Par ou ímpar
app.get('/imparPar', (req, res) => {
    let resultado = imparPar(13)
    res.json({ resposta: resultado })
})

// Ex 17 - Múltiplo de 4
app.get('/multiploQuatro', (req, res) => {
    let resultado = multiploQuatro(144)
    res.json({ resposta: resultado })
})

// Ex 18 - Raiz
app.get('/raizQuadrada', (req, res) => {
    let resultado = raizQuadrada(9)
    res.json({ resposta: resultado })
})

// Ex 19 - Área círculo
app.get('/areaCirculo', (req, res) => {
    let resultado = areaCirculo(75)
    res.json({ resposta: resultado })
})

// Ex 20 - Map
app.get('/dobrados', (req, res) => {
    let resultado = numerosMultiplicados(10, 20, 30)
    res.json({ resposta: resultado })
})

// Ex 21 - Vetor
app.get('/comida', (req, res) => {
    let resultado = posicaoComida()
    res.json({ resposta: resultado })
})

// Ex 22 - Vetor
app.get('/numeros', (req, res) => {
    let resultado = mostrarNumeros(1, 2, 3)
    res.json({ resposta: resultado })
})

// Ex 23 - Remoção
app.get('/remover', (req, res) => {
    let resultado = removerNome("Ana", "Joao", "Maria")
    res.json({ resposta: resultado })
})

// Ex 24 - Vetores
app.get('/somar', (req, res) => {
    let resultado = somarVetores(5, 5, 5, 5)
    res.json({ resposta: resultado })
})

// Ex 25 - Notas
app.get('/notas', (req, res) => {
    let resultado = somaNotas(5, 7, 8)
    res.json({ resposta: resultado })
})

