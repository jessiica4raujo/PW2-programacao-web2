// IMPORTS
import express from 'express'

import { contarAteDez, somarNumeros, milImpares, somaPares, fatorial, numerosQntd, numerosMultiplicados } from './lacoRepeticao/lacosRepeticao.js'
import { mostrarNome, mostrarIdade } from './tiposVariaveis/tiposVariaveis.js'
import { acessoNot, meiaEntrada, podeDirigir } from './operadoresLogicos/operadoresLogicos.js'
import { notaMaxima, maiorMenorIdade, valorSalario, ifComp } from './condicoes/condicoes.js'
import { imparPar, multiploQuatro, raizQuadrada, areaCirculo } from './operacoesArimeticas/operacoesAritmeticas.js'
import { posicaoComida, mostrarNumeros, removerNome, somarVetores, somaNotas } from './vetores/vetores.js'
import { sub, adicao, div, mult, potencia } from "./operacoesMatematicas/opcMatematicas.js";
import {ternario} from "./ternario/ternario.js";
import {escolherFruta} from "./switchCase/switch.js";
import {igual, maiorQue, menorQue, maiorIgual, menorIgual} from "./operadoresRelacionais/opcRelacionais.js";

// rota express
const app = express();
const PORT = 4000;


// OPERAÇÕES MATEMATICAS

// -01 adicao
app.get('/adicao', (req, res) => {
    const n1 = Number(req.query.n1);
    const n2 = Number(req.query.n2);
    let resultado = adicao(n1, n2)
    res.json({ resposta: resultado })
});
//http://localhost:4000/adicao?n1=10&n2=20


// 02 - substracao
app.get('/sub', (req, res) => {
    const n1 = Number(req.query.n1);
    const n2 = Number(req.query.n2);
    let resultado = sub(n1, n2);
    res.json({ resposta: resultado })
});
//http://localhost:4000/sub?n1=20&n2=10



// 03 - divisao
app.get('/divisao', (req, res) => {
    const n1 = Number(req.query.n1);
    const n2 = Number(req.query.n2);
    let resultado = div(n1, n2);
    res.json({ resposta: resultado })
});
//http://localhost:4000/divisao?n1=20&n2=10


// 04 - multiplicacao
app.get('/multiplicacao', (req, res) => {
    const n1 = Number(req.query.n1);
    const n2 = Number(req.query.n2);
    let resultado = mult(n1, n2);
    res.json({ resposta: resultado })
});
//http://localhost:4000/multiplicacao?n1=20&n2=10

// 05 - potencia
app.get('/potencia', (req, res) => {
    const n1 = Number(req.query.n1);
    const n2 = Number(req.query.n2);
    let resultado = potencia(n1, n2);
    res.json({ resposta: resultado })
});
//http://localhost:4000/potencia?n1=2&n2=3


//  OPERACOES RELACIONAIS

// 01 - igual
app.get('/igual', (req, res) => {
    const n1 = Number(req.query.n1);
    const n2 = Number(req.query.n2);
    let resultado = igual(n1, n2);
    res.json({ resposta: resultado })
});
//http://localhost:4000/igual?n1=10&n2=20

// 02 - maior que
app.get('/maiorQue', (req, res) => {
    const n1 = Number(req.query.n1);
    const n2 = Number(req.query.n2);
    let resultado = maiorQue(n1, n2);
    res.json({ resposta: resultado })
});
//http://localhost:4000/maiorQue?n1=10&n2=20

// 03 - menor que
app.get('/menorQue', (req, res) => {
    const n1 = Number(req.query.n1);
    const n2 = Number(req.query.n2);
    let resultado = menorQue(n1, n2);
    res.json({ resposta: resultado })
});
//http://localhost:4000/menorQue?n1=10&n2=20


// 04 - menor Igual
app.get('/menorIgual', (req, res) => {
    const n1 = Number(req.query.n1);
    const n2 = Number(req.query.n2);
    let resultado = menorIgual(n1, n2);
    res.json({ resposta: resultado })
});
//http://localhost:4000/menorIgual?n1=10&n2=20


