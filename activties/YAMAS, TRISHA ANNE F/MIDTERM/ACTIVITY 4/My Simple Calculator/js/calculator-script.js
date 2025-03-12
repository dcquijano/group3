function addNumbers(){
    var num1 = Number(document.getElementById("txtNum1").value);
    var num2 = Number(document.getElementById("txtNum2").value);
    var sum = (num1 + num2);
    alert ("SUM: " + sum);
}

function subtractNumbers(){
    var num1 = Number(document.getElementById("txtNum1").value);
    var num2 = Number(document.getElementById("txtNum2").value);
    var diff = (num1 - num2);
    alert ("DIFFERENCE: " + diff);
}

function multiplyNumbers(){
    var num1 = Number(document.getElementById("txtNum1").value);
    var num2 = Number(document.getElementById("txtNum2").value);
    var product = (num1 * num2);
    alert ("PRODUCT: " + product);
}

function divideNumbers(){
    var num1 = Number(document.getElementById("txtNum1").value);
    var num2 = Number(document.getElementById("txtNum2").value);
    var quotient = (num1 / num2);
    alert ("QUOTIENT: " + quotient);
}

function clearTextboxes(){
    document.getElementById("txtNum1").value = "";
    document.getElementById("txtNum2").value = "";
}