# RI3 — Construindo Objetos com Classes ES6

Projeto em JavaScript que pratica a criação de objetos com classes ES6, encapsulamento via atributos privados e uso de `Set` para coleções.

## Objetivos

### Parte 1 — Classes e Encapsulamento
- Classes `Cliente`, `Empresa`, `Telefone` e `Endereco`
- `Cliente` possui `#cpf` como atributo privado (imutável após criação)
- `Empresa` possui `#cnpj` como atributo privado (imutável após criação)
- `Telefone` e `Endereco` não possuem atributos privados
- Getters para atributos privados; getters e setters para os demais
- Métodos `getCaixaAlta(attr)` e `getCaixaBaixa(attr)`

### Parte 2 — Testes
- Criação de uma empresa com endereço e 2 telefones
- Criação de 5 clientes, cada um com endereço e 2 telefones
- Clientes adicionados ao `Set` de clientes da empresa

### Parte 3 — Descrição
- Método `detalhe()` na classe `Empresa` que imprime razão social, nome fantasia e dados de cada cliente

## Estrutura das Classes

```js
class Telefone { constructor(ddd, numero) }
class Endereco  { constructor(estado, cidade, rua, numero) }
class Cliente   { #cpf; constructor(nome, cpf, endereco) }
class Empresa   { #cnpj; constructor(razaoSocial, nomeFantasia, cnpj, endereco) }
```

## Como executar

```bash
node index.js
```

## Tecnologias

- JavaScript (Node.js)
