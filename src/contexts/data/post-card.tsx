// data/post-cards.ts
export interface PostCard {
  id: number
  caption: string
  genre: string
  path: string
  imageUrl: string
  postedAt: string
  likes: number
  comments: number
  readingTime: string,
  urlPost: string
}

export const postCards: PostCard[] = [
  {
    "id": 1,
    "caption": "O Magnífico Mundo de One Piece",
    "genre": "SHOUNEN",
    "path": "/shounen/o-magnifico-mundo-de-one-piece",
    "imageUrl": "https://cdn.selectgame.net/wp-content/uploads/2023/05/One-Piece-Capa-Anime-001-Luffy-Nami-Zoro-Usopp-Sanji.webp",
    "postedAt": "2025-05-01",
    "likes": 0,
    "comments": 0,
    "readingTime": "2 min",
    "urlPost": "/shounen/o-magnifico-mundo-de-one-piece"
  },
  {
    "id": 2,
    "caption": "A Alma da Floresta em Somali and the Forest Spirit",
    "genre": "FANTASY",
    "path": "/fantasy/a-alma-da-floresta-em-somali-and-the-forest-spirit",
    "imageUrl": "https://cosmonerd.com.br/wp-content/uploads/2020/12/cosmonerd-somali-and-the-forest-spirit-crunchyroll.png",
    "postedAt": "2025-05-03",
    "likes": 0,
    "comments": 0,
    "readingTime": "3 min",
    "urlPost": "/fantasy/a-alma-da-floresta-em-somali-and-the-forest-spirit"
  },
  {
    "id": 3,
    "caption": "A Busca pela Verdade em Fullmetal Alchemist: Brotherhood",
    "genre": "SHOUNEN",
    "path": "/shounen/a-busca-pela-verdade-em-fullmetal-alchemist-brotherhood",
    "imageUrl": "https://m.media-amazon.com/images/S/pv-target-images/c912a1ce1d58e50f37495f640cb61839c7183adb78470593267cabaedf4fd3c8.jpg",
    "postedAt": "2025-05-05",
    "likes": 0,
    "comments": 0,
    "readingTime": "4 min",
    "urlPost": "/shounen/a-busca-pela-verdade-em-fullmetal-alchemist-brotherhood"
  },
  {
    "id": 4,
    "caption": "A Jornada Ninja de Naruto Uzumaki",
    "genre": "SHOUNEN",
    "path": "/shounen/a-jornada-ninja-de-naruto-uzumaki",
    "imageUrl": "https://cdn.sistemawbuy.com.br/arquivos/9eb6ebeb155e90e44b2cf7cdf2ddbb65/produtos/6519b273826b3/naruto-06-6519b273b2614.jpg",
    "postedAt": "2025-05-07",
    "likes": 0,
    "comments": 0,
    "readingTime": "3 min",
    "urlPost": "/shounen/a-jornada-ninja-de-naruto-uzumaki"
  },
  {
    "id": 5,
    "caption": "A Doçura de March Comes in Like a Lion",
    "genre": "SLICE OF LIFE",
    "path": "/slice-of-life/a-docura-de-march-comes-in-like-a-lion",
    "imageUrl": "https://cosmonerd.com.br/wp-content/uploads/2019/05/March-Comes-like-a-Lion--jpg.webp",
    "postedAt": "2025-05-09",
    "likes": 0,
    "comments": 0,
    "readingTime": "3 min",
    "urlPost": "/slice-of-life/a-docura-de-march-comes-in-like-a-lion"
  },
  {
    "id": 6,
    "caption": "A Luta pela Liberdade em Attack on Titan",
    "genre": "SHOUNEN",
    "path": "/shounen/a-luta-pela-liberdade-em-attack-on-titan",
    "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiTiAYwfg94iJAw6CbG2-bCyqpXn0zQHH25A&s",
    "postedAt": "2025-05-11",
    "likes": 0,
    "comments": 0,
    "readingTime": "4 min",
    "urlPost": "/shounen/a-luta-pela-liberdade-em-attack-on-titan"
  },
  {
    "id": 7,
    "caption": "A Aventura Digital de Digimon Adventure",
    "genre": "ISEKAI",
    "path": "/isekai/a-aventura-digital-de-digimon-adventure",
    "imageUrl": "https://nerdizmo.ig.com.br/wp-content/uploads/2022/05/digimon-lista-melhores-temporadas.jpg",
    "postedAt": "2025-05-13",
    "likes": 0,
    "comments": 0,
    "readingTime": "3 min",
    "urlPost": "/isekai/a-aventura-digital-de-digimon-adventure"
  },
  {
    "id": 8,
    "caption": "A Lâmina que Extermina Demônios: Demon Slayer",
    "genre": "SHOUNEN",
    "path": "/shounen/a-lamina-que-extermina-demonios-demon-slayer",
    "imageUrl": "https://tintaeprosa.com.br/wp-content/uploads/2024/02/Kimetsu-no-Yaiba.png",
    "postedAt": "2025-05-15",
    "likes": 0,
    "comments": 0,
    "readingTime": "3 min",
    "urlPost": "/shounen/a-lamina-que-extermina-demonios-demon-slayer"
  },

  {
    "id": 9,
    "caption": "A Aventura Mágica de Fairy Tail",
    "genre": "SHOUNEN",
    "path": "/shounen/a-aventura-magica-de-fairy-tail",
    "imageUrl": "https://m.media-amazon.com/images/S/pv-target-images/e94691913586a41106c0c1a6ab59cb7c1c9049ef9a7969b5036b8c23fdc42919.jpg",
    "postedAt": "2025-05-17",
    "likes": 0,
    "comments": 0,
    "readingTime": "3 min",
    "urlPost": "/shounen/a-aventura-magica-de-fairy-tail"
  },
  {
    "id": 10,
    "caption": "A Escuridão e o Mistério em Hellsing",
    "genre": "HORROR",
    "path": "/horror/a-escuridao-e-o-misterio-em-hellsing",
    "imageUrl": "https://terrasdealem.wordpress.com/wp-content/uploads/2015/05/alucard-hellsing-full-322226.jpg?w=1024&h=400&crop=1",
    "postedAt": "2025-05-19",
    "likes": 0,
    "comments": 0,
    "readingTime": "3 min",
    "urlPost": "/horror/a-escuridao-e-o-misterio-em-hellsing"
  },
  {
    "id": 11,
    "caption": "O Herói Careca de One-Punch Man",
    "genre": "SHOUNEN",
    "path": "/shounen/o-heroi-careca-de-one-punch-man",
    "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQha0GtaXp3ZPbA_44BonwvYRIwznwqDSoqNA&s",
    "postedAt": "2025-05-21",
    "likes": 0,
    "comments": 0,
    "readingTime": "3 min",
    "urlPost": "/shounen/o-heroi-careca-de-one-punch-man"
  },

  {
    "id": 12,
    "caption": "A Gangue de Tokyo Revengers",
    "genre": "SHOUNEN",
    "path": "/shounen/a-gangue-de-tokyo-revengers",
    "imageUrl": "https://wallpapers.com/images/hd/tokyo-revengers-pictures-ky84600g1zvryv2o.jpg",
    "postedAt": "2025-05-23",
    "likes": 0,
    "comments": 0,
    "readingTime": "4 min",
    "urlPost": "/shounen/a-gangue-de-tokyo-revengers"
  },
  {
    "id": 13,
    "caption": "A Brutalidade de Berserk",
    "genre": "SEINEN",
    "path": "/seinen/a-brutalidade-de-berserk",
    "imageUrl": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhVwkdolcIL9EEJy7QuNthgszjhRk_CjSCY_KNlWTtcvX1S7kdzvzL66r6jvecwx4K7KYm7rKciLE1q57RzexWEwyVR9QG-GbcIZUEcM0hetitUMZngAL56UTZuiR8NSHyYQKZ9dclINLFt/s1600/que+imagem+fodona+da+porra.jpg",
    "postedAt": "2025-05-25",
    "likes": 0,
    "comments": 0,
    "readingTime": "3 min",
    "urlPost": "/seinen/a-brutalidade-de-berserk"
  },
  {
    "id": 14,
    "caption": "O Mundo Sombrio dos Shinigamis em Bleach",
    "genre": "SHOUNEN",
    "path": "/shounen/o-mundo-sombrio-dos-shinigamis-em-bleach",
    "imageUrl": "https://paratyvip.com.br/wp-content/uploads/2024/11/Ichigo-from-Bleach-scaled-1.webp",
    "postedAt": "2025-05-27",
    "likes": 0,
    "comments": 0,
    "readingTime": "3 min",
    "urlPost": "/shounen/o-mundo-sombrio-dos-shinigamis-em-bleach"
  },
  {
    "id": 15,
    "caption": "A Ascensão dos Heróis em My Hero Academia",
    "genre": "SHOUNEN",
    "path": "/shounen/a-ascensao-dos-herois-em-my-hero-academia",
    "imageUrl": "https://gqcanimes.com.br/wp-content/uploads/2021/12/Boku-no-Hero-Academia-WORLD-HEROS-MISSION-GQCA-cp.jpg",
    "postedAt": "2025-05-29",
    "likes": 0,
    "comments": 0,
    "readingTime": "4 min",
    "urlPost": "/shounen/a-ascensao-dos-herois-em-my-hero-academia"
  },
  {
    "id": 16,
    "caption": "O Universo de Poder de Dragon Ball",
    "genre": "SHOUNEN",
    "path": "/shounen/o-universo-de-poder-de-dragon-ball",
    "imageUrl": "https://img.odcdn.com.br/wp-content/uploads/2024/10/imagem_2024-10-28_093248102.png",
    "postedAt": "2025-05-31",
    "likes": 0,
    "comments": 0,
    "readingTime": "3 min",
    "urlPost": "/shounen/o-universo-de-poder-de-dragon-ball"
  },
  {
    "id": 17,
    "caption": "A Inovação Mecânica em Patlabor",
    "genre": "MECHA",
    "path": "/mecha/a-inovacao-mecanica-em-patlabor",
    "imageUrl": "https://animenew.com.br/wp-content/uploads/2024/09/Patlabor-EZY-Novo-anime-ganha-imagem-com-estreia-para-2026-jpg.webp",
    "postedAt": "2025-06-02",
    "likes": 0,
    "comments": 0,
    "readingTime": "3 min",
    "urlPost": "/mecha/a-inovacao-mecanica-em-patlabor"
  },
  {
    "id": 18,
    "caption": "A Jornada de Yona of the Dawn",
    "genre": "SHOJO",
    "path": "/shojo/a-jornada-de-yona-of-the-dawn",
    "imageUrl": "https://m.media-amazon.com/images/S/pv-target-images/dcb727b9393969200458bb360c7d706560b28924c38a748a7e9815a1a468fd66.jpg",
    "postedAt": "2025-06-04",
    "likes": 0,
    "comments": 0,
    "readingTime": "2 min",
    "urlPost": "/shojo/a-jornada-de-yona-of-the-dawn"
  },


  {
    "id": 19,
    "caption": "O Mundo de Maldições em Jujutsu Kaisen",
    "genre": "SHOUNEN",
    "path": "/shounen/o-mundo-de-maldicoes-em-jujutsu-kaisen",
    "imageUrl": "https://criticalhits.com.br/wp-content/uploads/2024/07/jujutsu-kaisen-s-main-cast.webp",
    "postedAt": "2025-06-06",
    "likes": 0,
    "comments": 0,
    "readingTime": "3 min",
    "urlPost": "/shounen/o-mundo-de-maldicoes-em-jujutsu-kaisen"
  },
  {
    "id": 20,
    "caption": "O Mundo de Black Clover",
    "genre": "SHOUNEN",
    "path": "/shounen/o-mundo-de-black-clover",
    "imageUrl": "https://nerdtime.com.br/wp-content/uploads/2024/08/1294623.png",
    "postedAt": "2025-06-08",
    "likes": 0,
    "comments": 0,
    "readingTime": "3 min",
    "urlPost": "/shounen/o-mundo-de-black-clover"
  }, {
    "id": 21,
    "caption": "A Busca Incansável em Hunter x Hunter",
    "genre": "SHOUNEN",
    "path": "/shounen/a-busca-incansavel-em-hunter-x-hunter",
    "imageUrl": "https://cdn.ome.lt/Q00bhXTZ5XBheu0Z-zNKmwiBvBY=/1200x630/smart/extras/conteudos/456412_gyyj_CVoBDLO.jpg",
    "postedAt": "2025-06-10",
    "likes": 0,
    "comments": 0,
    "readingTime": "4 min",
    "urlPost": "/shounen/a-busca-incansavel-em-hunter-x-hunter"
  }]