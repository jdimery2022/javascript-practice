* This is a pure css Rain effect just put a <section></section> in your html file */

section { 
    width: 100%; 
    height: 100vh;
    position: relative;
    position: absolute; 
    top: 0; 
    left: 0; 
    background-image: url(https://media.geeksforgeeks.org/wp-content/uploads/20200828184719/rain-300x300.png); 
    animation: rain 0.4s linear infinite; 
    opacity: 0; 
}

@keyframes rain { 
    0% { 
        background-position: 0 0; 
        opacity: 1; 
    } 

    100% { 
        background-position: 10% 100%; 
        opacity: 1; 
    } 
}