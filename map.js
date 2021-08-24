const names=['shofol','shanto','akash','sohan'];
const numbers=[1,4,10,28];
const doubleIt=num=>num*2;
// const output=[];
// for(const number of numbers){
//     const result=doubleIt(number);
//     output.push(result);

// }
// output=numbers.map(doubleIt)
// console.log(output);
// const friendlen=names.map(n=>n.length);

const friends=names.forEach((n,i)=>console.log(`friend ${i}: name : ${n}`));