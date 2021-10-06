//----------------------------------------------------------Classes in JS----------------------------------------------
let testUser = class{
    //methods
    constructor(name){
        this.name = name;
    }
    sayHello(){
        console.log("Hello, my name is " + this.name);
    }
    get name(){
        return "Hello "+ this._name;
    }
    set name(string){
        if(string.length<4){
            alert ("Name is too short.");
            return;
        }
        this._name = string;
    }
};


class Rectangle{
    constructor(height, width){
        this.height = height;
        this.width = width;
    }
    set height(length){
        if(length>0){
            this._height = length;
        }else{
            console.log("Height must be greater than 0.");
        }
    }
    get height(){
        return this._height;
    }
    set width(length){
        if(length>0){
            this._width = length;
        }else{
            console.log("Length must be greater than 0.");
        }
    }
    get width(){
        return this._width;
    }
    calculateArea(){
        return this.height*this.width;
    }
    get area(){
        return this.calculateArea();
    }
}

let rectangle1 = new Rectangle(3,6);


//regular object - object literal

let person1 = {
    firstName: "Grigor",
    lastName: "Azatian",
    age: 29,
    height: "5'9\"",
    weight: 167,
    greeting: function(){
        return "Hello, my name is "+this.firstName+" "+this.lastName;
    },
    calcWeightInKG: function(){
        return this.weight/2.2;
    },
    stateWeight: function(){
        return "I weigh "+this.calcWeightInKG()+"kgs";
    }
}

let Person = function(firstName, lastName, age, height, weight){
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.height = height;
    this.weight = weight;
    this.calcWeightInKG = function(){
        return this.weight/2.2;
    };
}
Person.prototype.greeting = function(){
    return "Hello, my name is "+this.firstName+" "+this.lastName+".";
}
Person.prototype.sayAge = function(){
    return this.age;
}
let person2 = new Person("Ara", "Azatian", 21, "5'11\"", 200);
let person3 = new Person("Indira", "Servida", 30, "5'4\"", 135);
person2.sayLastName = function(){
    return this.lastName;
}


function Person1(firstName, lastName){           //function constructor to create objects
    let secret = "Tacos are love.";             //this is a private property, cannot be accessed by "person1.secret"

    this.firstName = firstName;
    this.lastName = lastName;
    this.hasJob = false;

    this.fullName = function(){
        return this.firstName + " " + this.lastName;
    }
    this.setFirstName = function(firstName){
        this.firstName = firstName;
    }
    this.setLastName = function(lastName){
        this.lastName = lastName;
    }
    this.getSecret = function(){                //this function will allow us to work with the private variables, in this case, calling it will return the value of secret
        return secret;
    }
}

class Person2{                                  //basic class syntax to create objects
    constructor(firstName, lastName){           //constructor function always called when the "new" keyword is used to create a new instance of the person class
        this.firstName = firstName;
        this.lastName = lastName;
        this.hasJob = false;
    }

    fullName(){
        return `${this.firstName} ${this.lastName}`;
    }
    setFirstName(firstName){
        this.firstName = firstName;
    }
    setLastName(lastName){
        this.lastName = lastName;
    }
}

class Person3{
    constructor(firstName, lastName){           //constructor function always called when the "new" keyword is used to create a new instance of the person class
        this.firstName = firstName;
        this.lastName = lastName;
        this.hasJob = false;
    }

    static species(){                           //static means its not an instance method but instead belongs to the class
        return "Homo sapiens";
    }
    static get species2(){                      //in this case we combined the static and get keywords so that we can access "Home sapiens" by just calling Person3.species, () no longer needed
        return "Home sapiens";
    }

    static speciesSentence(){
        return "Humans are classified as "+this.species();
    }

    fullName(){
        return `${this.firstName} ${this.lastName}`;
    }
    setFirstName(firstName){
        this.firstName = firstName;
    }
    setLastName(lastName){
        this.lastName = lastName;
    }

    set setFullName(name){
        name = name.split(" ");
        this.setFirstName(name[0]);
        this.setLastName(name[1]);
    }
}

class Worker extends Person3{
    constructor(firstName, lastName, job){
        super(firstName,lastName);              //calling super inside a method will call the method with the same name from the parent class, in this case, we are calling Person3's CONSTRUCTOR METHOD
        this.job = job;
        this.hasJob = true;                     //this will overwrite the Person3 hasJob and make it true
    }
    setJob(job){
        this.job = job;
    }
    get biography(){                            //adding the get keyword in front of the method makes it behave like a property rather than a method. calling worker1.biography will give us the bio
        const bio = `${this.fullName()} is a ${this.job}`
        return bio;
    }
}

class Person4 {
    static get species() {
      return 'Homo sapiens';
    }
  
    static speciesSentence() {
      return `Humans are classified as ${this.species}`
    }
  
    constructor(firstName, lastName) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.hasJob = false;
    }
  
    fullName() {
      return `${this.firstName} ${this.lastName}`;
    }
  
    setFirstName(firstName) {
      this.firstName = firstName;
    }
  
    setLastName(lastName) {
      this.lastName = lastName;
    }
  
    set setFullName(name) {
      name = name.split(' ');
      this.setFirstName(name[0]);
      this.setLastName(name[1]);
    }
  }


  let person1 = new Person4("Greg", "Hardy");
  console.log(person1.fullName());
  person1.setFullName = "George Bush";              //this is how we invoke the set method
  console.log(person1.fullName());
