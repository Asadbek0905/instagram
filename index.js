// let Ism = "Asadbek"
// let yosh = "16"
// console.log("Salom mening ismim " + Ism + "yoshim " , yosh , "da");



// let son1 = "20"
// let son2 = "30"

// console.log(son1 * son2);
// console.log(son1 / son2);
// console.log(son1 - son2);
// console.log(+son1 + +son2);


// let a = +prompt("Birinchi raqamni kiriting")
// let b = +prompt("ikkinchi raqamni kiriting")

// console.log(a + b);

// const a = "as"
// const b = "asd"
// console.log(a + b);
















// --------------------------------------------------------------1_dars  BMI----------------------------------------------------------

// BMI = body mass index
// BMI = weight / (height * height)
// BMI = < 14.99 underweight; < bmi > 24.99 normal; 25 < 29 bmi overweight


// let asadWaight = 65,
//     asadHeight = 1.85,
//     asadBmi = asadWaight / (asadHeight * asadHeight);

//     console.log(asadBmi);

// -------------------------------------------------------------------2_dars IF ELSE-----------------------------------------------------------


// let asad = 14,
//     asd = 18;



// if ( asad >= asd ){
//     console.log("Siz ro'yxatdan o'tdingiz");
// } else {
//     console.log("Sizni yoshingiz to'g'ri kelmadi");
// }

// -----------------------------------------------------------------3_dars------ IF ELSE 2-------------------------------------------------------------



// let asad = 70;

//     if ( asad >= 90) {
//         console.log("You got A");
//     }
//     else if ( asad < 90 && asad >= 80 ) {
//         console.log("You got B");
//     }
//     else if ( asad < 80 && asad >= 70 ) {
//         console.log("You got C");
//     }
//     else if ( asad < 70 && asad >= 60 ) {
//         console.log("You got D");
//     }
//     else {
//         console.log("You got F, loser");
//     }


// ------------------------------------------------------------BMI IF ELSE-------------------------------------


// if (asadBmi < 15 ){
//     console.log("You are underweight");
// }
// else if ( asadBmi >= 15 && asadBmi < 24){
//     console.log("You are normal");
// }
// else{
//     console.log("You are overweight brooo");
// }




// --------------------------------------------------------------4_dars------------------------------






// function calculateBmi() {
//     const name = document.getElementById("name")
//     const weightval = document.getElementById("weight")
//     const heightval = document.getElementById("height")
//     const result = document.getElementById("#result")


//     const weight = parseFloat(weightval.value)
//     const height = parseFloat(heightval.value)

//     let bmi = (weight / (height * height)).toFixed(2);

//     result.textContent = ` ${name.value}'s BMI is ${bmi}.  `

// }















// let a = +prompt("Birinchi sonni kiriting")
// let b = +prompt("Ikkinchi sonni kiriting")
// let amal = (a + b)



// const aa = alert(amal)






// const asad = +prompt("Yoshingizni kiriting"),
//     asd = 18;

// if ( asad >= asd ){
//     console.log("Siz armiyaga borishingiz kerak ");
// } else {
//     console.log("Sizni yoshingiz to'g'ri kelmadi");
// }








// ---------------------------toq juft son aniqlash---------------------------------------------
// for(let i = 0; i <= as; i++){
//     if(i%2 ==0){
//         console.log("toq");
//     }
//     else{
//         console.log("juft");
//     }
// }

//--------------------------------------------------------------------------------------------





// -------------------------------------------yil oy hafta aniqlash---------------------------------------
// let a = +prompt(`Kuni kiriting`)
// let a1 = (a / 365).toFixed(0)
// let a2 = (a / 31).toFixed(0)
// let a3 = (a / 7).toFixed(0)

// alert(`${ a } bu sonda ${ a1 }-yil ${ a2 }-oy ${ a3 }-hafta bor`)

//--------------------------------------------------------------------------------------------------------
















