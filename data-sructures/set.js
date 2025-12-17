const patients = new Set();

patients.add("Ali");
patients.add("Fatima");
patients.add("Ali"); // duplicate

console.log(patients);
// Output: Set { 'Ali', 'Fatima' }
