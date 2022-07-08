    
    
    
    //-------------DAILY CHALLENGE : COMPLETED ON 7/6/2022------------
    // Prompt the user for two different numbers
    // Convert the values to integers
    // Store the two integers as variables
    // Compare the two numbers
    // Alert the larger number



    // ------------ TAKE HOME CHALLENGE: COMPLETED ON 7/7/2022 ------------
    // Add an edge case to your daily challenge code
    // Check if the user input anything other than a number
    // If so, prompt the user again to input a number

    // document refers to document in html

    // get elements
    document.body.style.background = 'yellow';
    const button = documentquerySelector('button'); // get the first button
    button.innerHTML = 'click me';
    const button = documentquerySelectorAll('button');
    buttons[1].innerHTML = 'click';
    console.log(buttons);

    // update elements style

    button.style.backgroundColor = 'green';
    button.style.color = 'white';
    button.style.paddding = '10px';
    button.style.borderRadius = '10px';


    newbutton.style.innerHTML = '<h1>click me</h1>';
    newbutton.innerHTML = object.username;
    newbutton.style.color = 'white';
    // add or remove classes
    // update elements
    //remove elements
    // append elements

    //data
    

//control flow
    if (index == array.lenght){
        index = 0;
    } else {
        console.log('index: ', index);
    }

//data
    const string = 'string';
    const number = 1;
    const boolean = true;
    const array = [1, 2, 3];
    const object = {
        username: 'joe',
    };

    //function

    function getValidDigit(iteration){
        let number = prompt('enter ${iteration}
        number');
        if (isNaN(number)) {
        alert('This is not a number. Please enter digits olny');
        return getValidDigit(iteration);
        }
        return number;
        }



        // falsy values
        false;
        0;
        '';
        //one for each primitive type
        null;
        undefined;
        NaN;
// truthy values, true will trigger a if statement to run
true;
if (true) {
    console.log('true will trigger');
}
1.1;
'string';
-1;
{}
({})
//every thing that's not falsy

if (false) { 
    console.log ('false will not trigger a if statement to run');
}

const firstName = 'joe';
const lastName = 'smith';

if (firstName){
    console.log('firstName  is truthy');
}

if (!firstName) || !lastName || true) {
    alert('you must enter your first and last name');
}

//  comparison operators
// == equal to
// === equal value and equal type