// let as = prompt(`Sonni kiriting`)
// function asad() {
//         for(let i = 0; i <= as; i++){
//                 console.log(i);
//         }
// }
// asad(as)








// function MyFunc(a,b) {
// if() console.log();else if() console.log();else console.log();
// }

// console.log(MyFunc(100,100));






// function Myfunc(a,b) {
//     return Math.floor(b/a)
// }


// console.log(Myfunc(3,14));

















//----------------------------------------------(Nechi honali son ekanligini aniqlash)-----------------

// function num(a) {
//     if (a == 0) {
//         return a
//     } else {
//         return a.length
//     }
// }
// console.log(num("100"));

//---------------------------------------------------------------------------------------------------------------











// ---------------------------------------------------------------(ternary)---------------------------


// 2 == 2 || 1 === "1" ? console.log(true) : console.log(false); // true
// 2 == 2 && 1 === "1" ? console.log(true) : console.log(false); // false


// ---------------------------------------------------------------------------------------------------


















//----------------------------------------------------(DataType)-----------------------------------------

// D a t a   T y p e s

// 1.String
// 2.Number
// 3.BooLean
// 4.undeFined
// 5.nuLL
// 6.Symbol
// 7.Object
// 8.BigInt

//---------------------------------------------------------------------------------------------------------------





















// let a = +prompt(`1-Son kiriting`)
// let b = +prompt(`2-Sonni kiriting`)


// let obj = {
//     javob: a+b
// }

// console.log(obj);








// const myFunc = (a) =>{
//     let obj = {
//         javob : `Mening ismim ${a}`
//     }
//     console.log(obj);
// }

// myFunc("Asad")




// const myFunc = (a,b) =>{
//     if(a == 10 || b == 10){
//         return true
//     }else{
//         return false
//     }
// }

// console.log(myFunc(1,1));


// function myFunck(a) {
//     for (let i = 0; i < a.length; i--) {
//         const a = i;

//     }
//     console.log(i);
// }

// myFunck(`Salom`)










// const myFunc = (a) =>{
//     if(a<=1000){
//         let as = a/100*15
//         return a - as
//     }else if(a<=5000){
//         let asd = a/100*30
//         return a - asd
//     }else{
//         let asdf = a/100*50
//         return a - asdf
//     }
// }

// console.log(myFunc(6000));













// let obj = {
//     func(a,b){
//         return `Mening ismim ${a} yoshim ${b}`
//     }
// }

// console.log(obj.func(`Asad`,`16`));















// function myAlgo(a,b) {
//     let obj ={
//         num1: a,
//         num2: b,
//         func(){
//             let javob = this.num1 + this.num2
//             return javob % 2 == 0 ? true : false
//         }
//     }
//     return obj.func()
// }

// console.log(myAlgo(1,4));





// const myFunc = (n) =>{
//     return Math.ceil((n - 3) / 2 + 1)
// }

// console.log(myFunc(3));

// function qwe(a, b) {
//     return a.raduce((a, b, g) => (a * b * g)) + b.raduce((a, b, g) => (a * b * g))
// }

// console.log(qwe([2,3,4],[5,3,7]));








// let as = [1,2,3,4,5,6,7,8,9,10]

// for(let i = 0; i <= as.length; i++){
//     if(i%2 ==0){
//         console.log(i + "toq");
//     }
//     else{
//         console.log(i + "juft");
//     }
// }

// let as = prompt(`msg`)




// -------------------------------------------------(hafta kuni juft toqligi)-------------




// if((as==`dushanba`||as==`seshanba`||as==`chorshanba`||as==`payshanba`||as==`juma`||as==`shanba`||as==`yakshanba`)){
//     console.log(`juft`);
// }else{
//     console.log(`toq`);
// }

// for(let i = 0; i <= as.length; i++){
//     if(i%2 ==0){
//         console.log( "toq");
//     }
//     else{
//         console.log("juft");
//     }
// }

//-------------------------------------------------------------------------------------------------
















//------------------------func(constructor)-----------------------------------------------------


