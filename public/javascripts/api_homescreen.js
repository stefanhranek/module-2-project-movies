window.addEventListener(
  "load",
  (homeScreen = () => {
    axios
      .get(
        "https://api.themoviedb.org/3/movie/now_playing?api_key=885dbfba88f11b7023082ad1956f5310&language=en-US&page=1"
      )
      .then(response => {
        const homeMovies = response.data.results;

        const nowPlayingMovies = document.querySelector(
          ".now-playing-api-movie-data"
        );
        console.log("cozy", nowPlayingMovies);

        let htmlString = "";
        homeMovies.forEach(function(movie) {
          htmlString += `
                <div style = "
                    display:flex; 
                    flex-direction:row;
                    justify-content:space-around";
                    height: auto;
                    >
                    <section style= "
                        display:flex;
                        flex-direction:column;
                        margin:0 ;
                        height: auto;
                    ">
                        <h2 style="
                            height: auto;
                            text-align:center;
                            margin-top:10px;
                            margin-bottom:5px;
                            font-size:1em;" 
                            class='movie-title movie-details-link' 
                            data-movieid='${movie.id}'
                            >
                            <p style= "
                                font-size:.6em;
                                word-wrap: break-word;
                                overflow: hidden;
                                max-height: 1em;
                                line-height: 1em;
                            ">${movie.title}</p>
                            <p style= "
                                color:grey;
                                font-size:.5em;
                            ">${movie.release_date.slice(0, 4)}</p>
                        </h2>
                        <img style= "
                            width:auto;
                            height:200px;
                            margin-left:0;
                            margin-right:0"
                            class="movie-details-link" 
                            src="https://image.tmdb.org/t/p/w500${
                              movie.poster_path
                            }"
                            data-movieid='${movie.id}'
                        />
                    </section
                </div>`;
        });

        nowPlayingMovies.innerHTML = htmlString;

        const movieDetailLinks = document.querySelectorAll(
          ".movie-details-link"
        );

        movieDetailLinks.forEach(element => {
          element.addEventListener("click", e => {
            const movieId = element.dataset.movieid;
            console.log("THIS IS EEEEE", e);

            // axios.get(`/private/movieDetail/get/${movieId}`)
            window.location.assign(`/private/movieDetail/${movieId}`);
          });
        });
      });

    axios
      .get(
        " https://api.themoviedb.org/3/movie/upcoming?api_key=885dbfba88f11b7023082ad1956f5310&language=en-US&page=1"
      )
      .then(response => {
        const homeMovies = response.data.results;

        const nowPlayingMovies = document.querySelector(".upcoming-movie-data");

        let htmlString = "";
        homeMovies.forEach(function(movie) {
          htmlString += `
          <div style = "
          display:flex; 
          flex-direction:row;
          justify-content:space-around";
          height:auto;
          >
          <section style= "
              display:flex;
              flex-direction:column;
              margin:0 ;
              height: auto;
          ">
              <h2 style="
                            height: auto;
                            text-align:center;
                            margin-top:10px;
                            margin-bottom:5px;
                            font-size:1em;" 
                            class='movie-title movie-details-link' 
                            data-movieid='${movie.id}'
                            >
                            <p style= "
                              font-size:.6em;
                              word-wrap: break-word;
                              overflow: hidden;
                              max-height: 1em;
                              line-height: 1em;
                            ">${movie.title}</p>
                            <p style= "
                                color:grey;
                                font-size:.5em;
                            ">${movie.release_date.slice(0, 4)}</p>
                        </h2>
              <img style= "
                    width:auto;
                    height:200px;
                    margin-left:0;
                    margin-right:0"
                    class="movie-details-link" 
                    src="https://image.tmdb.org/t/p/w500${movie.poster_path}"
                    data-movieid='${movie.id}'
              />
          </section
      </div>`;
        });
        nowPlayingMovies.innerHTML = htmlString;

        const movieDetailLinks = document.querySelectorAll(
          ".movie-details-link"
        );

        movieDetailLinks.forEach(element => {
          element.addEventListener("click", e => {
            const movieId = element.dataset.movieid;

            // axios.get(`/private/movieDetail/get/${movieId}`)
            window.location.assign(`/private/movieDetail/${movieId}`);
          });
        });
      });

    axios
      .get(
        " https://api.themoviedb.org/3/movie/popular?api_key=885dbfba88f11b7023082ad1956f5310&language=en-US&page=1"
      )
      .then(response => {
        const homeMovies = response.data.results;

        const nowPlayingMovies = document.querySelector(".trending-movie-data");

        let htmlString = "";
        homeMovies.forEach(function(movie) {
          htmlString += `
          <div style = "
          display:flex; 
          flex-direction:row;
          justify-content:space-around"
          >
          <section style= "
          display:flex;
          flex-direction:column;
          margin:0 ;
          height: auto;
          align-content: center;
          justify-content: center;
          margin-right:0px;
          ">
            <div style="
                height: auto;
                text-align:center;
                margin-top:10px;
                margin-bottom:5px;
                font-size:1em;" 
                class='movie-title movie-details-link' 
                data-movieid='${movie.id}'
            >
                <p style= "
                    margin: 0;
                    font-size:.6em;
                    word-wrap: break-word;
                    overflow: hidden;
                    max-height: 1em;
                    line-height: 1em;
                ">
                    ${movie.title}
                </p>
                <p style= "
                    color:grey;
                    font-size:.5em;
                ">
                    ${movie.release_date.slice(0, 4)}
                </p>
            </div>
            <img style= "
                width:auto;
                height:200px;
                margin-left:0;
                margin-right:0"
                class="movie-details-link" 
                src="https://image.tmdb.org/t/p/w500${movie.poster_path}"
                data-movieid='${movie.id}'
            />
          </section>
      </div>`;
        });
        nowPlayingMovies.innerHTML = htmlString;

        const movieDetailLinks = document.querySelectorAll(
          ".movie-details-link"
        );

        movieDetailLinks.forEach(element => {
          element.addEventListener("click", e => {
            const movieId = element.dataset.movieid;

            // axios.get(`/private/movieDetail/get/${movieId}`)
            window.location.assign(`/private/movieDetail/${movieId}`);
          });
        });
      });
  })
);
