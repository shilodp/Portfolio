function foldPost (event) {
    var displayState;
    if (event.target.className === "fold-button folded"){
        event.target.value = "–";
        event.target.className = "fold-button";
        displayState = "i-list";
    }
    else{
        event.target.value = "+";
        event.target.className = "fold-button folded";
        displayState = "i-list-folded";
    };
    event.target.parentElement.className = displayState;
};
function foldPostTitle (event) {
    var displayState;
    if (event.target.parentElement.className === "i-list-folded"){
        displayState = "i-list";
        event.target.previousElementSibling.value = "–";
        event.target.previousElementSibling.className = "fold-button";
    }
    else{
        displayState = "i-list-folded";
        event.target.previousElementSibling.value = "+";
        event.target.previousElementSibling.className = "fold-button folded";
    };
    event.target.parentElement.className = displayState;
};