// function About(name,age,height,maxSpeed,) {
//     this.name = name;
//     this.age = age;
//     this.height = height;
//     this.maxSpeed = maxSpeed
// }

// let I = new About(`Asad`,16,1.83,100)

// console.log(I);

//------------------------------------------------------------------------------------------------------
















// function About(name,age,country,year) {
//     this.name = name;
//     this.age = age;
//     this.country = country;
//     this.year =  year
//     this.armiya = function(){
//         if ( age < year ){
//             console.log("Siz armiyaga borishingiz kerak ");
//         } else {
//             console.log("Sizni yoshingiz to'g'ri kelmadi" + asad + " bor hali armiyaga borishingizga");
//         }
//     }

//     let a = prompt(`yoshingizni kiriting`)

// }
// let i = new About(`Asad`,16,`Olmaliq`)

// console.log(i);




















// -----------------------------------------------(massiv oxiridagi son chiqarish 0905)-----------------

// let myfunc = (a) => {
//     return a.at(-1)
// }
// console.log(myfunc([1,2,3,4,5,6]));

//----------------------------------------------------------------------------------------------------------------























// ------------------------------------------------(a songacha bolgan toq sonlarni nechtaligini chiqarish)----------------




// function myfu(a) {
//     return Math.ceil((a - 1) / 2)
// }

// console.log(myfu(12));

//---------------------------------------------------------------------------------------------------------------------























// function myfun(arr) {
//     return `${arr[0]} ${arr[arr.length-1]}`
// }
// console.log(myfun([234,3]));









//----------------------------------(for in)-------------------------------


//---------------------(1)----------
// let a = {
//     name: `Asad`,
//     age: 16,
//     height: 1.84
// }
// for(let asd in a){
//     console.log(a[asd]);
// }


//----------(2)--------------
// a.forEach(element => {
//     console.log(element);
// });



//---------------(3)-----------
// let lue = {
//     name : "Salom"
// }
// for(let key of lue){
//     console.log(lue[key]);
// }

//------------------------------------------------------------------------------














//-----------------------------------(callback func)-------------------------

// arr.map((parametr) => {

// })

//------------------------------------------------------------------------

















// function num(a, ...b) {
//     for (let i = 0; i < b.length; i++) {
//         console.log(`Salom ${i}`);
//     }
// }


// num(`Salom`, `num`, `lorem`, `baxa`, `lola`)













// class BMW{
//     constructor(Model, width, height,maxSpeed,minSpeed,year,color,person,owner,country){
//         this.Model = Model;
//         this.width = width;
//         this.height = height;
//         this.maxSpeed = maxSpeed;
//         this.minSpeed = minSpeed;
//         this.year = year;
//         this.color = color;
//         this.person = person;
//         this.owner = owner;
//         this.country = country;
//     }
//     Color(){
//         if(this.color == `Black` || this.color == `Red` || this.color == `blue` || this.color == "yellow" || this.color == `green`){
//             return true
//         }else{
//             return false
//         }
//     }
// }

// let a = new BMW(`BMW M4`,4794,1393,330,100,2014,`red`,4,)








// let dd = +prompt(`Yoshingizni kiriting`)

// const b = () => {
//     return new Promise((s, d) => {
//         if (dd >= 18) {
//             s()
//         } else {
//             d()
//         }
//     })
// }
// b().then(() => {
//     alert(`Armiyga borsangiz boladi`);
// }).catch(() => {
//     alert(`Siz armiyaga bora olmaysiz`);
// })













// ----------------------------------------- (Promise)------------------------

// let a = true

// let b = () => {
//     return new Promise((resolve,reject) => {
//         a ? resolve() : reject()
//     })
// }

// b().then(() => {
//     console.log(`true`);
// }).catch(() => {
//     console.log(`false`);
// })

//-----------------------------------------------------------------------------



















// //                                    1

// <a href="https://edabit.com/challenge/ZngT4zDckDugt2JGY">Классы для получения информации о спортивном игроке0</a>

