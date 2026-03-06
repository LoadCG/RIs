class Telefone {
    constructor(ddd, numero) {
        this.ddd = ddd;
        this.numero = numero;
    }

    get ddd() { return this._ddd; }
    set ddd(value) { this._ddd = value; }

    get numero() { return this._numero; }
    set numero(value) { this._numero = value; }

    getCaixaAlta(attr) { return this['_' + attr] ? String(this['_' + attr]).toUpperCase() : ''; }
    getCaixaBaixa(attr) { return this['_' + attr] ? String(this['_' + attr]).toLowerCase() : ''; }
}

class Endereco {
    constructor(estado, cidade, rua, numero) {
        this.estado = estado;
        this.cidade = cidade;
        this.rua = rua;
        this.numero = numero;
    }

    get estado() { return this._estado; }
    set estado(value) { this._estado = value; }

    get cidade() { return this._cidade; }
    set cidade(value) { this._cidade = value; }

    get rua() { return this._rua; }
    set rua(value) { this._rua = value; }

    get numero() { return this._numero; }
    set numero(value) { this._numero = value; }

    getCaixaAlta(attr) { return this['_' + attr] ? String(this['_' + attr]).toUpperCase() : ''; }
    getCaixaBaixa(attr) { return this['_' + attr] ? String(this['_' + attr]).toLowerCase() : ''; }
}

class Cliente {
    #cpf;

    constructor(nome, cpf, endereco) {
        this.nome = nome;
        this.endereco = endereco;
        this.telefones = new Set();
        this.#cpf = cpf;
    }

    get cpf() {
        return this.#cpf;
    }

    get nome() { return this._nome; }
    set nome(value) { this._nome = value; }

    getCaixaAlta(attr) {
        if (attr === 'cpf') return this.#cpf.toUpperCase();
        return this['_' + attr] ? String(this['_' + attr]).toUpperCase() : '';
    }

    getCaixaBaixa(attr) {
        if (attr === 'cpf') return this.#cpf.toLowerCase();
        return this['_' + attr] ? String(this['_' + attr]).toLowerCase() : '';
    }

    adicionarTelefone(telefone) {
        this.telefones.add(telefone);
    }
}

class Empresa {
    #cnpj;

    constructor(razaoSocial, nomeFantasia, cnpj, endereco) {
        this.razaoSocial = razaoSocial;
        this.nomeFantasia = nomeFantasia;
        this.endereco = endereco;
        this.#cnpj = cnpj;
        this.clientes = new Set();
        this.telefones = new Set();
    }

    get cnpj() { return this.#cnpj; }

    get razaoSocial() { return this._razaoSocial; }
    set razaoSocial(value) { this._razaoSocial = value; }

    get nomeFantasia() { return this._nomeFantasia; }
    set nomeFantasia(value) { this._nomeFantasia = value; }

    getCaixaAlta(attr) {
        if (attr === 'cnpj') return this.#cnpj.toUpperCase();
        return this['_' + attr] ? String(this['_' + attr]).toUpperCase() : '';
    }

    getCaixaBaixa(attr) {
        if (attr === 'cnpj') return this.#cnpj.toLowerCase();
        return this['_' + attr] ? String(this['_' + attr]).toLowerCase() : '';
    }

    adicionarCliente(cliente) {
        this.clientes.add(cliente);
    }

    adicionarTelefone(telefone) {
        this.telefones.add(telefone);
    }

    detalhe() {
        let desc = `Razão Social: ${this.razaoSocial}\n`;
        desc += `Nome fantasia: ${this.nomeFantasia}\n`;
        desc += `--------------------------------\n`;

        for (const cliente of this.clientes) {
            desc += `Nome: ${cliente.nome}\n`;
            desc += `Estado: ${cliente.endereco.estado} `;
            desc += `cidade: ${cliente.endereco.cidade} `;
            desc += `rua: ${cliente.endereco.rua} `;
            desc += `numero: ${cliente.endereco.numero}\n`;

            for (const telefone of cliente.telefones) {
                desc += `ddd: ${telefone.ddd} numero: ${telefone.numero}\n`;
            }
            desc += `\n`;
        }
        return desc;
    }
}

// --- Testes e Instanciação ---
const endEmpresa = new Endereco('SP', 'São José dos Campos', 'Av Andrômeda', '1000');
const empresa = new Empresa('ABC LTDA', 'Mercado Online', '11.222.333/0001-44', endEmpresa);
empresa.adicionarTelefone(new Telefone('11', '3333-4444'));
empresa.adicionarTelefone(new Telefone('11', '5555-6666'));

const nomes = ['João', 'Gabriel', 'Maria', 'Ana', 'Carlos'];
for (let i = 0; i < nomes.length; i++) {
    const endCliente = new Endereco('SP', 'São José dos Campos', 'Av Andrômeda', `${i * 100 + 10}`);
    const cliente = new Cliente(nomes[i], `111.111.111-1${i}`, endCliente);
    cliente.adicionarTelefone(new Telefone(`1${i}`, '88888888'));
    cliente.adicionarTelefone(new Telefone(`1${i}`, '99999999'));
    empresa.adicionarCliente(cliente);
}

console.log(empresa.detalhe());
