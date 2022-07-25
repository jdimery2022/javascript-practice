// <!-- Create a new codepen
// Congrats, you got a new dog!
// Create an object named "dog"
// Name and describe your dog
// Add a property to your dog object called "name" and assign a name
// Add two more properties to describe your dog. (ex: How many legs, fur color, etc)
// Let's teach it some tricks
// Give your dog a property called “speak” and assign a function that will alert “woof!”
// Add another method to teach your dog one more trick
// BONUS: Display your dog object values in HTML -->


const dog = {
    name: 'Fido',
    description: 'A friendly dog',
    speak: function() {
        alert(`${this.name} says woof!`);
    },
    washDishes: function() {
        alert(`${this.name} washes dishes!`);
    }
}


const button = document.createElement('button');
document.body.appendChild(button);
button.innerText = 'Speak';
button.addEventListener('click', function() {
    dog.speak();
});

const button2 = document.createElement('button');
document.body.appendChild(button2);
button2.innerText = 'Wash dishes';
button2.addEventListener('click', function() {
    dog.washDishes();
});

