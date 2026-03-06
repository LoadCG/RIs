// Objetos representando os Vingadores e Thanos
const homemDeFerro = {
  nome: 'Homem de Ferro',
  poder: 'Armadura Tecnológica',
  forca: 80,
  carisma: 95,
  resistencia: 85,
  velocidade: 90,
  inteligencia: 95,
  descricao: function() {
    return `Eu sou o ${this.nome}, meu poder é ${this.poder}.`;
  }
};

const capitaoAmerica = {
  nome: 'Capitão América',
  poder: 'Soro do Super Soldado e Escudo de Vibranium',
  forca: 70,
  carisma: 98,
  resistencia: 80,
  velocidade: 75,
  inteligencia: 75,
  descricao: function() {
    return `Sou o ${this.nome}. ${this.poder} me dão vantagem.`;
  }
};

const thor = {
  nome: 'Thor',
  poder: 'Deus do Trovão e Mjolnir',
  forca: 95,
  carisma: 80,
  resistencia: 95,
  velocidade: 85,
  inteligencia: 60,
  descricao: function() {
    return `Eu sou ${this.nome}, o ${this.poder}!`;
  }
};

const viuvaNegra = {
  nome: 'Viúva Negra',
  poder: 'Artes Marciais e Espionagem',
  forca: 40,
  carisma: 85,
  resistencia: 50,
  velocidade: 60,
  inteligencia: 85,
  descricao: function() {
    return `Sou a ${this.nome}, especialista em ${this.poder}.`;
  }
};

const hulk = {
  nome: 'Hulk',
  poder: 'Força Bruta e Raiva Infinita',
  forca: 100,
  carisma: 30,
  resistencia: 100,
  velocidade: 70,
  inteligencia: 40, // Bruce Banner seria 100
  descricao: function() {
    return `HULK ESMAGA! (${this.nome})`;
  }
};

const thanos = {
  nome: 'Thanos',
  poder: 'Titã Louco com Joias do Infinito',
  forca: 98,
  carisma: 70,
  resistencia: 98,
  velocidade: 80,
  inteligencia: 90,
  descricao: function() {
    return `Eu sou ${this.nome}. Inevitável.`;
  }
};

// Armazenamento em Array
const personagens = [homemDeFerro, capitaoAmerica, thor, viuvaNegra, hulk];

const atributos = ['forca', 'carisma', 'resistencia', 'velocidade', 'inteligencia'];

console.log('=== COMPARAÇÃO DE ATRIBUTOS: VINGADORES vs THANOS ===\n');

// Comparação
for (let i = 0; i < personagens.length; i++) {
  const heroi = personagens[i];
  
  console.log(`Comparando ${heroi.nome} e ${thanos.nome}:`);
  console.log(`${heroi.descricao()}`);
  console.log(`${thanos.descricao()}`);
  
  let stringHeroi = `${heroi.nome} (`;
  let stringThanos = `${thanos.nome} (`;
  
  for (let j = 0; j < atributos.length; j++) {
      const attr = atributos[j];
      const formatAttr = attr.charAt(0).toUpperCase() + attr.slice(1);
      
      stringHeroi += `${formatAttr}: ${heroi[attr]}`;
      stringThanos += `${formatAttr}: ${thanos[attr]}`;
      
      if (j < atributos.length - 1) {
          stringHeroi += ', ';
          stringThanos += ', ';
      }
  }
  stringHeroi += ')';
  stringThanos += ')';
  
  console.log(stringHeroi);
  console.log(stringThanos);

  for (let j = 0; j < atributos.length; j++) {
    const attr = atributos[j];
    const formatAttr = attr.charAt(0).toUpperCase() + attr.slice(1);
    
    if (heroi[attr] > thanos[attr]) {
      console.log(`${heroi.nome} vence em ${formatAttr}!`);
    } else if (thanos[attr] > heroi[attr]) {
      console.log(`${thanos.nome} vence em ${formatAttr}!`);
    } else {
      console.log(`Empate em ${formatAttr}!`);
    }
  }
  
  console.log('\n----------------------------------------------------\n');
}
