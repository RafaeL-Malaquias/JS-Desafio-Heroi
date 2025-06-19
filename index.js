// array com nome e a quantidade de xp de cada herói
const herois = [
    {nome: "Flash", xp: 1000},
    {nome: "Lanterna Verde", xp: 2000},
    {nome: "Superman", xp: 3000},
    {nome: "Batman", xp: 4000},
    {nome: "Mulher Maravilha", xp: 5000},
    {nome: "Aquaman", xp: 6000},
    {nome: "Ciborgue", xp: 7000},
    {nome: "Gavião Arqueiro", xp: 8000},
    {nome: "Viúva Negra", xp: 9000},
    {nome: "Pantera Negra", xp: 10000},
    {nome: "Homem de Ferro", xp: 11000},
    {nome: "Capitão América", xp: 12000},
]



// função para classificar os heróis por xp
function classificarNivel(xp){
      if (xp < 1000) {
    return "Ferro";
  } else if (xp >= 1001 && xp <= 2000) {
    return "Bronze";
  } else if (xp >= 2001 && xp <= 5000) {
    return "Prata";
  } else if (xp >= 5001 && xp <= 7000) {
    return "Ouro";
  } else if (xp >= 7001 && xp <= 8000) {
    return "Platina";
  } else if (xp >= 8001 && xp <= 9000) {
    return "Ascendente";
  } else if (xp >= 9001 && xp <= 10000) {
    return "Imortal";
  } else if (xp >= 10001) {
    return "Radiante";
  } else {
    return "Nível desconhecido";
  }
}

// 

for (let i = 0; i < herois.length; i++) {
    const heroi = herois[i];
    const nivel = classificarNivel(heroi.xp);
    
    console.log(`${heroi.nome} - XP: ${heroi.xp} - Nível: ${nivel}`);
}
