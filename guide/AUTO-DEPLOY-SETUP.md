# Auto-Deploy Setup Guide

## Cara Setup Auto-Deploy di Netlify

### 1. Buat Build Hook
1. Buka https://app.netlify.com/sites/arcadehimafi/settings/deploys
2. Scroll ke "Build hooks"
3. Klik "Add build hook"
4. Nama: "CMS Auto Deploy"
5. Branch: "main"
6. Copy URL yang dihasilkan

### 2. Update Admin Panel
Edit file `public/admin/index.html` line yang ada `buildHookUrl`:
```javascript
const buildHookUrl = 'PASTE_URL_BUILD_HOOK_DI_SINI';
```

### 3. Workflow Normal (Sudah Aktif)
✅ **Otomatis via Git-Gateway:**
- Edit content di `/admin` → Save
- Netlify CMS auto-commit ke Git
- Netlify detect perubahan
- Auto-build dan deploy (2-3 menit)

✅ **Manual via Tombol:**
- Login ke `/admin`
- Klik "🚀 Aksi Cepat"
- Klik "🔄 Build & Deploy Website"
- Monitor progress di Netlify

### 4. Monitoring
- Deploy status: https://app.netlify.com/sites/arcadehimafi/deploys
- Website: https://arcadehimafi.netlify.app/infoprof

## Notes
- Build hook URL sudah di-set: `67362f4b46b1e38a5e46d35f`
- Auto-deploy via Git sudah aktif
- Manual deploy button tersedia di admin panel
