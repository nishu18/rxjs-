// // let obj={
// //     adam:5,
// //     b:6,
// //     c:7,
// //     d:9
// // }
// // for(let a in obj){
// //     console.log (a +obj[a])
// // }

// // for(let a of "adam"){
// //     console.log (a +obj[a])
// // }















// let n=7;

// let i=0

// while(i<n){
//     console.log(i)
//     i++
// }




// let d=9
// i=0
// do{
//     console.log(i)
//     i++
// }
// while(i<n)

// let obj={
//     nis:45,
//     vis:67,
//     ris:87,
//     din:29
// }

// for(let i=0; i<Object.keys(obj).length; i++){
//     console.log("the marks of" + Object.keys(obj)[i] + "are" + obj[Object.keys(obj)[i]])
// }


// for(let key in obj){

//     console.log("the marks of" + key + "are" + obj[key])
// }



// let a=4

// let i

// while(i !=a){
//     i=prompt("enter a number")
// }





// let a=5
// let b=""
// for(let i=1; i<a; i++){
//     for(let j=1; j<i; j++){
//         b+="*"
//     }
//     b+="\n"
// }
// console.log(b)


// let a=5
// let b=""
// for(let i=0; i<a; i++){
//     for(let j=0; j<a; j++){
//         b+="*"
//     }
//     b+="\n"
// }
// console.log(b)

// let a=5
// let b=""
// for(let i=0; i<a; i++){
//     for(let j=0; j<i; j++){
//         b+=j + 1
//     }
//     b+="\n"
// }
// console.log(b)

// let a=5
// let b=""
// for(let i=0; i<a; i++){
//     for(let j=0; j<a-i; j++){
//         b+="*"
//     }
//     b+="\n"
// }
// console.log(b)

// let a=5
// let b=""
// for(let i=1; i<a; i++){
//     for(let j=1; j<a-i; j++){
//         b+=" "
//     }
//     for(let c=0; c<2*i-1; c++){
//     b+="*"
// }
//     b+="\n"
// }
// console.log(b)

// let a=5
// let b=""
// for(let i=1; i<a; i++){
//     for(let j=1; j<i; j++){
//         b+=" "
//     }
//     for(let c=0; c<2*(a-i)-1; c++){
//     b+="*"
// }
//     b+="\n"
// }
// console.log(b)


// let a=5
// let b=""
// for(let i=0; i<a; i++){
//     for(let j=0; j<a-i; j++){
//         b+="*"
//     }
//     b+="\n"
// }
// console.log(b)


// let a=5;
// let b=""

// for(let i=1; i<a; i++){
//     for(let j=1; j<=i; j++){
//         b="*"
//     }
//     b+="\n"
// }

// console.log(b)

// let a = 5
// let b = ""
// for (let i = 1; i <= a; i++) {
//     for (let k = 5; k > i; k--) {
//         b += " "
//     }
//     for (let j = 1; j < ((2 * i)); j++) {
//         if (i == 1 || i == a || j == 1 ||j ==((2 * i)-1)) {
//             b += "*"

//         }else{
//             b+=" "
//         }
//     }
//     b += "\n"
// }
// console.log(b)

// let a=5
// let b=""
// for(let i=1; i<a; i++){
//     for(let j=1; j<a-i; j++){
//         b+=" "
//     }
//     for(let c=0; c<2*i-1; c++){
//     b+="*"
// }
//     b+="\n"
// }
// console.log(b)

// let a=7
// let b=""
// for(let i=1; i<a; i++){
//     for(let j=1; j<(2*i); j++){
//         if(i==1 || i == a-1 || j==1 || j==((2*i)-1)){
//         b+="*"
//     }
//         else{
//             b+=" "
//         }

//     }
//     b+="\n"

// }
// console.log(b)

// let a=5
// let b=""
// for(let i=0; i<a; i++){
//     for(let j=0; j<a; j++){
//         if(i==0 || i==a-1 ||j==0 ||j==a-1){
//         b+="*"}else{
//             b+=" "
//         }
//     }
//     b+="\n"
// }
// console.log(b)



// let arr = [1, 2, 3, 4];
// let first=arr[arr.length-2]
// console.log(first)


// arr.push(4)
// arr.push(4)
// arr.pop(4)

// for(let i=0; i<arr.length; i++)
// console.log(arr[i])

// if(arr.indexOf(5)==1){
//     console.log("found")
// }else{
//     console.log("not found")
// }


// arr.splice(2,2)
// console.log(arr)


// let arr1 = [1, 2];

// let arr2 = [3, 4];

// let newArr = arr1.concat(arr2);

// console.log(newArr)



// let a=3

// if(a%2==0){
//     console.log("even")

// }else{
//     console.log("old")
// }

// let a=2

// for(let i=1; i<=10; i++){
//     console.log(2 *i)
// }

// function swap(a, b){
//     console.log("before", a ,"and", b)

//     var temp=a
//     a=b
//     b=temp

//     console.log("after", a , "and", b)
// }
// swap(2,3)


// function sum(n){
//     if(n===1){
//         return 1
//     }else{
//         return n + sum (n-1)
//     }
// }
// console.log(sum(5)
// )


// function same(num1, num2, num3){
//     let first=num1%10
//     let second=num2%10

//     let third=num3%10
   

//     if(first==second && third==first){
//         console.log("same")
//     }else{
//         console.log("not same")
//     }
// }
// same(3, 343, 2)



// // let year=2016

// // if(year%4==0 && year%100!==0 || year%400==0){
// //     console.log("is leap year")
// // } else{
// //     console.log("is not leap yeat")
// // }

// // let a=4
// // let fact=1
// // for(let i=1; i<=a; i++){
// //     fact*=i
// // }
// // console.log(fact)

// let num=5
// let a=0
// let b=1
// let next;
//     console.log(a)


// for(let i=0; i<=num; i++){
//     next=a+b;
//     a=b;
//     b=next
//     console.log(next)
// }


// function longest(string){
//     let long=""
//     for(let i=0; i<string.length ; i++){
//         if(string[i].length>long.length){
//         long=string[i]
//         }
//     }
//     return long
// }

// let res=longest( ["apple", "banana", "kiwi"])
// console.log(res)


// function twoSum(array, target){
//     for(let i=0; i<array.length; i++){
//         for(let j=i+1; j<array.length; j++){
//             if(array[i]+array[j]==target){
//                 return [i, j]
//             }
            
//         }
//     }
// }

// let aa=[1,2,3,4,5] 
// let z =7

// console.log(twoSum(aa, z))
// output => [2,3]




// let reverse="madan";
// let result=reverse.split("").reverse().join("")
// console.log(result)

// let reverse="madan";
// let result=reverse.toString().split("").reverse().join("")
// let result2=reverse.toString()
// console.log(result)







  










































