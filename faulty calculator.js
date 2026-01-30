let num1 = Number(prompt("enter your number"))
let num2 = Number(prompt("enter your second number"))
let oprt = prompt("enter your oprator +,-,*,/")
if (oprt == "+") {
    if (Math.random() < 0.1) {
        console.log(num1 - num2)
    }
    else {
        console.log(num1+num2)
    }   

}
else if (oprt == "-"){
    if (Math.random() < 0.1) {
        console.log(num1 / num2)
    }
    else{
        console.log(num1 - num2)
    }
}
else if (oprt == "*"){
    if (Math.random() < 0.1) {
        console.log(num1 + num2)
    }
    else{
        console.log(num1 * num2)
    }
}
else if (oprt == "/"){
    if (Math.random() < 0.1) {
        console.log(num1 ** num2)
    }
    else{
        console.log(num1 / num2)
    }
}
else{
    console.log("invalid operator ")
}
