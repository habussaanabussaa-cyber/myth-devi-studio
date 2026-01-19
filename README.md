# 🎮 Myth Devi Studio - Website

Website resmi **Myth Devi Studio**, studio game independen yang menghadirkan pengalaman gaming terbaik.

## ✨ Fitur Utama

### 🎯 Sektor Halaman
- **Beranda (Hero)** - Presentasi menarik dengan animasi parallax dan elemen floating
- **Game Terbaru** - Grid interaktif menampilkan 6 game dengan detail dan status
- **Berita & Update** - Informasi terkini dari studio
- **Tentang Kami** - Profil studio dengan statistik dan nilai-nilai kami
- **Kontak** - Form kontak dan social media links
- **Footer** - Informasi copyright dan kredit

### 🎨 Design
- **Dark Theme** - Desain gelap untuk mengurangi ketegangan mata
- **Responsive Design** - Kompatibel dengan semua ukuran layar (desktop, tablet, mobile)
- **Modern UI** - Interface yang clean dan profesional
- **Smooth Animations** - Animasi halus untuk pengalaman pengguna yang lebih baik

### ⚡ Teknologi
- **HTML5** - Semantic markup untuk struktur yang baik
- **CSS3** - Styling modern dengan gradient, flexbox, dan grid
- **Vanilla JavaScript** - Tanpa dependency eksternal, cepat dan ringan

## 📁 Struktur File

```
myth-devi-studio/
├── html/
│   └── index.html           # File HTML utama
├── css/
│   ├── style.css            # Styling utama dengan dark theme
│   └── responsive.css       # Media queries untuk responsive design
├── js/
│   ├── script.js            # JavaScript functionality
│   └── animations.js        # Advanced animations
├── assets/
│   └── images/              # Folder untuk gambar
└── README.md                # File dokumentasi ini
```

## 🚀 Cara Menggunakan

### 1. Buka di Browser
Cukup buka file `html/index.html` di browser favorit Anda:
```bash
# Windows
start html/index.html

# macOS
open html/index.html

# Linux
xdg-open html/index.html
```

### 2. Menggunakan Local Server (Recommended)
Untuk fitur terbaik, gunakan local server:

**Dengan Python 3:**
```bash
python -m http.server 8000
```

**Dengan Python 2:**
```bash
python -m SimpleHTTPServer 8000
```

**Dengan Node.js (http-server):**
```bash
npx http-server
```

Kemudian buka browser ke: `http://localhost:8000/html/`

## 🎮 Konten Game

Website sudah dilengkapi dengan data game dan news yang dapat dimodifikasi:

### Games (6 Game)
1. **Myth Chronicles** - RPG Adventure
2. **Void Runners** - Action Platformer
3. **Crystal Quest** - Puzzle Adventure
4. **Neon Nexus** - Cyberpunk Shooter
5. **Shadow Realm** - Horror Survival
6. **Legends of Aether** - Strategy MOBA

### News & Updates (6 Berita)
- Update terbaru game
- Pencapaian milestone
- Trailer baru
- Rekrutmen tim
- Partnership pengumuman
- Teknologi baru

## 🛠️ Kustomisasi

### Mengubah Data Game
Edit file `js/script.js` bagian `gamesData`:
```javascript
const gamesData = [
    {
        id: 1,
        title: 'Nama Game',
        description: 'Deskripsi game...',
        icon: '🎮',
        genre: 'RPG',
        status: 'Tersedia',
        year: 2026
    },
    // Tambah game lainnya...
];
```

### Mengubah Warna
Edit variabel di `css/style.css`:
```css
:root {
    --primary-dark: #0a0e27;
    --secondary-dark: #1a1f3a;
    --accent-color: #00d4ff;
    --accent-hover: #00a8cc;
    /* dll */
}
```

### Menambah Gambar
1. Simpan gambar di folder `assets/images/`
2. Update di HTML atau CSS sesuai kebutuhan

## 🎨 Fitur Animasi

Website dilengkapi dengan berbagai animasi modern:

- ✨ **Hero Section** - Parallax effect dan floating elements
- 🎯 **Scroll Animations** - Fade-in saat scroll
- 💫 **Hover Effects** - Interactive card hover dengan glow
- 🔤 **Text Animations** - Typewriter dan text reveal effects
- 🎪 **Stagger Animations** - Grid items dengan delayed animation
- 📊 **Counter Animation** - Statistik dengan animated numbers
- 🎨 **Gradient Animations** - Background gradient yang bergerak
- 💧 **Ripple Effects** - Button click ripple animation
- ➡️ **Smooth Scroll** - Smooth scroll untuk navigation links

## 📱 Responsive Breakpoints

- **Desktop** - 1200px+
- **Tablet** - 768px - 1199px
- **Mobile** - 480px - 767px
- **Extra Small** - 360px - 479px

## ⚙️ Performance

- **No External Dependencies** - Tidak perlu npm install
- **Optimized CSS** - Minimal bundle size
- **Vanilla JavaScript** - Lebih cepat dari framework
- **Lazy Loading Ready** - Siap untuk image lazy loading
- **Mobile Optimized** - Fast loading di mobile devices

## 🔐 Kompatibilitas Browser

- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+
- ✅ Mobile browsers

## 📞 Kontak & Social Media

Update kontak di bagian Contact Section di `html/index.html`:
```html
<p>info@mythdevistudio.com</p>
<a href="https://twitter.com/youraccount">Twitter</a>
<a href="https://discord.gg/yourserver">Discord</a>
<a href="https://instagram.com/youraccount">Instagram</a>
<a href="https://youtube.com/yourchannel">YouTube</a>
```

## 🐛 Troubleshooting

### Animasi tidak bekerja?
- Pastikan JavaScript enabled di browser
- Cek browser console untuk errors (F12)
- Refresh page dengan Ctrl+F5 (hard refresh)

### Layout berantakan di mobile?
- Clear browser cache
- Gunakan browser terbaru
- Cek device width setting

### Form tidak bisa dikirim?
- Cek browser console untuk errors
- Implementasikan backend untuk actual email sending
- Saat ini hanya simulasi (alert notification)

## 📝 Lisensi & Kredit

Dibuat dengan ❤️ oleh **Myth Devi Studio Team**

© 2026 Myth Devi Studio. Semua hak dilindungi.

## 🚀 Fitur Mendatang

- [ ] Backend integration untuk form submission
- [ ] CMS untuk update game dan news
- [ ] Multiplayer game lobby
- [ ] User account system
- [ ] Game wishlist
- [ ] Newsletter subscription
- [ ] Blog section
- [ ] Community forum

---

Nikmati website **Myth Devi Studio**! 🎮✨
