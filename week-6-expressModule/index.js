const express = require('express');
const math = require('./utils/math');
const profileRouter = require('./routes/profile');

const app = express();
const port = 3000;

// Middleware untuk parsing JSON
app.use(express.json());

// Route utama
app.get('/', (req, res) => {
    res.send('Muhammad Kholilulloh - F1D022014');
});

// Route untuk operasi hitung dengan fungsi tambah
app.get('/hitung', (req, res) => {
    const { a = 5, b = 3 } = req.query;
    const hasil = math.add(parseInt(a), parseInt(b));
    res.json({
        operasi: 'penjumlahan',
        angka1: parseInt(a),
        angka2: parseInt(b),
        hasil: hasil
    });
});

// Route untuk operasi hitung dengan fungsi kurang
app.get('/hitung-kurang', (req, res) => {
    const { a = 10, b = 4 } = req.query;
    const hasil = math.subtract(parseInt(a), parseInt(b));
    res.json({
        operasi: 'pengurangan',
        angka1: parseInt(a),
        angka2: parseInt(b),
        hasil: hasil
    });
});

// Menggunakan profile router
app.use('/profile', profileRouter);

app.listen(port, () => {
    console.log(`Server berjalan di http://localhost:${port}`);
});