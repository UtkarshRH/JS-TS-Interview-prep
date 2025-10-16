// A simple object
const person1 = {
  name: "Utkarsh",
  greet: function(city, country) {
    console.log(`Hello, my name is ${this.name}. I live in ${city}, ${country}.`);
  }
};

// Another object
const person2 = { name: "Prajwal" };


// ---------------------------
// 1️⃣ Using call()
// ---------------------------
// call() invokes the function immediately and passes arguments one by one
person1.greet.call(person2, "Pune", "India");
// Output: Hello, my name is Prajwal. I live in Pune, India.


// ---------------------------
// 2️⃣ Using apply()
// ---------------------------
// apply() is similar to call() but takes arguments as an array
person1.greet.apply(person2, ["Mumbai", "India"]);
// Output: Hello, my name is Prajwal. I live in Mumbai, India.


// ---------------------------
// 3️⃣ Using bind()
// ---------------------------
// bind() returns a new function with 'this' bound to person2
const greetPrajwal = person1.greet.bind(person2, "Nagpur", "India");
greetPrajwal(); // You must call it later
// Output: Hello, my name is Prajwal. I live in Nagpur, India.
