// Go to github.com and create a new repository named "final-project"
// Clone your final-project repository using SSH
// Add the following to your final-project folder
// about.html
// contact.html
// index.html
// css folder
// style.css
// img folder
// Add, commit and push your work to Github.
// Start coding your final-project
// Import (at least) 2 Google Fonts into your final-project
// Import Font Awesome into your final-project
// Create a header and nav
// Make sure all your pages are linked in your nav
// Copy your header and nav to all your html pages
// Add, commit and push your changes to Github

const responses = ["Hazy with a 99% chance of No", 
    "Think about that question and ask again",
    "Now is not a good time, ask again in about 90 days",
    "For sure",
    "Doubtful",
    "Ask again later in about one year",
    "Don't rely on it",
    "Yes, maybe",
    "It's possible",
    "No",
    "Dream on",
    "Outlook is sunny with a 99% chance of Yes",
    "Better not tell you now, ask in 30 days",
    "Signs point to yes",
    "Don't count on it",
    "No",
    "Outlook stormy with a 75% chance of No",
    "Yes - in 100 light years",
];

	

window.onload = function () {
    const numberEight = document.getElementById("numberEight");
    const response = document.getElementById("response");
    const eightBall = document.getElementById("eight-ball");
    const question = document.getElementById("question");
    eightBall.addEventListener("click", function () {
        if (question.value.length < 1) {
            alert('What do you want to know?');
        } else {
            
            numberEight.innerText = "";
            var num = Math.floor(Math.random() * Math.floor(responses.length));
            response.innerText = responses[num];
        }
    });
};
