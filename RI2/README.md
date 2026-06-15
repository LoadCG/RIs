# RI2 — Construindo Objetos com Funções Construtoras

Projeto em JavaScript que pratica a criação de objetos usando funções construtoras, métodos de acesso (get/set) e ordenação de coleções.

## Objetivos

### Parte 1 — Funções Construtoras e Métodos de Acesso
- Funções construtoras para os tipos `Cliente`, `TelefoneCelular` e `Endereco`
- Métodos `get` e `set` para cada atributo, definidos via `Object.defineProperty`
- Métodos `getCaixaAlta(attr)` e `getCaixaBaixa(attr)` para recuperar valores em maiúsculo/minúsculo
- Propriedade `descricao` (getter) que retorna as informações do cliente formatadas

### Parte 2 — Ordenação
- Função `ordenarClientesPorNome(clientes)` que recebe um Array de clientes e retorna um novo Array ordenado alfabeticamente pelo nome

## Estrutura dos Objetos

```js
// Construtor TelefoneCelular
new TelefoneCelular(ddd, numero)

// Construtor Endereco
new Endereco(estado, cidade, rua, numero)

// Construtor Cliente
new Cliente(nome, telefoneCelular, email, endereco)
```

## Saída esperada (`cliente.descricao`)

```
---------------
Informações do Cliente:
Carlos Conrado Heinz
---------------
---------------
Telefone:
DDD: 11
Número: 999999999
---------------
Endereço:
Rua: Av. Paulista
Número: 987
Cidade: São Paulo
Estado: SP
---------------
```

## Como executar

```bash
node index.js
```

## Tecnologias

- JavaScript (Node.js)
