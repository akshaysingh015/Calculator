let buttons = document.querySelectorAll("#button");
let inputValue = document.querySelector("#inputvalue");
let clearButton = document.querySelector("#clear");
let equalsButton = document.querySelector("#equals");
let deleteButton = document.querySelector("#delete");


buttons.forEach(button => {
    button.addEventListener("click", () => {
        inputValue.value += button.textContent;
    });
})
equalsButton.addEventListener("click", () => {
    try {
        inputValue.value = eval(inputValue.value)
    }
    catch (error) {
        inputValue.value = "Error";
    }
});
deleteButton.addEventListener("click", () => {
    inputValue.value = inputValue.value.slice(0 , -1);
})

clearButton.addEventListener("click", () => {      
    inputValue.value = "";
});


