/*"use strict"; //when this is included at the top of the script, all variables following MUST FIRST be DECLARED. An undeclared variable will cause an error. 
var num1; //not block specific and redeclaration is allowed (might be a problem as you might declare two different variables with the same name and thus overwrite)
let num2; //block specific and prevents redeclaration with same name, cannot accidentally make two variables with the same name
const num3 = 34; //once declared/initialized, cannot change the value from a different line

//number + number = number; number+string = string; string+string = string (the + operator is both addition-for numbers and concatination-for strings/numbers)
//+ operator will recognize a number as a string and concatenate with the other string, ex. 10+"10" = "1010"
//all other mathematic operators (*, /, -) will convert strings to numbers before calculating, ex. "100"-10=90
//NaN = "not a number", you can use function isNaN() to check if something is a number or not
//use variable.toString(base) to convert a number into a different base (binary, decimal, octal, hexadecimal, etc)
//use ** (exponentiation) to raise the first number to the power of the second number, ex 5**2 = 5^2 = 25
//the unary + operater does nothing to numbers BUT converts non numbers to numbers, ex. +true = 1, +false = 0, +"345" = 345
//for increment/decrement (++/--) there is a difference between pre-fix and post-fix

//method 1
let testNum = 345;
let result = "I have "+testNum+" apples in my trunk.";
console.log(result);

//method 2 
let result2 = `I have ${testNum} apples in my trunk.`;
console.log(result2);

let score = 9;
let highestScore = 10;
let song = "Fight the Youth";
let output = `I like the song "${song}". I gave it a score of ${score/highestScore * 100}%`;
console.log(output);

let result3 = score >= 7 ? "Great song!" : "I could find you a better one!";
console.log(result3);

let testStr = "Please locate where 'locate' occurs"

let testStr2 = "Lets try out the substring methods.";
console.log(testStr2);
let result4 = testStr2.slice(5,8); //slice can accept negative numbers (a negative number just starts the count from the end of the string rather than the beginning)
console.log(testStr2);
let result5 = testStr2.substr(5,3); //main difference between this and the other two is the second parameter species the LENGTH of the resulting string, accepts negatives
console.log(testStr2);
let result6 = testStr2.substring(5,8); //substring does not accept negative numbers, works similarly to slice
console.log(testStr2);
console.log(result4, result5, result6);

let testStr3 = "Please visit MICROSOFT and Microsoft!";
let newString = testStr3.replace(/microsoft/ig, "Apple");
console.log(testStr3, newString);
let result7 = testStr3.toUpperCase();
console.log(result7);
let result8 = result7.toLowerCase();
console.log(result8);

let word1 = "Hello";
let word2 = "World!";
let sentence1 = word1.concat(" ", word2);
console.log(sentence1);

let str1 = "    Hello     ";
console.log(str1);
str1 = str1.trim();
console.log(str1);


let str2 = "5";
console.log(str2.padStart(5,"*"));
str2 = str2.padStart(5,"*");
console.log(str2);
str2 = str2.padEnd(10,"*");
console.log(str2);


let testString = "testing, testing, 1,2,3.";
console.log(testString.charAt(5));
console.log(testString.charCodeAt(5));
console.log(testString[5]);

let strToArr = testString.split("");
strToArr[5] = "F";
let newStr = strToArr.join("");
console.log(newStr);

let testTestStr = "2+5";
console.log(eval(testTestStr));

let testString2 = "This is a very long string which needs \
to wrap across multipe lines because \
otherwise my code is unreadable.";
console.log(testString2);

let testChar1 = "abcdE";
let testChar2 = "abcde";
console.log(testChar1 < testChar2); 

let result1 = null>0;
let result2 = null==0;
let result3 = null>=0;

console.log(result1, result2, result3);

let hour = 19;
let greeting;

if (hour<=10){
    greeting = "Good morning!";
} else if(hour>10 && hour <18){
    greeting = "Good day!";
}else {
    greeting = "Good evening!";
}
console.log(greeting);

alert (null||2&&3||4);

let age = 91;
if(!(age>=14&&age<=90)){
    console.log("You're alive!")
} else{
    console.log("You're still alive! Just younger or older.");
}

let password;
let userName = prompt("Please enter your username");

if(userName == "Admin"){
    password = prompt("Please enter your password");
    if(password == "TheMaster"){
        alert("Welcome!");
    }else if(password == ""||password == null){
        alert("Canceled");
    }else {
        alert("Wrong password");
    }
} else if(userName == ""||userName == null){
    alert("Canceled");
}else {
    alert("I don't know you");
}


let shoppingDone = true;
let childsAllowance = 0;
console.log(childsAllowance);
if(shoppingDone === true){
    childsAllowance += 10;
}else{
    childsAllowance += 5;
}

console.log(childsAllowance);

let testArr = [1, "two", 3, "4", 5, "six"];
console.log(testArr[2]-testArr[4]);


let time = 14;

(time<12)?console.log("Good Morning!"):console.log("Good Evening!");


switch(choice){
    case "something":
        //run this code
        break;
    case "something-else":
        //run this code instead
        break;
}



let accessAllowed;
let age = prompt("How old are you","");

(age>18)?accessAllowed=true:accessAllowed=false;

alert(accessAllowed);



let testString = "Lets try to split this string and then rejoin it back together.";
let replacedString = testString.replace("split","break");
console.log(testString);
console.log(replacedString);
let testArr = testString.split(" ");
console.log(testArr);
let resultString = testArr.join("-");
console.log(resultString);


console.log("Lets find a random number!");
let randNum = (Math.random()*100);
console.log(randNum);


let userName;

let testFunc = function(){
    requestName();
    alert("Hello "+userName);
}

function requestName(){
    userName = prompt("What is your name");
}

testFunc();

let testing = 5+7;
document.write(testing);
document.getElementById("testing").innerHTML = "hello";
const myButton = document.querySelector(".testButton");//OR--("button")--tag name

myButton.onclick = function(){
    alert("Hello Greg");
}

let testVar = "Global!";

let testFunc = function(varType){
    let testVar = varType;
    console.log(testVar);
}

testFunc("Local!");
console.log(testVar);

function greeting (from = "User", greeting = "Greetings"){
    console.log(from+":"+greeting);
}

greeting("Greg","Hello!");
greeting("Greg");
greeting(undefined,"Hello");


function showMessage(text){
    text = text||"Empty?";
    console.log(text);
}

showMessage(undefined);
showMessage("testing!");

function sum(a,b){
    a = 4;
    return a+b;
    return a+b;
}

let result = sum(1,2);
console.log(result);


function min(a,b){
    return (a<b)?a:b;
}

let min2 = min;

function pow(x,n){
    let product = 1;
    for(let i=0;i<n;i++){
        product *= x;
    }
    return product;
}

let sumOfThree = (a,b,c)=>a+b+c;

let result = sumOfThree(1,2,3);

let ask = (question, yes, no)=>{if (confirm(question)) yes();
else no();}

ask(
    "Do you agree?",
    ()=>{alert("You agreed.");}, 
    ()=>{alert("You canceled the execution.");}
);


function add7(num1){
    return num1+7;
}

function multiply(num1, num2){
    return num1*num2;
}

function capitalize(string){
    string = string.toLowerCase();
    string = string.split("");
    string[0] = string[0].toUpperCase();
    string = string.join("");
    return string;
}

function lastLetter(string){
    let lastIndex = string.length -1;
    return string[lastIndex];
}

let sum = add7(34);
let product = multiply(3,6);
let capString = capitalize("TESTING TESTING");
let capString2 = capitalize("TestIng tesTINg TeStINg");
let capString3 = capitalize("testing testing testing");
let lastChar = lastLetter("Hello World");



//FizzBuzz Algorithm
//User enters a number, program prints out numbers 1 to user's input BUT for multiples of 3, it prints out Fizz, for multiples of 5 it prints out Buzz, 
//and if the number in question is a multiple of both 3 and 5 (ie. 15), it prints out FizzBuzz

function checkMultipleOfThree(num){
    return (num%3===0)?true:false;
}

function checkMultipleOfFive(num){
    return (num%5===0)?true:false;
}

function fizzBuzz(userNum){
    let finalString = "1";
    for (let i=2;i<=userNum;i++){
        if(checkMultipleOfThree(i)&&checkMultipleOfFive(i)){
            finalString = finalString + " "+"FizzBuzz";
        }else if(checkMultipleOfThree(i)){
            finalString = finalString + " "+"Fizz";
        }else if(checkMultipleOfFive(i)){
            finalString = finalString + " "+"Buzz";
        }else{
            finalString = finalString + " "+i;
        }
    }
    return finalString;
}

//8 main concepts
//1. variables: place in memory to hold data...making new variables - name, type, initial value
//2. output: tell the user something
//3. input: request something from user (ie. perhaps through some sort of output) and store it somewhere (ie. in a variable) 
//4. convert to integer:  
//5. while loop: 
//6. for loop:
//7. 
//8. 


let huntingPacks = ["Seek Outside", "Kuiu", "Stone Glacier", "Kifaru", "EXO", "Rokman Gear", "Initial Ascent", "Mystery Ranch"];
let compoundBows = new Array("Mathews", "Hoyt", "BowTech", "Prime", "Elite", "PSE", "Bear", "Xpedition");       //this method and the one above do the same thing
        //no need to use the "new" approach, first method is much simpler to read

let myPack = huntingPacks[0];
let myBow = compoundBows[4];
let alexPack = huntingPacks[0];
let alexBow = compoundBows[1];

let mySetUp = "I run a "+myPack+" pack, and an "+myBow+" bow.";
let alexSetup = `Alex runs a ${alexPack} pack and a ${alexBow} bow.`;

console.log(mySetUp);
console.log(alexSetup);

document.getElementById("my-setup").innerHTML = mySetUp;
document.getElementById("alex-setup").innerHTML = alexSetup;

let sortedPacksArray = huntingPacks.sort();
console.log(sortedPacksArray);
let lengthOfPacksArr = huntingPacks.length;
console.log(lengthOfPacksArr);


//push, pop, shift, unshift

let testArray = [1,2,3,4,5,6];
console.log(testArray);
testArray.push("rear");     //add element to end of array
console.log(testArray);
testArray.unshift("front");     //add element to beginning of array
console.log(testArray);
testArray.pop();        //remove element from end of array
console.log(testArray);
testArray.shift();      //remove element from the beginning of array
console.log(testArray);



let testArr = [];

testArr["firstName"] = "John";
testArr["last Name"] = "Doe";

console.log(testArr);

console.log(testArr[0]);

console.log(testArr["last Name"]);

console.log(testArr.length);

console.log(testArr);


let testArr2 = ["front",2,3,4,5,"rear"];

let checkIfArray = Array.isArray(testArr2);     //returns true if its an array
checkIfArray = testArr2 instanceof Array;       //also returns true if its an array

console.log(checkIfArray);

let arrToStr = testArr2.toString();
let arrJoin = testArr2.join("-");
console.log(arrToStr);
console.log(arrJoin);

let pop = testArr2.pop();                   //returns value of element popped
let push = testArr2.push("push");           //returns new length of array after the new element was added to the rear
let shift = testArr2.shift();               //returns value of element shifted
let unshift = testArr2.unshift("unshift");  //returns new length of array after the new element was added to the front

console.log(pop, push, shift, unshift);

console.log(testArr2);

testArr2.splice(2,1,"spliced in");

console.log(testArr2);



let fruitsArr = ["Apples", "Banananas", "Oranges", "Lemons", "Kiwis"];
console.log(fruitsArr);

let slicedFruit = fruitsArr.slice(1,3);             //slice method DOES NOT ALTER original array
let splicedFruit = fruitsArr.splice(1,2);           //splice method DOES ALTER original array

console.log(slicedFruit);
console.log(fruitsArr);
console.log(splicedFruit);

document.getElementById("fruits").innerHTML = fruitsArr.join("-");



//break; Once reached, the code will completely break out of the loop
//continue; Unlike break, the code will merely SKIP to the next iteration rather than break out of the loop completely

let testNum = 3.45879;
let numFloor = Math.floor(testNum);      //Math.floor() returns rounded DOWN number
let numRound = Math.round(testNum);      //Math.round() will round UP or DOWN depending on the digit that follows the . (>=5 rounds up, <5 rounds down)
console.log(testNum, numFloor, numRound);

function countDownTo10(){
    let output = document.querySelector('.output');
    output.innerHTML = '';
    
    for(let i=10;i>=0;i--){
        const para = document.createElement('p');
        if(i==10){
            para.textContent = "Countdown 10"; 
        }else if(i==0){
            para.textContent = "Blast off!";
        }else{
            para.textContent = i;
        }
        
        output.appendChild(para);
    }
}



function addToGuestList(){

    const people = ['Chris', 'Anne', 'Colin', 'Terri', 'Phil', 'Lola', 'Sam', 'Kay', 'Bruce'];

    const admitted = document.querySelector('.admitted');
    const refused = document.querySelector('.refused');
    let admittedText = 'Admit: ';
    let refusedText = 'Refuse: '
    
    for(let i=0;i<people.length;i++){
        if(people[i]==="Phil"||people[i]==="Lola"){
            refusedText += people[i]+", ";
        }else{
            admittedText += people[i]+", ";
        }
    }
    admittedText = admittedText.split("");
    admittedText.pop();
    admittedText.pop();
    admittedText = admittedText.join("");

    refusedText = refusedText.split("");
    refusedText.pop();
    refusedText.pop();
    refusedText = refusedText.join("");

    refused.textContent = refusedText;
    admitted.textContent = admittedText;
}



function evenNumbers(){
    for(let i=2;i<=10;i++){
        if(i%2==0){
            console.log(i);
        }
    }
}

function outputAtoB(a,b){
    let i=a;
    while(i<=b){
        console.log(`number ${i}!`);
        i++;
    }
}

function repeateUntilCorrect(){

    let userInputNumber = prompt("Enter a number greater than 100");
    
    while(userInputNumber<=100){
        userInputNumber = prompt("Please try again.");
    }

    console.log("Thank you! You entered: "+userInputNumber);
}




const repeatString = function(string, num) {
    let finalString = "";
    if(num===0){
        return finalString;
    }else if(num===-1){
        return "ERROR";
    }else{
        for (let i=0;i<num;i++){
            finalString += string;
        }
        return finalString;
    }
}

function domManipulation(){
    let parentNode = document.querySelector("#parent-container");   //reference to the parent node
    let childNode = document.querySelector(".child");               //reference to child node
    let grandchildNode = document.querySelector(".grandchild");     //reference to grandchild

    let newParagraphElement = document.createElement("p");    //create new grandchild node (sibling)
    childNode.appendChild(newParagraphElement);      //add <p></p> into child (parent) node container
    let grandchild2Node = document.querySelector("div p");//reference to NEW grandchild

    parentNode.style.border = "2px solid black";
    parentNode.style.padding = "5px";

    childNode.style.border = "2px solid red";
    childNode.style.padding = "5px";

    grandchildNode.style.border = "2px solid green";
    grandchildNode.style.padding = "5px";
    grandchildNode.innerHTML = "testing";

    grandchild2Node.style.border = "2px solid orange";
    grandchild2Node.style.padding = "5px";
    grandchild2Node.innerHTML = "testing";


    //let child_nodes = childNode.childNodes;
    //console.log(child_nodes[1]);
    let nodeList = document.querySelectorAll("p");  //returns nodelist containing references to all matches
    let nodeArray = [...nodeList];      //since the "nodelist" isnt a true array, you can use the spread operator to copy its contents into one
    console.log(nodeList);
    console.log(nodeArray);

    nodeList[2].style.border = "2px solid yellow";  //in this case, I used the reference within the nodelist to select the element
    nodeList[2].style.padding = "5px";
}


function domManipulationPractice(){
                //HTML file has empty div with class "DOM-Practice"
                //insert a few new elements and style them through JS
                //alter a few of the elements already in the HTML
    let parentNode = document.querySelector(".DOM-Practice");                   //reference to parent node-needed to append children

    let newDiv = document.createElement("div");                                 //create and reference new <div> element
        newDiv.style.border = "2px solid green";                                //single rule styling
        newDiv.style.padding = "5px";
        //newDiv.style.background-color: "blue"; --- This kebab cased css rule(background-color) cannot be accessed this way
        newDiv.style.backgroundColor= "blue";   //this is one way to access kebab cased rules
        //or
        newDiv.style["background-color"] = "pink";  //this is another way
        newDiv.setAttribute("id","firstChild");             //set specified attribute with specified value
        console.log(newDiv.getAttribute("id"));             //getAttribute returns value of specified attribute
        newDiv.textContent = "Hello World";

    let newPara = document.createElement("p");                                  //create and reference new <p> element
        newPara.style.cssText = "border:2px solid red; padding:5px;";           //multi-rule styling using "cssText"
        newPara.setAttribute("class","internal-para");                          //add class to element
        console.log(newPara.getAttribute("class"));         
        newPara.classList.remove("internal-para");                              //remove class using "classList", can also add with this
        console.log(newPara.getAttribute("class"));
        newPara.innerHTML = "<div style='color:blue; border:1px solid purple; padding:3px'>Testing</div>";

    let newButton = document.createElement("button");                           //create and reference new <button> element
        newButton.setAttribute("style","border: 2px solid orange; padding:5px;");//also multi-rule styling using the setAttribute-style method
        newButton.textContent = "Button";                                         //insert HTML text into element


    parentNode.appendChild(newDiv);                                             //add <div> as lastchild to parent node
    parentNode.appendChild(newPara);                                            //add <p> as last child to parent node
    parentNode.insertBefore(newButton, newPara);                                //add <button> into parent child BEFORE <p> child

}

function domManipulationExercise(){

//make a reference to the container
    let htmlContainer = document.querySelector("#container");

//create a new <p> element with red text and append to container
    let newPara = document.createElement("p");
    newPara.textContent = "Hey I'm red!";
    newPara.style.color = "red";
    htmlContainer.appendChild(newPara);

//create new <h3> element with blue text and appent to container
    let newH3 = document.createElement("h3");
    newH3.style.color = "blue";
    newH3.textContent = "I'm a blue h3!";
    htmlContainer.appendChild(newH3);

//create new div, h1, and p. Style the div, insert text into h1 and p, then append h1 and p into div
    let newDiv = document.createElement("div");
    let newH1inDiv = document.createElement("h1");
    let newPinDiv = document.createElement("p");
    newDiv.style.cssText = "border:2px solid black; background-color:pink;"
    newH1inDiv.textContent = "I'm in a div";
    newPinDiv.textContent = "ME TOO!";
    newDiv.appendChild(newH1inDiv);
    newDiv.appendChild(newPinDiv);
    htmlContainer.appendChild(newDiv);
}

function domEventsPractice(){

    const btn = document.querySelector("#btn");
//only allows one "onclick"
    btn.onclick = () => alert("This was coded as an arrow function in .js using 'onclick'");

    const btn2 = document.querySelector("#btn2");
//this method allows for multiple evenListeners
    btn2.addEventListener("click", (e)=>{
        e.target.style.background="blue";
    });

//lets write our own custom function and assign it to an event
    function printHello(){
        console.log("Hello World!");
    }
    let helloBtn = document.querySelector("#hello-to-console");
    helloBtn.onclick = printHello;
}



function objectPractice(){
    let newObj = {
        booleanProp: true,
        numProp: 34,
        stringProp:"hello world",
        arrayProp:[1,2,3,"hello",false],
        delete: "this one",
        "multi word prop":"Testing testing 1 2 3",
    };

    newObj.newProp = "testing";

    let resultString = "Here are all the object's props:"+newObj.booleanProp+" "+newObj.numProp+" "+newObj.stringProp+" "+newObj.arrayProp+" "+newObj.delete;
    let newProperty = newObj.newProp;
    console.log(newProperty);
    console.log(resultString);
    delete newObj.delete;
    console.log(newObj);
    console.log(newObj["multi word prop"]);
}

function propertyValueShorthand(){

    function makeUser(name, age){
        return{         //this function returns an Object w/ two properties
            name: name, //conventional way
            age,        //shorthand method - same as writing age:age
            for: "for is usually reserved and cannot be used as a variable name",
            let: "BUT, there are no such limitations in the Object world",
            45: "fortyfive",    //same as "45":"fortyfive" as the property name automatically gets converte to a string
        };
    }

    let user = makeUser("Greg", 29);    //assign the Object from function to new var

    console.log(user);      //should output the Object
    console.log(user.age);
    console.log(user["name"]);
    console.log(user.let);
    console.log(user[45]);
    console.log(user["45"]);

    console.log("age" in user); //check if object has property
}

function forInLoop(){
    let mug = {
        color: "black",
        volume: 400,
        handle: true,
        design: "USC",  //non-int keys are output in same order created
        45:45,          //int keys are sorted upon output
        35:35,
        80:80,
        20:20,
    };
    for(let key in mug){    //this special for loop loops through all keys of an object
        console.log("Key: "+key);
    }

    let codes = {
        "+49":"Germany",
        "+41":"Switzerland",
        "+44":"Great Britain",
        "+1":"USA",
    };

    for(let countryCodes in codes){
        console.log(+countryCodes);     //prefix + operator - converts to number
    }

}

function objectTasksPractice(){

    let user = {};
    user.name = "John";
    user.surname = "Smith";
    user.name = "Pete";
    delete user.name;
    user.name = "John";
    user.age = 30;
    user.location = "Los Angeles";

    let user2 = {
        
    };

    function isEmpty(obj){      //returns true if object has ZERO properties
        let keyArray = [];
        for(let key in obj){    //loop through object keys and push onto empty array
            keyArray.push(key);
        }
        if(keyArray.length == 0){   //if object has properties, the array will contain them
            return true;            //if the array is empty, that means the object had no properties
        }else{
            return false;
        }
    }

    function sumProps(){
        let salaries = {
            John: 100,
            Ann: 160,
            Pete:130,
        };
        let sum = 0;
        for(let key in salaries){
            sum += salaries[key];
        }

        console.log(sum);
    }

    function multiplyNumeric(obj){

        for(let key in obj){
            if(typeof obj[key]=="number"){  //if value is a number
                obj[key] *= 2;              //multiply by 2 and store back in key
            }
        }

    }

    let menu = {
        width: 200,
        height: 300,
        title: "My menu"
    };

}



function songDecoder(song){
    //regular expressions
    let wubReg = /WUB/g;
    let spaceReg = / (?= )/g;                              //X(?=Y), it means "look for X, but match only if followed by Y"
    song = song.replace(wubReg, " ");                //replace WUB with a space
    song = song.split("");
    while(song[0]==" "||song[song.length-1]==" "){
        if(song[0]==" "&&song[song.length-1]==" "){      //if resulting sentence has both leading and tail spaces, remove both
        song.splice(0,1);
        song.splice(song.length-1,1);
        }else if(song[song.length-1]==" "){              //if result string has tail space, remove
        song.splice(song.length-1,1);
        }else if(song[0]==" "){                          //if result string has leading space, remove
        song.splice(0,1);
        }        
    }

    song = song.join("");
    song = song.replace(spaceReg, "");
        console.log({song});
        return song;
 }

 function highAndLow(numbers){

    let numReg = /(-)*\d+/g;
    let numArray = numbers.match(numReg);
    numArray = numArray.map(function(number){
        return parseInt(number);
    });
    numArray = numArray.sort(function(a,b){
        if(a<b){
            return -1;
        }else if(a>b){
            return 1;
        }
    });
    let minNum = numArray[0];
    let maxNum = numArray[numArray.length-1];
    let resultString = `${maxNum} ${minNum}`;
    
    return resultString;

  }

  function spinWords(string){
    if(string == ""||string == " "){
        return string;
    }
    //split string into words
    let wordReg = /[A-Za-z]+/g;
    let arrWords = string.match(wordReg);

    //make function to reverse string
    function reverseString(word){
        word = word.split("");
        let reversedWord = [];
        for(let i=0;i<word.length;i++){
            reversedWord.unshift(word.slice(i,i+1));
        }
        reversedWord = reversedWord.join("");
        return reversedWord;
    }

    //loop through array and reverse any words that are 5 or more characters long
    let finalArr = [];
    arrWords.forEach(element => {
        if(element.length>=5){
            finalArr.push(reverseString(element));
        }else{
            finalArr.push(element);
        }
    });

    let resultString = finalArr.join(" ");
    return resultString;
  }

function isPangram(string){             //returns true if provided string is a pangram (contains all letters of alphabet at least once)
    string = string.toLowerCase().split("");      //make all letters lowercase for easier comparison
    let alphabetArray = [];             //fill this array with lowercase letters of alphabet (code 97-122) 
    let stringIsPangram = true;

    for(let i=97;i<123;i++){
        alphabetArray.push(String.fromCharCode(i));
    }

    let letter = 0;
    while (stringIsPangram !== false&&letter<26){
        if(string.indexOf(alphabetArray[letter])<0){
            stringIsPangram = false;
        }else{
            stringIsPangram = true;
        }
        letter++;
    }
    return stringIsPangram;
}



let testObj = {
    prop1: "Hello",
    prop2: 42,
    "prop three": true,
    "prop 4": function(){
        return "hello world!";
    }
};

//constructor for making Book objects

function Book(title, author, pages, read){
    this.title = title, 
    this.author = author, 
    this.pages = pages,
    this.read = read,
    this.info = function(){
        return `${title} by ${author}, ${pages} pages, ${read==true?"read":"not read yet"}`;  
    }
}

let theHobbit = new Book("The Hobbit", "J.R.R Tolkien", 295, true);

//object prototypes

let newObj = {
    prop1: "Testing"
};

let newArr = [];
//console.log(newArr.constructor);        //Array(){}

Object.prototype.myFunx = function(){
    console.log("test");
}

// newObj.myFunx();    //works
// newArr.myFunx();    //also works because all objects inherit from Object so if i added the function to the Object prototype, all child
//                     //objects inherit the function


function People(){                          //constructor for People objects
    this["super star"] = "Michael Jackson";     //all People objects will have a property "superstar" with value "MJ"
}
People.prototype.athlete = "Tiger Woods";

let testPerson = new People();
testPerson["super star"] = "Steve Jobs";
// console.log(testPerson["super star"]);
// console.log(testPerson.athlete);

// console.log(testPerson);

let newPerson = new People();
// console.log(newPerson);

//inheritance practice

function Automobile(wheels, material, color, engine){           //constructor for automobile
    this.numWheels = wheels;
    this.buildMaterial = material;
    this.bodyColor = color;
    this.engineCapacity = engine;
}

function Truck(bedLength, fourWheel, cabCap){                   //constructor for truck
    this.bedLength = bedLength;
    this.fourWheelDrive = fourWheel;
    this.cabCapacity = cabCap;
    this.interiorColor = "grey";
}

Truck.prototype = new Automobile(4, "steel", "blue", 6.0);      //change Truck's prototype to Automobile's constructor, Truck will inherit all of Automobiles contents

//Automobile.prototype.interiorColor = "grey";
//Truck.prototype.interiorColor = "black";

let truck1 = new Truck(5, true, 5);


function alphabetArray(){
    let alphabetArray = [];             //fill this array with lowercase letters of alphabet (code 97-122) 

    for(let i=97;i<123;i++){
        alphabetArray.push(String.fromCharCode(i));
    }    
    return alphabetArray;
}

function alphabetPosition(text) {           //function that returns a string of space seperated numbers (alphabet position of letter)
    let alphabetArr = alphabetArray();
    text = text.toLowerCase();
    text = text.split("");
    text = text.map(function(letter){
        if(alphabetArr.indexOf(letter)>-1){
            return alphabetArr.indexOf(letter)+1;
        }
    });
    text = text.filter(function(letter){
        return letter != undefined;
    });
    text = text.join(" ");
    return text;
}

function order(words){  //given a string of words (each containing a number), sort the string based on the numbers within the words
    if(words==""){
        return "";
    }
    else{
        //use web reg to match int within string
        let numReg = /[1-9]/;
        //split string into array of words
        words = words.split(" ");
        words = words.sort(function(a,b){
            if(a.match(numReg)>b.match(numReg)){
                return 1;
            }else{
                return -1;
            }
        });
        words = words.join(" ");
        return words;
    }
}

function validatePIN (pin) {    //return true if pin contains exactly 4 or 6 digits, false otherwise
    let pinReg4 = /\d\d\d\d/;   //4 digits
    let pinReg6 = /\d\d\d\d\d\d/;   //6 digits
    return ((pinReg4.test(pin)&&pin.length==4)||(pinReg6.test(pin)&&pin.length==6));
}

var moveZeros = function (arr) {    //returns arr with all zeros moved to end while preserving original order of all other contents
    let zerosArr = [];
    let othersArr = [];
    let finalArr = [];
    arr.forEach(element => {
        if(element === 0){
            zerosArr.push(element);
        }else{
            othersArr.push(element);
        }
    });
    finalArr = [...othersArr, ...zerosArr];
    return finalArr;
}


function zero() {   //if sent to operator function, return just the number, but if being sent the operator function, call the operator funx
    if(arguments[0]===undefined){
        return 0;
    }else{
        let solve = "0"+arguments[0];
        solve = solve.split("");
        let num1 = parseInt(solve[0]);
        let operator = solve[1];
        let num2 = parseInt(solve[2]);
        switch(operator){
            case "+":
                return num1+num2;
            case "-":
                return num1-num2;
            case "*":
                return num1*num2;
            case "/":
                return Math.floor(num1/num2);
        }
    }
}
function one() {
    if(arguments[0]===undefined){
        return 1;
    }else{
        let solve = "1"+arguments[0];
        solve = solve.split("");
        let num1 = parseInt(solve[0]);
        let operator = solve[1];
        let num2 = parseInt(solve[2]);
        switch(operator){
            case "+":
                return num1+num2;
            case "-":
                return num1-num2;
            case "*":
                return num1*num2;
            case "/":
                return Math.floor(num1/num2);
        }
    }
}
function two() {
    if(arguments[0]===undefined){
        return 2;
    }else{
        let solve = "2"+arguments[0];
        solve = solve.split("");
        let num1 = parseInt(solve[0]);
        let operator = solve[1];
        let num2 = parseInt(solve[2]);
        switch(operator){
            case "+":
                return num1+num2;
            case "-":
                return num1-num2;
            case "*":
                return num1*num2;
            case "/":
                return Math.floor(num1/num2);
        }
    }
}
function three() {
    if(arguments[0]===undefined){
        return 3;
    }else{
        let solve = "3"+arguments[0];
        solve = solve.split("");
        let num1 = parseInt(solve[0]);
        let operator = solve[1];
        let num2 = parseInt(solve[2]);
        switch(operator){
            case "+":
                return num1+num2;
            case "-":
                return num1-num2;
            case "*":
                return num1*num2;
            case "/":
                return Math.floor(num1/num2);
        }
    }
}
function four() {
    if(arguments[0]===undefined){
        return 4;
    }else{
        let solve = "4"+arguments[0];
        solve = solve.split("");
        let num1 = parseInt(solve[0]);
        let operator = solve[1];
        let num2 = parseInt(solve[2]);
        switch(operator){
            case "+":
                return num1+num2;
            case "-":
                return num1-num2;
            case "*":
                return num1*num2;
            case "/":
                return Math.floor(num1/num2);
        }
    }
}
function five(){
    if(arguments[0]===undefined){
        return 5;
    }else{
        let solve = "5"+arguments[0];
        solve = solve.split("");
        let num1 = parseInt(solve[0]);
        let operator = solve[1];
        let num2 = parseInt(solve[2]);
        switch(operator){
            case "+":
                return num1+num2;
            case "-":
                return num1-num2;
            case "*":
                return num1*num2;
            case "/":
                return Math.floor(num1/num2);
        }
    }
}
function six() {
    if(arguments[0]===undefined){
        return 6;
    }else{
        let solve = "6"+arguments[0];
        solve = solve.split("");
        let num1 = parseInt(solve[0]);
        let operator = solve[1];
        let num2 = parseInt(solve[2]);
        switch(operator){
            case "+":
                return num1+num2;
            case "-":
                return num1-num2;
            case "*":
                return num1*num2;
            case "/":
                return Math.floor(num1/num2);
        }
    }
}
function seven() {
    if(arguments[0]===undefined){
        return 7;
    }else{
        let solve = "7"+arguments[0];
        solve = solve.split("");
        let num1 = parseInt(solve[0]);
        let operator = solve[1];
        let num2 = parseInt(solve[2]);
        switch(operator){
            case "+":
                return num1+num2;
            case "-":
                return num1-num2;
            case "*":
                return num1*num2;
            case "/":
                return Math.floor(num1/num2);
        }
    }
}
function eight() {
    if(arguments[0]===undefined){
        return 8;
    }else{
        let solve = "8"+arguments[0];
        solve = solve.split("");
        let num1 = parseInt(solve[0]);
        let operator = solve[1];
        let num2 = parseInt(solve[2]);
        switch(operator){
            case "+":
                return num1+num2;
            case "-":
                return num1-num2;
            case "*":
                return num1*num2;
            case "/":
                return Math.floor(num1/num2);
        }
    }
}
function nine() {
    if(arguments[0]===undefined){
        return 9;
    }else{
        let solve = "9"+arguments[0];
        solve = solve.split("");
        let num1 = parseInt(solve[0]);
        let operator = solve[1];
        let num2 = parseInt(solve[2]);
        switch(operator){
            case "+":
                return num1+num2;
            case "-":
                return num1-num2;
            case "*":
                return num1*num2;
            case "/":
                return Math.floor(num1/num2);
        }
    }
}

function plus(number2) {
    return "+"+number2;
}
function minus(number2) {
    return "-"+number2;
}
function times(number2){
    return "*"+number2;
}
function dividedBy(number2) {
    return "/"+number2;
}



function rot13(message){
    let lowerAlphabet = "abcdefghijklmnopqrstuvwxyz".split("");
    let upperAlphabet = lowerAlphabet.map(function(letter){
        return letter.toUpperCase();
    });
    message = message.split("");
    message = message.map(function(letter){
        if(lowerAlphabet.indexOf(letter)>-1){
            if(lowerAlphabet.indexOf(letter)<13){
                return lowerAlphabet[lowerAlphabet.indexOf(letter)+13];
            }else{
                return lowerAlphabet[lowerAlphabet.indexOf(letter)-13]
            }
        }else if(upperAlphabet.indexOf(letter)>-1){
            if(upperAlphabet.indexOf(letter)<13){
                return upperAlphabet[upperAlphabet.indexOf(letter)+13];
            }else{
                return upperAlphabet[upperAlphabet.indexOf(letter)-13]
            }
        }else{
            return letter;
        }
    }).join("");
    return message;
  }


// animal has methods
let animal = {
    walk() {
        if (!this.isSleeping) {
        alert(`I walk`);
        }
    },
    sleep() {
        this.isSleeping = true;
    }
};
  
let rabbit = {
    name: "White Rabbit",
    __proto__: animal
};
rabbit.sleep();
for(let property in rabbit){
    if(rabbit.hasOwnProperty(property)){
        console.log("Own: "+property);
    }else{
        console.log("Inherited: "+property);
    }

}


let head = {
    glasses: 1
  };
  
  let table = {
    pen: 3,
    __proto__:head
  };
  
  let bed = {
    sheet: 1,
    pillow: 2,
    __proto__: table
  };
  
  let pockets = {
    money: 2000,
    __proto__: bed,
  };


  let hamster = {
    stomach: [],
  
    eat(food) {
      this.stomach=[food];
    }
  };
  
  let speedy = {
    __proto__: hamster,

  };
  
  let lazy = {
    __proto__: hamster
  };

  speedy.eat("grape");

console.log(speedy.stomach);
console.log(lazy.stomach);


function list(names){           //takes an array of objects {name:"Bart"} and returns a list (string) of comma seperated names with the
                                //last two seperated by an &
    names = names.map(function(hash){
        return hash.name;
    });
    namesLen = names.length;
    if(namesLen == 0){
        return '';
    }else if(namesLen == 1){
        return names[0];
    }else if(namesLen == 2){
        return names[0]+" & "+names[1];
    }else{
        //split string of names into two portions, first portion contains all but last two, second portion contains last two
        let lastOne = names.splice(namesLen-1,1);
        names = names.join(", ");
        names += " & "+lastOne;
        return names;
    }
}


function persistence(num) { //takes num and returns multiplicative persistance (the number of times the digits in a number need to be multiplied until the resulting product is a single digit) 
    let digitsArr = num.toString().split("");   //convert int to string then split into individual digits
    let result;                                 //this will store the result of each multiplication (thus, the new number we work with)
    let multPers=0;                               //this will store the number of times we need to multiply to finally result in a single digit product
    if(digitsArr.length === 1){
        return multPers;
    }else{
        do{
            result = digitsArr.reduce(function(acc, element){
            return acc*element;
            }, 1);
            digitsArr = result.toString().split("");
            multPers++;
        }while(result.toString().length>1) 
    }

    return multPers;
}


function orderWeight(string) { //orders the string of numbers based on "weight" which is the sum of the individual digits, if two numbers have the same "weight", compare them as strings
    string = string.split(" ");   //seperate the numbers
//create new array of objects containing the original number and its weight
    string = string.map(function(number){
        let numWeight = number.split("").reduce(function(acc, digit){return acc+parseInt(digit)},0);
        return {
            originalNum: number, 
            weight: numWeight
        };
    }).sort(function(obj1, obj2){
            if(obj1.weight>obj2.weight){
                return 1;
            }else if(obj1.weight<obj2.weight){
                return -1;
            }else{
                if(obj1.originalNum>obj2.originalNum){
                    return 1;
                }else if(obj1.originalNum<obj2.originalNum){
                    return -1;
                }                
            }            
    }).map(function(obj){
        return obj.originalNum;
    }).join(" ");

    return string;
}




function countSmileys(arr) {    //return the total number of smiling faces in the array
    //valid smileys
    //eyes => : or ;
    //nose (optional) => - or ~
    //mouth => ) or D
    //let myReg = /[:;][-~]*[\)D]/g;
    //let myReg = /(:|;){1}(-|~){0,1}(D|\)){1}/;
    if(arr.length === 0){
        return 0;
    }else{
      let myReg = /(:|;)(-|~)?(D|\))/;
    arr = arr.filter(function(element){
        //console.log(myReg.test(element));
        if(myReg.test(element)===true){
            return element;
        }
    });
    return arr.length;      
    }

}



function formatDuration (seconds) {
    //units expressed as seconds
    const second = 1;
    const minute = 60*second;
    const hour = 60*minute;
    const day = 24*hour;
    const year = 365*day;
    let units = [
                 {nameSingular:"year", namePlural:"years", value:year},
                 {nameSingular:"day", namePlural:"days", value:day},
                 {nameSingular:"hour", namePlural:"hours", value:hour},
                 {nameSingular:"minute", namePlural:"minutes", value:minute},
                 {nameSingular:"second", namePlural:"seconds", value:second}
                ];

    if(seconds === 0){
        return "now";
    }else{
        units.map(function(unitObj){
            if(seconds<unitObj.value){
                unitObj.result = 0;
            }else{
                let unitResult = Math.floor(seconds/unitObj.value);
                unitObj.result = unitResult;
                seconds = seconds%unitObj.value;
            }
        });
        units = units.filter(function(obj){
            if(obj.result>0){
                return obj;
            }
        });
        let finalString = units.reduce(function(acc,obj){
            if(obj.result === 1){
                return acc+obj.result+" "+obj.nameSingular+" ";
            }else{
                return acc+obj.result+" "+obj.namePlural+" ";
            }
        },"").split(" ");
        finalString.splice(finalString.length-1,1);
        if(finalString.length == 2){
            return finalString.join(" ");
        }else if(finalString.length === 4){
            finalString.splice(finalString.length-2,0,"and");
            return finalString.join(" ");
        }else{
            finalString.splice(finalString.length-2,0,"and");
            let lastPart = finalString.splice(finalString.length-5);
            for(let i=1;i<finalString.length;i++){
                if(i%2===1){
                    finalString[i]+=",";   
                }
            }
            finalString = [...finalString, ...lastPart];
            return finalString.join(" ")
        }
    }
}



// function zeros (n) {
//     let numArr = [];
//     let multTens = [];
//     let multTwoAndFive = [];
//     let result;

//     for(let i=1;i<=n;i++){
//         numArr.push(i);
//     }
//     multTwoAndFive = numArr.filter(function(number){
//         if((number%2===0&&number%10!==0)||(number%5===0&&number%10!==0)){
//             return number;
//         }
//     });
//     multTens = numArr.filter(function(number){
//         if(number%10===0){
//             return number;
//         }
//     });
//     for(let i=0;i<multTwoAndFive.length;i++){
//         if(multTwoAndFive[i]%5===0){
//             multTens.push(multTwoAndFive[i-1]*multTwoAndFive[i]);
//         }
//     }
//     // //test
//     // multTens = multTens.map(function(num){return num/10});
//     // multTwoAndFive = multTens.filter(function(number){
//     //     if((number%2===0&&number%10!==0)||(number%5===0&&number%10!==0)){
//     //         return number;
//     //     }
//     // });
//     // multTens = multTens.filter(function(number){
//     //     if(number%10===0){
//     //         return number;
//     //     }
//     // });
//     // //test
//     result = multTens.reduce(function(acc,curr){
//         return acc*curr;
//     },1);
//     // .toString().split("").filter(function(digit){
//     //     if(digit==="0"){
//     //         return digit;
//     //     }
//     // }).length;

//     console.log(multTwoAndFive);
//     console.log(multTens);
//     console.log(result);
//     return result;
// }


// function zeros(number){ //-----------------------REVISIT THIS ONE ON CODEWARS(Number of trailing zeros of N!)-----------------
//     let allNums = [];
//     let tens;
//     let fives;
//     let twos;
//     let numZeros = 0;
// //SET-UP-------------------------------------
//     for(let i=1;i<=number;i++){     //get array of all numbers from 1 til "number"
//         allNums.push(i);
//     }

// let loopThrough=1;
// do{
//     tens = [];
//     fives = [];
//     twos = [];
//     for(let i=allNums.length-1;i>-1;i--){   //get array of multiples of 10
//         if(allNums[i]%10===0){
//             tens.unshift(allNums[i]);
//             allNums.splice(i,1);
//         }
//     }
//     for(let i=allNums.length-1;i>-1;i--){   //get array of multiples of 5
//         if(allNums[i]%5===0){
//             fives.push(allNums[i]);
//             allNums.splice(i,1);
//         }
//     }
//     for(let i=allNums.length-1;i>-1;i--){   //get array of multiples of 2
//         if(allNums[i]%2===0){
//             twos.unshift(allNums[i]);
//             allNums.splice(i,1);
//         }
//     }
//     let loopLength = fives.length;
//     for(let i=0;i<loopLength;i++){          //get multiples of 10 by multiplying each element in fives to corresponding element in twos
//         let j=0;
//         tens.push(fives[j]*twos[j]);
//         fives.splice(j,1);
//         twos.splice(j,1);
//     }
//     numZeros += tens.length;
//     allNums = [...tens];
//     loopThrough++;
// }while(loopThrough<5)
// //START------------------------------------------------only working with the tens array now

//     // console.log(numZeros);
//     // console.log(tens);

// }

// zeros(1000);
// //console.log(zeros(100));

*/

