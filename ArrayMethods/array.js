const inventors = [
    { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
    { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
    { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
    { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
    { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
    { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
    { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
    { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
    { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
    { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
    { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
    { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
  ];

  const people = [
    'Bernhard, Sandra', 'Bethea, Erin', 'Becker, Carl', 'Bentsen, Lloyd', 'Beckett, Samuel', 'Blake, William', 'Berger, Ric', 'Beddoes, Mick', 'Beethoven, Ludwig',
    'Belloc, Hilaire', 'Begin, Menachem', 'Bellow, Saul', 'Benchley, Robert', 'Blair, Robert', 'Benenson, Peter', 'Benjamin, Walter', 'Berlin, Irving',
    'Benn, Tony', 'Benson, Leana', 'Bent, Silas', 'Berle, Milton', 'Berry, Halle', 'Biko, Steve', 'Beck, Glenn', 'Bergman, Ingmar', 'Black, Elk', 'Berio, Luciano',
    'Berne, Eric', 'Berra, Yogi', 'Berry, Wendell', 'Bevan, Aneurin', 'Ben-Gurion, David', 'Bevel, Ken', 'Biden, Joseph', 'Bennington, Chester', 'Bierce, Ambrose',
    'Billings, Josh', 'Birrell, Augustine', 'Blair, Tony', 'Beecher, Henry', 'Biondo, Frank'
  ];
//.sort - orders items based on input/request.
//.filter - only prints out what is requested.
//.map stamps and prints items.

  let fifteen = inventors.filter(inventor => (inventor.year >= 1500 && inventor.year <= 1600));
  console.table(fifteen);


  let fullNames = inventors.map(inventor => `${inventor.first} ${inventor.last}`);
  console.table(fullNames);

//   let ordered = inventors.sort(function(a,b){
//       if (a.year > b.year) {
//           return 1;
//       }else {
//           return -1;
//       }
//   });

  const ordered = inventors.sort((a,b) => a.year > b.year ? 1 : -1);
  console.table(ordered);

  const totalYears = inventors.reduce((total, inventor) => {
      return total + (inventor.passed - inventor.year);
  }, 0);
  console.table(totalYears);

  const oldest = inventors.sort(function(a,b) {
      let lastGuy = a.passed - a.year;
      let nextGuy = a.passed - a.year;
        return lastGuy > nextGuy ? 1 : -1;

  });
  console.table(oldest);

//   let category = document.querySelector('.mw-category');
//   console.log(category);

let lastName = people.sort(function(lastOne, nextOne){
let [aLast, aFirst] = lastOne.split(', ');
let [bLast, bFirst] = nextOne.split(', ');
return aLast > bLast ? 1 : -1;
});
console.log(lastName);

const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck', 'pogostick'];

let transportation = data.reduce(function(obj, item) {
if(!obj[item]) {
    obj[item] = 0;
}
obj[item]++;
return obj;
},{});

console.log(transportation);
