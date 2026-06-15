# RI5 — Classes TypeScript a partir de Diagrama UML

Projeto em TypeScript que implementa classes baseadas em um diagrama UML, representando uma empresa com funcionários.

## Diagrama UML

```
Empresa
  - razaoSocial: string
  - nomeFantasia: string
  - cnpj: string
  - endereco: Endereco
  - funcionarios: Funcionario[]

Funcionario
  - nome: string
  - matricula: string
  - cpf: string
  - endereco: Endereco
  - telefone: Telefone

Telefone
  - ddd: string
  - numero: string

Endereco
  - numero: number
  - rua: string
  - bairro: string
  - cidade: string
```

## Objetivos

- Implementar as classes respeitando os tipos definidos no diagrama UML
- Criar um método `imprimirDetalhes()` na classe `Empresa` que exibe no terminal: razão social, nome fantasia, CNPJ, endereço e lista de funcionários com seus dados

## Saída esperada

```
Razão social: ABC LTDA
Nome fantasia:Mercado online
cnpj: 999-999-999-99
Endereco
Rua: Av. Paulista Bairro: Jardim Paulista Cidade: São Paulo numero: 123
funcionários:
Nome: Tony Stark
matricula: 123456789
cpf: 999.999.999-99
Rua: Av. Paulista Bairro: Jardim Paulista Cidade: São Paulo numero: 123
```

## Como executar

```bash
npx ts-node index.ts
```

## Tecnologias

- TypeScript
- Node.js
