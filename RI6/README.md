# RI6 — Calculadora CLI em TypeScript (POO)

Projeto em TypeScript que implementa uma calculadora de linha de comando (CLI) utilizando os conceitos de POO: herança, encapsulamento e polimorfismo.

## Objetivos

### Parte 1 — Operações Básicas
Cada operação é implementada por uma classe que herda da classe abstrata `Calculo`:

| Classe          | Operação       |
|-----------------|----------------|
| `Soma`          | adição         |
| `Subtracao`     | subtração      |
| `Multiplicacao` | multiplicação  |
| `Divisao`       | divisão        |
| `Exponenciacao` | potenciação    |
| `Radiciacao`    | radiciação     |

Todas as operações recebem dois números fornecidos pelo usuário.

### Parte 2 — Bhaskara
A classe `Bhaskara` calcula as raízes de uma equação do 2º grau. O usuário informa os coeficientes `a`, `b` e `c`.

## Estrutura de Arquivos

```
RI6/
├── Calculo.ts      # classe abstrata base
├── Operacoes.ts    # Soma, Subtracao, Multiplicacao, Divisao, Exponenciacao, Radiciacao
├── Bhaskara.ts     # cálculo de raízes via fórmula de Bhaskara
├── index.ts        # CLI com menu interativo (readline)
└── package.json
```

## Como executar

```bash
npx ts-node index.ts
```

## Exemplo de uso

```
--- Calculadora CLI OO ---
1. Soma
2. Subtração
3. Multiplicação
4. Divisão
5. Exponenciação
6. Radiciação
7. Raízes (Bhaskara)
8. Sair
Escolha uma opção: 1
Digite o primeiro número: 10
Digite o segundo número: 5
Resultado: 15
```

## Tecnologias

- TypeScript
- Node.js (módulo `readline`)
