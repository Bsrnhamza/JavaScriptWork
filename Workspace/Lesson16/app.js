//Todo : functions  

function square(number)
{
    return number*number;
}

let x = square(2);
let y = square(4);
let z = square(3);

console.log(x);
console.log(y);
console.log(z);

function total(number1,number2)
{
    function squareTwo(a)
    {
        return a*a;
    }
    return squareTwo(number1)+squareTwo(number2);
}
let result = total(3,4);

console.log(result);