// class Player {
// 	constructor(name, age, height, weight) {
//      this.name = name,
//      this.age = age,
//      this.height = height,
//      this.weight = weight
//    }
//    getAge() {
//      return `${this.name} is age ${this.age}`
//    }
//    getHeight() {
//      return `${this.name} is ${this.height}cm`
//    }
//    getWeight() {
//      return `${this.name} weighs ${this.weight}kg`
//    }
// }






// //                                      4

// <a href="https://edabit.com/challenge/kGLhgwGaLJsCMS7wS">Полное имя и адрес электронной почты</a>

// class Employee {
// 	constructor (firstname, lastname) {
// 	this.firstname = firstname
// 	this.lastname = lastname
// 	this.fullname = `${this.firstname} ${this.lastname}`
// 	this.email = `${this.firstname}.${this.lastname}@company.com`.toLowerCase()
// 	}
// }












//--------------------------------------(backend ulash) ------------------------------

// fetch("https://jsonplaceholder.typicode.com/users")
// .then((res) => res.json())                          ----------------------------jsonga o'girib beradi
// .then((data => {                                  ---------------------------jsondan obрjectga o'girib beradi
//   data.forEach(e => {                ----------------------------object ichidan yurib chiqadi
//     document.write(`<br> ${e.name} <br>`)
//     document.write(`<br> ${e.phone} <br>`)
//     document.write(`<br> ${e.address.street} </br>`)
//     document.write(`<br> ${e.email} </br>`)
//   });
// }))

//-----------------------------------------------------------------------------------------









// ----------------------------------------(backenddan img chaqirish)---------------

// fetch("https://jsonplaceholder.typicode.com/photos")
// .then((res) =>res.json())
// .then((data) => {
//   data.forEach(elem => {
//     document.write("<img src=" + elem.url + ">" )
//   });
// })

//--------------------------------------------------------------------------------------















// let img = document.getElementById("sa")
// let username = document.getElementById("username")
//   console.log(sa);
//   console.log(username);


// fetch("https://jsonplaceholder.typicode.com/users")
// .then((res) => res.json())
// .then((data => {
//   data.forEach(elem => {
//     sa = "<img src=" + elem.url + ">"
//   });
// }))



























// let body = document.querySelector("body")
// let flex = document.createElement("div")
// flex.classList.add("flex")
// body.append(flex)
// let arr = ["box","box","box","box"]
// arr.forEach((res) => {
//     let box = document.createElement(res)
//     box.classList.add("box")
//     flex.appendChild(box)
// })
// let box = document.createElement("box")
// box.classList.add("box")
// let img = document.createElement("img")
// img.classList.add("img")

















// let inp = document.querySelector("input")
// let btn = document.querySelector("button")

// btn.onclick = () => {
//     if(inp.value == "Asadbek"){
//         document.write(`To'gri ism topdingiz : ${inp.value}`)
//     }else{
//         document.write(`Natog'ri ism topdingiz : ${inp.value}`)
//     }
// }







// let a = +prompt("Raqam kiriting")

// for (let i = 0; i <= a; i++) {
//     i % 2 == 0 ? console.log("juft " + i) : console.log("toq  " + i);
// }










// let a = +prompt("raqam kiriting")


// function name(a) {
//     for (let i = 0; i <= a; i++) {
//         i % 2 == 0 ? console.log(i,"juft") : console.log(i,"toq");
//     }
// }

// console.log(name(a));














// let arr = ["Asadbek","Sarvar","Asad","Asadbek","Sarvar","Asad","Asadbek","Sarvar","Asad","Asadbek","Sarvar","Asad","Asadbek","Sarvar","Asad","Asadbek","Sarvar","Asad","Asadbek","Sarvar","Asad","Asadbek","Sarvar","Asad","Asadbek","Sarvar","Asad","Asadbek","Sarvar","Asadbek"]





// console.log(arr.at(-1));















