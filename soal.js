
// ---------------------------------------
console.log(' ')
// ---------------------------------------

//1. Let's Form a Sentence

// Problem
// Pada tugas ini kamu diminta untuk melakukan penambahan string menggunakan simbol +.
//  Disediakan variable word. Tambahkan nilai word satu per satu dengan nilai variable lain
//  untuk membentuk sebuah kalimat. Jangan lupa menambahkan spasi di setiap kata, dan
//   tampilkan di console hasil penggabungannya! Kamu tidak perlu membuat variable baru!

console.log('SOAL 1')
let first1 = 'JavaScript';
let second1 = 'is';
let third1 = 'awesome';
let fourth1 = 'and';
let fifth1 = 'I';
let sixth1 = 'love';
let seventh1 = 'it!';

//code here
console.log(first1 + ' ' + second1 + ' ' + third1 + ' ' + fourth1 + ' ' + fifth1 + ' ' + sixth1 + ' ' + seventh1);

// ---------------------------------------
console.log(' ')
// ---------------------------------------


// 2. Index Accessing - 1 by 1
// Problem
// Pada tugas ini kamu diminta untuk "memecah" sebuah kalimat dan menampilkan setiap kata didalamnya.
// Untuk soal nomor ini, gunakan akses satu per satu karakter dari string untuk mengambil setiap huruf dalam kata.
// Terasa manual? Tidak apa-apa, kita coba ini dulu untuk saat ini.
// Hints
// Saat kamu mendapatkan tiap huruf, untuk membentuk setiap kata kamu tinggal menggunakan simbol + untuk membentuk kata
//  tersebut!

console.log('SOAL 2')
let word2 = 'wow JavaScript is so cool';
let FirstWord2 = word2[0] + word2[1] + word2[2];
let SecondWord2 = word2[4] + word2[5] + word2[6] + word2[7] + word2[8] + word2[9] + word2[10] + word2[11] + word2[12] + word2[13];
let ThirdWord2 = word2[15] + word2[16];
let FourthWord2 = word2[18] + word2[19];
let FifthWord2 = word2[21] + word2[22] + word2[23] + word2[24]; 

console.log('kata pertama: ' + FirstWord2);
console.log('kata kedua: ' + SecondWord2);
console.log('kata ketiga: ' + ThirdWord2);
console.log('kata keempat: ' + FourthWord2);
console.log('kata kelima: ' + FifthWord2);

// ---------------------------------------
console.log(' ')
// ---------------------------------------

// 3. Breaking Sentence (Again) using Substring
// Problem
// Mirip seperti soal nomor 2, namun kali ini gunakan substring untuk mengambil potongan dari tiap kata!
console.log('SOAL 3')
let word3 = 'wow JavaScript is so cool';
let exampleFirstWord3 = word3.substring(0, 3);
let exampleSecondWord3 = word3.substring(4, 14);
let exampleThirdWord3 = word3.substring(15, 17);
let exampleFourthWord3 = word3.substring(18, 20);
let exampleFifthWord3 = word3.substring(21, 25)

console.log('Kata Pertama: ' + exampleFirstWord3);
console.log('Kata kedua: ' + exampleSecondWord3);
console.log('Kata Ketiga: ' + exampleThirdWord3);
console.log('Kata Keempat: ' + exampleFourthWord3);
console.log('Kata Kelima: ' + exampleFifthWord3);

// ---------------------------------------
console.log(' ')
// ---------------------------------------

// 4. Breaking Sentence (yet Again) and Count Each Length
// Problem
// Mirip seperti soal nomor 3, tapi tampilkan juga panjang kata masing-masingnya!

console.log('SOAL 4')
let word4 = 'wow JavaScript is so cool';
let exampleFirstWord4 = word4.substring(0, 3);
let exampleSecondWord4 = word4.substring(4, 14);
let exampleThirdWord4 = word4.substring(15, 17);
let exampleFourthWord4 = word4.substring(18, 20);
let exampleFifthWord4 = word4.substring(21, 25);

let firstWordLength = exampleFirstWord4.length;
let secondWordLength = exampleSecondWord4.length;
let thirdWordLength = exampleThirdWord4.length;
let fourthWordLength = exampleFourthWord4.length;
let fifthWordLength = exampleFifthWord4.length;


console.log('Kata Pertama: ' + exampleFirstWord4 + ', with length: ' + firstWordLength);
console.log('Kata Kedua: ' + exampleSecondWord4 + ', with length: ' + secondWordLength);
console.log('Kata Ketiga: ' + exampleThirdWord4 + ', with length: ' + thirdWordLength);
console.log('Kata keempat: ' + exampleFourthWord4 + ', with length: ' + fourthWordLength);
console.log('Kata Kelima: ' + exampleFifthWord4 + ', with length: ' + fifthWordLength);
