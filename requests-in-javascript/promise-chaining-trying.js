const { default: axios } = require('axios');

const BASE_URL = 'http://localhost:5000';
const CONSTELLATIONS_URL = `${BASE_URL}/constellations`;

// New Constellation
const datNewConstellation = {
  name: 'Lawrence',
  meaning: 'Destroyer',
  starsWithPlanets: 99,
  quadrant: 'YES1',
};

axios
  .get(CONSTELLATIONS_URL)
  // Gets array of objects with starsWithPlanets > 20
  .then((response) => {
    console.log('-----RESPONSE');
    console.log(response.data);
    console.log('-----RESPONSE');
    return response.data.filter(
      (constellation) => constellation.starsWithPlanets > 20
    );
  })
  // Find match name. If found, throw error, if not add new constellation
  .then((filtered) => {
    console.log('-----FILTERED');
    console.log(filtered);
    console.log('-----FILTERED');
    return filtered.find(
      (matched) => matched.name === datNewConstellation.name
    );
  })
  .then((exists) => {
    if (exists) {
      throw `Constellation "${datNewConstellation.name}" already exists.`;
    } else {
      return axios.post(CONSTELLATIONS_URL, datNewConstellation);
    }
  })
  .then((constellation) => {
    console.log('-----ADDED');
    console.log(constellation.data);
    console.log('-----ADDED');
  })
  .catch((error) => console.log(error));
