// Select all the forms
const getMovieForm = document.querySelector('#get-movie-form');
// Select sections that hold the forms
const getIdSection = document.querySelector('#get-movie-section');

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
                htmlString += `<h2>${movie.title}</h2>`
                
            })
            console.log("THIS IS THE STRING", htmlString);
            resultList.innerHTML = htmlString;

            console.log('INPUT ELEMENTS ARE', inputElements);

            // Populate each empty `inputField.value` with the 
            // corresponding data from the response object `movie.data`
            inputElements.forEach(
                inputField => (inputField.value = movie.data[inputField.name]),
            );

            getMovieForm.reset();
            // Show the form `PATCH - Update a movie`
            updateSection.style.display = 'block';
            // Hide the form `GET - Character by id`
            getIdSection.style.display = 'none';
        })
        .catch(err => console.log(err));
});

/// axios delete