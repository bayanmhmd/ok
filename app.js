var movieForm = document.getElementById('formArea-Movies');
var movieD = document.getElementById('Movie-Details');


/////////////////////// Constructor Function for movies  ///////////////
function MoviesKind(name, moviesSelect, seatKind, seatsNum) {

    this.name = name;
    this.moviesSelect = moviesSelect;
    this.seatKind = seatKind;
    this.seatsNum = seatsNum;

    MoviesKind.moviesList.push(this);

}

MoviesKind.moviesList = [];                 // Empty array for user choice 

newArray = [];

//////////// Store the user's data 
function updateMovies() {
    var moviesString = JSON.stringify(MoviesKind.moviesList);
    localStorage.setItem('movies', moviesString);
} // Ending of set function 


////////// Retrieve the user data from local storage 
function getMovies() {
    var dataP = localStorage.getItem('movies');
    console.log(' dataP', dataP);
    var ProductData = JSON.parse(dataP);
    console.log('Product data', ProductData);

    if (ProductData) {
        console.log('ProductData.length', ProductData.length);
        //console.log(' products length  2 ' , AllProductsCont.all.length  );
        //   for (let i = 0; i < ProductData.length; i++) {
        var rawProductObject = ProductData.name;
        console.log('ProductData.name : ', ProductData.name);
        // var chgProductCtrs = MoviesKind.moviesList[i];
        //console.log(' products length  2 ' , AllProductsCont.all.length  );

        renderMovie();
    } else {

        alert(' nothing here ');
        // new AllProductsCont('bag', 'img/bag.jpg');

    }
    //console.log('local Storage Data', ProductData);
} //// Ending Of get Products Function 

function renderMovie() {

    movieD.innerHTML = '';
    // for (var i = 0; i < newArray.length; i++) {
    // var all = newArray[i];
    var element = document.createElement('p');
    movieD.appendChild(element);
    element.textContent = " Welcome Mr " + newArray[0] + 'You Chosen A ' + newArray[1]+ ' Movie Kind With Seat Type' + newArray[2] + ' And The Number Of Seats is ' + newArray[3];
    
    // }
}

function handleSubmit(event) {

    event.preventDefault();
    // get all the values from the form
    var movies = event.target;
    var name = movies.name.value;
    console.log('name ', name);
    newArray.push(name);

    var moviesSelect = movies.moviesSelect.value;
    console.log('moviesSelect ', moviesSelect);
    newArray.push(moviesSelect);

    var seatKind = movies.seatKind.value;
    console.log('SeatKind ', seatKind);
    newArray.push(seatKind);

    var seatsNum = parseInt(movies.seatsNum.value);
    console.log('seatsNum ', seatsNum);
    newArray.push(seatsNum);

    new MoviesKind(name, moviesSelect, seatKind, seatsNum);
    console.log('MoviesKind.moviesList : ', MoviesKind.moviesList);
    console.log(' newArray', newArray);

    // Update and render 

    updateMovies();
    renderMovie();
    getMovies();


}// end of event function

movieForm.addEventListener('submit', handleSubmit);
//   console.log('MoviesKind.moviesList : ', MoviesKind.moviesList);