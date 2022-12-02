/* Reduce */
// let numbers = [1, 2, 3, 4, 5];
// let sum = numbers.reduce((a, b)=>{
//     return a - b
// })
// console.log(`Sum: ${sum}`);

/* Mapping */
// let double = numbers.map((item)=> {
//     return item *2;
// })
// console.log("Current array:", numbers);
// console.log("Double: ", double);

/* For of in an array */
// for(let numb of numbers) {
//     console.log(numb *2);
// }

// let people = [
//     {
//         id: 1,
//         firstName: 'James',
//         surname: 'Bond'
//     },
//     {
//         id: 2,
//         firstName: 'Bruce',
//         surname: 'Wayne'
//     },
// ];
// console.table(people);

// let peopleFirstNames =
// people.map( (item)=> {
//     return item.firstName;
// })
// console.log(peopleFirstNames);

/* Hoisting */
// addition(5, 8);
// function addition(a, b) {
//     console.log(a + b);

/* Rest operator */
// function addition(...args) {
    // let sum = args.reduce((a, b)=>{
    //     return a + b
    // })
    // console.log(sum);
//     console.log(args);
// }
// addition(1, 2, 3, 5);

// Exercise //
/*A function called "addition" that will take a rest operator, Inside your function, please display only the sum of numbers.*/
// function addition(...args) {
//     let sum = args.filter(Number).reduce((a, b)=>{
//         return a + b;
//     })
//     console.log("Sum: ", sum);
//     console.log(args);
// }
// addition(1, 2, 3, 'Messi',4);

/* Another option that works for boolean values as well: */
// function addition(...args) {
//   let sum = args.filter(item => typeof item == 'number')
//   console.log(sum.reduce((a, b) => a + b));
// }

/* API */
// fetch('../data/data.json')
// .then((res)=>{
//     return res.json();
// })
// .then((data)=>{
//     let results = data.results;
//     console.log(results);
// })

// async function FetchData() {
//     let data = await fetch('');
//     return data;
// }

// async function display() {
//     let results = await FetchData();
//     console.log(result);
// }