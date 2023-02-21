// You can create a function to handle the filtering logic for each type of filter. For example:

// // Define an object to store the filtering functions
// const filters = {
//   sciFi: movie => movie.category === 'Sci-Fi',
//   drama: movie => movie.category === 'Drama',
//   crime: movie => movie.category === 'Crime'
// }

// // Create a function that takes the filter type and returns the filtered array
// const filterMovies = (movies, filterType) => {
//   // Get the relevant filter function
//   const filterFn = filters[filterType];

//   // Return the filtered array
//   return movies.filter(filterFn);
// }

// // Now you can call the filterMovies function with different filter types
// const sciFiMovies = filterMovies(movies, 'sciFi');
// const dramaMovies = filterMovies(movies, 'drama');
// const crimeMovies = filterMovies(movies, 'crime');