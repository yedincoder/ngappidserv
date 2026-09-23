# ⚡ NgAppIDServ

![Golang](https://img.shields.io/badge/Golang-v1.21+-00ADD8?style=for-the-badge&logo=go&logoColor=white)
![Wails](https://img.shields.io/badge/Wails-v2-ED2945?style=for-the-badge)
![Platform](https://img.shields.io/badge/Platform-Windows-0078D6?style=for-the-badge&logo=windows&logoColor=white)
![License](https://img.shields.io/badge/License-Open%20Source-4CAF50?style=for-the-badge)

**NgAppIDServ** adalah aplikasi *Web Server* Lokal modern berbasis GUI (Graphical User Interface) berlisensi **100% Open Source & Free**, yang dirancang khusus untuk memudahkan workflow *developer* web Indonesia. Dibangun ulang secara *native* menggunakan **Golang (Wails)** untuk performa super ringan dan anti-zombie, aplikasi ini menawarkan pengalaman manajemen server lokal sekelas *Enterprise* dengan fitur andalan **Auto-Virtual Host**, **Auto-SSL (HTTPS)**, **Pre-Flight Port Checker**, dan **Integrasi Tunnel (Localtunnel)** secara instan tanpa batasan apapun.

---
![Tampilan NgAppIDServ](screenshoot.png)
---

## 🚀 Fitur Utama

* 📂 **Auto Virtual Host:** Cukup buat folder baru di dalam direktori `www/` (misal: `www/tokoku`), aplikasi akan otomatis membuatkan domain lokal `tokoku.test` tanpa perlu konfigurasi file *hosts* manual.
* 🔐 **Auto SSL (HTTPS):** Setiap domain `.test` yang ter-*generate* akan langsung mendapatkan sertifikat SSL lokal yang valid menggunakan `mkcert`.
* 🛡️ **Pre-Flight Port Checker:** Bebas dari masalah *silent fail*! Sistem akan otomatis memindai ketersediaan Port sebelum Nginx/Database dinyalakan untuk mencegah bentrok dengan aplikasi lain (Skype, IIS, XAMPP).
* ⚙️ **Auto-Firewall Whitelist:** Mengonfigurasi Windows Defender Firewall secara otomatis di latar belakang tanpa memunculkan pop-up kuning yang mengganggu.
* 📦 **Auto Installer:** Unduh dan instal Framework (Laravel, CodeIgniter) atau CMS (WordPress, Joomla) ke dalam project hanya dengan sekali klik.
* 🌐 **Integrasi Tunnel 1-Klik:** Online-kan project lokalmu ke publik secara instan tanpa batasan domain (*custom subdomain* bebas diubah) menggunakan eksekusi Localtunnel cerdas.
* 📁 **Smart Project Manager:** Memindai seluruh daftar project di folder `www` yang dilengkapi dengan tombol pintas pembuka folder (File Explorer), terminal CLI, dan pembuka web.
* 🔄 **Live Tech-Stack & Dynamic Path Engine:** Mendeteksi dan menampilkan versi Nginx, PHP, dan Database secara *real-time*, serta otomatis melakukan *patching* path PHP extension secara dinamis baik di mode *development* maupun saat di-*bundle* menjadi `.exe`.

---

## 📦 Paket Terintegrasi (Tech Stack)

Aplikasi ini sudah di-*bundle* secara mandiri (*Portable-like*) dengan teknologi terbaru:

* **Nginx** v1.31.3 *(Mainline)*
* **PHP** php-8.4.25 *(NTS Win32 x64)*
* **MySQL / MariaDB** v12.3.2 *(Win x64)*
* **phpMyAdmin** v5.2.3 *(All Languages)*
* **Redis Cache** v5.0.14.1 *(x64)*
* **Mailpit** *(Mail Catcher amd64)*
* **Tunnel** *(Localtunnel via Node Portable)*
* **mkcert** *(Auto SSL HTTPS)*
* **Golang & Wails** *(Core Native UI Engine)*

### 💡 NOTE (Add-ons)
- **PostgreSQL** bisa didownload secara manual. Unduh file `pgsql`, lalu ekstrak isinya ke dalam folder: `C:\Dev.NgAppID\NgAppIDServ\bin\pgsql`
- **Panel Manager Adminer** bisa didownload secara manual. Unduh file `adminer`, lalu ekstrak isinya ke dalam folder: `C:\Dev.NgAppID\NgAppIDServ\www\adminer` 

---

## 📂 Struktur Folder Penting

Lakukan installasi, perhatikan struktur folder berikut:

* `/www` : **Letakkan semua file project web / script PHP kamu di sini.**
* `/data/mysql` : Lokasi penyimpanan *raw data* dari database MySQL/MariaDB.
* `/bin` : Direktori *core engine* (Nginx, PHP, MySQL, Redis, dll). **Jangan diubah kecuali kamu tahu apa yang kamu lakukan.**

---

## 🛠️ Cara Penggunaan

1. **Jalankan sebagai Administrator (Wajib):**
   Klik kanan pada *shortcut* atau *file executable* NgAppIDServ dan pilih **Run as Administrator**. Ini wajib agar aplikasi memiliki izin menulis konfigurasi domain `.test` ke dalam file *hosts* Windows & mengatur Firewall.
2. **Menambahkan Project Baru:**
   Buat folder baru di dalam folder `www`, misalnya folder `portofolio`. Domain `https://portofolio.test` otomatis bisa langsung diakses saat PHP & Nginx di-*start*.
3. **Akses Database:**
   Klik tombol **🗄️ Database / PHPMyAdmin** di dalam aplikasi.
   * **Port Database:** `3307` (Default, atau sesuai yang kamu tentukan di UI)
   * **Username:** `root`
   * **Password:** *(Kosongkan)*
4. **Testing Email Keluar:**
   Jika aplikasimu memiliki fitur kirim email, klik **Start Mail** dan buka `http://localhost:8025` di browser untuk melihat email yang masuk ke kotak masuk virtual (*Mail Catcher*).

---

## 👨‍💻 Untuk Developer (Build dari Source Code)

Karena aplikasi kini menggunakan Golang (Wails), pastikan kamu sudah menginstal [Go](https://go.dev/) dan [Wails CLI](https://wails.io/docs/gettingstarted/installation).

1. **Clone Repositori**
   `git clone https://github.com/Yedincoder/NgAppIDServ.git`
2. **Masuk ke direktori**
   `cd NgAppIDServ`
3. **Jalankan dalam Mode Development**
   `wails dev`
4. **Build File .EXE**
   `wails build -windows`
   *(Hasil kompilasi akan berada di folder `build/bin`)*

---

## ⚠️ Troubleshooting (Masalah Umum)

* **Layar Blank pada phpMyAdmin:** Pastikan ekstensi `mysqli`, `mbstring`, dan `session.save_path` sudah diaktifkan dan dikonfigurasi dengan benar di dalam file `php.ini`.
* **Server Nginx/MySQL Tidak Mau Start (Lampu Merah Terus):** Hal ini terjadi karena Port `80` atau `3307` sedang dipakai oleh aplikasi lain (seperti Skype, IIS, atau XAMPP lama). Solusinya: **Ganti angka port di kolom input aplikasi NgAppIDServ** sebelum mengeklik START.
* **Domain `.test` Tidak Ditemukan (Not Found):** Pastikan kamu membuka aplikasi NgAppIDServ dengan akses **Run as Administrator**. Jika tidak, sistem gagal mendaftarkan domain lokalmu ke `C:\Windows\System32\drivers\etc\hosts`.


* **⚠️ PENTING:** Pastikan selalu menjalankan aplikasi dengan hak akses tertinggi (**Run as Administrator**) agar fitur sinkronisasi *Virtual Host* dan *Hosts File* di Windows berjalan mulus tanpa hambatan.

---

## 👨‍💻 Author, Support, & Dedication

Dikembangkan dengan ☕ oleh **(YedinCoder)** dan bersifat 100% *Open Source*.

* **Email:** yedincoder@gmail.com
* **WhatsApp:** 081802161315
* **Website:** [yedin.my.id](https://yedin.my.id) || [ngappid.com](https://ngappid.com)  || [dev.ngappid.com](https://dev.ngappid.com) 

> ❤️ **Spesial:** 
> *Sebuah karya  untuk kemudahan developer di seluruh Nusantara. Didedikasikan dengan segenap cinta untuk **Zawjatii**, serta tiga pelita hati: **Shafa**, **Ra'uf**, dan si bungsu **Sa'ad**.*

*Dukungan pengembangan aplikasi ini secara sukarela (seikhlasnya) melalui QRIS, sangat menghargai kerja keras pengembangan project ini! 🙏☕*