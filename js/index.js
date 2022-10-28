

var search = "";

var movies = [];

const form = document.getElementById("searchForm");
const searchInput = document.getElementById("searchInput");
const result = document.getElementById("result");

const Movies = async () => {
  movies = await fetch(
            `https://api.themoviedb.org/3/search/movie?api_key=ed82f4c18f2964e75117c2dc65e2161d&query=${search}`


  ).then((res) => res.json());


  console.log(movies);


};

const Display = async () => {



  await Movies();
  movies.results.length = 12;
  result.innerHTML = movies.results
    .map(
      (movie) =>
        `
      <li>
        <h2>${movie.original_title}</h2>
        <div>
        <div class="card-content">
          <div class="infos">
            <p>${movie.overview}</p>
            <p>Popularité : ${movie.popularity} ⭐</p>
          </div>
          <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}"></img>
        </div>
        </div>
      </li>
    `
    )
    .join("");


};

form.addEventListener("submit", (e) => {


  e.preventDefault();
  search = searchInput.value;


  Display();
});
