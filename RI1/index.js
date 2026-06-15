const homemDeFerro = {
  nome: 'Tony Stark',
  codinome: 'Homem de Ferro',
  armaPrincipal: 'Armadura Mark L',
  armaSecundaria: 'Repulsores',
  velocidade: 90,
  forca: 80,
  resistencia: 85,
  descricao: function() {
    return "Nome do personagem: " + this.nome + "\n"
      + "Codinome do personagem: " + this.codinome + "\n"
      + "Arma principal: " + this.armaPrincipal + "\n"
      + "Arma secundaria: " + this.armaSecundaria + "\n"
      + "Nível de força: " + this.forca + "\n"
      + "Nível de velocidade: " + this.velocidade + "\n"
      + "Nível de resistência: " + this.resistencia;
  }
};

const capitaoAmerica = {
  nome: 'Steve Rogers',
  codinome: 'Capitão América',
  armaPrincipal: 'Escudo de Vibranium',
  armaSecundaria: '',
  velocidade: 75,
  forca: 70,
  resistencia: 80,
  descricao: function() {
    return "Nome do personagem: " + this.nome + "\n"
      + "Codinome do personagem: " + this.codinome + "\n"
      + "Arma principal: " + this.armaPrincipal + "\n"
      + "Arma secundaria: " + this.armaSecundaria + "\n"
      + "Nível de força: " + this.forca + "\n"
      + "Nível de velocidade: " + this.velocidade + "\n"
      + "Nível de resistência: " + this.resistencia;
  }
};

const thor = {
  nome: 'Thor Odinson',
  codinome: 'Thor',
  armaPrincipal: 'Mjolnir',
  armaSecundaria: 'Stormbreaker',
  velocidade: 85,
  forca: 95,
  resistencia: 95,
  descricao: function() {
    return "Nome do personagem: " + this.nome + "\n"
      + "Codinome do personagem: " + this.codinome + "\n"
      + "Arma principal: " + this.armaPrincipal + "\n"
      + "Arma secundaria: " + this.armaSecundaria + "\n"
      + "Nível de força: " + this.forca + "\n"
      + "Nível de velocidade: " + this.velocidade + "\n"
      + "Nível de resistência: " + this.resistencia;
  }
};

const viuvaNegra = {
  nome: 'Natasha Romanoff',
  codinome: 'Viúva Negra',
  armaPrincipal: 'Pistola',
  armaSecundaria: 'Viuva Bites',
  velocidade: 60,
  forca: 40,
  resistencia: 50,
  descricao: function() {
    return "Nome do personagem: " + this.nome + "\n"
      + "Codinome do personagem: " + this.codinome + "\n"
      + "Arma principal: " + this.armaPrincipal + "\n"
      + "Arma secundaria: " + this.armaSecundaria + "\n"
      + "Nível de força: " + this.forca + "\n"
      + "Nível de velocidade: " + this.velocidade + "\n"
      + "Nível de resistência: " + this.resistencia;
  }
};

const hulk = {
  nome: 'Bruce Banner',
  codinome: 'Hulk',
  armaPrincipal: 'Força Bruta',
  armaSecundaria: '',
  velocidade: 70,
  forca: 100,
  resistencia: 100,
  descricao: function() {
    return "Nome do personagem: " + this.nome + "\n"
      + "Codinome do personagem: " + this.codinome + "\n"
      + "Arma principal: " + this.armaPrincipal + "\n"
      + "Arma secundaria: " + this.armaSecundaria + "\n"
      + "Nível de força: " + this.forca + "\n"
      + "Nível de velocidade: " + this.velocidade + "\n"
      + "Nível de resistência: " + this.resistencia;
  }
};

const thanos = {
  nome: 'Thanos',
  codinome: 'O Titã Louco',
  armaPrincipal: 'Manopla do Infinito',
  armaSecundaria: 'Espada Dupla',
  velocidade: 80,
  forca: 98,
  resistencia: 98,
  descricao: function() {
    return "Nome do personagem: " + this.nome + "\n"
      + "Codinome do personagem: " + this.codinome + "\n"
      + "Arma principal: " + this.armaPrincipal + "\n"
      + "Arma secundaria: " + this.armaSecundaria + "\n"
      + "Nível de força: " + this.forca + "\n"
      + "Nível de velocidade: " + this.velocidade + "\n"
      + "Nível de resistência: " + this.resistencia;
  }
};

const personagens = [homemDeFerro, capitaoAmerica, thor, viuvaNegra, hulk];

const atributos = ['forca', 'velocidade', 'resistencia'];

console.log('=== COMPARAÇÃO DE ATRIBUTOS: VINGADORES vs THANOS ===\n');

for (let i = 0; i < personagens.length; i++) {
  const heroi = personagens[i];

  console.log('----------------------------------------------------');
  console.log(heroi.descricao());
  console.log('');
  console.log(thanos.descricao());
  console.log('');

  for (let j = 0; j < atributos.length; j++) {
    const attr = atributos[j];
    const label = attr.charAt(0).toUpperCase() + attr.slice(1);

    if (heroi[attr] > thanos[attr]) {
      console.log(heroi.codinome + ' vence em ' + label + '!');
    } else if (thanos[attr] > heroi[attr]) {
      console.log(thanos.codinome + ' vence em ' + label + '!');
    } else {
      console.log('Empate em ' + label + '!');
    }
  }

  console.log('----------------------------------------------------\n');
}
