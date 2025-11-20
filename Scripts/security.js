document.addEventListener("contextmenu", (event) => event.preventDefault()); // Disable right-click

document.addEventListener("keydown", (event) => {
if (event.ctrlKey && (event.key === "u" || event.key === "s" || event.key === "i" || event.key === "j" || event.key === "c")) {
        event.preventDefault();
    }
});


document.addEventListener("keydown", (event) => {// disable F12 key 
    if (event.key === "F12"){
        event.preventDefault();
    }
});


