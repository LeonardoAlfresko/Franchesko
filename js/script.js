"Use script";
 
const number0fFilms = +prompt('Сколько фильмов ви уже посмотрели?', '');

const personalMovieDB = {
    count: number0fFilms,
    movie: {},
    actors: {},
    genres: [],
    privat: false
};

const a = prompt('Odin iz poslednih prosmotrenuh filmov?', ''),
      b = prompt('Na skolko ego ocenite', ''),
      c = prompt('Odin iz poslednih prosmotrenuh filmov?', ''),
      d = prompt('Na skolko ego ocenite', '');

personalMovieDB.movie[a] = b;
personalMovieDB.movie[c] = d;

console.log(personalMovieDB);
