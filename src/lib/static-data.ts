export interface InfoProfPost {
  id: string
  judul: string
  kategori: string
  tanggal_post: string
  deskripsi: string
  link_utama?: string
  kontak_email?: string
  sumber: string
  content: string
  arsip?: boolean
  [key: string]: any
}

export interface AlumniPost {
  id: string
  nama: string
  angkatan: string
  bidang: string
  linkedin?: string
  content: string
  [key: string]: any
}

export interface CeritaKitaPost {
  id: string
  nama: string
  cerita: string
  publish_date?: string
  tanggal_post?: string
  content: string
  [key: string]: any
}

export interface CompanyVisitPost {
  id: string
  perusahaan: string
  tanggal: string
  deskripsi: string
  bidang: string
  gallery?: string[]
  content: string
  [key: string]: any
}

export interface EventPost {
  id: string
  judul: string
  deskripsi: string
  tanggal_event: string
  lokasi: string
  link_daftar?: string
  poster?: string
  organizer: string
  content: string
  [key: string]: any
}

export interface ReaktorPost {
  id: string
  judul: string
  kategori: string
  tanggal_publish: string
  penulis: string
  featured_image?: string
  tags?: string[]
  content: string
  [key: string]: any
}

// Static data generated at build time
export const staticInfoProfPosts: InfoProfPost[] = [
  {
    id: "beasiswa-lpdp-s2-2025-07-09",
    judul: "Beasiswa LPDP S2 2025",
    kategori: "Beasiswa",
    tanggal_post: "2025-07-09",
    deskripsi: "Beasiswa LPDP untuk program S2 dalam dan luar negeri",
    link_utama: "https://www.lpdp.kemenkeu.go.id",
    kontak_email: "info@lpdp.kemenkeu.go.id",
    sumber: "LPDP",
    content: "Beasiswa LPDP membuka pendaftaran untuk program S2 tahun 2025...",
    arsip: false
  },
  {
    id: "kompetisi-shopee-code-league-2025-07-09",
    judul: "Kompetisi Shopee Code League 2025",
    kategori: "Kompetisi",
    tanggal_post: "2025-07-09",
    deskripsi: "Kompetisi coding tingkat nasional dari Shopee",
    link_utama: "https://careers.shopee.co.id/codeleague",
    kontak_email: "codeleague@shopee.com",
    sumber: "Shopee",
    content: "Shopee Code League adalah kompetisi coding tahunan...",
    arsip: false
  },
  {
    id: "lowongan-software-engineer-gojek-2025-07-09",
    judul: "Lowongan Software Engineer Gojek",
    kategori: "Lowongan",
    tanggal_post: "2025-07-09",
    deskripsi: "Lowongan untuk posisi Software Engineer di Gojek",
    link_utama: "https://careers.gojek.com",
    kontak_email: "recruitment@gojek.com",
    sumber: "Gojek",
    content: "Gojek membuka lowongan untuk Software Engineer...",
    arsip: false
  },
  {
    id: "magang-ai-google-deepmind-2025-07-09",
    judul: "Magang AI Google DeepMind",
    kategori: "Magang",
    tanggal_post: "2025-07-09",
    deskripsi: "Program magang AI di Google DeepMind",
    link_utama: "https://deepmind.com/careers",
    kontak_email: "internships@deepmind.com",
    sumber: "Google DeepMind",
    content: "Google DeepMind membuka program magang untuk bidang AI...",
    arsip: false
  },
  {
    id: "magang-data-scientist-telkom-2025-07-09",
    judul: "Magang Data Scientist Telkom",
    kategori: "Magang",
    tanggal_post: "2025-07-09",
    deskripsi: "Program magang Data Scientist di Telkom Indonesia",
    link_utama: "https://www.telkom.co.id/careers",
    kontak_email: "recruitment@telkom.co.id",
    sumber: "Telkom Indonesia",
    content: "Telkom Indonesia membuka program magang untuk Data Scientist...",
    arsip: false
  }
]

export const staticAlumniPosts: AlumniPost[] = []

export const staticCeritaKitaPosts: CeritaKitaPost[] = [
  {
    id: "ahmad-fauzi-2024-07-01",
    nama: "Ahmad Fauzi",
    cerita: "Cerita sukses karir di bidang teknologi",
    publish_date: "2024-07-01",
    tanggal_post: "2024-07-01",
    content: "Saya lulus dari Fisika ITB pada tahun 2020..."
  }
]

export const staticCompanyVisitPosts: CompanyVisitPost[] = [
  {
    id: "telkom-2024-06-15",
    perusahaan: "Telkom Indonesia",
    tanggal: "2024-06-15",
    deskripsi: "Kunjungan ke kantor pusat Telkom Indonesia",
    bidang: "Telekomunikasi",
    content: "Kunjungan ke Telkom Indonesia memberikan insight..."
  }
]

