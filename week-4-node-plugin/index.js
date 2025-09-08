import chalk from 'chalk';
import cowsay from 'cowsay';
import figlet from 'figlet';

// Get current date and time for documentation
const currentDate = new Date();
const dateString = currentDate.toLocaleDateString('id-ID');
const timeString = currentDate.toLocaleTimeString('id-ID');

// Function to display full name and NIM with styled colors using chalk
function displayStudentInfo() {
    console.log(chalk.cyan.bold('='.repeat(60)));
    console.log(chalk.yellow.bold('📚 INFORMASI MAHASISWA 📚'));
    console.log(chalk.cyan.bold('='.repeat(60)));

    // Full Name with colorful styling using chalk gradients and styles
    console.log(chalk.green.bold('Nama Lengkap: ') +
        chalk.hex('#FF6B6B').bold('Muhammad ') +
        chalk.hex('#4ECDC4').bold('Kholilulloh'));

    // NIM (Student ID) with multiple styling effects
    console.log(chalk.blue.bold('NIM: ') +
        chalk.red.underline.bold('F1D022014'));

    // Additional creative styling
    console.log(chalk.magenta.bold('Program: ') +
        chalk.yellow.italic('Teknik Informatika'));

    console.log(chalk.cyan.bold('='.repeat(60)));
}

// Function to display motivational message with cowsay
function displayMotivationalMessage() {
    const messages = [
        "Terus belajar dan jangan pernah menyerah!",
        "Programming itu menyenangkan!",
        "Setiap error adalah pelajaran berharga!",
        "Code with passion, debug with patience!"
    ];

    const randomMessage = messages[Math.floor(Math.random() * messages.length)];

    console.log(chalk.green.bold('\n🐄 Pesan Motivasi dari Sapi:'));

    // Use different cowsay characters for variety
    const characters = ['default', 'dragon', 'ghostbusters', 'tux'];
    const randomChar = characters[Math.floor(Math.random() * characters.length)];

    const cowOptions = {
        text: randomMessage,
        e: "oO",
        T: "U ",
        f: randomChar
    };

    console.log(chalk.yellow(cowsay.say(cowOptions)));
}

// Function to display name in ASCII art using figlet
function displayNameInASCII() {
    return new Promise((resolve) => {
        // Try different fonts for variety
        const fonts = ['Big', 'Block', 'Doom', 'Slant'];
        const randomFont = fonts[Math.floor(Math.random() * fonts.length)];

        figlet('KHOLIL', {
            font: randomFont,
            horizontalLayout: 'default',
            verticalLayout: 'default'
        }, (err, data) => {
            if (err) {
                console.log(chalk.red('Something went wrong with figlet...'));
                console.log(err);
                resolve();
                return;
            }

            // Create custom rainbow effect
            const rainbowColors = ['red', 'yellow', 'green', 'cyan', 'blue', 'magenta'];
            let rainbowText = '';
            const headerText = '\n🎨 ASCII Art Nama (Font: ' + randomFont + '):';
            for (let i = 0; i < headerText.length; i++) {
                const colorName = rainbowColors[i % rainbowColors.length];
                rainbowText += chalk[colorName](headerText[i]);
            }
            console.log(rainbowText);

            // Split the ASCII art into lines and apply gradient colors
            const lines = data.split('\n');
            lines.forEach((line, index) => {
                // Create gradient effect
                const colors = ['red', 'redBright', 'yellow', 'yellowBright', 'green', 'greenBright', 'cyan', 'cyanBright', 'blue', 'blueBright', 'magenta', 'magentaBright'];
                const colorName = colors[index % colors.length];
                console.log(chalk[colorName].bold(line));
            });
            resolve();
        });
    });
}

