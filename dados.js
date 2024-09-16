let dados = [
    {
        titulo: "Pikachu",
        descricao: "Pikachu é um Pokémon do tipo Elétrico e é conhecido como a mascote da franquia Pokémon. É famoso por sua habilidade de usar ataques elétricos como Thunderbolt e Thunder.",
        link: "https://pt.wikipedia.org/wiki/Pikachu",
        tags: "elétrico mascot"
    },
    {
        titulo: "Charizard",
        descricao: "Charizard é um Pokémon do tipo Fogo/Voador. É a forma evoluída de Charmander e é conhecido por seu poder de fogo e suas habilidades aéreas.",
        link: "https://pt.wikipedia.org/wiki/Charizard",
        tags: "fogo voador dragão"
    },
    {
        titulo: "Bulbasaur",
        descricao: "Bulbasaur é um Pokémon do tipo Grama/Veneno e é um dos Pokémon iniciais da região de Kanto. É conhecido por sua planta nas costas que cresce conforme evolui.",
        link: "https://pt.wikipedia.org/wiki/Bulbasaur",
        tags: "grama veneno inicial"
    },
    {
        titulo: "Squirtle",
        descricao: "Squirtle é um Pokémon do tipo Água e é um dos Pokémon iniciais da região de Kanto. É conhecido por sua habilidade em nadar e seu ataque de água.",
        link: "https://pt.wikipedia.org/wiki/Squirtle",
        tags: "água inicial"
    },
    {
        titulo: "Jigglypuff",
        descricao: "Jigglypuff é um Pokémon do tipo Normal/Fada. É conhecido por sua habilidade de fazer os adversários dormir ao cantar uma canção suave.",
        link: "https://pt.wikipedia.org/wiki/Jigglypuff",
        tags: "normal fada sono"
    },
    {
        titulo: "Meowth",
        descricao: "Meowth é um Pokémon do tipo Normal e é conhecido por ser um Pokémon que gosta de dinheiro. É famoso por suas habilidades de uso de moedas e sua capacidade de falar.",
        link: "https://pt.wikipedia.org/wiki/Meowth",
        tags: "normal dinheiro"
    },
    {
        titulo: "Mewtwo",
        descricao: "Mewtwo é um Pokémon do tipo Psíquico criado artificialmente. É um dos Pokémon lendários e é conhecido por seus poderes psíquicos extraordinários.",
        link: "https://pt.wikipedia.org/wiki/Mewtwo",
        tags: "psíquico lendário"
    },
    {
        titulo: "Lucario",
        descricao: "Lucario é um Pokémon do tipo Lutador/Metálico conhecido por suas habilidades de manipulação de aura. É popular por sua aparência de lobo e seu estilo de combate.",
        link: "https://pt.wikipedia.org/wiki/Lucario",
        tags: "lutador metálico aura"
    },
    {
        titulo: "Greninja",
        descricao: "Greninja é um Pokémon do tipo Água/Noturno conhecido por sua agilidade e habilidade em se camuflar. É a forma evoluída de Frogadier.",
        link: "https://pt.wikipedia.org/wiki/Greninja",
        tags: "água noturno camuflagem"
    },
    {
        titulo: "Eevee",
        descricao: "Eevee é um Pokémon do tipo Normal conhecido por sua capacidade de evoluir em várias formas diferentes, dependendo de fatores como a amizade ou o ambiente.",
        link: "https://en.wikipedia.org/wiki/Eevee",
        tags: "normal evolução"
    },
    {
        titulo: "Gengar",
        descricao: "Gengar é um Pokémon do tipo Fantasma/Venenoso conhecido por suas travessuras e seu corpo flutuante. É famoso por seu ataque de tipo Fantasma e sua habilidade de se esconder nas sombras.",
        link: "https://pt.wikipedia.org/wiki/Gengar",
        tags: "fantasma veneno travessuras"
    },
    {
        titulo: "Psyduck",
        descricao: "Psyduck é um Pokémon do tipo Água conhecido por suas dores de cabeça frequentes, que podem desencadear poderes psíquicos inesperados.",
        link: "https://pt.wikipedia.org/wiki/Psyduck",
        tags: "água psíquico dor de cabeça"
    },
    {
        titulo: "Articuno",
        descricao: "Articuno é um Pokémon lendário do tipo Gelo/Voar. É conhecido por sua habilidade de criar tempestades de neve e é um dos três pássaros lendários de Kanto.",
        link: "https://pt.wikipedia.org/wiki/Articuno",
        tags: "gelo voador lendário"
    },
    {
        titulo: "Zapdos",
        descricao: "Zapdos é um Pokémon lendário do tipo Elétrico/Voar conhecido por suas habilidades de controlar eletricidade e sua aparência de ave elétrica.",
        link: "https://pt.wikipedia.org/wiki/Zapdos",
        tags: "elétrico voador lendário"
    },
    {
        titulo: "Moltres",
        descricao: "Moltres é um Pokémon lendário do tipo Fogo/Voar. É conhecido por suas habilidades de controlar o fogo e sua aparência de ave flamejante.",
        link: "https://pt.wikipedia.org/wiki/Moltres",
        tags: "fogo voador lendário"
    },
    {
        titulo: "Groudon",
        descricao: "Groudon é um Pokémon lendário do tipo Terra conhecido por seu poder de controlar a terra e sua aparência de dinossauro gigante.",
        link: "https://pt.wikipedia.org/wiki/Groudon",
        tags: "terra lendário"
    },
    {
        titulo: "Kyogre",
        descricao: "Kyogre é um Pokémon lendário do tipo Água conhecido por seu poder de controlar o mar e suas habilidades de criar tempestades e ondas gigantes.",
        link: "https://pt.wikipedia.org/wiki/Kyogre",
        tags: "água lendário"
    },
    {
        titulo: "Rayquaza",
        descricao: "Rayquaza é um Pokémon lendário do tipo Dragão/Voar conhecido por sua habilidade de controlar o clima e sua aparência de serpente do céu.",
        link: "https://pt.wikipedia.org/wiki/Rayquaza",
        tags: "dragão voador lendário"
    },
    {
        titulo: "Solgaleo",
        descricao: "Solgaleo é um Pokémon lendário do tipo Metal/Psíquico conhecido como o 'Leão do Sol'. É famoso por sua aparência majestosa e seu poder de gerar luz solar.",
        link: "https://pt.wikipedia.org/wiki/Solgaleo",
        tags: "metal psíquico lendário"
    },
    {
        titulo: "Lunala",
        descricao: "Lunala é um Pokémon lendário do tipo Fantasma/Psíquico conhecido como a 'Luna de Prata'. É famoso por sua aparência lunar e seus poderes de controle da lua.",
        link: "https://pt.wikipedia.org/wiki/Lunala",
        tags: "fantasma psíquico lendário"
    },
    {
        titulo: "Zacian",
        descricao: "Zacian é um Pokémon lendário do tipo Fada conhecido como o 'Rei da Espada'. É famoso por sua habilidade de usar uma espada em sua boca e sua aparência de lobo elegante.",
        link: "https://pt.wikipedia.org/wiki/Zacian",
        tags: "fada lendário"
    },
    {
        titulo: "Zamazenta",
        descricao: "Zamazenta é um Pokémon lendário do tipo Metal conhecido como o 'Rei da Escudo'. É famoso por sua aparência de lobo e sua habilidade de usar um escudo.",
        link: "https://pt.wikipedia.org/wiki/Zamazenta",
        tags: "metal lendário"
    }
];
