import entradaDados from 'readline-sync';

// variáveis que serão utilizadas para realizar a tabuada
let multiplicador, contador = 0, resultadoTabuada;

// variáveis que serão utilizadas para realizar as operações de adição e subtração
let numero1, numero2, resultadoAdicao, resultadoSubtracao;

// variáveis que serão utilizadas para realizar as operações de divisão
let dividendo, divisor, resultadoDivisao;

// variável que será exclusivamente utilizada par escolher a opção do usuário
let opcao;

console.log("\nOpção 1: Opeação de tabuada");
console.log("Opção 2: Operação de adição");
console.log("Opção 3: Operação de subtração");
console.log("Opção 4: Operação de divisão");

opcao = parseInt(entradaDados.question("\nEscolha qual opção deseja executar: "));

switch(opcao){
    case 1:
        multiplicador = parseInt(entradaDados.question("\nVocê escolheu a tabuada. Digite um número de 1 a 10: "));
        console.log("\nTabuada do número "+multiplicador+'\n');

        while(contador <= 10){
            resultadoTabuada = multiplicador * contador;
            console.log(multiplicador+' x '+contador+' = '+resultadoTabuada);
            contador = contador + 1;
        }
        
        break;
    
    case 2:
        console.log("\nVocê escolheu a operação de adição\n");

        numero1 = parseInt(entradaDados.question("Digite o primeiro número: "));
        numero2 = parseInt(entradaDados.question("Digite o segundo número: "))

        resultadoAdicao = numero1 + numero2; 
        console.log("\nO resultado da soma é: "+resultadoAdicao);

        break;

    case 3:
        console.log("\n Você escolheu a operação de subtração\n");

        numero1 = parseInt(entradaDados.question("Digite o primeiro número: "));
        numero2 = parseInt(entradaDados.question("Digite o segundo número: "));

        resultadoSubtracao = numero1 - numero2;
        console.log("O resultado da subtração é: "+resultadoSubtracao);
            
        break;

    case 4:
        console.log("\nVocê escolheu a operação de divisão\n");

        dividendo = parseFloat(entradaDados.question("Digite o dividendo: ")).toFixed(1);
        divisor = parseFloat(entradaDados.question("Digite o divisor: ")).toFixed(1);

        if(divisor > 0){
            resultadoDivisao = dividendo / divisor;
            console.log("\nO resultado da divisão é: "+resultadoDivisao);
        }
        else{
            console.log("\nO primeiro número deve ser maior que 0. Tente novamente.");
        }

        break;

    default:
        console.log("Opção inválida!");
};