export const staticEventPosts: EventPost[] = [
  {
    id: "seminar-karier-2024-08-15",
    judul: "Seminar Karier Fisika 2024",
    deskripsi: "Seminar tentang prospek karier lulusan fisika",
    tanggal_event: "2024-08-15",
    lokasi: "Aula Barat ITB",
    link_daftar: "https://forms.gle/example",
    organizer: "ARCADE HIMAFI",
    content: "Seminar karier tahunan untuk mahasiswa fisika..."
  }
]

export const staticReaktorPosts: ReaktorPost[] = [
  {
    id: "panduan-karier-2024",
    judul: "Panduan Karier untuk Mahasiswa Fisika",
    kategori: "Karier",
    tanggal_publish: "2024-01-01",
    penulis: "Tim ARCADE",
    content: "Panduan lengkap untuk memulai karir setelah lulus dari Fisika..."
  }
]

// Helper functions that work with static data
export function getInfoProfPosts(): InfoProfPost[] {
  return staticInfoProfPosts.sort((a, b) => {
    const dateA = new Date(a.tanggal_post)
    const dateB = new Date(b.tanggal_post)
    return dateB.getTime() - dateA.getTime()
  })
}

export function getAlumniPosts(): AlumniPost[] {
  return staticAlumniPosts.sort((a, b) => {
    if (a.nama < b.nama) return -1
    if (a.nama > b.nama) return 1
    return 0
  })
}

export function getCeritaKitaPosts(): CeritaKitaPost[] {
  return staticCeritaKitaPosts.sort((a, b) => {
    const dateA = new Date(a.publish_date || a.tanggal_post || '')
    const dateB = new Date(b.publish_date || b.tanggal_post || '')
    return dateB.getTime() - dateA.getTime()
  })
}

export function getCompanyVisitPosts(): CompanyVisitPost[] {
  return staticCompanyVisitPosts.sort((a, b) => {
    const dateA = new Date(a.tanggal)
    const dateB = new Date(b.tanggal)
    return dateB.getTime() - dateA.getTime()
  })
}

export function getEventPosts(): EventPost[] {
  return staticEventPosts.sort((a, b) => {
    const dateA = new Date(a.tanggal_event)
    const dateB = new Date(b.tanggal_event)
    return dateB.getTime() - dateA.getTime()
  })
}

export function getReaktorPosts(): ReaktorPost[] {
  return staticReaktorPosts.sort((a, b) => {
    const dateA = new Date(a.tanggal_publish)
    const dateB = new Date(b.tanggal_publish)
    return dateB.getTime() - dateA.getTime()
  })
}

export function getAllPosts() {
  return [
    ...staticInfoProfPosts,
    ...staticAlumniPosts,
    ...staticCeritaKitaPosts,
    ...staticCompanyVisitPosts,
    ...staticEventPosts,
    ...staticReaktorPosts
  ]
}

export function getPostById(type: string, id: string) {
  const posts = {
    infoprof: staticInfoProfPosts,
    alumni: staticAlumniPosts,
    ceritakita: staticCeritaKitaPosts,
    companyvisit: staticCompanyVisitPosts,
    event: staticEventPosts,
    reaktor: staticReaktorPosts
  }
  
  return posts[type as keyof typeof posts]?.find(post => post.id === id) || null
}

export function searchPosts(query: string, type?: string) {
  const allPosts = getAllPosts()
  const searchTerm = query.toLowerCase()
  
  return allPosts.filter(post => {
    if (type && !post.id.includes(type)) return false
    
    return (
      post.judul?.toLowerCase().includes(searchTerm) ||
      post.deskripsi?.toLowerCase().includes(searchTerm) ||
      post.content?.toLowerCase().includes(searchTerm) ||
      post.nama?.toLowerCase().includes(searchTerm) ||
      post.perusahaan?.toLowerCase().includes(searchTerm)
    )
  })
}

export function getPostsByCategory(category: string, type?: string) {
  const posts = getAllPosts()
  
  return posts.filter(post => {
    if (type && !post.id.includes(type)) return false
    return post.kategori?.toLowerCase() === category.toLowerCase()
  })
}

export function getRecentPosts(limit: number = 10) {
  const allPosts = getAllPosts()
  
  return allPosts
    .sort((a, b) => {
      const dateA = new Date(a.tanggal_post || a.tanggal_event || a.tanggal_publish || a.publish_date || '')
      const dateB = new Date(b.tanggal_post || b.tanggal_event || b.tanggal_publish || b.publish_date || '')
      return dateB.getTime() - dateA.getTime()
    })
    .slice(0, limit)
} 