// 05 - maior Igual
app.get('/maiorIgual', (req, res) => {
    const n1 = Number(req.query.n1);
    const n2 = Number(req.query.n2);
    let resultado = maiorIgual(n1, n2);
    res.json({ resposta: resultado })
});
//http://localhost:4000/maiorIgual?n1=10&n2=20


// 01 - ternário

app.get('/ternario', (req, res) => {
    const n1 = Number(req.query.n1);
    const n2 = Number(req.query.n2);
    let resultado = ternario(n1, n2);
    res.json({ resposta: resultado })
});
//http://localhost:4000/ternario?n1=10&n2=20

// SWITCH CASE
app.get('/switch', (req, res) => {
    const fruta = req.query.fruta;
    let resultado = escolherFruta(fruta);
    res.json({ resposta: resultado })
});
//http://localhost:4000/switch?fruta=Uva


//  ROTAS  (min)

/*EXEMPLO DO PROFESSOR:
app.get(‘/prof/:idade/:nome', (req, res) => {

let {idade, nome} = req.params

let msg = “Seja bem vindo sr. ” + nome

res.send(msg)

})*/

// Ex 01 - While
app.get('/contar/:limite', (req, res) => {
    let { limite } = req.params

    let resultado = contarAteDez(Number(limite))
    res.json({ resposta: resultado })
    //http://localhost:4000/contar/15
})

// Ex 02 - While
app.get('/soma/:numeros', (req, res) => {
    let { numeros } = req.params

    let lista = numeros.split(',').map(Number)

    let resultado = somarNumeros(lista)
    res.json({ resposta: resultado })
    //http://localhost:4000/soma/10,20,20
})


// Ex 03 - Const
app.get('/nome/:nome', (req, res) => {
    let { nome } = req.params

    let resultado = mostrarNome(nome)
    res.json({ resposta: resultado })
    //http://localhost:4000/nome/Yasmin
})

// Ex 04 - Let
app.get('/idade/:idade', (req, res) => {
    let { idade } = req.params

    let resultado = mostrarIdade(idade)
    res.json({ resposta: resultado })
    //http://localhost:4000/idade/16
})

// Ex 05 - NOT
app.get('/acesso/:bloqueado', (req, res) => {
    let{ bloqueado } = req.params

    let resultado = acessoNot(bloqueado)
    res.json({ resposta: resultado })
    //http://localhost:4000/acesso/false
})

// Ex 06 - OU
app.get('/meia/:idade', (req, res) => {
    let { idade } = req.params

    let resultado = meiaEntrada(idade)
    res.json({ resposta: resultado })
    //http://localhost:4000/meia/16

})

// Ex 07 - E
app.get('/dirigir/:idade/:temCarteira', (req, res) => {
    let { idade, temCarteira } = req.params

    let resultado = podeDirigir(Number(idade), temCarteira)
    res.json({ resposta: resultado })
    //http://localhost:4000/dirigir/16/nao
})

// Ex 08 - For
app.get('/impares/:valor', (req, res) => {
    let { valor } = req.params

    let resultado = milImpares(Number(valor))
    res.json({ resposta: resultado })
    //http://localhost:4000/impares/100
})

// Ex 09 - For
app.get('/somapares/:inicio/:final', (req, res) => {
    let { inicio, final } = req.params

    let resultado = somaPares(Number(inicio), Number(final))
    res.json({ resposta: resultado })
    //http://localhost:4000/somapares/1/10

})

// Ex 10 - Do While
app.get('/fatorial/:numero', (req, res) => {
    let { numero } = req.params

    let resultado = fatorial(Number(numero))
    res.json({ resposta: resultado })
    //http://localhost:4000/fatorial/5  
})

// Ex 11 - Do While
app.get('/numerosQntd/:numeros', (req, res) => {
    let { numeros } = req.params

    let lista = numeros.split(',').map(Number)  
    let resultado = numerosQntd(lista)
    res.json({ resposta: resultado })
    //http://localhost:4000/numerosQntd/10,20,-5,30
})

