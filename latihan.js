//Biodata
let nama = "Riqi";
let umur = 17;
let jnskelamin = "Laki-laki";
let tampil = "nama saya"+nama + ", umur saya " + umur + "tahun" + ", jenis kelamin :"+jnskelamin;
console.log(tampil);

//perhitungan
let a = 100;
let y = 200;
let Hsljumlah = (a+y);
console.log(`hasil jumlah dari ${a} dan ${y} adalah ${Hsljumlah}` );

//perbandingan
let banding = (1==2);
console.log(banding);

// tugas
for ( let a=1; a<=5; a++){
console.log(`saya bisa ${a}`);      
}



//while di input
var t = prompt("Masukan Kalimat ;");
var i = 1;

while(i <=5){
      console.log(t ,i );
      i++;
}

//do wheli di input
var input;
do{
      input = prompt("masukan angka lebih dari 5;");
      input = parselnt(input);
} while (input <= 5);