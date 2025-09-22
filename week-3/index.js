const mahasiswa = {
    nama: "John Doe",
    umur: 20,
    jurusan: "Informatika"
};

const { nama, umur, jurusan } = mahasiswa;

console.log(`Nama: ${nama}`);
console.log(`Umur: ${umur}`);
console.log(`Jurusan: ${jurusan}`);

// rename variable (aliasing)
const { nama: namaMahasiswa, umur: umurMahasiswa, jurusan: jurusanMahasiswa } = mahasiswa;

console.log(`Nama: ${namaMahasiswa}`);
console.log(`Umur: ${umurMahasiswa}`);
console.log(`Jurusan: ${jurusanMahasiswa}`);

// nested destructuring
const mahasiswaLengkap = {
    nama: "Jane Doe",
    umur: 22,
    jurusan: "Sistem Informasi",
    alamat: {
        jalan: "Jl. Merdeka No. 10",
        kota: "Jakarta",
        provinsi: "DKI Jakarta"
    }
};

const { nama: namaLengkap, alamat: { jalan, kota, provinsi } } = mahasiswaLengkap;

const produk = {
    id: 1,
    nama: "Laptop",
    harga: 15000000,
    spesifikasi: {
        processor: "Intel i7",
        ram: "16GB",
        storage: "512GB SSD"
    }
};
console.log("================================")
const { nama: namaProduk, harga, spesifikasi: { processor, ram, storage } } = produk;
console.log(`Produk: ${namaProduk}`);
console.log(`Harga: ${harga}`);
console.log(`Spesifikasi: ${processor} / ${ram} / ${storage}`);

// object destrycturing 
const mahasiswa2 = {
    nama: "Alice",
    nim: "123456789",
    prodi: "Teknik Informatika",
    nilai: {
        tugas: 85,
        uts: 90,
        uas: 88
    },
    alamat: {
        jalan: "Jl. Sudirman No. 5",
        kota: "Bandung",
        provinsi: "Jawa Barat"
    }
};
const { nama: namaMhs, nim, prodi, nilai: { tugas, uts, uas }, alamat: { jalan: jalanMhs, kota: kotaMhs, provinsi: provinsiMhs } } = mahasiswa2;

console.log("================================")
console.log(`Nama: ${namaMhs}`);
console.log(`NIM: ${nim}`);
console.log(`Prodi: ${prodi}`);
console.log(`Nilai - Tugas: ${tugas}, UTS: ${uts}, UAS: ${uas}`);
console.log(`Alamat: ${jalanMhs}, ${kotaMhs}, ${provinsiMhs}`);