// Select all the forms
const getMovieForm = document.querySelector('#get-movie-form');
// Select sections that hold the forms
const getIdSection = document.querySelector('#get-movie-section');

const movieTitle = document.querySelector('.get-info');





// `GET - Movie by id`

getMovieForm.addEventListener('submit', function(e) {
    // Prevent the form reloading of the page
    e.preventDefault();

    // Get the id of the movie from the input field
    const name = document.querySelector('#movie-name').value;

    // If no id was provided, stop the function

    if (!name) return;

    // Make a GET request -  get one movie
    axios
        .get(`https://api.themoviedb.org/3/search/movie?api_key=885dbfba88f11b7023082ad1956f5310&language=en-US&query=${name}&page=1&include_adult=false`)
        .then(response => {
            // Grab all input fields from the update form (still invisible)
            // const inputNodes = updateForm.querySelectorAll('input');
            // const inputElements = [...inputNodes];
            const movies = response.data.results;
            console.log(response.data.results);
            const resultList = document.querySelector('.movie-results');

            let htmlString = "";
            movies.forEach(function(movie) {
                htmlString += `
                <div style = "
                            display:flex; 
                            flex-direction:column;
                            justify-content:space-around"
                                >
                        <h2 style="text-align:center;
                            margin-top:10%;
                            margin-bottom:5%;
                            font-size:50px;" 
                        class='movie-title movie-details-link' 
                        data-movieid='${movie.id}'
                        >
                        ${movie.title} (${movie.release_date.slice(0,4)})
                        </h2>
                        <img style= "width:500px;height:auto;margin-left:25%;margin-right:25%"
                        class="movie-details-link" 
                        src="https://image.tmdb.org/t/p/w500${movie.poster_path}"
                            data-movieid='${movie.id}'
                            />
                            </div>`

            })
            resultList.innerHTML = htmlString;

            const getMovieDetailLinks = document.querySelectorAll('.movie-details-link')


            getMovieDetailLinks.forEach((element) => {

                element.addEventListener('click', (e) => {
                    const movieId = element.dataset.movieid;
                    console.log('THI IS THE MOVIEID', movieId);

                    // axios.get(`/private/movieDetail/get/${movieId}`)
                    window.location.assign(`/private/movieDetail/${movieId}`)
                })


            })


            // Populate each empty `inputField.value` with the 
            // corresponding data from the response object `movie.data`
            inputElements.forEach(
                inputField => (inputField.value = movie.data[inputField.name]),
            );

        })
        .catch(err => console.log(err));
});













// testing
/*

addMovie: function(req, res) {
    var apiUrl = [
        'http://api.themoviedb.org/3/movie/',
        req.body.id,
        '?api_key=885dbfba88f11b7023082ad1956f5310'
    ].join('');

    request({
        method: 'GET',
        uri: apiUrl,
        json: {}
    },
    function(error, response, movie) {
        if (!error) {
            movie.userId = req.session.userId;
            movie.watched = false;
            client
                .db()
                .collection('movies')
                .insert(movie, function(err) {
                    if (err) {
                        console.log(err);
                    }
                    res.redirect('/');
                });
        }
    });


*/