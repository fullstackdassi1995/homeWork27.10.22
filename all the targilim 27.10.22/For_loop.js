/*
1. Write a function `printNumbers()` that prints all numbers between 1 to 10 using a for loop.
*/
function printNumbers(){
    for (i = 1 ; i <= 100 ; i++){
        return i + "</br>"
    }
}
/*
2. Write a function `deleteElement()` that deletes all the occurrences of the given element from
the given array.
for example: var arr = [23,56,4,78,5,63,45,210,56] and number 4
if the given number appears in the array your function should delete
*/
function deleteElement(x , y){
    for (let i = y.length - 1 ; i >= 0 ; i--){
        if (x === y[i]){
            y.splice(i , 1)
        }
    }
   return y
}
/*
3. Write a function that receives an array of integers and returns how many numbers are odd
and how many are even.
Return an object the contain this data
*/
function myFun1(x , arr){
    let even1 = 0
    let odd1 = 0
    for(let i = arr.length - 1 ; i >=0 ; i--){
        if (arr[i] % 2 === 0){
            even1++
        }
        else {
            odd1++
        }
    }
    return odd1 + even1
}

/* 4. Write a function called findDup() that returns all the elements that are repeated more than
once in a given array.
Return the result as a Javascript object (the key should be the repeated element, the value
should be the amount of times this element repeated).
If an element appears only once it should not be added to the result object.
*/
function findDup(arr) {
    const result = {}
    arr.sort()
    let current = arr[0]
    let counter = 1
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] == current) {
            counter++;
        }
        else {
            if (counter > 1) {
                result[current] = counter
            }
            current = arr[i]
            counter = 1
        }
    }
    if (counter > 1) {
        result[current] = counter
    }
    return result
}
 /* 5.
 1. Construct for loops that accomplish the following tasks:
1. Print the numbers 1 - 20, one number per line.
2. Print only the ODD values from 3 - 29, one number per line.
3. Print the EVEN numbers between 1 - 20 in a descending order, one number
per line.
4. Print the numbers 50 down to 20 in descending order, but only if the numbers
are multiples of 3.
*/
for (let i = 1 ; i <= 20 ; i++){
    console.log(i + '</br>')
}
for (let i = 3 ; i <= 29 ; i += 2){
    console.log(i + '</br>')
}
for (let i = 20 ; i <= 2 ; i -= 2){
    console.log(i + '</br>')
}
for (let i = 48 ; i >= 21 ; i -= 3){
    console.log(i + '</br>')
}

/*Ex6:
1. Initialize two variables to hold the string 'LaunchCode' and the array [1, 5, 'LC101',
'blue', 42], then construct for loops to accomplish the following tasks:
1. Print each element of the array to a new line.
2. Print each character of the 'LaunchCode' string in reverse order
Each letter should start a new line.*/

let text = 'LaunchCode'
const arr = [1, 5, 'LC101','blue', 42]
for ( let i in arr){
    console.log(arr[i] + '</br>')
}
for (let i = text.length - 1 ; i >= 0 ; i--) {
    console.log(text[i] + '</br>')
}

/* ex7: Write a function that prints “Hello” 10 times using a while loop.*/

function myFun2(){
    let i = 1
    while(i <= 10){
        console.log('hello')
        i++
    }
}

/*Ex8:
Write a function that receives an array and a number.
As long as the sum of the array is lower than the number, the loop will add the next number,
if the sum with the next number will be greater than the number given as a parameter then
return the sum.*/
function myFun3(arr , x){
    let sum = 0
    for (let i in arr){
        if (sum >= x){
            return sum
        }
    }
}

/*Ex9:
Write a function that receives an array of Boolean type.
As long as the value is true, the loop should continue, if the value is false, then return the
first index of the false value.*/

function myFun4(arr_b){
    for (let i in arr_b){
        if (Boolean(arr_b[i]) == false){
            return arr_b[i]
        }
    }
}

/*Ex10:
write a function that receives an array of strings.
If the string “Hello” appears and the index is odd then stop the loop and return the index.*/

function myFun5(arr){
    for (let i in arr){
        if (arr.includes("hello") == true  &&  i % 2 == 0){
            return arr[i]
        }
    }
}






