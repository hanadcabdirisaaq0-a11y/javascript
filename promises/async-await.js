async function getPhone() {
  // Create the promise
  let promise = new Promise(function (resolve, reject) {
    let behavesWell = false; // change this to false

    if (behavesWell) {
      resolve("You behaved well! Mom buys you a phone.");
    } else {
      reject("You misbehaved. No phone this time.");
    }
  });

  try {
    // Wait for the promise to finish
    let result = await promise;
    console.log(result);
  } catch (error) {
    console.log(error);
  }
}

getPhone();
