// Step 1: Declare a global variable
let age = 20;

// Step 2: Function in global execution context
function displayAge() {
    console.log("Age inside displayAge():", age);
}

// Step 3: Function that updates the global variable
function changeAge() {
    age = 25; // modifying global variable
    console.log("Age inside changeAge():", age);
}

// Calling the functions
displayAge();  // Output: Age inside displayAge(): 20
changeAge();   // Output: Age inside changeAge(): 25

// Checking updated age
console.log("Updated global age:", age);  // Output: Updated global age: 25
