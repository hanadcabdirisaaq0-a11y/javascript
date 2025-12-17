// app.js

import { listPhones, getPhoneDetails } from "./phoneUtils.js";

const phones = listPhones();

// Display list of phones in console
console.log("Available Phones:");
phones.forEach((phone) => console.log("- " + phone));

// Use another module function
console.log(getPhoneDetails("Samsung S24"));
