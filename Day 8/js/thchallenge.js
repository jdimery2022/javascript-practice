// Take Home Challenge
// Create a new codepen:
// Let's say you're a car manufacturer and need to create many cars to build your inventory
// Create a class called "car"
// Add some properties like "make", "model", "year", "color", etc
// Use your car class to construct 4 (or more) different cars
// console log your code so you can see the results!
// BONUS: Display the details for each of your cars in your HTML

        document.getElementById("demo").innerHTML

class Car {
    constructor(make, model, year, color) {
        this.make = make;
        this.model = model;
        this.year = year;
        this.color = color;
    }
    completed() {
        console.log(this.make, this.model, this.year, this.color, ', 2000 assembly completed today');
    }
    testdrive() {
        console.log(this.make, this.model, this.year, this.color, ', quality assurance 200 test drove today');
    const p =document.createElement("p");
        document.body.append(p);
        p.innerHTML=this.model + " quality assurance 200 test drove today ";
    }
    sold() {
        console.log(this.make, this.model, this.year, this.color, ', fleet of 2000 sold today');
    }
}
var carOne = new Car('BMW', 'M8 Convertible Series', '2023', 'Gold');
var carTwo = new Car('BMW', '7 Series', '2023', 'Midnight Blue');
var carThree = new Car('BMW', '3 Series', '2023', 'Black');
var carFour = new Car('BMW', '5 Coupe Series', '2023', 'Apple-Red');

carOne.testdrive();
carTwo.completed();
carThree.sold();
carFour.sold();

