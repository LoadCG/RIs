function Endereco(rua, numero, bairro, cidade, estado) {
  this._rua = rua;
  this._numero = numero;
  this._bairro = bairro;
  this._cidade = cidade;
  this._estado = estado;

  Object.defineProperty(this, 'rua', {
    get: function() { return this._rua; },
    set: function(val) { this._rua = val; }
  });
  Object.defineProperty(this, 'numero', {
    get: function() { return this._numero; },
    set: function(val) { this._numero = val; }
  });
  Object.defineProperty(this, 'bairro', {
    get: function() { return this._bairro; },
    set: function(val) { this._bairro = val; }
  });
  Object.defineProperty(this, 'cidade', {
    get: function() { return this._cidade; },
    set: function(val) { this._cidade = val; }
  });
  Object.defineProperty(this, 'estado', {
    get: function() { return this._estado; },
    set: function(val) { this._estado = val; }
  });

  this.getCaixaAlta = function(attr) { return this['_' + attr].toString().toUpperCase(); };
  this.getCaixaBaixa = function(attr) { return this['_' + attr].toString().toLowerCase(); };
}

function Telefone(ddd, numero) {
  this._ddd = ddd;
  this._numero = numero;

  Object.defineProperty(this, 'ddd', {
    get: function() { return this._ddd; },
    set: function(val) { this._ddd = val; }
  });
  Object.defineProperty(this, 'numero', {
    get: function() { return this._numero; },
    set: function(val) { this._numero = val; }
  });

  this.getCaixaAlta = function(attr) { return this['_' + attr].toString().toUpperCase(); };
  this.getCaixaBaixa = function(attr) { return this['_' + attr].toString().toLowerCase(); };
}

function Cliente(nome, cpf, email, dddTelefone, numeroTelefone, rua, numeroCasa, bairro, cidade, estado) {
  this._nome = nome;
  this._cpf = cpf;
  this._email = email;
  this._telefone = new Telefone(dddTelefone, numeroTelefone);
  this._endereco = new Endereco(rua, numeroCasa, bairro, cidade, estado);

  Object.defineProperty(this, 'nome', {
    get: function() { return this._nome; },
    set: function(val) { this._nome = val; }
  });
  Object.defineProperty(this, 'cpf', {
    get: function() { return this._cpf; },
    set: function(val) { this._cpf = val; }
  });
  Object.defineProperty(this, 'email', {
    get: function() { return this._email; },
    set: function(val) { this._email = val; }
  });
  Object.defineProperty(this, 'telefone', {
    get: function() { return this._telefone; },
    set: function(val) { this._telefone = val; }
  });
  Object.defineProperty(this, 'endereco', {
    get: function() { return this._endereco; },
    set: function(val) { this._endereco = val; }
  });

  this.getCaixaAlta = function(attr) { return this['_' + attr].toString().toUpperCase(); };
  this.getCaixaBaixa = function(attr) { return this['_' + attr].toString().toLowerCase(); };

  Object.defineProperty(this, 'saidaFormatada', {
    get: function() {
      return `Cliente: ${this.nome}\nCPF: ${this.cpf}\nEmail: ${this.email}\nTelefone: (${this.telefone.ddd}) ${this.telefone.numero}\nEndereço: ${this.endereco.rua}, ${this.endereco.numero}, ${this.endereco.bairro}, ${this.endereco.cidade}, ${this.endereco.estado}`;
    }
  });
}

function ordenarClientesPorNome(clientes) {
  return [...clientes].sort(function(a, b) {
    if (a.nome.toLowerCase() < b.nome.toLowerCase()) return -1;
    if (a.nome.toLowerCase() > b.nome.toLowerCase()) return 1;
    return 0;
  });
}

// Criando instâncias de clientes
const clientes = [
  new Cliente('Zeno', '999.888.777-66', 'zeno@email.com', '12', '98888-7777', 'Av Cassiano Ricardo', '100', 'Jardim Aquarius', 'São José dos Campos', 'SP'),
  new Cliente('Amanda', '111.222.333-44', 'amanda@email.com', '12', '97777-6666', 'Av São João', '200', 'Jardim Esplanada', 'São José dos Campos', 'SP'),
  new Cliente('Carlos', '444.555.666-77', 'carlos@email.com', '12', '96666-5555', 'Av Doutor Adhemar de Barros', '300', 'Vila Adyana', 'São José dos Campos', 'SP')
];

console.log('--- TESTE DE SAÍDA FORMATADA ---');
console.log(clientes[0].saidaFormatada);
console.log('\nTeste Caixa Alta (Nome):', clientes[0].getCaixaAlta('nome'));

console.log('\n--- ORDENAÇÃO DE CLIENTES ---');
const clientesOrdenados = ordenarClientesPorNome(clientes);
clientesOrdenados.forEach((c, index) => {
  console.log(`${index + 1}. ${c.nome}`);
});
