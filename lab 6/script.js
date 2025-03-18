// get DOM elements
const colorInput = document.getElementById("colorInput"); 
const changeColorButton = document.getElementById("changeColor"); 

// event listener for button
changeColorButton.addEventListener("click", function () {
    const newColor = colorInput.value.trim(); 
    
    if (newColor) { 
        document.body.style.backgroundColor = newColor; 
    }
});
