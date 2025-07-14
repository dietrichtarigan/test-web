import { NextRequest, NextResponse } from 'next/server'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const contentDirectory = path.join(process.cwd(), 'content')
const infoprofDirectory = path.join(contentDirectory, 'infoprof')

// Ensure directory exists
if (!fs.existsSync(infoprofDirectory)) {
  fs.mkdirSync(infoprofDirectory, { recursive: true })
}

export async function GET() {
  try {
    if (!fs.existsSync(infoprofDirectory)) {
      return NextResponse.json({ success: true, data: [] })
    }

    const fileNames = fs.readdirSync(infoprofDirectory)
    const allPostsData = fileNames
      .filter(fileName => fileName.endsWith('.md'))
      .map((fileName) => {
        const id = fileName.replace(/\.md$/, '')
        const fullPath = path.join(infoprofDirectory, fileName)
        const fileContents = fs.readFileSync(fullPath, 'utf8')
        const matterResult = matter(fileContents)

        return {
          id,
          ...matterResult.data,
          content: matterResult.content
        }
      })

    // Sort posts by date
    const sortedPosts = allPostsData.sort((a: any, b: any) => {
      const dateA = new Date(a.tanggal_post)
      const dateB = new Date(b.tanggal_post)
      return dateB.getTime() - dateA.getTime()
    })

    return NextResponse.json({ success: true, data: sortedPosts })
  } catch (error) {
    console.error('Error reading infoprof content:', error)
    return NextResponse.json(
      { success: false, error: 'Failed to read content' },
      { status: 500 }
    )
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const {
      judul,
      kategori,
      deskripsi,
      konten,
      link_utama,
      kontak_email,
      sumber,
      tags,
      deadline,
      poster_url,
      arsip = false
    } = body

    // Validate required fields
    if (!judul || !kategori || !deskripsi) {
      return NextResponse.json(
        { success: false, error: 'Judul, kategori, dan deskripsi wajib diisi' },
        { status: 400 }
      )
    }

    // Create slug from judul
    const slug = judul
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-')
      .trim()

    // Create filename with timestamp
    const now = new Date()
    const timestamp = now.toISOString().split('T')[0]
    const filename = `${slug}-${timestamp}.md`

    // Create frontmatter
    const frontmatter = {
      judul,
      kategori,
      tanggal_post: now.toISOString(),
      deskripsi,
      ...(sumber && { sumber }),
      ...(link_utama && { link_utama }),
      ...(kontak_email && { kontak_email }),
      ...(poster_url && { poster_url }),
      ...(deadline && { deadline }),
      ...(tags && tags.length > 0 && { tags }),
      arsip
    }

    // Create markdown content
    const markdownContent = `---
${Object.entries(frontmatter)
  .map(([key, value]) => {
    if (Array.isArray(value)) {
      return `${key}:\n${value.map(item => `  - ${item}`).join('\n')}`
    }
    return `${key}: ${typeof value === 'string' ? `"${value}"` : value}`
  })
  .join('\n')}
---

${konten || ''}
`

    // Write file
    const filePath = path.join(infoprofDirectory, filename)
    fs.writeFileSync(filePath, markdownContent, 'utf8')

    console.log('InfoProf content saved:', filename)

    return NextResponse.json({
      success: true,
      message: 'Info karier berhasil disimpan',
      data: {
        id: filename.replace('.md', ''),
        ...frontmatter,
        content: konten
      }
    })
  } catch (error) {
    console.error('Error saving infoprof content:', error)
    return NextResponse.json(
      { success: false, error: 'Gagal menyimpan konten' },
      { status: 500 }
    )
  }
} 