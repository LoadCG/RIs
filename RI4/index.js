import { Telefone, Endereco, Cliente, Empresa } from './entidades.js';

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
