const axios = require('axios');

const url = 'http://localhost:5000/constellations';

// GET HTTP METHOD REQUEST
axios
  .get(url)
  .then((response) => {
    let newItems = [];
    for (let item of response.data) {
      if (item.starsWithPlanets < 10) {
        newItems.push(item);
      }
    }
    console.log(newItems);
  })
  .catch((error) => {
    console.log(error);
    console.log(error.response.status, error.response.statusText);
    console.log(error.message);
  });

// POST HTTP METHOD REQUEST
// axios
//   .post(url, {
//     name: 'Ara',
//     meaning: 'Altar',
//     starsWithPlanets: 7,
//     quadrant: 'SQ3',
//   })
//   .then((response) => {
//     console.log(response.data);
//   });

// DELETE HTTP METHOD REQUEST
// const url2 = 'http://localhost:5000/constellations/pnN1KbS';

// axios
//   .delete(url2, {
//     name: 'Ara',
//     meaning: 'Altar',
//     starsWithPlanets: 7,
//     quadrant: 'SQ3',
//   })
//   .then((response) => {
//     console.log(response.data);
//   });
