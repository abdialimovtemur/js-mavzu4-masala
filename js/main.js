
// 1. sodda kalkulyator yarating prompt dan foydalaning




// let num1 = parseFloat(prompt("birinchi sonni kiriting"));
// let sym = prompt("belgini kiriting");
// let num2 = parseFloat(prompt("ikkinchi sonni kiriting"));

// const kalkulyator = function(a, b, c){
//     let result;
//        if (b === "+") {
//             result = a + c;
//         }else if (b === "-") {
//             result = a - c;
//         }else if (b === "*") {
//             result = a * c;
//         }else if (b === "/") {
//             result = a / c;
//         }
        
//         return result;
// }

// alert(kalkulyator(num1, sym, num2))





// 2. prompt da kiritilgan son musbat bo’lsa unga qiymatini 1ga kamaytirsin manfiy bo’lsa 1 ga oshirsin





// let count = parseFloat(prompt("sonni kiriting"));

// const positiveOrMinus = function(a){
//     if (a < 0){
//         alert(a + 1);
//     }else if (a > 0){
//         alert (a - 1);
//     }else{
//         alert("0 musbat son ham manfiy son ham emas, boshqa son kiriting oka")
//     }
// };

// positiveOrMinus(count);





// 3. argument sifatida qabul qilgan sonni teskari qiluvchi arrow function yarating kiritilgan sonni 2 xonaligini tekshiring va bu function faqat 2 xonali son uchun ishlasin





// const reverseNumber = (num) => {
//     if (num >= 10 && num < 100) {
   
//         let tens = Math.floor(num / 10); 
//         let ones = num % 10; 
//         return ones * 10 + tens;
//     } else if (num <= -10 && num > -100) {

//         let absNum = Math.abs(num);
//         let tens = Math.floor(absNum / 10);
//         let ones = absNum % 10;
//         return -(ones * 10 + tens);
//     } else {
//         return "faqat ikki xonali sonni qabul qilamiz oka😊";
//     }
// };


// const number = parseInt(prompt("2 xonali sonni kiriting bro🫡:"));
// const result = reverseNumber(number);
// alert(result);




// 4. 3-savolni 3 xonali son uchun ham bajaring



// const reverseThreeNumber = (num) => {
//     if (num >= 100 && num < 1000) {
//         let hundreds = Math.floor(num / 100);
//         let tens = Math.floor((num % 100) / 10);
//         let ones = num % 10; 
//         return ones * 100 + tens * 10 + hundreds;
//     } else if (num <= -100 && num > -1000) {
    
//         let absNum = Math.abs(num);
//         let hundreds = Math.floor(absNum / 100);
//         let tens = Math.floor((absNum % 100) / 10); 
//         let ones = absNum % 10; 
//         return -(ones * 100 + tens * 10 + hundreds);
//     } else {
//         return "faqat uch xonali sonni qabul qilamiz oka😊";
//     }
// };


// const number = parseInt(prompt("3 xonali sonni kiriting bro🫡"));
// const result = reverseThreeNumber(number);
// alert(result);





// 5. student baliga qarab o’qishga kirgan mavqeini aniqlang 100% - 70% bo’lsa budjet 70% - 50% contract 50% dan past bo’lsa yiqildi bu savolni function decloration dan foydalanib bajaring student balini function ga argument sifatida kiritilsin




// function StudentBalls(score) {
//     if (score >= 70 && score <= 100) {
//         return "Budjet";
//     } else if (score >= 50 && score < 70) {
//         return "Kontrakt";
//     } else if (score < 50 && score >= 0) {
//         return "Yiqildi";
//     } else {
//         return "Bunday ball yo'q bro ";
//     }
// }

// const studentball = parseFloat(prompt("Bahoni kiriting bro"));
// const result = StudentBalls(studentball);
// alert(result);
