var array = Array();  // Array that holds numbers in BST
var moves_done = Array(); // Array that holds what has been inserted or deleted, or searched!

function insert_element(){
    element_being_inserted = document.getElementById("inputField").value;
    document.getElementById("inputField").value = ""; // sets the inputField to blank
    array.push(element_being_inserted);
    move = "insert(" + element_being_inserted + ")" + "<br/>";
    console.log(move);
    moves_done.push(move);
    display_moves();
    display_array();
}

function delete_element(){
    // obtain user input
    element_found = false;
    element_being_deleted = document.getElementById("inputField").value;
    document.getElementById("inputField").value = ""; // sets the inputField to blank

    // scan to see if it is inside of the array
    for(var index = 0; index < array.length; index++){
        if(array[index] == element_being_deleted){
            element_found = true;
            array.splice(index, 1);
            move = "delete(" + element_being_deleted + ")" + "<br/>";
            console.log(move);
            moves_done.push(move);
        }
    }
    if(element_found == false){
        document.getElementById("inputField").value = "";
        alert("Item not found!");
    }
    // if it is inside the array, delete the node
    // if not, display that this array doesn't contain the number

    display_moves();
    display_array();
}

function search_element(){
    element_found = false;
    element_being_searched = document.getElementById("inputField").value;
    document.getElementById("inputField").value = ""; // sets the inputField to blank
    
    // scan to see if it is inside of the array
    for(var index = 0; index < array.length; index++){
        if(array[index] == element_being_searched){
            element_found = true;
            array.splice(index, 1);
            move = "search(" + element_being_searched + ") => true" + "<br/>";
            console.log(move);
            moves_done.push(move);
        }
    }
    if(element_found == false){
        document.getElementById("inputField").value = "";
        alert("Item not found!");
    }

    display_moves();
    display_array();
}

function display_array(){
    if(array.length == 0){
        document.getElementById("Result").innerHTML = "Array is empty!";
    }
    else{
        document.getElementById("Result").innerHTML = array;
    }
}

function display_moves(){
    // TODO: Redo this so that there is no , and that we do not need </br> in the moves_done.push();
    document.getElementById("displayMoves").innerHTML = moves_done;
}