// Function to demonstrate creative styling with multiple colors
function displayCreativeOutput() {
    // Create custom rainbow effect for the title
    const titleText = '\n🌈 SHOWCASE KREATIVITAS STYLING 🌈';
    const rainbowColors = ['red', 'yellow', 'green', 'cyan', 'blue', 'magenta'];
    let rainbowTitle = '';
    for (let i = 0; i < titleText.length; i++) {
        const colorName = rainbowColors[i % rainbowColors.length];
        rainbowTitle += chalk[colorName].bold(titleText[i]);
    }
    console.log(rainbowTitle);

    // Gradient text effect with multiple colors
    const text = "PROGRAMMING WITH LOVE & PASSION";
    const colors = ['red', 'redBright', 'yellow', 'yellowBright', 'green', 'greenBright', 'cyan', 'cyanBright', 'blue', 'blueBright', 'magenta', 'magentaBright'];

    console.log('\n' + chalk.bold.underline('💫 Efek Teks Berwarna:'));
    let colorfulText = '';
    for (let i = 0; i < text.length; i++) {
        const colorName = colors[i % colors.length];
        colorfulText += chalk[colorName].bold(text[i]);
    }
    console.log(colorfulText);

    // Enhanced box styling with borders
    console.log('\n' + chalk.white.bgBlue.bold(' 📦 PESAN DALAM KOTAK 📦 '));
    console.log(chalk.cyan('╔' + '═'.repeat(58) + '╗'));
    console.log(chalk.cyan('║') + chalk.white.bold(' Selamat datang di aplikasi Node.js penuh warna!        ') + chalk.cyan('║'));
    console.log(chalk.cyan('║') + chalk.green.italic(' Dibuat dengan Chalk, Cowsay, dan Figlet ❤️             ') + chalk.cyan('║'));
    console.log(chalk.cyan('║') + chalk.blue(' Menampilkan kreativitas dalam programming 🚀           ') + chalk.cyan('║'));
    console.log(chalk.cyan('╚' + '═'.repeat(58) + '╝'));

    // Multiple styling effects demonstration
    console.log('\n' + chalk.yellow.bold.inverse(' ⚡ BERBAGAI EFEK STYLING ⚡ '));

    // Background color variations
    console.log('\n' + chalk.black.bgWhite.bold(' Latar Putih ') + ' ' +
        chalk.white.bgBlack.bold(' Latar Hitam ') + ' ' +
        chalk.white.bgRed.bold(' Latar Merah ') + ' ' +
        chalk.black.bgGreen.bold(' Latar Hijau ') + ' ' +
        chalk.white.bgBlue.bold(' Latar Biru '));

    // Text decorations
    console.log('\n' + chalk.red.bold('TEBAL') + ' | ' +
        chalk.green.italic('Miring') + ' | ' +
        chalk.blue.underline('Garis Bawah') + ' | ' +
        chalk.yellow.strikethrough('Tercoret') + ' | ' +
        chalk.magenta.inverse('Terbalik'));

    // Hex color demonstration
    console.log('\n' + chalk.hex('#FF6B6B')('Warna Hex #FF6B6B') + ' | ' +
        chalk.hex('#4ECDC4')('Warna Hex #4ECDC4') + ' | ' +
        chalk.hex('#45B7D1')('Warna Hex #45B7D1'));
}

