const express = require('express');
const router = express.Router();

// daftar profile JSON
const profiles = [
    {
        nama: 'Muhammad Kholilulloh',
        nim: 'F1D022014',
        jurusan: 'Informatika'
    },
    {
        nama: 'Jane Doe',
        nim: 'F1D022015',
        jurusan: 'Informatika'
    },
    {
        nama: 'Alice Smith',
        nim: 'F1D022016',
        jurusan: 'Informatika'
    }
];

// Route untuk menampilkan profile dengan nama dan nim
router.get('/', (req, res) => {
    let html = `
    <html>
    <head>
        <title>Profile List</title>
        <style>
            body { font-family: Arial, sans-serif; margin: 40px; }
            .profile { border: 1px solid #ddd; padding: 15px; margin: 10px 0; border-radius: 5px; }
            h1 { color: #333; }
            h2 { color: #666; }
        </style>
    </head>
    <body>
        <h1>Daftar Profile</h1>
    `;
    
    profiles.forEach(profile => {
        html += `
        <div class="profile">
            <h2>${profile.nama}</h2>
            <p><strong>NIM:</strong> ${profile.nim}</p>
            <p><strong>Jurusan:</strong> ${profile.jurusan}</p>
        </div>
        `;
    });
    
    html += `
    </body>
    </html>
    `;
    
    res.send(html);
});

// Route untuk menampilkan detail profile berdasarkan nim
router.get('/:nim', (req, res) => {
    const nim = req.params.nim;
    const profile = profiles.find(p => p.nim === nim);
    if (profile) {
        let html = `
        <html>
        <head>
            <title>Profile Detail</title>
            <style>
                body { font-family: Arial, sans-serif; margin: 40px; }
                .profile { border: 1px solid #ddd; padding: 20px; border-radius: 5px; }
                h1 { color: #333; }
                p { margin: 10px 0; }
                a { color: #007bff; text-decoration: none; }
                a:hover { text-decoration: underline; }
            </style>
        </head>
        <body>
            <h1>Detail Profile</h1>
            <div class="profile">
                <h2>${profile.nama}</h2>
                <p><strong>NIM:</strong> ${profile.nim}</p>
                <p><strong>Jurusan:</strong> ${profile.jurusan}</p>
            </div>
            <a href="/profile">Kembali ke Daftar Profile</a>
        </body>
        </html>
        `;
        res.send(html);
    } else {
        res.status(404).send(`
        <html>
        <head>
            <title>Profile Tidak Ditemukan</title>
            <style>
                body { font-family: Arial, sans-serif; margin: 40px; }
                .error { color: #dc3545; border: 1px solid #dc3545; padding: 15px; border-radius: 5px; }
                a { color: #007bff; text-decoration: none; }
                a:hover { text-decoration: underline; }
            </style>
        </head>
        <body>
            <h1>Error</h1>
            <div class="error">
                <p>Profile dengan NIM <strong>${nim}</strong> tidak ditemukan</p>
            </div>
            <a href="/profile">Kembali ke Daftar Profile</a>
        </body>
        </html>
        `);
    }
});

module.exports = router;