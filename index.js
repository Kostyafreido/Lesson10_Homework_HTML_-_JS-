const movies = [
  {
    id: 1,
    title: "Guardians of the Galaxy Vol. 3",
    genre: ["drama", "comedy", "adventure"],
    description:
      "Still reeling from the loss of Gamora, Peter Quill must rally his team to defend the universe and protect one of their own. If the mission is not completely successful, it could possibly lead to the end of the Guardians as we know them.",
    actors: [
      {
        name: "Chris Pratt",
        birthyear: 1979,
        country: "USA",
      },
      {
        name: "Bradley Cooper",
        birthyear: 1975,
        country: "USA",
      },
      {
        name: "Zoe Saldana",
        birthyear: 1978,
        country: "Mexico",
      },
    ],
    similar: ["Plane", "Sharper"],
    rating: 8.4,
  },
  {
    id: 2,
    title: "Plane",
    genre: ["thriller", "crime", "adventure"],
    description:
      "Pilot Brodie Torrance saves passengers from a lightning strike by making a risky landing on a war-torn island -- only to find that surviving the landing was just the beginning. When dangerous rebels take most of the passengers hostage, the only person Torrance can count on for help is Louis Gaspare, an accused murderer who was being transported by the FBI.",
    actors: [
      {
        name: "Gerard Butler",
        birthyear: 1969,
        country: "Scotland",
      },
      {
        name: "Mike Colter",
        birthyear: 1976,
        country: "USA",
      },
      {
        name: "Lilly Krug",
        birthyear: 2001,
        country: "Germany",
      },
    ],
    similar: ["Guardians of the Galaxy Vol. 3", "Sharper"],
    rating: 6.1,
  },
  {
    id: 3,
    title: "Sharper",
    genre: ["drama", "thriller", "crime"],
    description:
      "Motivations are suspect, and expectations are turned upside down, as a con artist takes on Manhattan billionaires.",
    actors: [
      {
        name: "Julianne Moore",
        birthyear: 1960,
        country: "United Kingdom",
      },
      {
        name: "Sebastian Stan",
        birthyear: 1982,
        country: "Romania",
      },
      {
        name: "Briana Middleton",
        birthyear: null,
        country: "USA",
      },
    ],
    similar: ["Guardians of the Galaxy Vol. 3", "Plane"],
    rating: 3.3,
  },
];


const currentYear = new Date().getFullYear();   // определяем текущий год с помощью Date()

const updatedMovies = movies.map((movie) => {   // перебираем каждый объект movie в массиве movies
  const updatedActors = movie.actors.map((actor) => {   // снова с помощью map перебираем уже каждый объект actor в свойстве actors
    const age = currentYear - actor.birthyear;    // производим вычитание года рождения каждого актёра из переменной, куда записали текущий год, и кладём получившееся в переменную age
    return { ...actor, age };   // с помощью ("...") добавляем к объекту actor обновлённое свойство age и возвращаем
  });
  return { ...movie, actors: updatedActors }; // теперь также создаём новый объект movie со свойством actors, в котором содержатся обновлённые объекты actor. Всё это сохраняем в обновлённый массив фильмов updatedMovies
});

console.log(updatedMovies);   // выводим теперь всё в консоль





// const moviesByGenre = [
//   {
//     name: "Thriller",
//     movies: ["The Devil All the Time", "Nightcrawler"]
//   },
//   {
//     name: "Crime",
//     movies: ["Dog day afternoon", "The Untouchables"]
//   },
//   {
//     name: "Adventure",
//     movies: ["Guardians of the Galaxy Vol. 3", "Plane"]
//   },
//   {
//     name: "Comedy",
//     movies: ["Hot Fuzz", "The Naked Gun: From the Files of Police Squad!"]
//   },
//   {
//     name: "Drama",
//     movies: ["Calvary", "Good Will Hunting"]
//   },
//   {
//     name: "Action",
//     movies: ["Die Hard", "The Matrix"]
//   }
// ];