function outputListOfPrimeNumbers(start,end){   //function that returns a list of all prime numbers between start and end
    function checkIfPrime(num){                 //function that returns true if number is prime, and false if number is not prime
        let numIsPrime;
        if(num==1||num==2){
            numIsPrime = true;                  //if num is 1 or 2, return true (it is prime)
        }else{
            for(let i=2;i<num;i++){
                if(num%i==0){
                    numIsPrime = false;         //if num is divisible by any number before it equally (no remainder), then num is automatically NOT PRIME
                    break;
                }else{
                    numIsPrime = true;
                }
            }
        }
        return numIsPrime;
    }
    let listOfPrimes=[];                        //declare blank string to store final list

    for(let i=start;i<=end;i++){                //loop through all numbers between start and end inclusive
        if(checkIfPrime(i)){
            listOfPrimes.push(i);               //if the current number is prime, add it to the list
        }
    }
    //listOfPrimes = listOfPrimes.slice(0,listOfPrimes.length-2);     //slice the list to remove the tail ", "
    return listOfPrimes;
}
/*
function factorize(ourNum){
    if(ourNum<0){
        ourNum*=-1;
    }
    let primeArr = outputListOfPrimeNumbers(2,ourNum);
    let factorization = [];

    while(ourNum > 1){
        for(let i=0;i<primeArr.length;i++){
            if(ourNum===1){
                break;
            }
            if(ourNum%primeArr[i]===0){
                factorization.push(primeArr[i]);
                ourNum = ourNum/primeArr[i];
            }
        }
    }
    return factorization;
}

function sumOfDivided(lst) {
    let objArr = lst.map(function(number){
        let factorization = factorize(number);
        return {
            value: number,
            factors: factorization
        };
    });
    let sharedPrimeFactors = []

    objArr.forEach(obj => {
        sharedPrimeFactors = sharedPrimeFactors.concat(obj.factors);
    });
    sharedPrimeFactors = [...new Set(sharedPrimeFactors)].map(function(elem){
        return [elem,0];
    }).sort(function(arr1,arr2){
        if(arr1[0]>arr2[0]){
            return 1;
        }if(arr1[0]<arr2[0]){
            return -1;
        }
    });

    sharedPrimeFactors.forEach(array => {
        let sum = 0;
        objArr.forEach(obj => {
            if(obj.factors.includes(array[0])){
                sum+=obj.value;
            }
        });
        array[1]=sum;
    });

    return sharedPrimeFactors;
}



//-------------------REVISIT: Recover a secret string from random triplets-------------------------------------
function recoverSecret (triplets){                  //given an array of triplets, return the secret word
    let secretWord = [...triplets[0]];
    triplets.splice(0,1);

    let uniqueChars = [];
    triplets.forEach(element => {
        uniqueChars = uniqueChars.concat(element);
    });
    const wordLength = [...new Set(uniqueChars)].length;        //since the secret word is composed of unique chars (no duplicates), 
                                                    //I have created this array to determine the length of the secret word
                                                    //so...this array consists of the secret word jumbled up
                                                    //I can use this as a means of controlling loop iterations

    let loop = 0;
    while(loop < wordLength-3){            //since we will add 1 letter each time we loop, this will loop the correct number of times - FOR NOW, NEEDS TO CHANGE



        loop++;
    }
    console.log(secretWord);
    console.log(triplets);
}

triplets1 = [
  ['t','u','p'],
  ['w','h','i'],
  ['t','s','u'],
  ['a','t','s'],
  ['h','a','p'],
  ['t','i','s'],
  ['w','h','s']
]

recoverSecret(triplets1);

//start with one of the triplets - add it to blank array that will be the word we are building
//then find a triplet that shares at least 2 chars with the word we are building




function dirReduc(arr){     //given an array of strings of directions, return a simplified array of directions with the needless ones removed
    let directions = ["NORTH", "SOUTH", "EAST", "WEST"];
    let oppDirections = ["SOUTH", "NORTH", "WEST", "EAST"];

    do{
    if(arr.indexOf("remove")>-1){
        arr = arr.filter(function(element){
            if(element!="remove"){
                return element;
            }
        });     
    }
    for(let i=0;i<arr.length;i++){
        let opp = oppDirections[directions.indexOf(arr[i])];
        if(arr[i+1]==opp){
            arr[i]="remove";
            arr[i+1]="remove";
            i++;
        }
    }        
    }while(arr.indexOf("remove")>-1)
    return arr;
  }

  dirReduc(["NORTH", "SOUTH", "EAST", "WEST", "EAST", "WEST"]);
  
  

  //------------------------------------------------------REVISIT "Gap in Primes"--------------------------------------------------------------------------
  function gap(gap,start,end){   //function that returns a list of all prime numbers between start and end
    if(gap%2===1){
        return null;
    }
    function checkIfPrime(num){                 //function that returns true if number is prime, and false if number is not prime
        let numIsPrime;
        if(num==1||num==2){
            numIsPrime = true;                  //if num is 1 or 2, return true (it is prime)
        }else{
            for(let i=2;i<num;i++){
                if(num%i==0){
                    numIsPrime = false;         //if num is divisible by any number before it equally (no remainder), then num is automatically NOT PRIME
                    break;
                }else{
                    numIsPrime = true;
                }
            }
        }
        return numIsPrime;
    }

    // function isPrime(num) {                  //tried with a different prime check, still didnt work
    //     for(var i = 2; i < num; i++)
    //       if(num % i === 0) return false;
    //     return num > 1;
    // }

    //---------------------------------------------TAKES TOO LONG, TIMED OUT--------------------------------------------------------------------
    let returnNull=true;
    for(let i=start;i<=end||(i-start)>1000;i++){                //loop through all numbers between start and end inclusive
        if(checkIfPrime(i)&&((i+gap)<end&&checkIfPrime(i+gap))){
            let primes;
                primes = [];
                for(let j=i;j<=i+gap;j++){
                    if(checkIfPrime(j)){
                        primes.push(j);
                    }    //TODO 
  }
                }
            if(primes.length==2){
              return primes;  
            }
        }
    }
    if(returnNull){
        return null;
    }

    // //---------------------------------------------TAKES TOO LONG, TIMED OUT--------------------------------------------------------------------
    // let pairOfPrimes=[];                        //declare blank string to store final list
    // let returnNull;
    // for(let i=start;i<=end;i++){                //loop through all numbers between start and end inclusive
    //     if(checkIfPrime(i)){
    //         pairOfPrimes.push(i);               //if the current number is prime, add it to the list
    //     }
    //     if(pairOfPrimes.length == 2){
    //         //find gap
    //         if((pairOfPrimes[1]-pairOfPrimes[0]) === gap){
    //             returnNull = false;
    //             return pairOfPrimes;
    //         }else{
    //             returnNull = true;
    //             pairOfPrimes = [pairOfPrimes[1]];
    //         }
    //     }

    // }
    // if(returnNull){
    //     return null;
    // }
}



function validParentheses(parens){
    parens = parens.split("");
//console.log(parens);
//console.log(parens.length);
    if(parens[0]===")"||parens.length%2===1){           //if initial string consists of an uneven amount of parenthese ends, return false
                                                        //if initial string starts with a right side parenthese, return false
        return false;
    }else{
        const loopNum = parens.length/2;                //control number of loops, each iteration removes 2 so we must loop through it half the length
        let indexLeft;
        let indexRight;
        for(let i=0;i<loopNum;i++){
            indexLeft = parens.indexOf("(");            //index of first left par
            indexRight = parens.indexOf(")");           //index of first right par
//console.log({indexLeft}, {indexRight});
            if(indexLeft>-1&&indexRight>-1){            //if the string contains both left and right then proceed, otherwise we should return false
                parens.splice(indexLeft,1, 0);          //replace left with 0
                parens.splice(indexRight,1, 0);         //replace right with 0
                parens = parens.filter(function(element){   //remove both 0s
                    if(element!==0){
                        return element;
                    }
                });
                if(parens[0]===")"){                    //after removal, if the starting element is a right par then return false
                    return false;
                }
//console.log(parens);
            }
        }
    }
    if(parens.length>0){     //after all removals have been completed, if the array isnt empty, its false
        return false;
    }else{
        return true;         //if all goes well and each left has a matching right, then resulting array should be empty, return true
    }
}


function pigIt(str){
    str = str.split(" ");
    str = str.map(function(word){
        if(/[!?.,]/.test(word)){                        //if punctuation, return the punctuation unaltered
            return word;
        }
        if(word.length===1){           //if single character word, return word plus "ay"
            return word+"ay";
        }else{              //otherwise, move first letter to end then add "ay"
            word = word.split("");
            word.push(word.splice(0,1),"ay");
            word = word.join("");
            return word;
        }
    });
    return str.join(" ");
}


function solution(list){    //takes array of ints in increasing order and returns string of abbreviated list
    let rangeArrs = [];
    let tempArr = [];
    for(let i=0;i<list.length;i++){
        if(tempArr.length===0){
            tempArr.push(list[i]);    
        }
        if(list[i+1]==(list[i]+1)){
            tempArr.push(list[i+1]);
        }else{
            rangeArrs.push(tempArr);
            tempArr = [];
        }
    }
    rangeArrs = rangeArrs.map(function(arr){
        if(arr.length>2){
            return [arr[0],arr[arr.length-1]];
        }else{
            return arr;
        }
    });
    let finalString = rangeArrs.reduce(function(acc,arr){
        if(arr.length>1){
            if(arr[1]-arr[0]===1){
                return acc+arr[0]+","+arr[1]+",";
            }else{
                return acc+arr[0]+"-"+arr[1]+",";    
            }
        }else{
            return acc+arr[0]+",";
        }
    },"");
    return finalString.substring(0,finalString.length-1);
}


function maxSequence(arr){      //--------------------------------BRUTE FORCE ALGORITHM (tests all possible subarrays)---------------------------------
    if(arr.every(function(num){return num<0})||arr.length===0){             //if array consists of ALL negatives or is empty, return 0
        return 0;
    }else if(arr.every(function(num){return num>0})){       //if array consists of ALL positives, return sum of all elements
        return arr.reduce(function(acc,num){return acc+num},0);
    }else{                                                  //if array consists of a MIX of pos/neg, return sum of elements of sub-array that yields the HIGHEST sum
        let arrOfSubs = [];
        for(let i=0;i<arr.length;i++){
            for(let j=1;j<arr.length+1;j++){
                arrOfSubs.push(arr.slice(i,j));
            }
        }
        arrOfSubs = arrOfSubs.filter(function(arr){
            if(arr.length>0){
                return arr;
            }
        }).map(function(arr){
            return {
                array: arr,
                sum: arr.reduce(function(acc,num){
                    return acc+num;
                },0)
            };
        }).sort(function(obj1, obj2){
            if(obj1.sum>obj2.sum){
                return -1;
            }else if(obj2.sum>obj1.sum){
                return 1;
            }
        });
        return arrOfSubs[0].sum;
    }
}


// function sumPairs(ints, s) {         //-------------------------------TOO SLOW--------------------------------------------------
//     let secondVal = [];
//     for(let i=0;i<ints.length;i++){
//         if(secondVal.length===0||(secondVal.indexOf(ints[i])<0)){
//             secondVal.push(s-ints[i]);
//         }else{
//             return [(s-ints[i]),ints[i]];
//         }
//     }
// }


// function randNumArr(numElem){       //function that returns an array of numElem length filled with random numbers between 0 and 100
//     let myArray = [];
//     for(let i=0;i<numElem;i++){
//         myArray.push(Math.floor(Math.random() * 100));
//     }
//     return myArray;
// }

// function randSum(array){
//     let index1 = Math.floor(Math.random() * 50);
//     let index2;
//     do{
//         index2 = Math.floor(Math.random() * 50);
//     }while(index2 != index1);
//     return array[index1]+array[index2];
// }
// let testArray = randNumArr(50);
// let sum = randSum(testArray);

// console.log(testArray);
// console.log(sum);


function sumPairs(ints,s){      //------------------------------------------ALSO TOO SLOW-------------------------------------------------------------
    let target = ints.length;

    for(let i=0;i<ints.length;i++){
        let tempIndex = ints.slice(i+1).indexOf(s-ints[i]);     //index of sum minus current element      
        if(tempIndex>-1){
            tempIndex += i + 1;
        }
        if(tempIndex>-1&&tempIndex<target){
            target = tempIndex;
        }
    }
    if(target == ints.length){
        return undefined;
    }else{
        return [s-ints[target], ints[target]];
    }
}

function humanReadable(seconds) {

    let hours = Math.floor(seconds/3600).toString();
    seconds = seconds%3600;
    let minutes = Math.floor(seconds/60).toString();
    seconds = (seconds%60).toString();
    
    if(hours.length === 1){
        hours = "0"+hours;
    }
    if(minutes.length === 1){
        minutes = "0"+minutes;
    }
    if(seconds.length === 1){
        seconds = "0"+seconds;
    }

    return `${hours}:${minutes}:${seconds}`
}



let testArr = [];
let obj1 = {
    title: "harry potter",
    author: "J.K Rowling",
    pages: 34,
    read: true
};
let obj2 = {
    title: "bushcraft 101",
    author: "dave canterbury",
    pages: 204,
    read:true
};
let obj3 = {
    title: "maze runner",
    author: "john doe",
    pages: 258,
    read:true
};

testArr.push(obj1,obj2,obj3);

let indexNeeded = testArr.findIndex(function(book){
    return book.title === "maze runner";
});



const personFactory = (name, age) => {          //factory function
    const sayHello = () => console.log("Hello");
    return {name, age, sayHello};
};

const jeff = personFactory("Jeff", 29);

// console.log(jeff.name);
// jeff.sayHello();

const People = function(name, age){             //constructor function 
    this.name = name;
    this.age = age;
    this.sayHello = function(){
        console.log("Hello");
    }
}

const greg = new People("Greg", 31);

// console.log(greg.name);
// console.log(greg.age);
// greg.sayHello();

let name = "Greg";
let color = "blue";
let number = 29;
let food = "sushi";

// console.log({name}, {color}, {number}, {food});
// console.log({name, color, number, food});            //returns an object with property names that are identical to the variable names
// console.log({name, favColor:color, age:number, favFood:food});       //this object will have 2 properties with altered names

function testScope(){
    let a = 17;         //global a

    const funx = x => {
        let a = x;      //a new a is declared...its local
    };

    funx(99);           //changes local a to 99 but doesn't alter global a

    console.log(a);     //should return 17----------if you remove the "let" from within the funx, then that function will be altering the global a

}

function privateVarFunc(){

    function FactoryFunction1(string){
        const capitalizeString = () => string.toUpperCase();
        const printString = () => console.log(`-----${capitalizeString()}-----`);
        return { printString };
    }

    const FactoryFunction2 = string => {
        const capitalizeString = () => string.toUpperCase();
        const printString = () => console.log(`----${capitalizeString()}----`);
        return { printString };
    };

    let taco1 = FactoryFunction1("test");
    let taco2 = FactoryFunction2("test");

    taco1.printString();
    taco2.printString();

    function counterCreator(){          //function that returns another function
        let count = 0;
        return function(){
            console.log(count);
            count++;
        };
    }

    const counter = counterCreator();       //here we assign a function to the variable counter

    let count = 0;
    function counter2(){
        console.log(count);
        count++;
    }

    // counter();
    // counter();
    // counter();
    // counter();
    counter2();
    counter2();
    counter2();
    counter2();
    console.log(count);
}


const Person = (name) => {
    const sayName = () => console.log(`my name is ${name}`);
    return {sayName};
};

const Nerd = (name) => {
    // simply create a person and pull out the sayName function with destructuring assignment syntax!
    const {sayName} = Person(name);
    const doSomethingNerdy = () => console.log('nerd stuff');
    return {sayName, doSomethingNerdy};
};
  
let test = Nerd("jeff");

function testHello (){
    console.log("this is a regular function that must be invoked by calling its name followed by parentheses");
}

testHello();

let helloIIFE = function(){
    console.log("helloIIFE is NOT a function, it is an IIFE...immediately invoked function expression");
}();



//----------------------------------------------MODULAR PROGRAMMING------------------------------------------------

//use IIFE to get rid of global variables by wrapping the code in an IIFE that will remove its contents from the global scope

let nonModule = function(){
    return {
        publicMethod1: function(){
            console.log("not a module");
        }
    }
}
let myNonMod = nonModule();
myNonMod.publicMethod1();
nonModule().publicMethod1();



let myModule = (function(){
    "user strict";
    //function code goes in here
    let _privateProp = "this is private property";
    let publicProp = "this is public";

    function _privateMethod(){
        console.log(_privateProp);
    }

    function publicMethod(){
        _privateMethod();
    }

    return {
        // publicMethod1: function(){
        //     console.log("Hello, world! I am a module.");
        //     _privateMethod();
        // }
        publicMethod: publicMethod,
        publicProp: publicProp,
    };
})();

myModule.publicMethod();
console.log(myModule.publicProp);
console.log(myModule._privateProp);     //returns undefined as the myModule object doesn't contain the property but rather it contains the method that can access the property
//myModule._privateMethod();      //returns error for same reason as above




function scramble(str1, str2) {
    let result;
    str1 = str1.split("");
    str2 = str2.split("");

    let i=0;
    while(result != false && i<str2.length){
        if(str1.indexOf(str2[i])>-1){
            result = true;
            str1.splice(str1.indexOf(str2[i]),1);
        }else{
            result = false;
        }
        i++;
    }
    return result;
}   

function scramble2(str1, str2) {
    str1 = str1.split("").sort();
    str2 = str2.split("").sort();

    console.log(str1, str2);
    return str2.every(function(currValue){
        return (str1.indexOf(currValue)>-1);
    });
}   



function rgb(r, g, b){  //convert rgb values to a single hex string
    let hexResult = ""; //this will be our final hex result
    let hexDigits = "0123456789ABCDEF".split("");   //this array contains all 16 of the hex digits 0-9 and A-F
    for(let i=0;i<arguments.length;i++){            //this for loop ensures all rgb values are within the 0-255 range, if under 0, it becomes 0, if over 255, it becomes 255
        if(arguments[i]<0){
            arguments[i]=0;
        } if(arguments[i]>255){
            arguments[i]=255;
        }
    }
    //run through each rgb within the arguments array and convert them to 2 digit hex values and then concatenate to the final result
    for (let j=0;j<arguments.length;j++){
        hexResult += hexDigits[Math.floor(arguments[j]/16)];
        hexResult += hexDigits[arguments[j]%16];
    }

    return hexResult;
}

function decToBin(decNum){      //given a decimal number, return a string representing the binary number
    if(decNum === 0){
        return "0";
    }else{
    let binArr = [];    //store each binary bit
    let binNum;         //this will store the binary number as a string to be returned at the end

    while (decNum != 0){
        binArr.unshift(decNum%2);
        decNum = Math.floor(decNum/2);
    }

    binNum = binArr.join("");   
    return binNum;        
    }
}

//-------------------------------------------EASIER WAY TO CONVERT DECIMAL TO BINARY-------------------------------
let decimalNum = 100;
let binaryNumber = decimalNum.toString(2);          //this converts the decimal to base 2 number (binary)

function binToDec(binNum){
    let reversedBits = [];
    let finalDecValue = 0;

    let bits = binNum.split("").map(function(bitChar){      //split the binary string number into array fo integers (1s and 0s)
        return parseInt(bitChar);
    });

    for(let i=0;i<bits.length;i++){                         //reverse the order of the binary digit array to make calculations easier
        reversedBits.unshift(bits[i]);
    }

    for(let j=0;j<reversedBits.length;j++){                 //go through binary bit array and accumulate
        let addThis = reversedBits[j] * Math.pow(2,j);
        finalDecValue += addThis;
    }
    return finalDecValue;
}




//6kyu "Binaries"
function code(strng) {
    let binaryNums = strng.split("").map(function(char){    //split the string into array of chars, convert chars to integers, convert dec ints to binary num strings
        return parseInt(char);
    }).map(function(decNum){
        if(decNum === 0){
            return "0";
        }else{
        let binArr = [];    //store each binary bit
        let binNum;         //this will store the binary number as a string to be returned at the end
    
        while (decNum != 0){
            binArr.unshift(decNum%2);
            decNum = Math.floor(decNum/2);
        }
    
        binNum = binArr.join("");   
        return binNum;        
        }
    });

    let numOfBits = binaryNums.map(function(binNum){    //number of bits (binary digits) needed to represent the original decimal digits (this is the "k" in codewars instructions)
        return binNum.length;
    });

    let codePartOne = numOfBits.map(function(numOfZeros){         //this array stores the results of steps a and b from the codewars instructions, (k-1) "0"'s followed by a "1"
        let returnThis = "";
        for(let i=0;i<numOfZeros-1;i++){
            returnThis += "0";
        }
        returnThis += "1";
        return returnThis;
    });    

    let semiFinalResult = [];

    for(let i=0;i<codePartOne.length;i++){
        let pushThis = codePartOne[i]+binaryNums[i];            //combine the numOfBits and binaryNums arrays
        semiFinalResult.push(pushThis);
    }

    return semiFinalResult.join("");                            //final step: concat it all together to return a single long string


}
function decode(str) {      //given a string of 1's and 0's, decode the string and return a string of decimal digits
    let finalString;
    let arrOfBins = [];
    let arrString = str.split("");

    while(arrString.length>0){
        let indexOf1 = arrString.indexOf("1");
        let k = indexOf1+1;
        let convertThis = arrString.splice(k,k).join("");
        let removeThis = arrString.splice(0,k);
        arrOfBins.push(convertThis);
    }
    
    finalString = arrOfBins.map(function(binNum){
        let reversedBits = [];
        let finalDecValue = 0;
    
        let bits = binNum.split("").map(function(bitChar){      //split the binary string number into array fo integers (1s and 0s)
            return parseInt(bitChar);
        });
    
        for(let i=0;i<bits.length;i++){                         //reverse the order of the binary digit array to make calculations easier
            reversedBits.unshift(bits[i]);
        }
    
        for(let j=0;j<reversedBits.length;j++){                 //go through binary bit array and accumulate
            let addThis = reversedBits[j] * Math.pow(2,j);
            finalDecValue += addThis;
        }
        return finalDecValue;
    }).join("");

    return finalString;
}



function theJanitor(word) {     //given a string of lowercase letters, return an array consisting of 26 elements (each element represents a letter of the alphabet)
    let alphabetArr = "abcdefghijklmnopqrstuvwxyz".split("");
    let finalArr = [];

    for(let i=0;i<26;i++){
        if(word.indexOf(alphabetArr[i])===-1){
            finalArr.push(0);
        }else{
            finalArr.push(word.lastIndexOf(alphabetArr[i])-word.indexOf(alphabetArr[i])+1);
        }
    }
    return finalArr;
}




function christmasTree(height) {
    let numStars = 1;
    for(let i=0;i<height-1;i++){       //gives us total number of stars in the last row of the tree
        numStars += 2;
    }

    let numSpaces = 0;
    let finalOutput = [];


    for(let j=0;j<height;j++){          //each loop will add a new element to the array, each element represents a row of the tree, use unshift
        let row = "";
        for(let i=0;i<numSpaces/2;i++){     //adds leading spaces/padding
            row += " ";
        }
        for(let j=0;j<numStars;j++){        //adds stars
            row += "*";
        }
        for(let k=0;k<numSpaces/2;k++){     //adds trailing spaces/padding
            row += " ";
        }
        numStars -= 2;                      //each row going towards the top of the tree has 2 less stars
        numSpaces += 2;                     //and 2 more spaces
        finalOutput.unshift(row);           
    }

    finalOutput = finalOutput.join("\n");
    return finalOutput;
}


console.log(christmasTree(50));



function solution(number){      //given a number, return the sum of all smaller numbers that are multiples of 3 or 5 (if multiple of both, count once) 
 
    if(number<0){
        return 0;
    }else{
        let sum = 0;
        for(let i=number-1;i>0;i--){
            if(i%3===0||i%5===0){
                sum += i;
            }
        }
        return sum;
    }
}

function findOdd(A) {       //given an array of integers (A), return the ONE integer that appears an OOD NUMBER OF TIMES in the array
    A = A.sort();           //sort array in ascending order to get all like values grouped together
    while(A.length>0){
        let amount = A.lastIndexOf(A[0])+1;     //looking at the integer in index 0, this gives us the quantity of that integer in our array
        if(amount%2===1){                       //if the quantity is odd, return that integer
            return A[0];
        }else{                                  //if the quanitity is even, splice out all appearences of that integer and repeat
            A.splice(0,amount);
        }
    }
}



function digital_root(n) {      //given an integer n, return sum of its individual digits. If the sum consists of more than 1 digit, continue until sum is a single digit. 
    let sum;                                                
    do{
        n = n.toString().split("").map(function(element){   //split the int n into an array of int digits
            return parseInt(element);
        });
        sum = n.reduce(function(acc, curr){                 //find sum of all the digits
            return acc+curr;
        },0);
        n = sum;                                            //set n to the calculated sum in case we have to go back and repeat the process
    }while(sum>9)                                           //if the sum is greater than 9 (not a single digit sum), repeat from the top

    return sum;
}



function likes(names) {     //given an array of names, return a string in the proper format displaying who liked the post
    if(names.length === 0){
        return "no one likes this";
    }else if(names.length === 1){
        return names[0]+" likes this";
    }else if(names.length === 2){
        return names[0]+" and "+names[1]+" like this";
    }else if(names.length === 3){
        return `${names[0]}, ${names[1]} and ${names[2]} like this`;
    }else{
        return `${names[0]}, ${names[1]} and ${names.length-2} others like this`;
    }
}



function duplicateCount(text){      //given a string, return an int that indicates the number of characters that occur more than once throughout the sting
    let finalResult = 0;
    text = text.toLowerCase().split("").sort();
    console.log(text);

    while(text.length>0){
        let amount = text.lastIndexOf(text[0])+1;     //looking at the integer in index 0, this gives us the quantity of that integer in our array
        if(amount>1){                       //if the quantity is more than 1, add 1 to our final result
            finalResult++;
        }
        text.splice(0,amount);              //after checking the first element, splice the array so that it does not contain anymore of those chars
    }
    return finalResult;
}



function findOutlier(integers){     //given an array of integers containing either all evens or all odds (except for one), return the outlier
//determine if the array contains mostly evens or mostly odds by checking elements 1 and 2 (if they dont match, check element 3)
    let contents;                               //contents==0 means evens, contents==1 means odds
    if(Math.abs(integers[0]%2)===Math.abs(integers[1]%2)){          //use Math.abs to find absolute value of the modulus in order to compare negatives and positives
        contents = Math.abs(integers[0]%2);
    }else{
        contents = Math.abs(integers[2]%2);
    }
console.log(contents);
//loop through array and find the one int that is opposite to contents
    for(let i=0;i<integers.length;i++){
        if(Math.abs(integers[i]%2)!==contents){
            return integers[i];
        }
    }
}



function duplicateEncode(word){     //given a string of characters, return another string containing just "("s and ")"s 
        word = word.toLowerCase().split("");
        let finalString = word.map(function(character){
            if(word.indexOf(character)!==word.lastIndexOf(character)){      //if the character appears more than once in the string, represent it with a ")"
                return ")"
            }else{
                return "("                                                  //if the character only appears once in the string, represent it with a "(" in the new string
            }
        });
        return finalString.join("");
}



function arrayDiff(a, b) {      //given two arrays, remove all elements of b that are found in a and return
    for(let i=0;i<b.length;i++){            //going through each element of b
        a = a.filter(function(elem){        //filter through a so that it no longer contains the element from b
            if(elem !== b[i]){
                return elem;
            }
        })
    }    
    return a;
}



var countBits = function(n) {       //given a decimal integer, return the number of 1s found in its binary representation
    let numOf1s = function(decNum){      //given a decimal number, return a string representing the binary number
        if(decNum === 0){
            return "0";
        }else{
        let binArr = [];    //store each binary bit
        let binNum;         //this will store the binary number as a string to be returned at the end
    
        while (decNum != 0){
            binArr.unshift(decNum%2);
            decNum = Math.floor(decNum/2);
        }
    
        binNum = binArr.join("");   
        return binNum;        
        }
    }(n).split("").filter(function(bit){            //convert decimal int to binary string, split to bits, filter out all the 0s, leave the 1s, find length
        if(bit==="1"){
            return bit;
        }
    }).length;

    return numOf1s;
};



function isValidWalk(walk) {        //given an array representing a walk (list of directions), return true if the walk will take exactly 10 minutes and bring you back to the starting position
//in order to finish the walk at the same point it was started, each "n" must have an opposite "s", and each "w" must have an opposite "e"
//in order to last a total of 10 minutes, the length of the array must be 10 elements, as each block takes one minute to traverse
    if(walk.length !== 10){
        return false;
    }else{
        let numOfEast = walk.filter(function(dir){
            if(dir === "e"){
                return dir;
            }
        });
        let numOfWest  = walk.filter(function(dir){
            if(dir === "w"){
                return dir;
            }
        });;
        let numOfNorth  = walk.filter(function(dir){
            if(dir === "n"){
                return dir;
            }
        });;
        let numOfSouth  = walk.filter(function(dir){
            if(dir === "s"){
                return dir;
            }
        });;

        if(numOfEast.length===numOfWest.length&&numOfNorth.length===numOfSouth.length){
            return true;
        }else{
            return false;
        }
    }
}



function tribonacci(signature,n){   //given a signature and int n, return an array of the first n elements in the tribonacci (sum of previous 3) sequence
    if(n === 0){
        return [];
    }else if(n===1||n===2||n===3){  //since we already have the first 3 elements of the sequence, if n=1,2,or 3, just return the sub-array needed
        return signature.slice(0,n)
    }else{
        for(let i=3;i<n;i++){       //for n larger than 3, we must first calculate the continuation of the pattern: each element is the sum of the previous 3
            signature.push(signature[i-3]+signature[i-2]+signature[i-1]);
        }
        return signature;
    }
}



function digPow(n, p){      //return k....k = (a^p+b^(p+1)+c^(p+2)....)/n
    let sum = 0;        //represents a^p+b^(p+1)+c^(p+2)....
    let digitsOfN = n.toString().split("").map(function(char){
        return parseInt(char);
    });
    for(let i=0;i<digitsOfN.length;i++){
        sum += Math.pow(digitsOfN[i],p);
        p++;
    }
    let k = sum/n;
    if(Number.isInteger(k)){
        return k;
    }else{
        return -1;
    }
}



var decodeMorse = function(morseCode){  //given a string of dots and dashes (letters seperated by 1 space and words seperated by 3 spaces), decode and return
    while(morseCode[0]===" "){              //gets rid of leading spaces
        morseCode = morseCode.substring(1);
    }
    while(morseCode[morseCode.length-1]===" "){     //gets rid of trailing spaces
        morseCode = morseCode.substring(0,morseCode.length-1);
    }
    let finalResult = "";
    let translation = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890,.?\":'-/()".split("");
        translation = [...translation, "SOS", "!"];
    let code = [".-", "-...", "-.-.", "-..", ".", "..-.", "--.", "....", "..", ".---", "-.-", ".-..", "--", "-.", "---", ".--.", "--.-", ".-.", "...", "-", "..-", "...-"];
        code = [...code, ".--", "-..-", "-.--", "--..", ".----", "..---", "...--", "....-", ".....", "-....", "--...", "---..", "----.", "-----", "--..--", ".-.-.-"];
        code = [...code, "..--..", ".-..-.", "---...", ".----.", "-....-", "-..-.", "-.--.", "-.--.-", "...---...", "-.-.--"];

    let words = morseCode.split("   ");         //split the given string into an array of words
    words = words.map(function(word){           //split each word into an array of letters, thus resulting in an array of arrays
        return word.split(" ");
    });

    for(let i=0;i<words.length;i++){            //i will reference the words
        for(let j=0;j<words[i].length;j++){     //j will reference the letters
            finalResult += translation[code.indexOf(words[i][j])]
        }
        finalResult += " ";
    }
    
    return finalResult.substring(0,finalResult.length-1);
}



var decodeBits = function(bits){    //given a string of 1s and 0s, determine transmission rate (number of 1s per dot and number of 1s per dash) then return string of dots/dashes
//---------------------------------------------------------------CLEAR LEADING AND FOLLOWING ZEROS----------------------------------------
    while(bits[0]==="0"){              //gets rid of leading zeros
        bits = bits.substring(1);
    }
    while(bits[bits.length-1]==="0"){     //gets rid of trailing zeros
        bits = bits.substring(0,bits.length-1);
    }
//--------------------------------------------------------------FIND X (ONE UNIT OF TIME)------------------------------------------
    let oneUnitOfTime;
    if(bits.indexOf("0")===-1){                                 //no 0s in bits string
        oneUnitOfTime = bits.length;
    }else{                                                      //both 1s and 0s in bits string
        oneUnitOfTime = [...bits.match(/1+/g),...bits.match(/0+/g)].map(function(elem){
            return elem.length;
        }).sort(function compareNumbers(a, b) {
            return a - b;
          })[0]; //
    }
//------------------------------------------ESTABLISH REPRESENTATIONS OF DOTS/DASHES/BETWEEN DOTS&DASHES/BETWEEN CHARS/BETWEEN WORDS---------------
    let dot="";
    let betweenDandD="";
        for(let i=0;i<oneUnitOfTime;i++){
            dot += "1";
            betweenDandD += "0";
        }
    let dash="";
    let betweenChars="";
        for(let i=0;i<(oneUnitOfTime*3);i++){
            dash += "1";
            betweenChars += "0";
        }
    let betweenWords="";
        for(let i=0;i<(oneUnitOfTime*7);i++){
            betweenWords += "0";
        }
//--------------------------------------------------THIS SEEMS TO WORK BUT CODEWARS DIDNT ACCEPT-----------------------------------------------------
    // return bits.replaceAll(betweenWords,"   ").replaceAll(dash,"-").replaceAll(betweenChars," ").replaceAll(dot,".").replaceAll(betweenDandD,"");

//-----------------------------------ISOLATE EACH DOT AND DASH BY SEPERATING BY WORDS, THEN CHARACTERS, AND FINALLY DOTS AND DASHES-----------------
    let words = bits.split(betweenWords).map(function(word){
        return word.split(betweenChars);
    }).map(function(word){
        word = word.map(function(char){
            return char.split(betweenDandD);
        });
        return word;
    });
//--------------------------------LOOP THROUGH THE TRIPLE NESTED ARRAY AND REPLACE THE 1S AND 0S WITH DOTS/DASHES APPROPRIATELY-----------------------
    let dotsAndDashes = "";
    for(let i=0;i<words.length;i++){
        for(let j=0;j<words[i].length;j++){
            for(let k=0;k<words[i][j].length;k++){
                if(words[i][j][k]===dot){
                    dotsAndDashes += ".";
                }else if(words[i][j][k]===dash){
                    dotsAndDashes += "-";
                }
            }
            dotsAndDashes += " ";
        }
        dotsAndDashes += "  ";
    }
//------------------------------------REMOVE THE TAILING SPACES ADDED BY THE FINAL LOOP ITERATION ABOVE----------------------------------------------
    return dotsAndDashes.substring(0,dotsAndDashes.length-3);
}

// console.log(decodeMorse(decodeBits('1100110011001100000011000000111111001100111111001111110000000000000011001111110011111100111111000000110011001111110000001111110011001100000011')));
// console.log(decodeMorse(decodeBits('11111111111111100000000000000011111000001111100000111110000011111000000000000000111110000000000000000000000000000000000011111111111111100000111111111111111000001111100000111111111111111000000000000000111110000011111000001111111111111110000000000000001111100000111110000000000000001111111111111110000011111000001111111111111110000011111000000000000000111111111111111000001111100000111111111111111000000000000000000000000000000000001111111111111110000011111000001111100000111110000000000000001111100000111111111111111000001111100000000000000011111111111111100000111111111111111000001111111111111110000000000000001111100000111111111111111000001111111111111110000000000000001111111111111110000011111000000000000000000000000000000000001111100000111110000011111111111111100000111110000000000000001111111111111110000011111111111111100000111111111111111000000000000000111111111111111000001111100000111110000011111111111111100000000000000000000000000000000000111110000011111111111111100000111111111111111000001111111111111110000000000000001111100000111110000011111111111111100000000000000011111111111111100000111111111111111000000000000000111110000011111111111111100000111111111111111000001111100000000000000011111000001111100000111110000000000000000000000000000000000011111111111111100000111111111111111000001111111111111110000000000000001111100000111110000011111000001111111111111110000000000000001111100000000000000011111000001111111111111110000011111000000000000000000000000000000000001111111111111110000000000000001111100000111110000011111000001111100000000000000011111000000000000000000000000000000000001111100000111111111111111000001111100000111110000000000000001111100000111111111111111000000000000000111111111111111000001111111111111110000011111000001111100000000000000011111111111111100000111110000011111111111111100000111111111111111000000000000000000000000000000000001111111111111110000011111000001111100000000000000011111111111111100000111111111111111000001111111111111110000000000000001111111111111110000011111111111111100000111110000000000000001111100000111111111111111000001111100000111111111111111000001111100000111111111111111')));



function findEvenIndex(arr){    //given an array of ints, find the index at which the sum of the elements to the left of it are equal to that of the elements to the right
    let leftSum;
    let rightSum;
    let index=0;
    if(arr.length===1){                 //array with one element (at index 0) will have a sum of 0 on either side, thus answer is index 0
        return 0;
    }else{
        for(;index<arr.length;index++){
            if(index===0){              //array with more than 1 element, at index 0, sum of left is 0
                leftSum = 0;
                rightSum = arr.slice(index+1,arr.length).reduce(function(acc,curr){
                    return acc+curr;
                });
            }
            else if(index===arr.length-1){  //array with more than 1 element, at last index, sum of right is 0
                rightSum = 0;
                leftSum = arr.slice(0,index).reduce(function(acc,curr){
                    return acc+curr;
                });
            }
            else{
                leftSum = arr.slice(0,index).reduce(function(acc,curr){
                    return acc+curr;
                });
                rightSum = arr.slice(index+1,arr.length).reduce(function(acc,curr){
                    return acc+curr;
                });            
            }        

            if(leftSum === rightSum){
                break;
            }
        }
        if(index===arr.length){         //if no index works, return -1
            return -1;
        }else{
            return index;        
        }    
    }
}



function iqTest(numbers){   //given a string of ints seperated by spaces, return the position of the one that differs in evenness from the rest
    numbers = numbers.split(" ").map(function(string){          //this will seperate the string into an array of ints
        return parseInt(string);
    });
    let arrEvenness;                                            
    if(numbers[0]%2===numbers[1]%2){                            //here we determine that majority evenness of the array, either mostly odd or mostly even
        arrEvenness = numbers[0]%2;
    }else{
        arrEvenness = numbers[2]%2;
    }
    let i=0;
    for(;i<numbers.length;i++){                                 //compare the elements to the array's evenness, once we reach one that doesn't match, break out
        if(numbers[i]%2!==arrEvenness){
            break;
        }
    }
    return i+1;                                                 //return that index+1 because we want the position in the original string (start count at 1, not 0)
}



var uniqueInOrder=function(iterable){   //given a string or array sequence, return an array listing elements in the same order but without duplicates side by side
    if(iterable.length===0){
        return [];
    }else{
        if(typeof iterable === "string"){
            iterable = iterable.split("");      //if given a string, split into an array
        }
        let finalArray = [iterable[0]];                    //this will house our final answer
        for(let i=1;i<iterable.length;i++){
            if(iterable[i]!==finalArray[finalArray.length-1]){      //going through each element of the given array, if the current element does not match the last element
                finalArray.push(iterable[i]);                       //of our finalArray, then push it onto the finalArray as it is a unique element
            }
        }
        return finalArray;        
    }
}



function tickets(peopleInLine){     //given an array of ints (25, 50, or 100) representing dollars paid by customers, return YES if the clerk will have enough change
                                    //to sell 25 dollar tickets to each customer in the order they are lined up
//------keep track of the number of each paper bills----------
    let bills25 = [];
    let bills50 = [];
    let bills100 = [];
    let changeNeeded = 0;
    let answer = "YES";

    for(let i=0;i<peopleInLine.length;i++){
        changeNeeded = peopleInLine[i]-25;      //determine total change needed

        if(changeNeeded===0){                   //if no change is needed, add paid amount to cash register and continue to next person in line
            bills25.push(25);
        }else{
            if(changeNeeded===25){              //if person pays with a 50, we owe them 25
                if(bills25.length>0){           //if we have at least 1 25 dollar bill, we can provide change
                    bills25.pop();              //remove one 25 from our cash register
                    bills50.push(50);           //and add one 50 to our cash register
                }else{
                    answer = "NO";
                    break;
                }
            }
            if(changeNeeded===75){                              //if person pays with a 100 dollar bill, we owe them 75 in change
                if(bills25.length>=1&&bills50.length>=1){       //if we have 1 50 and 1 25, remove and replace with the 100
                    bills50.pop();
                    bills25.splice(0,1);
                    bills100.push(100);
                }else if(bills25.length>=3){                    //if we do not, check to see if we have 3 25 bills, remove and replace
                    bills25.splice(0,3);
                    bills100.push(100);
                }else{                                          //else, return "NO"
                    answer = "NO";
                    break;
                }
            }
        }
    }
    return answer;
}



function toCamelCase(str){  //given a string with words seperated by either "-" or "_", covert the string toCamelCase
    if(str === ""){
        return "";
    }else{
        str = str.split("");
        while(str.indexOf("-")>-1){                 //find index of "-", remove it (this will shift everything down 1 index), then capitalize the letter in its place
            let index = str.indexOf("-");
            str.splice(index,1);
            str[index]=str[index].toUpperCase();
        }   
        while(str.indexOf("_")>-1){                 //do same as above for "_" instead
            let index = str.indexOf("_");
            str.splice(index,1);
            str[index]=str[index].toUpperCase();  
        }
        return str.join("");
    }
}

console.log(toCamelCase("the_stealth_warrior"));



function queueTime(customers, n) {      //"customers" = array of integers, the order represents the order in which the customers have lined up, and each integer represents
                                        //how long that customer takes to complete their transaction. "n" is an integer that specifies the number of registers open at the
                                        //time. The function must determine how long it'll take for all of the customers to finish up
//store total time in a variable and increment as you go
//have a seperate with "n" amount of elements
//as soon as the fastest person finishes, decrement the other times by that persons time
//and then replace the fastest person with the next person in line
//continue until "customers" array is empty
    if(customers.length === 0){
        return 0;
    }
    else{    
        let totalTime = 0;
        let registers = customers.splice(0,n);
        while(customers.length>0){
            registers = registers.sort(function(a,b){       //sort the ints within registers in ascending order as we will be removing the smallest and replacing with another customer
                if(a<b){
                    return -1;
                }else{
                    return 1;
                }
            });
            let quickestTime = registers[0];                 //determine fastest customer (this should be integer in index 0)
            totalTime += quickestTime;                      //add this time (minutes) to our totalTime variable
            registers = registers.map(function(element){    //update the registers array by subtracting the quickest time from all of the elements
                return element - quickestTime;
            });
            while(registers.indexOf(0)>-1){                 //replace all 0s with new elements by shifting from customers array
                registers[registers.indexOf(0)] = customers.shift();
            }
        }
        registers = registers.sort(function(a,b){       //sort the ints within registers in ascending order
            if(a<b){
                return -1;
            }else{
                return 1;
            }
        }).filter(function(element){                    //filter out any possible "undefined" elements that could have possibly been added by the shift()
            if(element !== undefined){
                return element;
            }
        });      
        totalTime += registers[registers.length-1];     //last int we will add is the largest int in the final regsiters array
        return totalTime;
    }
}


function findNb(m) {        //codewars kata - "build a pile of Cubes"
    let i = 1;
    while(m>0){
        m -= Math.pow(i,3);
        i++;
    }
    if(m === 0){
        return i-1;
    }else{
        return -1;
    }
}


function comp(array1, array2){  //given two arrays, return true if array2 contains all elements of array1 taken to the second power, order doesn't matter
    console.log({array1,array2});
    if(array1==null||array2==null){       //if either array is null, return false
        return false;
    }else{
        if(array1.length>0){            //as long as the array has a length greater than 0, sort them first
            array1 = array1.sort(function(a,b){     //sort array1 in ascending order to make comparing easier
                if(a<b){
                    return -1;
                }else{
                    return 1;
                }
            });
            array2 = array2.sort(function(a,b){     //sort array2 in ascending order to make comparing easier
                if(a<b){
                    return -1;
                }else{
                    return 1;
                }
            });            
        }        
        for(let i=0;i<array1.length;i++){       //if element in array2 does not equal to the element in array1 squared, return false
            if(array2[i]!==Math.pow(array1[i],2)){
                return false;
            }
        }
        return true;                            //if all of the elements meet the criteria, return true
    }
}


function sortArray(array) {    //given array of numbers, sort all odd numbers in ascending order while leaving the even numbers in their original position
    if(array.length===0){
        return array;
    }else{
        let oddNumbers = array.filter(function(number){     //create an array of the sorted odd numbers from original array
            if(number%2===1||number%2===-1){
                return number;
            }
        }).sort(function(a,b){
            if(a<b){
                return -1;
            }else{
                return 1;
            }
        });
        array = array.map(function(number){             //loop through original array, if number is odd, replace with oddNumbers.shift() - odd numbers will be in ascending order
            if(number%2===1||number%2===-1){
                return oddNumbers.shift();
            }else{
                return number;
            }
        });
        return array;       
    }
}



function differentiate(equation, point){        //differentiat the equation and solve for point
    //----------------------------------FUNCTIONS--------------------------------
    function splitStringAtIndices(string, arrayOfIndices){
        let outPutArray = [];
    
        for(let i=0;i<arrayOfIndices.length;i++){
            outPutArray.push(string.substring(arrayOfIndices[i],arrayOfIndices[i+1]));
        }
    
        return outPutArray;
    }

    function findDerivative(term){      //given an individual term from a polynomial, return its derivative
        if(term.indexOf("^")>-1){       //check to see if the term has a caret character within, this means there is an exponent
            if(term[0]==="x"){
                term = "1"+term;
            }
            let xIndex = term.indexOf("x");
            let caretIndex = term.indexOf("^");
            let exp = parseInt(term.substring(caretIndex+1));
            let coeff = term.substring(0,xIndex);
                if(coeff==="-"){
                    coeff = -1;
                }else if(coeff==="+"){
                    coeff = 1;
                }else{
                    coeff = parseInt(coeff);
                }
            let newCoeff = exp*coeff;
            let newExp = exp-1;
            let newTerm;
            if(newExp===1){
                newTerm = `${newCoeff}x`;
            }else{
                newTerm = `${newCoeff}x^${newExp}`;
            }
            return newTerm;
        }else{                          //if there is no caret character, simply return the integer to the left of the variable "x"
            if(term.length>1){
                return term.substring(0,term.length-1); //if term is "__x", return the coefficient in front of x
            }else{
                return 1;           //if term is just "x", return 1
            }
        }
    }

    function solveForX(term){       //plug in the "point" in place of the "x" and return the resulting value 
        term = term.toString();
        let xIndex = term.indexOf("x");
        let caretIndex = term.indexOf("^");
        let exp = parseInt(term.substring(caretIndex+1));
        let coeff = parseInt(term.substring(0,xIndex));
        if(xIndex===-1){             //term does not have an "x"
            if(term==="-"){
                return -1;
            }else if(term==="+"){
                return 1;
            }else{
                return parseInt(term);
            }
        }else if(caretIndex===-1){       //term does not have an exponent
            return coeff*point;
        }else{
            return coeff*Math.pow(point,exp);
        }
    }
    //---------------------------------------------------------------------------
    let equationChars = equation.split("");
    let operatorIndices = [-1];   //stores the indices of the operators (+/-)
        for(let i=1;i<equationChars.length;i++){
            if(equationChars[i]==="+"||equationChars[i]==="-"){
                operatorIndices.push(i);
            }
        }

    let termsArr = splitStringAtIndices(equation,operatorIndices);  //stores the separate terms of the polynomial
        termsArr = termsArr.filter(function(element){               //filters OUT any terms that do not contain the variable "x" as these are not needed since they differentiate to 0
            if(element.indexOf("x")>-1){            //||element==="+"||element==="-"
                return element;
            }
        });

    let derivativeArr = termsArr.map(findDerivative);
    let productsArr = derivativeArr.map(solveForX);
    let finalAnswer = productsArr.reduce(function(prev, curr){
        return prev+curr;
    })

    return finalAnswer;
}

console.log(differentiate("-x^2+3x-3", 1234567908));            

*/

