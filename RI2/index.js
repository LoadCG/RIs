function Endereco(estado, cidade, rua, numero) {
  this._estado = estado;
  this._cidade = cidade;
  this._rua = rua;
  this._numero = numero;

  Object.defineProperty(this, 'estado', {
    get: function() { return this._estado; },
    set: function(val) { this._estado = val; }
  });
  Object.defineProperty(this, 'cidade', {
    get: function() { return this._cidade; },
    set: function(val) { this._cidade = val; }
  });
  Object.defineProperty(this, 'rua', {
    get: function() { return this._rua; },
    set: function(val) { this._rua = val; }
  });
  Object.defineProperty(this, 'numero', {
    get: function() { return this._numero; },
    set: function(val) { this._numero = val; }
  });

  this.getCaixaAlta = function(attr) { return this['_' + attr].toString().toUpperCase(); };
  this.getCaixaBaixa = function(attr) { return this['_' + attr].toString().toLowerCase(); };
}

function TelefoneCelular(ddd, numero) {
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

function Cliente(nome, telefoneCelular, email, endereco) {
  this._nome = nome;
  this._telefoneCelular = telefoneCelular;
  this._email = email;
  this._endereco = endereco;

  Object.defineProperty(this, 'nome', {
    get: function() { return this._nome; },
    set: function(val) { this._nome = val; }
  });
  Object.defineProperty(this, 'telefoneCelular', {
    get: function() { return this._telefoneCelular; },
    set: function(val) { this._telefoneCelular = val; }
  });
  Object.defineProperty(this, 'email', {
    get: function() { return this._email; },
    set: function(val) { this._email = val; }
  });
  Object.defineProperty(this, 'endereco', {
    get: function() { return this._endereco; },
    set: function(val) { this._endereco = val; }
  });

  this.getCaixaAlta = function(attr) { return this['_' + attr].toString().toUpperCase(); };
  this.getCaixaBaixa = function(attr) { return this['_' + attr].toString().toLowerCase(); };

  Object.defineProperty(this, 'descricao', {
    get: function() {
      return "---------------\n"
        + "Informações do Cliente:\n"
        + this.nome + "\n"
        + "---------------\n"
        + "---------------\n"
        + "Telefone:\n"
        + "DDD: " + this.telefoneCelular.ddd + "\n"
        + "Número: " + this.telefoneCelular.numero + "\n"
        + "---------------\n"
        + "Endereço:\n"
        + "Rua: " + this.endereco.rua + "\n"
        + "Número: " + this.endereco.numero + "\n"
        + "Cidade: " + this.endereco.cidade + "\n"
        + "Estado: " + this.endereco.estado + "\n"
        + "---------------";
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

// --- Testes ---
let telefone = new TelefoneCelular('11', '999999999')
let endereco = new Endereco('SP', 'São Paulo', 'Av. Paulista', '987')
let cliente = new Cliente('Carlos Conrado Heinz', telefone, 'carlos.conrado@app.com', endereco)

console.log(cliente.descricao)

console.log('\nTeste caixa alta (nome):', cliente.getCaixaAlta('nome'));
console.log('Teste caixa baixa (email):', cliente.getCaixaBaixa('email'));

// --- Ordenação ---
const clientes = [
  new Cliente('Zeno', new TelefoneCelular('12', '98888-7777'), 'zeno@email.com',
    new Endereco('SP', 'São José dos Campos', 'Av Cassiano Ricardo', '100')),
  new Cliente('Amanda', new TelefoneCelular('12', '97777-6666'), 'amanda@email.com',
    new Endereco('SP', 'São José dos Campos', 'Av São João', '200')),
  new Cliente('Carlos', new TelefoneCelular('12', '96666-5555'), 'carlos@email.com',
    new Endereco('SP', 'São José dos Campos', 'Av Doutor Adhemar de Barros', '300'))
];

console.log('\n--- ORDENAÇÃO DE CLIENTES ---');
const clientesOrdenados = ordenarClientesPorNome(clientes);
clientesOrdenados.forEach(function(c, index) {
  console.log((index + 1) + '. ' + c.nome);
});
