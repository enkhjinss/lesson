

let arr = []; //1

 arr = [1 , 3 , 'hey' , 43 , 5.6] //2

console.log(arr.length); //3

let first = arr[0];
let last = arr[length - 1];  //4


let mixedDataTypes = [3, 'yt', 4.6, [56], '', true, -3];
console.log(mixedDataTypes.length)   //5

let itCompanies = ['Facebook' , 'Google' , 'Microsoft' , 'Apple' , 'IBM' , 'Oracle'] //6

console.log(itCompanies); //7
console.log('number of companies = ' + itCompanies.length); //8
console.log( 'first company = ' + itCompanies[0]);      //9
// console.log('last company' + itCompanies[length - 1])
//middle company

console.log(itCompanies.join(', '))   //10
console.log(itCompanies.join(', ').toUpperCase());  //11

let itCompanies2 = ['and Amazon are big IT companies.'];
let itCompanies3 = itCompanies.concat(itCompanies2);
console.log(itCompanies3.join(', '));     //12

 console.log(itCompanies.includes('Facebook'));  //13

//  console.log(itCompanies.includes('o'))  //14 
// console.log(itCompanies.sort()); //15
//console.log(itCompanies.reverse());  //16
 
//console.log(itCompanies.splice(0, 3)) 
//console.log(itCompanies) //17
//console.log(itCompanies.shift()) //20 

//console.log(itCompanies.pop())
//console.log(itCompanies)  //22

console.log(itCompanies)



 //Slice out the last 3 companies from the array //18









