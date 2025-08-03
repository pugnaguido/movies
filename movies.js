  //create an array to hold th emovie list
        let arrMovies = [];

        // function to add a movie to the array
        function addMovie(){
            //create a shortcut or nickname variabel to the text input in the html
            let txtMovieName = document.getElementById("txtMovieName");
            //shortcut . nickname of the movie user entered
            let movieName = txtMovieName.value;
            //check to make sure that th euser entered a movie name
            if (movieName !=""){
                //add the movieName to the array
                arrMovies.push(movieName);
                //remove the text form the texbook
                txtMovieName.value = ""
            }
            //call the funciton to diplay th emovies
             displayMovieList();
        }
        //create a function to sort and display teh movies on the page
        function displayMovieList(){
            let divMovies = document.getElementById("divMovies");

            //sort the movie list before showing it
            arrMovies.sort();
            //this returns the array as a string with a line break in between them. 
            divMovies.innerHTML = arrMovies.join("<BR>");
               
        }

        function resetList(){
            //empty the contents of the array.
            arrMovies = [];
           // update the div to show nothing
            displayMovieList();
        }
