var num1, num2;

//SUM
function getSum()
{
    num1 = parseInt(document.getElementById('txtNum1').value);
    num2 = parseInt(document.getElementById('txtNum2').value);
    window.alert("SUM: " +(num1 + num2));
}
//DIFFERENCE
function getDiff()
{
    num1 = parseInt(document.getElementById('txtNum1').value);
    num2 = parseInt(document.getElementById('txtNum2').value);
    window.alert("DIFFERENCE: " +(num1 - num2));
}

//PRODUCT
function getMulti()
{
    num1 = parseInt(document.getElementById('txtNum1').value);
    num2 = parseInt(document.getElementById('txtNum2').value);
    window.alert("PRODUCT: " +(num1 * num2));
}
//QUOTIENT
function getDivide()
{
    num1 = parseInt(document.getElementById('txtNum1').value);
    num2 = parseInt(document.getElementById('txtNum2').value);
    window.alert("QUOTIENT: " +(num1 / num2));
}
//CLEAR
function btnClear1()
{
    document.getElementById('txtNum1').value = "";
    document.getElementById('txtNum2').value = "";

}