// Ex 12 - If simples
app.get('/notaMaxima/:nota', (req, res) => {
    let { nota } = req.params
    let resultado = notaMaxima(Number(nota))
    res.json({ resposta: resultado })
    //http://localhost:4000/notaMaxima/10
})

// Ex 13 - If else
app.get('/maiorMenorIdade/:idade', (req, res) => {
    let { idade } = req.params

    let resultado = maiorMenorIdade(Number(idade))
    res.json({ resposta: resultado })
    //http://localhost:4000/maiorMenorIdade/16
})

// Ex 14 - If else
app.get('/valorSalario/:salario', (req, res) => {
    let { salario } = req.params

    let resultado = valorSalario(Number(salario))
    res.json({ resposta: resultado })
    //http://localhost:4000/valorSalario/1500
})

// Ex 16 - Par ou ímpar
app.get('/imparPar/:numero', (req, res) => {
    let { numero } = req.params

    let resultado = imparPar(Number(numero))
    res.json({ resposta: resultado })
    //http://localhost:4000/imparPar/13
})

// Ex 17 - Múltiplo de 4
app.get('/multiploQuatro/:numero', (req, res) => {
    let { numero } = req.params

    let resultado = multiploQuatro(Number(numero))
    res.json({ resposta: resultado })
    //http://localhost:4000/multiploQuatro/144
})

// Ex 18 - Raiz
app.get('/raizQuadrada/:numero', (req, res) => {
    let { numero } = req.params

    let resultado = raizQuadrada(Number(numero))
    res.json({ resposta: resultado })
    //http://localhost:4000/raizQuadrada/16
})

// Ex 19 - Área círculo
app.get('/areaCirculo/:raio', (req, res) => {
    let { raio } = req.params

    let resultado = areaCirculo(Number(raio))
    res.json({ resposta: resultado })
    //http://localhost:4000/areaCirculo/75  
})

// Ex 20 - Map
app.get('/dobrados/:numeros', (req, res) => {
    let { numeros } = req.params

    let lista = numeros.split(',').map(Number)
    let resultado = numerosMultiplicados(...lista)
    res.json({ resposta: resultado })
    //http://localhost:4000/dobrados/1,2,3
})

// Ex 21 - Vetor
app.get('/comida/:posicao', (req, res) => {
    let { posicao } = req.params
    let resultado = posicaoComida(Number(posicao))
    res.json({ resposta: resultado })
    //http://localhost:4000/comida/2
})

// Ex 22 - Vetor
app.get('/numeros/:numeros', (req, res) => {
    let { numeros } = req.params

    let lista = numeros.split(',').map(Number)
    let resultado = mostrarNumeros(...lista)
    res.json({ resposta: resultado })
    //http://localhost:4000/numeros/10,20,30
})

// Ex 23 - Remoção
app.get('/remover/:nome', (req, res) => {
    let { nome } = req.params

    let resultado = removerNome(nome, "Joao", "Maria")
    res.json({ resposta: resultado })
    //http://localhost:4000/remover/Joao
})

// Ex 24 - Vetores
app.get('/somar/:ax/:ay/:bx/:by', (req, res) => {
    let { ax, ay, bx, by } = req.params

    let resultado = somarVetores(
        Number(ax),
        Number(ay),
        Number(bx),
        Number(by)
    )

    res.json({ resposta: resultado })
    //http://localhost:4000/somar/1/2/3/4
})

// Ex 25 - Notas
app.get('/notas/:nota1/:nota2/:nota3', (req, res) => {
    let { nota1, nota2, nota3 } = req.params

    let resultado = somaNotas(Number(nota1), Number(nota2), Number(nota3))
    res.json({ resposta: resultado })
    //http://localhost:4000/notas/7/8/9
})


app.get('/', (req, res) => {
  res.send('Servidor funcionando!');
});


app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});