// Function to display project documentation
function displayDocumentation() {
    console.log('\n' + chalk.bgCyan.black.bold(' 📖 DOKUMENTASI PROYEK 📖 '));

    console.log('\n' + chalk.yellow.bold('📝 README.md - Informasi Proyek:'));
    console.log(chalk.gray('├─ Langkah-langkah instalasi dependensi'));
    console.log(chalk.gray('├─ Cara menjalankan proyek'));
    console.log(chalk.gray('└─ Screenshot output hasil eksekusi'));

    console.log('\n' + chalk.green.bold('📦 Dependensi yang Terinstall:'));
    console.log(chalk.white('├─ ') + chalk.cyan('chalk') + chalk.gray(' - Styling dan pewarnaan text terminal'));
    console.log(chalk.white('├─ ') + chalk.cyan('cowsay') + chalk.gray(' - Menampilkan pesan dalam speech bubble'));
    console.log(chalk.white('└─ ') + chalk.cyan('figlet') + chalk.gray(' - Mengubah text menjadi ASCII art'));

    console.log('\n' + chalk.blue.bold('⚡ Fitur-fitur dalam Script:'));
    console.log(chalk.white('├─ ') + chalk.green('✓') + ' Informasi mahasiswa dengan styling warna');
    console.log(chalk.white('├─ ') + chalk.green('✓') + ' Pesan motivasi dengan cowsay characters');
    console.log(chalk.white('├─ ') + chalk.green('✓') + ' ASCII art nama menggunakan figlet');
    console.log(chalk.white('├─ ') + chalk.green('✓') + ' Demonstrasi multiple colors dan styling');
    console.log(chalk.white('├─ ') + chalk.green('✓') + ' Gradient effects dan hex colors');
    console.log(chalk.white('├─ ') + chalk.green('✓') + ' Random fonts dan characters untuk variasi');
    console.log(chalk.white('└─ ') + chalk.green('✓') + ' Dokumentasi lengkap dengan timestamp');
}

// Enhanced terminal input functionality (optional)
function displayTerminalInfo() {
    console.log('\n' + chalk.bgMagenta.white.bold(' 💻 INFORMASI TERMINAL 💻 '));
    console.log(chalk.yellow('📅 Tanggal: ') + chalk.white(dateString));
    console.log(chalk.yellow('⏰ Waktu: ') + chalk.white(timeString));
    console.log(chalk.yellow('🖥️  Node.js: ') + chalk.white(process.version));
    console.log(chalk.yellow('📂 Direktori: ') + chalk.white(process.cwd()));
    console.log(chalk.yellow('🏷️  Script: ') + chalk.white('Muhammad Kholilulloh - F1D022014'));
}

// Main function to run the application
async function main() {
    console.clear(); // Clear the console for better presentation

    // Display enhanced welcome header
    const welcomeText = '\n 🚀 APLIKASI NODE.JS COLORFUL 🚀 ';
    let colorfulWelcome = '';
    const welcomeColors = ['red', 'yellow', 'green', 'cyan', 'blue', 'magenta'];
    for (let i = 0; i < welcomeText.length; i++) {
        const colorName = welcomeColors[i % welcomeColors.length];
        colorfulWelcome += chalk[colorName].bold(welcomeText[i]);
    }
    console.log(chalk.bgWhite(colorfulWelcome));

    try {
        // 1. Display student information with styled colors using chalk
        displayStudentInfo();

        // 2. Display motivational message with cowsay
        displayMotivationalMessage();

        // 3. Display name in ASCII art using figlet
        await displayNameInASCII();

        // 4. Display creative styling with multiple colors
        displayCreativeOutput();

        // 5. Display project documentation
        displayDocumentation();

        // 6. Display terminal and system information
        displayTerminalInfo();

        // Enhanced footer with complete information
        console.log('\n' + chalk.gray('═'.repeat(70)));
        console.log(chalk.green.bold('✅ Script berhasil dijalankan dengan sempurna!'));
        console.log(chalk.cyan('� Total fungsi yang dieksekusi: ') + chalk.white.bold('6 fungsi'));
        console.log(chalk.cyan('🎨 Paket yang digunakan: ') + chalk.white('Chalk, Cowsay, Figlet'));
        console.log(chalk.cyan('👨‍💻 Dibuat oleh: ') + chalk.white.bold('Muhammad Kholilulloh (F1D022014)'));
        console.log(chalk.gray('═'.repeat(70)) + '\n');

    } catch (error) {
        console.error(chalk.red.bold('❌ Terjadi kesalahan:'), error);
        console.log(chalk.yellow('💡 Coba periksa instalasi dependensi dengan: npm install'));
    }
}

// Run the application
main();
