let x = 10;
    let y = 5;
    let z = 15;

    // AND operator (&&) – true only if both conditions are true
    console.log("x > y && x < z:", x > y && x < z);   // true
    console.log("x > y && y > z:", x > y && y > z);   // false

    // OR operator (||) – true if at least one condition is true
    console.log("x > y || y > z:", x > y || y > z);   // true
    console.log("x < y || y > z:", x < y || y > z);   // false

    // NOT operator (!) – reverses a condition’s result
    console.log("!(x > y):", !(x > y));   // false (because x > y is true)
    console.log("!(x < y):", !(x < y));   // true  (because x < y is false)

    // Example with text
    let loggedIn = true;
    let isAdmin = false;

    console.log("loggedIn && isAdmin:", loggedIn && isAdmin); // false
    console.log("loggedIn || isAdmin:", loggedIn || isAdmin); // true
    console.log("!loggedIn:", !loggedIn);                     // false
    