// function Myfunc(a,b) {
//     return Math.floor(b/a)
// }
// console.log(Myfunc(5,15));













//------------------------------------------------------------------funtions-------------


//-----------Function expressions
// function name(params) {

// }


//---------Decloration function
// let a = function name(params) {

// }



//--------------Arrow function
// let a = () => {

// }


//----------------------------------------------------------------------

















// let asd = (a) =>{
//     return "Bu" + "r".repeat(a) + "p"
// }

// console.log(asd(10));














































// console.log((10 / 4) % 1 == 0);












// let a = "Asadbek"


// for (let i = 0; i < a.length; i++) {
//     a.length % 2 == 0 ? console.log(true) : console.log(false);
// }






// let a = +prompt("Hafta kunini kiriting")


// switch (a) {
//     case 1:
//         console.log("Dushanba");
//         break;
//     case 2:
//         console.log("Seshanba");
//         break;
//     case 3:
//         console.log("Chorshanba");
//         break;

//     case 4:
//         console.log("Payshanba");
//         break;

//     case 5:
//         console.log("Juma");
//         break;

//     case 6:
//         console.log("Shanba");
//         break;
//     case 7:
//         console.log("Yakshanba");
//         break;

//     default:
//         console.log("Bunday kun yoq");
//         break;
// }





//--------------------------------------------------toq son chiqarish
// let i = +prompt("Son kiriting")
// let a = 30

// while (i < a) {
//     console.log(i);
//     i+=2
// }

//-------------------------------------------------------------------------------------









//--------------------------------------------------------------------so'zda nechta unli harf borligini aniqlash

// let asd = prompt("Ism yozing").toLowerCase()
// for (let i = 0; i < asd.length; i++) {
//     let sum = ""
//     if(asd[i] == "a" || asd[i] == "e" || asd[i] == "h" || asd[i] == "o" || asd[i] == "i" || asd[i] == "u"){
//         sum += asd[i]
//         console.log(sum.length);
//     }else{
//         console.log();
//     }
// }

//----------------------------------------------------------------------------------------------------------------























// function myfu(a) {
//     return Math.ceil((a - 1) / 2)
// }

// console.log(myfu(10));




// let a = {
//     name: `Asad`,
//     age: 16,
//     height: 1.84
// }
// for(let asd in a){
//     console.log(asd);
// }




// const asad = +prompt("Yoshingizni kiriting"),
//     asd = 18;

// if ( asad >= asd ){
//     console.log("Siz armiyaga borishingiz kerak ");
// } else {
//     console.log("Sizni yoshingiz to'g'ri kelmadi");
// }





// switch (18) {
//     case 18:
//         console.log("Siz armiyaga borishingiz kerak");
//         break;

//     default:
//         console.log("Sizning yoshingiz to'gri kelmadi");
//         break;
// }



// switch (1) {
//     case 1:
//         for (let i = 1; i <= 10; i++) {
//             console.log(i);
//         }
//         break;
//     case 2:
//         for (let i = 1; i <= 20; i++) {
//             console.log(i);
//         }
//         break;
//     case 3:
//         for (let i = 1; i <= 30; i++) {
//             console.log(i);
//         }
//         break;
//     case 4:
//         for (let i = 1; i <= 40; i++) {
//             console.log(i);
//         }
//         break;
//     case 5:
//         for (let i = 1; i <= 50; i++) {
//             console.log(i);
//         }
//         break;
//     case 6:
//         for (let i = 1; i <= 60; i++) {
//             console.log(i);
//         }
//         break;
//     case 7:
//         for (let i = 1; i <= 70; i++) {
//             console.log(i);
//         }
//         break;
//     case 8:
//         for (let i = 1; i <= 80; i++) {
//             console.log(i);
//         }
//         break;
//     case 9:
//         for (let i = 1; i <= 90; i++) {
//             console.log(i);
//         }
//         break;
//     case 10:
//         for (let i = 1; i <= 100; i++) {
//             console.log(i);
//         }
//         break;

