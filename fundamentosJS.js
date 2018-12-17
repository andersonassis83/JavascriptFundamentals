/*-------------------------------- FUNDAMENTOS DE JAVASCRIPT --------------------------------*

/// Author: Anderson Assis - andersonassis83

/*
    Este documento registra alguns conceitos e particularidades da linguagem Javascript que
    eu aprendi e venho aprendendo.
    A princípio não serão abordados assuntos como arrays, OO,  algoritmos, métodos
    e funções, a não ser que seja para esclarecer alguma peculiaridade da linguagem.
*/


/*-------------------- Diferença entre atribuir e declarar / redeclarar ---------------------*/

var x = 1; //aqui está declarando que a var x recebe o valor 1
var x = 2; // como a var x já tinha sido declarada acima, aqui está redeclarando a var x com o valor 2
x = 3; //aqui está atribuindo valor 3 a variável x (que é uma var).

// Em resumo usa-se a palavra reservada var para declarar ou redeclarar um valor a um nome (neste caso x).

let y = 10; //declarando (funciona).
let y = 15; //redeclarando (não funciona).
y = 20; //reatribuindo (funciona).

//A diferença entre var e let é que essa última não aceita ser redeclarada. Aceita apenas novas atribuições.
//atualmente é mais moderno usar let ao invés de var pois let não aceita ser redeclarada evitando comportamentos estranhos no seu sistema.

const c = 5; // a palavra reservada const vem de constante. Uma vez declarada, não pode mais ser redeclarada e nem reatribuída.


//SUPER-RESUMO
var a = 3; //declarado var a recebe o valor 3
var a = 1; //redeclarado var a recebe o valor 1
a = 5; //atribuido o valor 5 a variável a

let b = 4; //variáveis let não podem ser redeclaradas
b = 2; //variáveis let podem receber outras atribuições

const c = 5; //const não pode ser nem redeclarada nem atribuída um novo valor


/*------------------------ Javascript é uma linguagem de tipagem fraca ----------------------*/

let teste = '5'; // isso é uma string (um texto livre, neste caso 5).
let teste2 = 2; // isso é um integer 2.

console.log(teste + teste2); // vai concatenar a string 5 com o int 2 (52).

// em códigos com tipagem fraca pode-se manipular dados de diferentaes tipos como o exemplo acima.
// tipagem fraca facilita para que a linguagem seja multi paradigma.
// uma peculiaridade do Javascript é a opção de não fechar o bloco de código com ponto e vírgula ;



/*------------------------------------- TEMPLATE DE STRINGS ---------------------------------*/

const nome = 'Anderson';
const concatenacao = 'Olá' + nome + '!' //esta é uma concatenação de string comum

const template = ` olá
                ${nome}
                !`; //este é um template de strings


/*------------- Vantagens do Template de Strings-----------------
*   pode-se quebrar linhas (como mostrado no const template)
*   é dinâmico porque o que está dentro das chaves é interpolado
*/

console.log(concatenacao, template);

//Exemplo de interpolação
console.log(`1 + 1 = ${1 + 1}`);

/*---------- ANATOMIA DO TEMPLATE STRING----------
    parecido com a string, o template deve estar entre aspas tb.
    porém ao invés de aspas simples (ou duplas) como a string,
    os templates ficam envolto a sinais de crase: `template`

    O iten a ser manipulado fica dentro de chaves precedido de um cifrão: ${item manipulado}
    Os demais itens ficam livres dentro da estrutura.

    PORTANTO:
    `Esta seria a ${estrutura} de um ${template}`
    onde os itens dentro das chaves serão dados manipuláveis.
*/
const idade = 35;
const nome = "Anderson";

console.log(`A idade de ${nome} é ${idade}.`);


/*-------------------------------------- FUNÇÕES ------------------------------------------- */

// A linguagem Javascript gira em torno de funções. É o conceito mais importante da linguagem.

// Função sem retorno

function imprimirSoma(a, b){
    console.log(a + b);
}

imprimirSoma(2, 3); //5
imprimirSoma(2); // Nan
imprimirSoma(2, 10, 4, 5, 6, 7, 8, 9); // 12
imprimirSoma(); //NaN

// Função com retorno
function soma(a, b = 0){
    return (a + b);
}

console.log(soma(2, 3));
console.log(soma(2));
console.log(soma());

// Armazenando Função em uma variável / constante
const imprimirSoma = function(a, b){
    console.log(a + b);
}

imprimirSoma(2, 3);

//Armazenando uma arrow function em uma variavel / constante
const soma = (a, b) => {
    return a + b;
}

console.log(soma(2, 3));

