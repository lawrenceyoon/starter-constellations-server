// GET HTTP METHOD REQUEST
const axios = require('axios');

const url = 'http://localhost:5000/constellations';

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
