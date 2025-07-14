# 🎯 ARCADE HIMAFI Website

Website resmi Himpunan Mahasiswa Fisika (HIMAFI) ITB yang menyediakan informasi karier, alumni, dan kegiatan mahasiswa fisika.

## 🚀 Fitur Utama

### ✅ Admin Dashboard (FIXED)
- **Akses**: `/admin-dashboard` - Dashboard custom untuk power users
- **Netlify CMS**: `/admin/` - Interface visual untuk non-technical users
- **Real-time Updates**: Auto-refresh setiap 30 detik
- **File Upload**: Support upload poster/gambar
- **Content Management**: Kelola info karier, alumni, events

### ✅ Info Karier (INFOPROF) - Real-time
- **Auto-refresh**: Update otomatis setiap 30 detik
- **Manual Refresh**: Tombol refresh manual
- **Filter**: Kategori dan status
- **Poster Support**: Upload dan display gambar
- **Deadline Tracking**: Warna merah untuk deadline urgent

### ✅ Content Management
- **Markdown Support**: Konten dengan format markdown
- **File-based**: Data tersimpan sebagai file markdown
- **API Endpoints**: RESTful API untuk CRUD operations
- **Validation**: Client dan server-side validation

## 🛠️ Tech Stack

- **Framework**: Next.js 15.3.4
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Content**: Markdown dengan gray-matter
- **Deployment**: Netlify
- **CMS**: Netlify CMS

## 🚀 Cara Menjalankan

### Development
```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Run dengan API support
npm run dev:api
```

### Production Build
```bash
# Build untuk production
npm run build

# Export static files
npm run export
```

## 📁 Struktur Project

```
src/
├── app/
│   ├── admin-dashboard/     # Admin dashboard pages
│   ├── api/                 # API routes
│   │   ├── content/         # Content management APIs
│   │   └── upload/          # File upload API
│   ├── infoprof/           # Info karier pages
│   └── ...
├── components/             # React components
├── lib/                   # Utility functions
└── ...

content/                   # Markdown content files
├── infoprof/             # Info karier content
├── alumni/               # Alumni profiles
└── ...

public/
├── admin/                # Netlify CMS files
├── uploads/              # Uploaded files
└── ...
```

## 🔧 API Endpoints

### Content Management
- `GET /api/content/infoprof` - Get all infoprof content
- `POST /api/content/infoprof` - Create new infoprof content
- `POST /api/upload` - Upload files

### Response Format
```json
{
  "success": true,
  "data": [...],
  "message": "Success message"
}
```

## 🎨 Admin Dashboard

### Akses Dashboard
1. **Custom Dashboard**: `http://localhost:3000/admin-dashboard`
2. **Netlify CMS**: `http://localhost:3000/admin/`

### Fitur Dashboard
- **Overview**: Statistik content
- **Info Karier**: Kelola info magang, beasiswa, lowongan
- **Real-time**: Auto-refresh data
- **File Upload**: Upload poster/gambar
- **Form Validation**: Client dan server-side validation

### Cara Menambah Info Karier
1. Buka `/admin-dashboard`
2. Klik tab "Info Karier"
3. Klik "➕ Tambah Info Baru"
4. Isi form dengan data yang diperlukan
5. Upload poster (opsional)
6. Klik "Simpan"

## 🔄 Real-time Updates

### Auto-refresh
- Info karier page auto-refresh setiap 30 detik
- Manual refresh dengan tombol "🔄 Refresh"
- Real-time update setelah admin menambah/edit content

### Deployment
- Content update otomatis ter-refresh di production
- File-based storage memastikan konsistensi
- API endpoints tersedia di development dan production

## 🚀 Deployment

### Netlify
1. Connect repository ke Netlify
2. Build command: `npm run build`
3. Publish directory: `out`
4. Environment variables (jika diperlukan)

### Environment Variables
```env
NODE_ENV=production
NEXT_PUBLIC_SITE_URL=https://your-site.netlify.app
```

## 🐛 Troubleshooting

### Admin Dashboard Tidak Bisa Diakses
1. Pastikan API routes berjalan: `npm run dev:api`
2. Check browser console untuk errors
3. Verify Netlify redirects di `netlify.toml`

### Content Tidak Update
1. Refresh halaman manual
2. Check API response di browser dev tools
3. Verify file permissions di `content/` folder

### File Upload Error
1. Check `public/uploads/` folder exists
2. Verify file size < 5MB
3. Check file type (hanya gambar)

## 📝 Content Schema

### Info Karier
```yaml
---
judul: "Judul Info Karier"
kategori: "Magang" # Magang|Beasiswa|Lowongan|Sertifikasi|Kompetisi
tanggal_post: "2025-07-09T10:00:00.000Z"
deskripsi: "Deskripsi singkat"
sumber: "Nama Sumber"
link_utama: "https://example.com" # optional
kontak_email: "email@example.com" # optional
poster_url: "/uploads/image.jpg" # optional
tags: # optional
  - "tag1"
  - "tag2"
deadline: "2025-07-31T23:59:59.000Z" # optional
arsip: false # optional
---

# Konten Markdown di sini...
```

## 🤝 Contributing

1. Fork repository
2. Create feature branch
3. Make changes
4. Test thoroughly
5. Submit pull request

## 📄 License

MIT License - see LICENSE file for details.

---

**Made with ❤️ by HIMAFI Tech Team**
