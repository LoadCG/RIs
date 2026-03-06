import * as readline from 'readline';
import { Soma, Subtracao, Multiplicacao, Divisao, Exponenciacao, Radiciacao } from './Operacoes';
import Bhaskara from './Bhaskara';
import Calculo from './Calculo';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function perguntar(pergunta: string): Promise<string> {
    return new Promise(resolve => rl.question(pergunta, resolve));
}

async function menu() {
    console.log('\n--- Calculadora CLI OO ---');
    console.log('1. Soma');
    console.log('2. Subtração');
    console.log('3. Multiplicação');
    console.log('4. Divisão');
    console.log('5. Exponenciação');
    console.log('6. Radiciação');
    console.log('7. Raízes (Bhaskara)');
    console.log('8. Sair');

    const opcao = await perguntar('Escolha uma opção: ');

    if (opcao === '8') {
        console.log('Saindo...');
        rl.close();
        return;
    }

    if (['1', '2', '3', '4', '5', '6'].includes(opcao)) {
        const num1Str = await perguntar('Digite o primeiro número: ');
        const num2Str = await perguntar('Digite o segundo número: ');
        
        const num1 = parseFloat(num1Str);
        const num2 = parseFloat(num2Str);

        let operacao: Calculo;

        switch (opcao) {
            case '1': operacao = new Soma(); break;
            case '2': operacao = new Subtracao(); break;
            case '3': operacao = new Multiplicacao(); break;
            case '4': operacao = new Divisao(); break;
            case '5': operacao = new Exponenciacao(); break;
            case '6': operacao = new Radiciacao(); break;
            default: operacao = new Soma();
        }

        console.log(`Resultado: ${operacao.calcular(num1, num2)}`);
    } else if (opcao === '7') {
        const aStr = await perguntar('Digite o valor de a: ');
        const bStr = await perguntar('Digite o valor de b: ');
        const cStr = await perguntar('Digite o valor de c: ');

        const a = parseFloat(aStr);
        const b = parseFloat(bStr);
        const c = parseFloat(cStr);

        const bhaskara = new Bhaskara();
        const resultado = bhaskara.calcular(a, b, c);

        if (Array.isArray(resultado)) {
            console.log(`Raízes: x1 = ${resultado[0]}, x2 = ${resultado[1]}`);
        } else {
            console.log(`Resultado: ${resultado}`);
        }
    } else {
        console.log('Opção inválida.');
    }

    await menu();
}

menu();
