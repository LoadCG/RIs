import Calculo from "./Calculo";

export class Soma extends Calculo {
    public calcular(numero1: number, numero2: number): number {
        return numero1 + numero2;
    }
}

export class Subtracao extends Calculo {
    public calcular(numero1: number, numero2: number): number {
        return numero1 - numero2;
    }
}

export class Multiplicacao extends Calculo {
    public calcular(numero1: number, numero2: number): number {
        return numero1 * numero2;
    }
}

export class Divisao extends Calculo {
    public calcular(numero1: number, numero2: number): number | string {
        if (numero2 === 0) return "Erro: Divisão por zero";
        return numero1 / numero2;
    }
}

export class Exponenciacao extends Calculo {
    public calcular(base: number, expoente: number): number {
        return Math.pow(base, expoente);
    }
}

export class Radiciacao extends Calculo {
    public calcular(numero: number, indice: number = 2): number | string {
        if (numero < 0 && indice % 2 === 0) return "Erro: Raiz par de número negativo não é real";
        return Math.pow(numero, 1 / indice);
    }
}
