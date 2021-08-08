let endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

let cities = [];


fetch(endpoint)//delivers a promise meaning that the data will eventually come back.Doesn't like being put in a variable.
.then(blob => blob.json())//use json method to retrieve data. Converts from the raw data.
.then(data => cities.push(...data));//pushes data that has been aquired through json method. ... or spread makes it so that the array is not nest inside of another array for every argument.
console.log(cities);

function findMatches(wordToMatch, cities) {//returns word typed with filter in api using regExp.
    return cities.filter(place => {
        //need to figure out if the city or state match the search.
        let match = new RegExp(wordToMatch, 'gi')//passes the variable wordToMatch uses g = global(everything within array) and i = insensitive(not case sensitive)
        return place.city.match(match) || place.state.match(match);
    });
}

let searchInput = document.querySelector('.search');
let suggestions = document.querySelector('.suggestions');

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }

function displayMatches() {
    const matchArray = findMatches(this.value, cities);
    let findArray = findMatches(this.value, cities);
    console.table(findArray);
    let html = findArray.map(place => {
        const regex = new RegExp(this.value, 'gi');//matches information entered with global list, which would not be case sensitive.
        const cityName = place.city.replace(regex, `<span class="hl">${this.value}</span>`);//replaces regex variable with HTML element, so that it visibly shows up on the page.
        const stateName = place.state.replace(regex, `<span class="hl">${this.value}</span>`);
        return `
          <li>
            <span class="name">${cityName}, ${stateName}</span>
            <span class="population">${numberWithCommas(place.population)}</span>
          </li>
        `;

    }).join('');

    suggestions.innerHTML = html;

    console.log(this.value);
}




searchInput.addEventListener('change', displayMatches);
searchInput.addEventListener('keyup', displayMatches);
