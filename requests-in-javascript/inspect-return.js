new Promise((resolve, reject) => {
  const random = Math.floor(Math.random() * 10);
  random > 5 ? resolve(random) : reject(random);
})
  .then((response) => {
    console.log('Resolved!', response);
    return response;
  })
  .catch((response) => {
    console.log('Rejected!', response);
  })
  .then((response) => {
    console.log('Add 10', response + 10);
  });

// Removing return from .then and/or .catch => in final then, reponse = NaN
// Regardless of .then or .catch, will run the final .then

// IF RESOLVED, WILL MOVE TO THEN. IF REJECT, WILL MOVE TO CATCH. IF THERE IS A THEN CHAINED AFTER ANY REJECT OR CATCH, WILL RUN CHAINED THEN.
