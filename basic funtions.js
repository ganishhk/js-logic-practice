//  Normal function
function nice(name) {
    console.log("my name is " + name)
    console.log("hey you my name is "+name)
    console.log("hlo every one my name is"+name)
}
nice("Gax")
// Function with default parameter
function sum(a,b,c=3) {
    return a+b+c
}
result=sum(2)
result2=sum(2,3)
result3=sum(2,3,9)
console.log("your sum is " ,result)
console.log("your sum is " ,result2)
console.log("your sum is " ,result3)
// Arrow function
const fun1 =(x)=> {
    console.log("i have ", x ,"candy")
    
}
fun1(23);
fun1(43);
fun1(66);
