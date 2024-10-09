
//percabangan

function menghitungTotalKalori(menitLari=0, menitPushup=0, menitPlank=0){
    let totalkalori = 0;
    if (menitLari > 0){
        const kaloriLariper5menit = 60;
        totalkalori += (menitLari / 5) * kaloriLariper5menit;
    }

    if(menitPushup > 0){
        totalkalori +=(menitPushup / 30) * 200;
    }

    if(menitPlank >0){
        const kaloriper1menit = 5;
        totalkalori += menitPlank*kaloriper1menit
    }

    return totalkalori;
}

console.log(`Total kalori adalah : ${menghitungTotalKalori(menitLari= 5, menitPushup=200, menitPlank=1)}`)

//perulangan

let kalimat = "Dasep Rizalalludin"
let dibalik = ''
for (let i = kalimat.length-1; i >= 0; i--) {
    dibalik += `${kalimat [i]}`
}
console.log("Kalimat Semula: " + kalimat)
console.log("Kalimat setelah dibalik: " + dibalik)
console.log(' ')

// menghitung pangkat

let angka = 3
let Pangkat = angka
for (let i = 1; i < angka; i++){
    Pangkat += angka
    
}
console.log("Angka: " + angka)
console.log("Setelah dipangkat: "+Pangkat)
console.log(' ')

// menghitung faktorial
angka = 8
let Faktorial = 1;
for (let i = 1; i <= angka; i++) {
     Faktorial *= i
}
console.log("Angka: " + angka)
console.log("Faktorialnya adalah: " + Faktorial)
console.log(' ')

// menghapus spasi dari kalimat
kalimat = "Nusa Putra University"
let kalimattanpaspasi = ''
for (let i = 0; i < kalimat.length; i++) {
    if(kalimat[i] !== " "){
        kalimattanpaspasi += kalimat[i]
    }
    
}
console.log("Kalimat awal: " + kalimat)
console.log("Kalimat tanpa spasi: " + kalimattanpaspasi)
console.log(' ')

// mengecek email apakah valid atau tidak 
let email = "daseprizalreal@gmail.com"
let valid = false;
let addSymbol = false;
let titik = false
for (let i = 0; i < email.length; i++) {
    let karakter = email[i]
    
    if(karakter === ' '){
        valid = false
        break;
    }
    if (karakter === '@'){
        addSymbol = true
    }
    if(addSymbol && karakter === '.'){
        titik = true
    }
    valid = addSymbol && titik
    
}
console.log("Email: " + email)
console.log("Valid: " + valid)
console.log(' ')

// palindrome
const kata = "1001"
let isPalindrome = false;
let kataDibalik = '';
for (let i = kata.length-1; i >= 0; i--) {
  kataDibalik += `${kata[i]}`
}
if (kata.toLowerCase() === kataDibalik.toLowerCase()) {
  isPalindrome = true
}
console.log(`Angka '${kata}' merupakan palindrome: ${isPalindrome} `)
console.log(' ')




function apakahPalindrome(num) {
  const str = num.toString()  
  return str === str.split('').reverse().join('')
} 

function mencariNextPalindrome(num) {
  num++;
  while(!apakahPalindrome(num)){
    num++
  }
  return num
}
num = 100
console.log(`Angka terdekat dari ${num} adalah ${mencariNextPalindrome(num)}`)
console.log(' ')

// Buatlah array yang digunakan untuk menyimpan nama mahasiswa
let namaMahasiswa = ["Johan", "Dasep", "Parid", "Ababil", "Rizal", "Aldi", "Alif", "Ilham"]
let namaAwalHurufA = ''
let namaTerpanjang = namaMahasiswa[0]
let namaTerpendek = namaMahasiswa[0]

for(let i = 0; i < namaMahasiswa.length; i++) {
    if(namaMahasiswa[i][0].toLowerCase() === 'a'){
        namaAwalHurufA += `${namaMahasiswa[i]}, `
    
    }
    
}

for (let i = 1; i < namaMahasiswa.length; i++) {
    if(namaMahasiswa[i].length > namaTerpanjang.length) {
        namaTerpanjang = namaMahasiswa[i]
    }
    if(namaMahasiswa[i].length < namaTerpendek.length){
        namaTerpendek = namaMahasiswa[i]
    }
}
console.log("Nama yang diawali huruf a: "+namaAwalHurufA)
console.log("Nama paling panjang: " + namaTerpanjang)
console.log("Nama terpendek: " + namaTerpendek)
console.log(" ")