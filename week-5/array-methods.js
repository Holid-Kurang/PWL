// Tugas Array Methods - Week 5
// Nama: [Nama Mahasiswa]
// NIM: [NIM Mahasiswa]

// 1. Membuat array buah-buahan dengan minimal 10 elemen
const buahBuahan = [
    "mangga",
    "jeruk",
    "apel",
    "pisang",
    "rambutan",
    "manggis",
    "durian",
    "salak",
    "jambu",
    "nanas",
    "semangka",
    "pepaya",
    "kedondong"
];

console.log("=== ARRAY BUAH-BUAHAN ORIGINAL ===");
console.log(buahBuahan);
console.log("Jumlah buah:", buahBuahan.length);

// 2. Menggunakan method map() - Mengubah semua nama buah menjadi huruf kapital dengan prefix "BUAH:"
const buahKapital = buahBuahan.map(buah => `BUAH: ${buah.toUpperCase()}`);

console.log("\n=== HASIL MAP() - BUAH DENGAN PREFIX DAN KAPITAL ===");
console.log(buahKapital);

// 3. Menggunakan method filter() - Mencari buah yang namanya lebih dari 5 huruf
const buahPanjang = buahBuahan.filter(buah => buah.length > 5);

console.log("\n=== HASIL FILTER() - BUAH DENGAN NAMA LEBIH DARI 5 HURUF ===");
console.log(buahPanjang);
console.log("Jumlah buah dengan nama panjang:", buahPanjang.length);

// 4. Menggunakan method reduce() - Menghitung total huruf semua nama buah
const totalHuruf = buahBuahan.reduce((total, buah) => total + buah.length, 0);

console.log("\n=== HASIL REDUCE() - TOTAL HURUF SEMUA NAMA BUAH ===");
console.log("Total huruf dari semua nama buah:", totalHuruf);

// 5. Menggunakan method find() - Mencari buah yang namanya dimulai dengan huruf tertentu (misalnya 'm')
const buahDenganM = buahBuahan.find(buah => buah.startsWith('m'));

console.log("\n=== HASIL FIND() - BUAH YANG DIMULAI DENGAN HURUF 'M' ===");
console.log("Buah pertama yang dimulai dengan 'm':", buahDenganM);

// 6. Menggunakan method some() - Mengecek apakah ada buah yang namanya lebih dari 10 huruf
const adaBuahPanjangSekali = buahBuahan.some(buah => buah.length > 10);

console.log("\n=== HASIL SOME() - CEK ADA BUAH DENGAN NAMA LEBIH DARI 10 HURUF ===");
console.log("Apakah ada buah dengan nama lebih dari 10 huruf?", adaBuahPanjangSekali);

// 7. Menggunakan method every() - Mengecek apakah semua buah namanya lebih dari 3 huruf
const semuaBuahLebihDariTigaHuruf = buahBuahan.every(buah => buah.length > 3);

console.log("\n=== HASIL EVERY() - CEK SEMUA BUAH NAMANYA LEBIH DARI 3 HURUF ===");
console.log("Apakah semua buah namanya lebih dari 3 huruf?", semuaBuahLebihDariTigaHuruf);

// 8. RINGKASAN HASIL SEMUA METHOD
console.log("\n" + "=".repeat(50));
console.log("           RINGKASAN HASIL");
console.log("=".repeat(50));
console.log("• Array original memiliki", buahBuahan.length, "buah");
console.log("• Buah dengan nama > 5 huruf:", buahPanjang.length, "buah");
console.log("• Total huruf semua nama buah:", totalHuruf, "huruf");
console.log("• Buah pertama dengan awalan 'm':", buahDenganM);
console.log("• Ada buah dengan nama > 10 huruf:", adaBuahPanjangSekali);
console.log("• Semua buah namanya > 3 huruf:", semuaBuahLebihDariTigaHuruf);
console.log("=".repeat(50));