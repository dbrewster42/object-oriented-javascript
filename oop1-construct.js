//1. Create a Class called WhyClass.  This class should have one property, and two methods.  
// THe property is called "purpose", and stores a string.  This string should clearly explain why classes are used in
// Object Oriented Programming.  The first method is called explain().  This method should print the contents stored in the purpose 
//'field' of the class.  The second method is called pieces().  This 2nd method should print out the various parts that are essential
// to building a class.  Instantiate the class, and invoke the method so the results are showing in the console once this file is run.

class WhyClass {
    constructor() {
        this.purpose = "A class is a blueprint for creating objects, providing initial vales for state, and implemenation of behavior";
    }
    explain() {
        console.log(this.purpose)
    }
    pieces() {
        console.log("The necessary parts of building a class are a name, a constructor, getters, setters, and a call using the new keyword.")
    }
}
const why = new WhyClass();
why.explain();
why.pieces();


/*2. You are exploring the rainforests of the Amazon.  You have observed many different types of wildlife on your excursion.  
//To jog your memory, some different types of wildlife that you observed are found in the following URL : 
https://www.ietravel.com/blog/amazon-rainforest-animals-beginners-guide-21-species.  Feel free to use other resources online if you wish.

Create a class that can categorize at least 6 of the creatures that you recall observing the Amazon.  
Each creature should have 3 unique characteristics, and 2 unique actions that it can do. */


//your code here...
class RainforestCreatures {
    constructor(name, size, action, color = "black") {
        this.name = name;
        this.size = size;
        this.color = color;
        this.action = action;
    }
    intro() {
        console.log("The " + this.name + " can get as big as " + this.size + " pounds")
    }
    act() {
        console.log("The " + this.name + " likes to " + this.action);
    }


}
const capy = new RainforestCreatures("capybara", 140, "join together for protection")
capy.intro();
capy.act();
const ga = new RainforestCreatures("Giant Armadillo", 120, "use his shell for both defense and offense", "brown")
ga.act();
const gro = new RainforestCreatures("Giant River Otter", 70, "feast on fish")
const jag = new RainforestCreatures("Jaguar", 300, "climb, swimm, and hunt", "yellow, white, with black spots")
const jaguarundi = new RainforestCreatures("Jaguarundi", 20, "spend time in his own company")
gro.intro();
jag.act();
jaguarundi.act();
const ocelot = new RainforestCreatures("Ocelot", 35, "rest in trees")
ocelot.intro();
ocelot.act();


/*3. Convert the following Object Literals into a general class called Shape, and instantiate the class to generate the object literals
*/


class Shape {
    constructor(name, sides, radius = 1) {
        this.name = name;
        this.angles = sides.length;
        this.sides = sides;
        if (this.angles == 1) {
            this.radius = sides[0];
            // console.log("HEY OH ", this.radius)
        }
    }
    calcArea() {
        if (this.angles == 1) {
            console.log(`${this.name}'s area is calculated to be : ${(Math.PI * this.radius ** 2).toFixed(2)}`);
        }
        if (this.angles == 3) {
            this.squaredHeight = Math.pow((this.sides[1]), 2) - Math.pow((.5 * this.sides[0]), 2)
            this.height = Math.sqrt(this.squaredHeight).toFixed(2)
            // console.log("OOGEDIE BOOGEDIE", this.height)
            console.log(`${this.name}'s area is calculated to be : ${.5 * this.sides[0] * this.height}`);
        }
        if (this.angles == 4) {
            console.log(`${this.name}'s area is calculated to be : ${this.sides[0] * this.sides[1]}`);
        }
    }
    calcPerimeter() {
        this.perimeter = 0;
        for (let i = 0; i < this.angles; i++) {
            this.perimeter += this.sides[i];
            // console.log(this.perimeter)
        }
        console.log(`${this.name}'s perimeter is calculated to be : ${(this.perimeter)}`)
    }
    calcCircumference() {
        console.log(`${this.name}'s circumference is calculated to be : ${(2 * Math.PI * this.radius).toFixed(2)}`)
    }
}

const triangle = new Shape("Triangle", [4, 7, 7])
triangle.calcArea();
triangle.calcPerimeter();
const rectangle = new Shape("Rectangle", [2, 5, 2, 5])
rectangle.calcArea();
rectangle.calcPerimeter();
const circle = new Shape("Circle", [5])
circle.calcArea();
circle.calcCircumference();



/*********************************************** 
Bonus Exercises:

//4. Create three more instances of the Shape class for a pentagon, hexagon, and an octagon.  Add in  comments explaining the formulas
// for calculating the perimeter and the areas of these 3 shapes.  Also, as noted above, if you use the formula to calculate the height of
// the triangle instead of hard coding it, you will also obtain the bonus for this exercise.  The dimensions for the triangle are already provided
 for you in the triangle object literal.


//5. Below is a class Earth.  It is instantiated with a earth 'instance'.  Because there is only 1 known earth, we don't want multiple 
instances of earth.  Modify the class so the properties are usuable WITHOUT instantiating the class.

*/

class Earth {
    static name = "earth";
    static planetNum = 3; //distance from the sun.  1-mercury, 2-venus, 3-earth, ...

    // constructor() {
    //     this.name = "Earth";
    //     this.planetNum = 3;
    // }

}

// const earth = new Earth('earth', 3);
console.log(Earth.name);
console.log(Earth.planetNum);

