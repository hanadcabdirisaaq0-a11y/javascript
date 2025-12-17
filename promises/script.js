// The mother's promise
let phonePromise = new Promise(function (resolve, reject) {
  let behavesWell = true; // Try changing to false

  if (behavesWell) {
    resolve("You behaved well! Mom buys you a new phone.");
  } else {
    reject("You did not behave well. No phone this time.");
  }
});

// Using the promise
phonePromise
  .then(function (successMessage) {
    console.log("SUCCESS: " + successMessage);
  })
  .catch(function (errorMessage) {
    console.log("FAILED: " + errorMessage);
  });
