 //answer would be 4
/* Type of Javascript Output

1. innerHTML     -----> Element tag of Html
2. innerTEXT     -----> Text of Html
3. document.write()  -----> Testing
4. alert() ------> Alert
5. console.log()    ----->   Debugging


Variables ---> they are used to store data.

1. var  ----> Old browsers use this
2. let ----> To be used by u for  data that can be changed
3. const -----> also known as constant, to be used for datas that cant be changed

Pry Data types in Javascript
1. String  ----> Text (always in quote)  '' "" eg. "Martins" or 'Martins'
2. Number ----> 5, 5.34 
3. Boolean ----> true, false.
4. Null ----> null (No) or nothing
5. Undefined ----> no value given
6. Object ----> Group of Values
7. Array  ------> same types of single values


Basic Javascript Operators
1. Arithmetic Operators ( + , - , / , *, % (Modulus) )
2. Assignment Operators ( = , += , -= )
3. Comparison Operators ( ==, ===, !=, > , <)
*/

/* let a;
a = 5
console.log(a)

let boy = {
    name: 'Martins',
    age: 17,
    isStudent: true,
    address: 'Abuja',
};

console.log(boy)

let fruits = ['apple', 'banana', 'Mango', 'Orange', 'Pineapple']

console.log(fruits)

console.log( 6 % 2 ) // remainder

let b = 10; // = asssign
 b += 5  // += Add assign
 b -= 7.5 // -= Substract assign

 console.log(b)


console.log ( 5 == '5')        // == equal to
console.log ( 5 === '5')        // === strict equal to
console.log ( 5 != 3 )       // != not equal to
console.log ( 5 > 3 )       // > greater than
console.log ( 2 < 5 )       // > lesser than.

let name = 'Destiny'
let age = 15
const address = 'Benin'

console.log('My name is ' + name +', I am ' + age + ' i live in ' + address);




 Funtions in Javascript
 1. Help us organize code
 2. Avoid repeating same code
 3. Helps us to perform task
 for function to work you need to call it.
*/
/*
function greets() {
    alert('Welcome to Javascript')
};



/* function funtionName ( Argument ) {
    //task or instruction
} */
/*
function greet(name, lastName) {
    console.log('Hello ' + name + lastName);
}

greet('Martins', ' John')
greet('Destiny', ' boy')

function calculateSum (a,b) {
    return a + b
}

let result = calculateSum(5,6);
console.log('Your sum is: ' , result)

console.log(result) */


 /* function displayInfo() {
            //Get input Value
            let name = document.getElementById("nameInput").value;
            let age = document.getElementById("ageInput").value;
            let isStudent = document.getElementById("statusInput").value;

            //Display Result
            document.getElementById("studentName").innerText = name;
            document.getElementById("studentAge").innerText = age;
            document.getElementById("studentStatus").innerText = "" + (isStudent === "true" ? "Yes" : "No");
        }
*/
        let name = 'Martins'
        console.log(name)

        name = "John"
        console.log(name)

        const age = 16
        console.log(age)

        // ''  or " "

        let boy = 'david'

        let girl = null

        let guy;

        guy = "Peter"

        console.log(guy)
     
        //Object
        let person1 = {
            name: 'Samuel',
            age: 10,
            isStudent: true,
        }

       console.log (person1.name)
       console.log(person1)

       //Arrays

       let jacobSons = [ 'Judah', 'Simon', 'Joseph', 'Benjamin', 'Gad']; // count from 0

       console.log(jacobSons)

       // Array of Objects

       let students = [
        {name: 'Ben' , age: 12},
        {name: 'Mark', age: 13}
       ]

       console.log(students[0].age)

       //Object with Array

       let football = {
        EPL: 'England',
        Teams: ['Arsenal', 'Chelsea','ManU', 'ManCity']
       }
      

       console.log(football.EPL)
       
       console.log(football.Teams[1])