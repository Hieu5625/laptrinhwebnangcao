// let age=26;
// age=25;
// const name=`Hieu`;
// const isReactFun=true;
// const person={ name:`duyngu`,age:30};
// console.log(`hello word`);
// console.log(person);

// function inTen(name){
//     return `Hello, `+name+` !`;
// }
// console.log(inTen(`duyngu`));


// const inTen=function(name){
//     return `Hello, `+name+` !`;
// }
// console.log(inTen(`duyngu`));

// function sayHello(){
//     console.log(`Hello world`);
// }
// sayHello();

// function add(a,b){
//     return a+b;
// }
//     console.log(add(5,9));

// const inTen1=(name)=>{
//     return `Hello, `+name+` !`;
// }
// console.log(inTen1(`duyngu`));
// const inTen=(name)=>`Hello, ${name}!`;
// console.log(inTen(`duyngu`));

// const add = (a,b) => a+b;
// console.log(add(20,-10));

// const nhan = (a,b) => a*b;
// console.log(nhan(20,-10));

// function Timer(){
//     this.seconds=0;
//     setInterval(()=>{
//         this.seconds++;
//         console.log(this.seconds);
//     },1000);
// }
// const timer = new Timer();

// const person = { name: "Duyngu", age: 30}; 
// const { name, age} = person; 
// console.log(name); 
// console.log(age); 

// const numbers = [1, 2, 3];
// const [first, second] = numbers; 
// console.log(first); 
// console.log(second); 

const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5];
console.log(arr2);

const obj1 = { name: "duyngu", age: 17 };
const obj2 = { ...obj1, location: "VN" };
console.log(obj2);

function sum(...numbers) {
  return numbers.reduce((a, b) => a + b, 0);
}
console.log(sum(1, 2, 3, 4));
