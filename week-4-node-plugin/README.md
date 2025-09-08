# 🌈 Aplikasi Node.js Colorful

**Nama:** Muhammad Kholilulloh  
**NIM:** F1D022014  
**Mata Kuliah:** Pemrograman Web Lanjut  
**Minggu:** 4

## 📝 Deskripsi

Aplikasi Node.js yang menampilkan informasi mahasiswa dengan styling warna-warni menggunakan berbagai package npm. Aplikasi ini dibuat untuk memenuhi tugas minggu ke-4 dengan implementasi chalk, cowsay, dan figlet.

## 🎯 Fitur Utama

### ✅ Requirements yang Dipenuhi:

1. **Informasi Mahasiswa** - Menampilkan nama lengkap dan NIM dengan styling warna menggunakan chalk
2. **Pesan Motivasi** - Ditampilkan menggunakan cowsay dengan karakter random
3. **ASCII Art** - Nama ditampilkan dalam bentuk ASCII art menggunakan figlet
4. **Multiple Colors** - Demonstrasi berbagai warna dan styling effects
5. **Dokumentasi Lengkap** - README.md dengan langkah instalasi dan screenshot

### 🌟 Fitur Tambahan (Extra Creativity):

-   ✨ Gradient text effects dengan hex colors
-   🎲 Random fonts dan cowsay characters untuk variasi setiap run
-   📊 Informasi sistem dan terminal
-   🎨 Enhanced box styling dengan Unicode borders
-   📖 Dokumentasi real-time dalam aplikasi
-   🕒 Timestamp dengan format Indonesia

## 📦 Dependencies

```json
{
	"chalk": "^5.6.0",
	"cowsay": "^1.6.0",
	"figlet": "^1.9.0"
}
```

## 🚀 Instalasi

1. **Clone atau download project ini**

    ```bash
    git clone <repository-url>
    cd week-4
    ```

2. **Install dependencies**

    ```bash
    npm install
    ```

    atau

    ```bash
    npm i chalk cowsay figlet
    ```

3. **Jalankan aplikasi**
    ```bash
    npm start
    ```
    atau
    ```bash
    node index.js
    ```

## 🎮 Cara Penggunaan

### Mode Default

Setelah menjalankan `npm start`, aplikasi akan secara otomatis:

1. 🧹 Membersihkan layar terminal
2. 🎨 Menampilkan header welcome dengan rainbow colors
3. 📋 Menampilkan informasi mahasiswa (nama dan NIM)
4. 🐄 Menampilkan pesan motivasi random dengan cowsay
5. 🔤 Menampilkan nama dalam ASCII art dengan font random
6. 🌈 Demonstrasi berbagai styling effects
7. 📖 Menampilkan dokumentasi proyek
8. 💻 Menampilkan informasi sistem dan terminal
9. ✅ Menampilkan summary eksekusi

### Mode Input Custom

Anda juga dapat menjalankan aplikasi dengan input custom:

```bash
node index.js "Nama Lengkap - NIM"
```

**Contoh:**

```bash
node index.js "Muhammad Kholilulloh - F1D022014"
```

**Format Input:**

-   Gunakan format: `"Nama Lengkap - NIM"`
-   Nama dan NIM dipisahkan dengan `-` (spasi-dash-spasi)
-   Gunakan tanda kutip untuk input yang mengandung spasi

**Keuntungan Mode Input Custom:**

-   ✨ Personalisasi nama dan NIM
-   🎯 ASCII art menggunakan nama yang diinput
-   📝 Indikator sumber data (input vs default)
-   🔄 Validasi format input otomatis

## 🎨 Styling Features

### Chalk Styling yang Digunakan:

-   **Warna Dasar**: red, green, blue, yellow, cyan, magenta
-   **Warna Terang**: redBright, greenBright, blueBright, dll
-   **Background Colors**: bgRed, bgGreen, bgBlue, dll
-   **Text Decorations**: bold, italic, underline, strikethrough, inverse
-   **Hex Colors**: #FF6B6B, #4ECDC4, #45B7D1

### Cowsay Characters:

-   🐄 default (classic cow)
-   🐲 dragon
-   👻 ghostbusters
-   🐧 tux (Linux penguin)

### Figlet Fonts:

-   📝 Big
-   🧱 Block
-   💀 Doom
-   📐 Slant

## 🖼️ Screenshot Output

### Output dengan Data Default

Saat menjalankan `npm start` atau `node index.js`:

-   ✅ Menampilkan data default: Muhammad Kholilulloh - F1D022014
-   🎨 Header colorful dengan rainbow effect
-   📋 Informasi mahasiswa dengan styling chalk
-   🐄 Cowsay dengan karakter random dan pesan motivasi
-   🔤 ASCII art nama "KHOLIL" dengan font random
-   🌈 Showcase berbagai styling effects
-   📖 Dokumentasi lengkap dalam aplikasi
-   💻 Informasi sistem dan timestamp

### Output dengan Input Custom

