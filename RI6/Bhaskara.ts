import Calculo from "./Calculo";

export default class Bhaskara extends Calculo {
    public calcular(a: number, b: number, c: number): number[] | string {
        if (a === 0) {
            return "O coeficiente 'a' deve ser diferente de zero para uma equação do 2º grau.";
        }

        const delta = (b * b) - (4 * a * c);

        if (delta < 0) {
            return "A equação não possui raízes reais (delta negativo).";
        }

        const raizDelta = Math.sqrt(delta);
        const x1 = (-b + raizDelta) / (2 * a);
        const x2 = (-b - raizDelta) / (2 * a);

        return [x1, x2];
    }
}
