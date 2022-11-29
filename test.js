var input = require("readline-sync");
console.log("Program mengkonversi jam dan menit ke detik");
console.log('----------------------------------------------')
var jam = input.question("Masukan jam = ");
var menit = input.question("Masukan menit = ");
if(isNaN(jam) || isNaN(menit)){
    console.log("yang anda masukan bukan angka")
}
else {
var jamd = (jam * 3600);
console.log(jamd + " detik")
var menitd = (menit * 60)
console.log(menitd + " detik")
console.log('------------------------------------------------')

hasil = jamd + menitd
console.log(hasil + " detik")
}