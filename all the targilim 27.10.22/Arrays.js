/*Ex1:
1 - Create an array of strings containing all the days of the week and print it.
2 - Sort the array and print it.
3 - Create a function to print the array and another function that receives an array and sorts
it.*/

const mydays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
console.log(mydays)
console.log(mydays.sort)

function mydays(){
    return mydays
}

function mydays1(){
    return mydays.sort
}

/*Ex2:
1 - Create a function that receives an integer array and number as parameters (will be used
as index of array).
2 - Print the value of the array by the number value you got.
For example if the number is 2 you should print the value in the array of index 2.
3 - In case the number is not in the array*/

function myFun1(arr , x){
    if ( arr[x - 1] == undefined){
        return "the number is not in the array"
    }
    return arr[x - 1]
}

/*Ex3:
Create a function that receives an integer array. If all the values of the array are odd, then
the function returns “odds”, otherwise “not odds”.*/

function myFun2(arr){
    for (let i in arr){
        if (arr[i] % 2 !== 0){
            return "not odds"
        }
    }
    return "odds"
}

/*Ex4:
Create a function that receives an integer array. for each element in the array check If the
value of the index is smaller than 10 → add 5 to that value.
Print the array.*/

function myFun3(arr){
    for (let i in arr){
        if (arr[i] < 10){
            arr[i] += 5
        }
    }
    console.log(arr)
}

/*Ex5:
Create a function that receives an integer array and int number.
If the value of the second parameter is in the array, the function returns “found” otherwise
“not found”.*/

function myFun4(arr , x){
    for (let i in arr){
        if (arr[i] == x){
            return "found"
        }
    }
    return "not found"
}

/*Ex6:
Create a function that receives an array and 2 numbers of type integer.
If the first value of the array is equal to the first parameter and the last value of the array is
equal to the second parameter then the function returns true, otherwise, the function returns
false.*/

function myFun5(arr , x , y){
    let g = arr.length - 1
    if (arr[0] == x && arr[g] == y){
        return "true"
    }
    return "false"
}

/* Ex7:
Create a function that receives an array.
If all the values of the array are smaller than 50, the function returns “smaller than 50”.
If all the values of the array are between 51 to 100, the function returns “ between 51 to
100”.
If all the values of the array are between 101 to 200, the function returns “between 101 to
200”.
If all the values of the array are greater than 201, the function returns “greater than 200”.
If none of the conditions above is happening your function should print “No condition is
happening” .*/

function myFun6(arr){
    for (let i in arr){
        if (arr[i] < 50){
            return "smaller than 50"
        }
        if (arr[i]  <= 100){
            return "between 51 to 100"
        }
        if (arr[i] <= 200){
            return "between 101 to 200"
        }
        if (arr[i] > 200 ){
            return "greater than 200"
        }
    }
    return "No condition is happening"
}

