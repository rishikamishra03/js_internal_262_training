//1
let marks = [80, 90, 70, 85, 95];
let avg = marks.reduce((acc, val) => acc + val, 0) / marks.length;
console.log("Average Marks:", avg);

//2
let numbers = [1,2,3,4,5,6,7,8,9];
let evens = numbers.filter(num => num % 2 === 0);
console.log(evens);

//3
let cart = {
    item: "Laptop",
    price: 45000,
    quantity: 2
};
let total = cart.price * cart.quantity;
console.log("Total Bill:", total);

//4
let movies = ["KGF", "RRR", "Avengers"];
movies.push("Pushpa");
movies.pop();
for(let m of movies){
    console.log(m);
}

//5
let user = {
     name: "Aman",
     age: 21,
     course: "JS"};
let jsonData = JSON.stringify(user);
let objData = JSON.parse(jsonData);
console.log(jsonData);
console.log(objData);

//6
let arr = [10, 40, 25, 80, 15];
let max = arr[0];
for(let i = 1; i < arr.length; i++){
    if(arr[i] > max){
        max = arr[i];
    }
}
console.log("Max Number:", max);

//7
let names = ["ram", "shyam", "mohan"];
let upperNames = names.map(n => n.toUpperCase());
console.log(upperNames);
