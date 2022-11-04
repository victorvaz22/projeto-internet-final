const users = [
    {
      nome: "Abraão Farias",
      idade: 22,
      animal: "gato"
    },
    {
      nome: "Michelina Souza",
      idade: 12,
      animal: "Hamster"
    },
    {
      nome: "Venâncio Almeida",
      idade: 45,
      animal: ""
    },
    {
      nome: "Maria Silva",
      idade: 15,
      animal: "Coelho"
    },
    {
      nome: "José Eustáquio",
      idade: 32,
      animal: "Gato"
    },
  ]
  
  nomes = users.map(user => user.nome);
  
  nomeAbrev = nomes.map(user => user.split(" ").map(palavra => palavra[0]).join("."));

  amantesGatos = users.filter( pessoa => pessoa.animal.toUpperCase() === "GATO").map(pessoaComGato => pessoaComGato.nome);

  maiores = users.filter(user => user.idade >= 18).map( user => user.nome);

  console.log(nomes);
  console.log(nomeAbre);
  console.log(amantesGatos);
  console.log(maiores);