Saat menjalankan `node index.js "Nama - NIM"`:

-   ✨ Menampilkan data sesuai input pengguna
-   📝 Indikator "Data dari input terminal"
-   🎯 ASCII art menggunakan nama dari input
-   🔄 Validasi format input yang benar
-   ✅ Konfirmasi input yang valid

### Fitur Visual yang Ditampilkan:

-   **Header Welcome**: Teks rainbow dengan emoji
-   **Informasi Mahasiswa**: Nama dengan hex colors, NIM dengan underline
-   **Pesan Motivasi**: Cowsay dengan berbagai karakter (cow, dragon, ghostbusters, tux)
-   **ASCII Art**: Nama dalam font besar dengan multiple colors
-   **Creative Styling**: Gradient text, box borders, background colors
-   **Dokumentasi**: Steps instalasi, penggunaan, dan dependencies
-   **System Info**: Node.js version, direktori, timestamp Indonesia
-   **Footer**: Summary eksekusi dengan statistik

_Screenshot akan menampilkan:_

-   Header welcome berwarna-warni
-   Informasi mahasiswa dengan styling
-   Pesan motivasi dari karakter cowsay
-   ASCII art nama dengan font random
-   Demonstrasi berbagai warna dan effects
-   Dokumentasi lengkap dalam terminal
-   Footer dengan informasi eksekusi

## 📁 Struktur Project

```
week-4/
├── 📄 index.js          # File utama aplikasi
├── 📄 package.json      # Konfigurasi npm dan dependencies
├── 📄 package-lock.json # Lock file untuk dependencies
├── 📄 README.md         # Dokumentasi project (file ini)
└── 📁 node_modules/     # Dependencies yang terinstall
```

## 🔧 Troubleshooting

### Jika terjadi error "chalk.rainbow is not a function":

-   ✅ **Sudah diperbaiki** - Menggunakan custom rainbow function

### Jika dependencies tidak terinstall:

```bash
npm install --force
```

### Jika error "cannot find module":

```bash
npm cache clean --force
npm install
```

### Jika input format salah:

-   ❌ **Salah**: `node index.js Muhammad Kholilulloh F1D022014`
-   ❌ **Salah**: `node index.js "Muhammad Kholilulloh-F1D022014"`
-   ✅ **Benar**: `node index.js "Muhammad Kholilulloh - F1D022014"`

### Tips Penggunaan:

-   🎯 Gunakan terminal yang mendukung Unicode untuk tampilan optimal
-   🌈 Jalankan di terminal yang mendukung 256 colors
-   📱 Pastikan terminal cukup lebar untuk ASCII art
-   🔄 Jalankan beberapa kali untuk melihat variasi random

## 🚀 Pengembangan Lebih Lanjut

Fitur yang bisa ditambahkan:

-   🎵 Sound effects
-   📊 Progress bars dengan styling
-   🎮 Interactive menu
-   📝 Save output to file
-   🌐 Web interface
-   📱 Mobile responsive version

## 🛠️ Teknologi yang Digunakan

### Core Technologies:

-   **Node.js**: Runtime JavaScript
-   **ES6 Modules**: Import/export syntax modern
-   **Async/Await**: Handling asynchronous operations

### NPM Packages:

-   **Chalk v5.6.0**: Terminal styling dan colors
-   **Cowsay v1.6.0**: ASCII art characters dengan speech bubbles
-   **Figlet v1.9.0**: ASCII art text generator

### Advanced Features:

-   🎨 **Hex Color Support**: Custom colors dengan #FF6B6B format
-   🎲 **Randomization**: Dynamic fonts, characters, dan messages
-   📊 **Real-time Data**: Date/time dengan locale Indonesia
-   🔄 **Input Validation**: Parsing dan error handling
-   📖 **Self-documenting**: Aplikasi menampilkan dokumentasi sendiri

## ⭐ Fitur Unggulan

### 1. **Dynamic Personalization**

-   Input custom nama dan NIM via terminal arguments
-   ASCII art adaptif berdasarkan input pengguna
-   Validasi format input otomatis

### 2. **Enhanced Visual Experience**

-   Multiple color schemes dan gradient effects
-   Random variation setiap eksekusi
-   Unicode box borders dan decorations

### 3. **Complete Documentation**

-   Self-documenting application
-   Detailed README dengan screenshots
-   Step-by-step installation guide

### 4. **Error Handling & Validation**

-   Graceful error handling untuk figlet
-   Input format validation
-   Fallback ke data default jika input invalid

## 👨‍💻 Informasi Developer

-   **Nama**: Muhammad Kholilulloh
-   **NIM**: F1D022014
-   **Program Studi**: Teknik Informatika
-   **Email**: [email-mahasiswa]
-   **GitHub**: [github-username]

## 📜 License

Dibuat untuk keperluan tugas akademik - Pemrograman Web Lanjut Week 4

---

⭐ **Jika project ini membantu, jangan lupa untuk memberikan star!** ⭐