//     default:
//         break;
// }







// let a = prompt("Sizning yoshingiz 18dami")

// switch (a) {
//     case "Asadbek":
//         console.log("Salom " + a);
//         break;

//     default:
//         console.log(false);
//         break;
// }





// disabled={count === 0}
























// let obj = {
//     a: 12,
//     b: 23,
//     c: 6,
//     d: -18,
// }




//-----------------------------------------------------------------max-min-------------------------------


// function name() {
//     if(obj.a > obj.b && obj.a > obj.c && obj.a > obj.d){
//         console.log(`Max: ${obj.a}`);
//     }else if(obj.b > obj.a && obj.b > obj.d && obj.b > obj.c){
//         console.log(`Max: ${obj.b}`);
//     }else if(obj.c > obj.a && obj.c > obj.b && obj.c > obj.d){
//         console.log(`Max: ${obj.c}`);
//     }else if(obj.d < obj.a && obj.d < obj.b && obj.d < obj.c){
//         console.log(`Max: ${obj.d}`);
//     }

//     if(obj.a < obj.b && obj.a < obj.c && obj.a < obj.d){
//         console.log(`Min:${obj.a}`);
//     }else if(obj.b < obj.a && obj.b < obj.d && obj.b < obj.c){
//         console.log(`Min: ${obj.b}`);
//     }else if(obj.c < obj.a && obj.c < obj.b && obj.c < obj.d){
//         console.log(`Min: ${obj.c}`);
//     }else if(obj.d < obj.a && obj.d < obj.b && obj.d < obj.c){
//         console.log(`Min: ${obj.d}`);
//     }
// }

// console.log(name());

//-----------------------------------------------------------------------------------------------------------

















//                                                 Methods

//----------------------------------------------------------------------------------------------------
// charAt()
// let text = "Hello World"
// console.log(text.charAt(0)); //  H
//----------------------------------------------------------------------------------------------------




//----------------------------------------------------------------------------------------------------
// let text = "Hello"
// let text2 = "World"
// console.log(text.concat(text2)); // HelloWorld
//----------------------------------------------------------------------------------------------------





//----------------------------------------------------------------------------------------------------
// let txt = "Hello Dev"
// console.log(txt.replace("Dev", "World")); // Hello World
//----------------------------------------------------------------------------------------------------



























//                                        max-min        
// let arr = [1, 2, 3, 4, 5, 6]

// console.log(Math.max(...arr));
//-----------------------------------------------------------------------------------------------









// let arr = [5, 15, 45];

// let a = 0

// for (let i = 0; i < arr.length; i++) {
//     console.log(a += arr[i]);
// }















// let arr = ["hello", "WORLD", "tashKent"]

// for (let i = 0; i < arr.length; i++) {
//     if(arr[i] == arr[i].toUpperCase()){
//         console.log(arr[i].toUpperCase());
//     }
// }







// let arr = [2, 3, 4, 6, 8]
// let a = 0


// for (let i = 0; i < arr.length; i = i + 2) {
//     console.log(a += arr[i]);
// }











//                                                  1ta gapda nechta d harfini aniqlash
// let a = "Helo world asdasdregerDDD"
// let all = ""

// for (let i = 0; i < a.length; i++) {
//     if(a[i] == "D" || a[i] == "d"){
//         console.log((all += a[i]).length);
//     }
// }
//----------------------------------------------------------------------------------------------------------------








//                                                  1ta gapda nechta soz borligni aniqlash

// let a = "My name is Erlan"

// console.log(a.split(" ").length);
//--------------------------------------------------------------------------------------------------------------------
















//                                                    foreach 3 xil element oladi         

// fetch("https://jsonplaceholder.typicode.com/photos")
// .then(res => res.json())
// .then(data => {
//     data.forEach((elem,index,arr) => {
//         console.log(elem);
//         console.log(index);
//         console.log(arr);
//     });
// })


//----------------------------------------------------------------------------------------------------------

































