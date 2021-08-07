let endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

let cities = [];


fetch(endpoint)//delivers a promise meaning that the data will eventually come back.Doesn't like being put in a variable.
.then(blob => blob.json())//use json method to retrieve data. Converts from the raw data.
.then(data => cities.push(...data));//pushes data that has been aquired through json method. ... or spread makes it so that the array is not nest inside of another array for every argument.
console.log(cities);

function findMatches(wordToMatch, cities) {
    return cities.filter(place => {
        //need to figure out if the city or state match the search.
        let match = new RegExp(wordToMatch, 'gi')//passes the variable wordToMatch uses g = global(everything within array) and i = insensitive(not case sensitive)
        return place.city.match(match) || place.state.match(match);
    });
}

let searchInput = document.querySelector('.search');
let suggestions = document.querySelector('.suggestions li');


function displayMatches() {
    let findArray = findMatches(this.value, cities);
    console.table(findArray);
    let html = findArray.map(place => {
    // let name = document.createElement('span');
    // name.innerHTML = `${place.city}, ${place.state}`;
    // let population = document.createElement('span');
    // population.innerHTML = `${place.population}`;
    let li = document.createElement('li');
    // return li.appendChild(name, population);
        return li.innerHTML = `${place.city}, ${place.state}, ${place.population}`;

    }).join('');

    suggestions.innerHTML = html;

    console.log(this.value);
}




searchInput.addEventListener('change', displayMatches);
searchInput.addEventListener('keyup', displayMatches);
