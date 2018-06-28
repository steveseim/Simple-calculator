/*
 * Implement all your JavaScript in this file!
 */


var display = "";
var value1 = "";
var value2 = "";
var value3 = "";
var operator = "";

//clear button clears the display
 $("#clearButton").click( function () {
    display = "";
    value1 = "";
    value2 = "";
    operator = "";
    value3 = "";
});

$(".number").click ( function() {
    if (operator != "") {
        value2 += this.value;
        display = value2;
    } else {
        value1 += this.value;
        display = value1;
    }
});

// operator button functionality
$('.operator').click( function () {
    if (value1 != "" && value2 != "" && value1 != value3){
        display = eval(value1 + operator + value2);
        value1 = display;
        value2 = "";
    } else {
        value2 = "";
    }
    if (this.id == 'addButton') {
        operator = '+';
    } else if (this.id == 'subtractButton') {
        operator = '-';
    } else if (this.id == 'multiplyButton') {
        operator = '*';
    } else {
        operator = '/';
    }

});
//equals button needs to:
//clear operator
//display new number that is answer
//if number is clicked next, clear values
//if operator is clicked next, store answer as value1
$("#equalsButton").click( function() {
    display = eval(value1 + operator + value2);
    value1 = display;
    value3 = value1;
});

//when any button is clicked, display is refreshed.
//if button is a number, its value is added to display
$("button").click( function() {
    $("#display").val(display);
    
});