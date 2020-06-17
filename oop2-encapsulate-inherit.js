// 1. Create the following classes:
//     - Book class. It should have an author and publisher property.
//     - Author class. It should have a name and books property.
//     - Publisher class.  It should have an authors and books property.
//     - Review class.  It should have a rating and user property.
//     -Prevent the properties from being accessed by outside code, using the encapsulation concept of 
//     "private variables".  Create methods that return the values of these private variables in case other pieces of the 
//     code need to access the data of the 4 classes.  Also create methods that allow outside code to "set" new values for the properties 
//     on the classes, without directly manipulating the values themselves. 

class Book {
    #author;
    #publisher;
    constructor(author, publisher) {
        this.#author = author;
        this.#publisher = publisher;
    }
    get author() {
        console.log(`The author of this book is ${this.#author}`)
    }
    get publisher() {
        console.log("MOON PIES", this.#publisher)
    }
    set author(target) {
        this.#author = target;
    }
    set publisher(target) {
        this.#publisher = target;
    }
}
const book = new Book("Dahl", "Penguin")
console.log(book)
book.publisher;
book.author;
book.author = "Rowling"
book.author;
book.publisher = "Express"
book.publisher
class Author {
    #name;
    #books;
    constructor(name, books) {
        this.#name = name;
        this.#books = books;
    }
    get name() {
        console.log(`This author's name is ${this.#name}`)
    }
    get books() {
        console.log("The author wrote these books", this.#books)
    }
    set name(target) {
        this.#name = target;
    }
    set books(target) {
        this.#books.push(target);
    }
}
const auth = new Author("Asimov", ["foundation", "iRobot"])
auth.books
auth.books = "Man on the Moon"
auth.books
class Publisher {
    constructor(authors, books) {
        this.authors = authors;
        this.books = books;
    }
    get authors() {
        console.log(`The company has published these authors- ${this.#authors}`)
    }
    get books() {
        console.log("This company has published these books- ", this.#books)
    }
    set authors(target) {
        this.#authors.push(target);
    }
    set books(target) {
        this.#books.push(target);
    }
}
// class Review {
//     constructor(rating, user) {
//         this.rating = rating;
//         this.user = user;
//     }
// }

// 2. Create the following classes:
// - Umbrella class.It should have a an organization name.It should only have a single instance.Umbrella is the "Parent Organization" e.g.Allegis Group
// - Company class.It should have a compnay name and # of employees.Create at least 3 different companies that are children of the Umbrella Organization.  
//     (e.g.TEKsystems, Aerotek, etc.)
//  - Site class.It should have the name of the company, and the location of the site.It is a child class that inherits from the Company class. 
//     Create 3 sites for each company.
// - Employee class.It should have a employee name, job title, and salary properties.Create 10 employee instances: 1 CEO, 1 Manager, 1 Secretary, 2 Engineers,
//      1 Financial Officer, 1 Janitor, 1 Marketer, 1 HR Personnel, 1 Lawyer.Feel free to add other employee roles at your own discretion.

//     - For each class, add 2 properties and 2 methods to each.The properties and methods should make sense, considering what the classes are supposed to be representing.

class Umbrella {
    constructor(name) {
        this.umbrella = name;
    }
}
class Company extends Umbrella {
    constructor(companyName, employeesNumber, umbrella) {
        super(umbrella);
        this.companyName = companyName;
        this.employeesNumber = employeesNumber;
    }
    hostileTakeover(target) {
        console.log(`${this.companyName} commits a hostile takeover of ${target}`)
    }
    firesEmployee(employee) {
        console.log(`${this.companyName} fires ${employee.eName}`)
    }
}
class Site extends Company {
    constructor(location, company) {
        super(company.companyName, company.employeesNumber);
        this.location = location;
    }
    selfDestruct(enemy) {
        console.log(`${this.location} bombs its own base to keep it from falling into the hands of the ${enemy}`)
    }
    recruit() {
        console.log(`${this.location} wants to hire you!`)
    }
}
const alleg = new Umbrella("Allegis");
// console.log(allegis)
const tek = new Company("TEKSystems", 100000, alleg)
console.log(tek)
const aero = new Company("Aerotek", 10000, alleg)
const space = new Company("Space Force", 50, alleg)
console.log(aero, "boo", space)
const dallas = new Site("Dallas", aero)
const chicago = new Site("Chicago", aero)
const ny = new Site("New York", aero)
const dallas2 = new Site("Dallas", space)
const la = new Site("Los Angelas", space)
const houston = new Site("Houst", space)
const sa = new Site("San Antonio", tek)
const dallas3 = new Site("Dallas", tek)
const seattle = new Site("Seattle", tek)
// console.log(dallas, ny, la, dallas2, dallas3, sa)
class Employee extends Company {
    constructor(eName, title, salary, company) {
        super(company.companyName);
        this.eName = eName;
        this.title = title;
        this.salary = salary;
    }
    promotion(employee) {
        console.log(`${this.eName} steals ${employee.eName}'s job and is now the new ${employee.title}`)
    }
    raise() {
        console.log(`${this.eName} gets a 1000$ raise. ${this.eName}'s new salary is ${this.salary + 1000}$`)
    }
}
const fred = new Employee("Fred", "CEO", 100000, tek)
// const george = new Employee("George", "Manager", 70000, tek)
// const james = new Employee("James", "Engineer", 60000, tek)
// const carl = new Employee("Carl", "Engineer", 61000, aero)
// const fredd = new Employee("Freddie", "Secretary", 10000, aero)
// const bill = new Employee("Bill", "Lawyer", 20000, aero)
// const jim = new Employee("Jim", "Financial Officer", 60000, space)
// const jimmy = new Employee("Jimmy", "HR Personel", 55000, space)
// const jimbo = new Employee("Jimbo", "Captain", 75000, space)
// // console.log(fred, james, bill, jim, jimmy, jimbo)
// space.hostileTakeover("Google");
// space.firesEmployee(jim);
// dallas.selfDestruct("aliens")
// dallas.recruit();
// fred.raise()
// jim.promotion(fred);
// ******************************************************************************************************************************
//     Bonus Exercise:

// 3. Building on Exercise 1, Do the following:
// - Create a Bookstore class.It should contain a collection of various Book Instances.
// - Each Book Instance should contain the Instances of the relavant Authors, Publishers, and Reviews.
// - Each Publisher should contain Instances of the Authors that are affiliated with the relavant Publisher.

// Each Book instance should contain instances of the Authors, the Publishers, and the Reviews pertinent to each book.This exercise is using
// the advanced encapsulation concept of "composition", reflecting a "HAS A" relationship.
function Bookstore(books) {
    let bookstore = {
        bookstore,
        books: []
    }
    return Object.assign(
        books,
        bookstore(books)
    )
}

function Book(name, author, publisher, review) {
    let book = {
        name,
        author,
        publisher,
        review
    }
    return Object.assign(
        book,
        name(book),
        author(book),
        publisher(book),
        review(book)
    )
}

function Author(name, book) {
    let author = { name, book }
    return Object.assign(
        author,
        book(author)
    )
}

function Publisher(name, book) {
    let publisher = {
        name,
        book
    }
    return Object.assign(
        publisher,
        book(publisher)
    )
}

function Review(book, review) {
    let review = {
        book,
        review
    }
    return Object.assign(
        review,
        book(review)
    )
}