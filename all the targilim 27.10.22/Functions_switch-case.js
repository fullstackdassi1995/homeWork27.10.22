/*
1. Write a function with switch-case.
The function receives a number and return
 string saying if the number given is even or odd.
 */
 function myFun(x){
    x = x % 2
    switch(x){
        case 0:
            return ('even') ;
        case 1:
            return ('odd') ;
    }
}


/*
2. Write a function with switch-case.
The function receives a number and return string saying if
 the number given is negative or positive.
*/
function myFun2(x){
    x = Math.sign(x)
    let text;
    switch (x){
        case -1: 
        text = "negetive"
        break;
        case 1 :
        text = "positive"
        break;
        case 0 :
        text = "neutral"
    }
    console.log(text)
}

/*
3. Write a function with switch-case.
The function receives one number, if the number is
 between 1 to 17, then the function will
return the specific day, otherwise the function will 
return “please enter another number”.
*/
function myFun3(x){
    let day;
    switch (x) {
        case 1:
        day = "Sunday";
        break;
        case 2:
        day = "Monday";
        break;
        case 3:
        day = "Tuesday";
        break;
        case 4:
        day = "Wednesday";
        break;
        case 5:
        day = "Thursday";
        break;
        case 6:
        day = "Friday";
        break;
        case  7:
        day = "Saturday";
        default:
        day = 'please enter another number';
    }
    console.log(day)
}      
/*
4. Write a function with switch-case.
The function receives one number, if the number is between
 1 to 12, then the function will return the specific month,
otherwise the function will return “please enter another number”.
*/
function myFun4(x){
    let day;
    switch (x) {
        case 1:
        day = "January";
        break;
        case 2:
        day = "February";
        break;
        case 3:
        day = "March";
        break;
        case 4:
        day = "April";
        break;
        case 5:
        day = "May";
        break;
        case 6:
        day = "June";
        break;
        case  7:
        day = "July";
        case 8 :
        day = "August";
        break;
        case 9:
        day = "September";
        break;
        case 10:
        day = "October";
        break;
        case 11:
        day = "November";
        break;
        case 12:
        day = "December";
        break;
        default:
        day = 'please enter another number';
    }
    console.log(day)
}

/*
5. Write a function with switch-case.
The function receives a letter and has to check if the letter is a vowel or a consonant.
The vowel letters are : a,e,i,o,u,y and the rest of the letters a consonant.
*/
function myfun5(x){
    let text;
    switch(x){
        case "a" :
        case "e" :  
        case "i" :
        case "o" :   
        case "u" :
        case "y" :                      
            text = 'vowel ';
        break;
        default:
            text = 'consonant';
    }
console.log(text)
}

/*
6. Write a function with switch-case.
The function receives a number between 0 to 100.
If the number is between 0 to 20, the function returns : “D”.
If the function is between 21 to 55, the function returns : “C ”.
If the function is between 56 to 70, the function returns : “B ”.
If the function is between 71 to 90, the function returns : “A ”.
If the function is between 90 to 100, the function returns : “A+ ”.
לא הצלחתי בסוויץ כייס, רק באיף רגיל
*/
function myFun6(x){
if ( x <= 20){
    return("d")
}
if (x  <= 55){
    return('c')
}
if (x <= 70){
    return('b')
}
if (x <= 90){
    return('a')
}
if (x <= 100){
    return('a+')
}
}

/*
7. Write a function with switch-case.
The function receives 3 parameters(2 integer numbers and number between 1 to 4).
number 1 -> addition
number 2 -> subtraction
number 3 -> division
number 4 -> multiplication
For example, if the third parameter is 4, the function returns the first parameter * the second
parameter.
If the third parameter is 2, the function returns the first parameter - the second parameter.
*/
function myFun7(x , y ,z){
    switch(z){
        case 1 : 
        return x + y;
        case 2:
        return x - y;
        case 3 :
        return x / y;
        case 4 :
        return x * y
    }
}