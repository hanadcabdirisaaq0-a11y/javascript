// //  this equals
//  console.log(5 == 5); //true

//     let a = 10;
//     let b = 5;

//     console.log("a == b:", a == b);          // false
//     console.log("a != b:", a != b);          // true
//     console.log("a === 10:", a === 10);      // true
//     console.log("a !== '10':", a !== '10');  // true
//     console.log("a > b:", a > b);            // true
//     console.log("a < b:", a < b);            // false
//     console.log("a >= 10:", a >= 10);        // true
//     console.log("a <= b:", a <= b);          // false

//     // Extra examples with text
//     let name1 = "Hanad";
//     let name2 = "Ali";
//     console.log("name1 == name2:", name1 == name2);   // false
//     console.log("name1 != name2:", name1 != name2);   // true

//     let age1 = 18;
//     let age2 = 21;
//     console.log("age1 < age2:", age1 < age2);         // true
//     console.log("age1 >= 18:", age1 >= 18);           // true
  
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

    