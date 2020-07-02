
/*
1. Create a Abstract Creature class that is NOT allowed to be instantiated. Find a way to prevent this class from being instantiated with 
an instance.  In the Creature class, include two abstract methods.  move(), and act().  These methods are NOT allowed to be invoked from the
 Abstract class, so throw an error in these methods if they are invoked by any inherited sub-classes.  

Create at least 3 sub-classes that inherit from the Abstract Creature Class.  Example sub-classes are: 
    -Human
    -Dinosaur
    -Bird
    -Reptile
    -Fish

These sub-classes MUST implement the abstract methods of move() and act(), which are found on the abstract Creature class. In addition to the 2
 abstract methods, implement 1 unique method on each sub-class.  Also, each sub-class MUST have at least 2 unique property fields on them. 
  Example property fields are:
    -name
    -weight
    -food
    -age
*/

class Creature {
    constructor() {
        if (this.constructor == Creature) {
            throw new Error("Unable to instantiate Creature class")
        }
    }
    move() {
        throw new Error("This is an abstract method. You cannot invoke this method");
    }
    act() {
        throw new Error("This is an abstract method. You cannot invoke this method");
    }
}

class Human extends Creature {
    constructor(name, age) {
        super();
        this.name = name;
        this.age = age;

    }
    move() {
        console.log(`${this.name} runs through the city`)
    }
    act() {
        console.log(`${this.name} builds a class!`)
    }
    special() {
        if (this.age < 21)
            console.log(`${this.name} plays legos!`)
        else
            console.log(`${this.name} drinks some beer`)
    }
}

class Dragon extends Creature {
    constructor(name, age) {
        super();
        this.name = name;
        this.age = age;
    }
    move() {
        console.log(`${this.name} flies through the castle`)
    }
    act(target) {
        console.log(`${this.name} burns ${target} to a crisp with his firebreath`)
    }
    special() {
        console.log(`${this.name} looks into your future and sees that you will die`)
    }
}

class Dinosaur extends Creature {
    constructor(name, color) {
        super();
        this.name = name;
        this.color = color;
    }
    move() {
        console.log(`${this.name} rumbles through the forest`)
    }
    act() {
        console.log(`${this.name} stomps your face`)
    }
    special() {
        console.log(`${this.name} transforms into a fossil`)
    }
}
const bill = new Human("Bill", 22)
bill.move()
bill.act()
bill.special()
const barney = new Dinosaur("Barney", "green and purple")
const smaug = new Dragon("Smaug", 400)
/*
2. For the following Person class, modify the class methods, so the sub-class methods will successfully fire.  For the Teacher method, 
a set of methods have already been set up.  For the Student class, it will be up to you to determine how to set up the methods to fire 
in the Student sub-class.  :
*/

class Person {
    name;
    eat() {
        console.log(this.name + " is eating");
    } ager

    sleep() {
        console.log(this.name + " is sleeping");
    }

    code() {
        console.log(this.name + " is coding");
    }

    repeat() {
        console.log(this.name + " is repeating the above steps, yet another time");
    }

    explain() {
        //this function should contain a console.log() explaining what you had to do to get the correct functions to work, and the reasoning behind what you did.
        console.log("I only had to make constructors in the children and then changed all their functions into assignments rather than declarations so they would be a field rather than a prototype and get called first. I iniatally was incorrect calling the name in my constructor which caused it to keep on printing the parent so I also changed all the parent functions into declarations even though that was overkill since the child gets priority in fields (and functions)");
    }

}


class Teacher extends Person {

    //refactor the methods in this Teacher class, so all of these methods override the methods in the Person super class.  

    constructor(name) {
        super(name);
        this.name = name;
    }

    eat = () => {
        console.log(this.name + " loves to teach before eating");
    }

    sleep = function () {
        console.log(this.name + " sleeps after preparing the lesson plan");
    }

    code = function () {
        console.log(this.name + " codes first, then teaches it the next day.");
    }

    repeat = function () {
        console.log(this.name + " teaches, codes, eats, sleeps, and repeats");
    }
}


class Student extends Person {
    constructor(name) {
        super(name);
        this.name = name;
    }
    //set up your methods in this student class, so all of these methods will override the methods from the super class.
    eat = () => {
        console.log(this.name + " loves to study while eating");
    }
    //eat method should print out - <stduent name> studies, then eats
    sleep = function () {
        console.log(this.name + " sleeps with a textbook beneath his chin");
    }
    //sleep method should print out, <student name> studies coding so much, that they dream about it in their sleep
    code = function () {
        console.log(this.name + " codes first, then teaches it the next day.");
    }
    //code method should print out, <student name> was first overwhelmed by coding, but kept at it, and now has become a coding guru!
    repeat = function () {
        console.log(this.name + " teaches, codes, eats, sleeps, and repeats");
    }
    //repeat method should print out, <student name> keeps on studying, coding, eating, and sleeping, and puts it all on repeat.  

}


const teacher = new Teacher("Dr. Teacher");
// teach.eat()
// const teacher = new Teacher(teach)
teacher.explain();

const student = new Student("Pupil Student");

// student.explain();

teacher.eat();
teacher.sleep();
teacher.code();
teacher.repeat();

student.eat();
student.sleep();
student.code();
student.repeat();




//****************************************************************************************************************************************************************************************   
//Bonus Exercise:

//3. Consider the following class:

class Cook {

    prepare = function (food1, food2, food3) {
        console.log("The cook is cooking " + food1, food2, food3);
    }

    prepare() {
        console.log('The cook is cooking');
    }

    explain = () => {
        console.log("I simply changed the function expression to a function declaration and vise versa. This is because an expression assigns the function making it a field rather than a prototype. And in classes, fields are read before prototypes so that fixed the problem");
    }

}

const cook = new Cook();

cook.prepare("turkey", "salami", "pizza");

cook.explain();
//cook.explain("Well, if we are reusing the code, aka the types of food, then we should pass it in to the class itself so that we don't have to repeat ourselves for any function that requires the food");

