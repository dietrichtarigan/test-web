import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

export interface InfoProfPost {
  id: string
  judul: string
  kategori: string
  tanggal_post: string
  deskripsi: string
  poster_url?: string
  link_utama?: string
  kontak_email?: string
  sumber?: string
  deadline?: string
  tags?: string[]
  arsip?: boolean
  content: string
  [key: string]: any
}

export function getInfoProfFromCMS(): InfoProfPost[] {
  try {
    const contentDir = path.join(process.cwd(), 'content', 'infoprof')
    
    // Check if directory exists
    if (!fs.existsSync(contentDir)) {
      console.log('InfoProf content directory not found:', contentDir)
      return []
    }

    const files = fs.readdirSync(contentDir).filter(file => file.endsWith('.md'))
    
    if (files.length === 0) {
      console.log('No markdown files found in:', contentDir)
      return []
    }

    const posts: InfoProfPost[] = files.map(file => {
      const filePath = path.join(contentDir, file)
      const fileContent = fs.readFileSync(filePath, 'utf-8')
      const { data, content } = matter(fileContent)
      
      return {
        id: file.replace('.md', ''),
        judul: data.judul || 'Untitled',
        kategori: data.kategori || 'Lainnya',
        tanggal_post: data.tanggal_post || new Date().toISOString(),
        deskripsi: data.deskripsi || '',
        poster_url: data.poster_url,
        link_utama: data.link_utama,
        kontak_email: data.kontak_email,
        sumber: data.sumber || '',
        deadline: data.deadline,
        tags: data.tags || [],
        arsip: data.arsip || false,
        content,
        ...data
      }
    })

    // Sort by date (newest first)
    return posts.sort((a, b) => {
      const dateA = new Date(a.tanggal_post)
      const dateB = new Date(b.tanggal_post)
      return dateB.getTime() - dateA.getTime()
    })

  } catch (error) {
    console.error('Error reading InfoProf from CMS:', error)
    return []
  }
}

export function getAllInfoProfPosts(): InfoProfPost[] {
  // First try to get from CMS content
  const cmsData = getInfoProfFromCMS()
  
  if (cmsData.length > 0) {
    console.log(`Found ${cmsData.length} InfoProf posts from CMS`)
    return cmsData
  }
  
  // Fallback to static data if no CMS content
  console.log('No CMS content found, using fallback data')
  return getFallbackInfoProf()
}

function getFallbackInfoProf(): InfoProfPost[] {
  return [
    {
      id: 'beasiswa-lpdp-s2-2025',
      judul: 'Beasiswa LPDP S2 2025',
      kategori: 'Beasiswa',
      tanggal_post: '2025-07-09T00:00:00.000Z',
      deskripsi: 'Beasiswa LPDP untuk program S2 dalam dan luar negeri',
      link_utama: 'https://lpdp.kemenkeu.go.id',
      kontak_email: 'info@lpdp.kemenkeu.go.id',
      sumber: 'LPDP',
      content: 'Beasiswa LPDP untuk program S2 dalam dan luar negeri dengan berbagai program studi yang tersedia.',
      arsip: false
    },
    {
      id: 'kompetisi-shopee-code-league-2025',
      judul: 'Kompetisi Shopee Code League 2025',
      kategori: 'Kompetisi',
      tanggal_post: '2025-07-09T00:00:00.000Z',
      deskripsi: 'Kompetisi coding tingkat nasional dari Shopee',
      link_utama: 'https://careers.shopee.co.id/codeleague',
      kontak_email: 'codeleague@shopee.com',
      sumber: 'Shopee',
      content: 'Kompetisi coding tingkat nasional dari Shopee dengan hadiah menarik.',
      arsip: false
    },
    {
      id: 'lowongan-software-engineer-gojek-2025',
      judul: 'Lowongan Software Engineer Gojek',
      kategori: 'Lowongan',
      tanggal_post: '2025-07-09T00:00:00.000Z',
      deskripsi: 'Lowongan untuk posisi Software Engineer di Gojek',
      link_utama: 'https://career.gojek.com',
      kontak_email: 'recruitment@gojek.com',
      sumber: 'Gojek',
      content: 'Lowongan untuk posisi Software Engineer di Gojek dengan benefit menarik.',
      arsip: false
    }
  ]
}
