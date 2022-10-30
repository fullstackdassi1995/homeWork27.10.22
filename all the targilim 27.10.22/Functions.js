/*(1) Write a function that receives two parameters of type int.
If the first parameter is bigger than the second parameter -> the function should
returns the first parameter
else -> the function should return the second parameter */

function myFun1(x , y){
    return Math.max(x , y)
}

/*(2) Write a function that receives 2 parameters of type int.
If the first parameter is equal to the second parameter -> the function should add 1 to
the first parameter and return it. */

function myFun2(x , y){
    if (x == y){
        return ++x
    }
}

/*(3) Write a function that receives four parameters of type int.
The function has to return the smaller value between all of them.
If one of the parameters is between 1 to 5, then return -1. */

function myFun3(x , y , z , w){
    for (let i = 1 ; i <= 5 ; i++){
        if ( x == i  || y == i || z == i || w == i){
            return -1
        }
    }
    return Math.min(x , y , z , w)
}

/*(4) Write a function that receives one parameter of type int.
If the number is even then return the string : “even”, otherwise “not even”.*/

function myFun4(x){
    if (x % 2 === 0){
        return "even"}
    else{
        return "not even"
    }
}

/* (5) White a function that receives 4 parameters of type int.
If all the four numbers are equal, the function returns the string “all equals”.
If 2 of the four numbers are equals, the function returns the string “only 2 numbers
are equals”.
If none of the two cases happened, the function returns the string “all numbers not
equals”. */

function myFun5(x , y , z , w){
    if (x == y && x == z && x == w){
        return "all equals"
    }
    if (x == y || x == z || x == w || y == z || z == w || y == w){
        return "only 2 numbers are equals"
    }
    return "all numbers not equals"
}

/*(6) Write a function that receives a parameter of type int.
The number has to be between 1 to 7 and each number represents each day of the
week.
The function has to return the specific day that represents the number. If the number
is not between 1 to 7, the function has to return the string “Error”.
Ex: if the number is 2, the function returns “Monday”,
if the number is 3, the function returns “Tuesday”..... */

function myFun6(x){
    const mydays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    for (let i = 1 ; i <= 7 ; i++)
        if (x == i){
            return mydays[x - 1]
        }
    return "error"
}

/*(7) Write a function that receives a number between 1 to 12.
Each number represents each month of the year.
The function has to return the number of the days in the month. If the number given
is not between 1 to 12, then the functions -1. */

function myFun7 (month, year = 2022) {
    return new Date(year, month, 0).getDate();
}

/*(8) Write a function that uses global variables.*/

const text = 'Thank you, Gil, for checking the exercises'
function myFun8(){
    return text
}

/*9) Write a function that uses local variables.
כל התרגילים שפתרתי בעומד זה הם עם משתנים בתוך הפונקציה
*/