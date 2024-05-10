// Varialbes

let name = "John Doe";
 age = "30" ;
isStudent = true;

console.log(name);
console.log(age);
console.log(isStudent);
 
console.log (typeof name);
console.log (typeof age);
console.log (typeof isStudent);

// Arrays

const hobbies = ["reading", "hiking" , "coding" ];
console.log (hobbies);
console.log(hobbies[0]);
console.log(hobbies[2]);
hobbies.push("swimming" , "driving");
console.log(hobbies);
hobbies.shift();
console.log(hobbies); 

// Object

const person = {
    name : "John Doe" ,
    age : "30" ,
    isStudent : true,
};
console.log(name);
console.log(age);
console.log(isStudent);

console.log (person.occupation = "Programer");
console.log(person); 

 name = "John Doe";
 age = "30" ;
isStudent = true;

// Conditions

if (age > 18) {
    console.log("Adult");
} else {
    console.log("Not Adult");
}


if (isStudent = true ) {
    console.log("Programer");
} else {
    console.log("shopkeeper");
}

if (hobbies.includes ("coding")) {
    console.log ("Programer")

} else {
    console.log("pro promgramer");

}

// Function

function greet (name) {
    console.log("Assalam e Alikum" , name );
}  

console.log(greet("Jon Dee"));

function isAdult (age) {
    if (age > 18) {
        console.log("Adult");
    } else {
        console.log("Not Adult");
    }

}  