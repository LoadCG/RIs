class Endereco {
    constructor(
        public numero: number,
        public rua: string,
        public bairro: string,
        public cidade: string
    ) {}
}

class Telefone {
    constructor(
        public ddd: string,
        public numero: string
    ) {}
}

class Funcionario {
    constructor(
        public nome: string,
        public matricula: string,
        public cpf: string,
        public endereco: Endereco,
        public telefone: Telefone
    ) {}
}

class Empresa {
    constructor(
        public funcionarios: Funcionario[],
        public endereco: Endereco,
        public razaoSocial: string,
        public nomeFantasia: string,
        public cnpj: string
    ) {}

    imprimirDetalhes(): void {
        console.log(`Razão social: ${this.razaoSocial}`);
        console.log(`Nome fantasia:${this.nomeFantasia}`);
        console.log(`cnpj: ${this.cnpj}`);
        console.log(`Endereco`);
        console.log(`Rua: ${this.endereco.rua} Bairro: ${this.endereco.bairro} Cidade: ${this.endereco.cidade} numero: ${this.endereco.numero}`);
        console.log(`funcionários:`);
        
        for (const func of this.funcionarios) {
            console.log(`Nome: ${func.nome}`);
            console.log(`matricula: ${func.matricula}`);
            console.log(`cpf: ${func.cpf}`);
            console.log(`Rua: ${func.endereco.rua} Bairro: ${func.endereco.bairro} Cidade: ${func.endereco.cidade} numero: ${func.endereco.numero}`);
        }
    }
}

// Instanciação e Execução
const endEmp = new Endereco(123, "Av. Paulista", "Jardim Paulista", "São Paulo");
const telFunc = new Telefone("11", "99999-9999");
const endFunc = new Endereco(123, "Av. Paulista", "Jardim Paulista", "São Paulo");
const tony = new Funcionario("Tony Stark", "123456789", "999.999.999-99", endFunc, telFunc);

const empresa = new Empresa(
    [tony],
    endEmp,
    "ABC LTDA",
    "Mercado online",
    "999-999-999-99"
);

empresa.imprimirDetalhes();
