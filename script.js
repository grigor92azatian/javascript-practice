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

*/





