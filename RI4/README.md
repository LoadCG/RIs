# RI4 — Construindo Módulos ES6

Projeto em JavaScript que pratica a construção de módulos ES6 com `export` e `import`, reutilizando o contexto de cadastro de clientes e empresas.

## Objetivos

### Parte 1 — Módulo de Entidades (`entidades.js`)
- Classes `Telefone`, `Endereco`, `Cliente` e `Empresa` exportadas como módulo ES6
- `Cliente` possui `#cpf` privado; `Empresa` possui `#cnpj` privado
- Getters para atributos privados; getters e setters para os demais
- Métodos `getCaixaAlta(attr)` e `getCaixaBaixa(attr)`

### Parte 2 — Módulo de Teste (`index.js`)
- Importa as classes via `import { ... } from './entidades.js'`
- Cria uma empresa com endereço e 2 telefones
- Cria 5 clientes, cada um com endereço e 2 telefones
- Adiciona os clientes à empresa

### Parte 3 — Descrição
- `empresa.detalhe()` imprime razão social, nome fantasia e os dados de cada cliente

## Estrutura de Arquivos

```
RI4/
├── entidades.js   # módulo com as classes (exportadas)
├── index.js       # módulo de teste (importa e usa as classes)
└── package.json   # "type": "module" para suporte a ES6 imports
```

## Como executar

```bash
node index.js
```

## Tecnologias

- JavaScript (Node.js) com módulos ES6