//Arrow function com retorno implícito ( sem usar "return")
const subtracao = (a, b) => a - b;
console.log(subtracao(5, 3));


/*---------------------------------- FUNDAMENTOS DE ESCOPO --------------------------------- */

// Escopo: onde a variável é visível.
{
    {
        {
            {
                var escopo = "Será?" // dentro de vários blocos. A qual escopo ela pertencerá?
            }
        }
    }
}
console.log(escopo);

function teste(){
    var local = 123;
}

teste();
console.log(local);
/*
    Se tratando de var, só existem dois tipos de escopo:
    Global: visível para todos.
    Local: visível apenas dentro da função a qual foi declarada.
*/

//No caso do let, existe mais um tipo de escopo: do bloco
let numero = 1;
{
    let numero = 2;
    console.log('dentro = ', numero);
}

console.log('fora = ', numero);

/*  RESUMINDO:
    var = escopo global e escopo local.
    let = escopo global, escopo local e escopo de bloco.
*/


/*------------------------------------ Conceito de Hoisting --------------------------------*/

// Hoisting = jogar para cima; elevar;

console.log('a = ', a); // undefined (Ao lugar de dar um erro, a linguagem diz que não foi definido um valor para a variável a)
var a = 2;
console.log('a = ', a); // 2

/*
    A declaração é elevada para o topo do escopo. Esta é uma das peculiaridades do Javascript
    É como se quando você pede um valor não declarado, a linguagem partisse da premissa que
    você irá atribuir um valor à variável futuramente, sendo assim, ao invés de dar um erro,
    a linguagem te avisa que você ainda não atribuiu valor àquela variável, ou seja, ela ainda
    está indefinida (undefined).
*/

/*-------------------------------------- This no Javascript ---------------------------------*/

/*
    Em um contexto geral, o valor de "this" é remetido a quem chamou a função. Porém o Javascript
    tem outra peculiaridade em que o valor de "this" pode variar dependendo de como ele é chamado.
*/

let sorvete = {
    nome: "Casquinha";
    sabores: ["Chocolate", "Morango", "Baunilha", "Napolitano"];

    imprimirSabores: function(){
        console.log(this.sabores); // este this identifica que são os sabores deste sorvete (casquinha)
    }
}

sorvete.imprimirSabores();


/*------------------------------------- Método bind ---------------------------------------- */

//O método bind será responsável por chamar um atributo que esteja fora de seu escopo.

const pessoa = {
    saudacao: 'Bom Dia',
    falar(){
        console.log(this.saudacao);
    }
}

pessoa.falar();

/*
const falarPessoa = pessoa.falar();

    esta função está tentando chamar o método falar fora de seu escopo. Para que ela funcione
    corretamente, é necessário utilizar o método bind
*/

const falarPessoa = pessoa.falar.bind(pessoa); //assim, falarPessoa consegue chamar pessoa.falar fora de seu escopo.
falarPessoa();


/*------------------------------------ Arrow Function --------------------------------------*/

// Arrow function é uma forma reduzida de escrever uma função


// forma comun fazendo a variável dobro receber uma função anônima
let dobro = function (a){
    return 2 * a;
};

// Arrow substitui a palavra "function" por "=>"
dobro = (a) => {
    2 * a;
}

// Arrow reduzida elimina parenteses, chaves e a palavra function.
dobro = a => 2 * a;

console.log(dobro(5));

// OBS: Só pode liberar parênteses para funções que recebem apenas 1 parâmetro.
// Para nenhum parâmetro ou acima de 1 parâmetro é necessário o uso do parênteses


// RESUMO:
let soma = () => "Arrow Function"; // não recebeu parâmetros
let soma = a => a++; //recebeu apenas um parâmetro - dispensa parênteses
let soma = (a, b) => a + b; // recebeu mais de um parâmetro


/*--------------------------------------- Função Factory --------------------------------------*/

// Função Factory é um método construtor, ou seja, será uma função que retorna um objeto.

function criarProduto(nome, preco){
    return{
        nome,
        preco,
    };
};

console.log(criarProduto('camisa', 59.99)); //criar produto retornou um objeto camisa no valor de 59.99
console.log(criarProduto('calça', 102.00)); //criar produto retornou o objeto calça no valor de 102.00
console.log(criarProduto('sapato', 95.99)); //criar produto retornou um objeto sapato no valor de 95.99

//OBS: A partir do ES6 é possível usar também classes construtoras com o "constructor".

    class Produto{
        constructor(nome){
            this.nome = nome;
        }

        identificar(){
            console.log(`Olá, sou um(a) ${this.nome}`);
        }
    }

    const p1 = new Produto ('caneta');
    p1.identificar();
