//Task 4
interface Props{
    name:string;
    price:number;
}
const Products :Props[]=[{
    name:"Computer",
    price:2220
},
{
    name: "A14 Pro Max",
      price: 158.99,
},
{name: "Samsung Galaxy S24 Ultra Cell",
price: 1049.99,},
{
    name: "Samsung Galaxy A15",

      price: 147.99,
},
{
    name: "Blod K50",

      price: 199.99,
},
{name: "I24 Ultra 5G",

    price: 189.99,
},
{
    name: "SAMSUNG Galaxy Tab A9+ Tablet",
      price: 219,
}
]
function GetTotalPrice ({products}:{products:Props[]}){
    const totalPrice = 
    products.reduce(
        (accumulator:number,current:Props)=>
            accumulator+current.price,0)
        return totalPrice;
}
console.log('The result of Task 4 ');
console.log(GetTotalPrice({products:Products}));

//Task 5
function EmailChecker(text:string) {
const regExp = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
return regExp.test(text);
}
const testEmails = ['rana@gmail.com',
    '1111@fg.com',
    '@rana.com','1223'];
    console.log('The result of Task 5 ');
testEmails.forEach((email)=>{
    console.log(`${email} is a ${EmailChecker(email)?'valid email':'invalid email'}`);
});

// run Instructions 
// convert ts to js run this command in bash (tsc product.ts)
// if you get an error in terminal run the commands in bash 
// then run this command (node product.js)
