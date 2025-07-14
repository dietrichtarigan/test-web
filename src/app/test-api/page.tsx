'use client'

import { useState, useEffect } from 'react'

export default function TestAPIPage() {
  const [status, setStatus] = useState('loading')

  useEffect(() => {
    setStatus('static-export')
  }, [])

  return (
    <div className="p-8 space-y-8">
      <h1 className="text-2xl font-bold mb-4">Static Export Mode</h1>
      
      {/* Status */}
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
        <h2 className="text-blue-800 font-bold mb-2">📋 Build Status</h2>
        <p className="text-blue-700">
          Website menggunakan static export mode untuk kompatibilitas dengan Netlify.
        </p>
      </div>

      {/* Info */}
      <div className="bg-green-50 border border-green-200 rounded-lg p-4">
        <h2 className="text-green-800 font-bold mb-2">✅ Static Export Active</h2>
        <ul className="text-sm text-green-700 space-y-1">
          <li>• API routes tidak tersedia dalam static export</li>
          <li>• Content di-load dari file markdown saat build time</li>
          <li>• Admin dashboard menggunakan Netlify CMS</li>
          <li>• Real-time updates melalui Netlify build hooks</li>
        </ul>
      </div>

      {/* Instructions */}
      <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
        <h2 className="text-gray-800 font-bold mb-2">📝 Cara Menggunakan</h2>
        <ul className="text-sm text-gray-700 space-y-1">
          <li>• Untuk menambah konten: Gunakan Netlify CMS di `/admin/`</li>
          <li>• Untuk melihat konten: Buka halaman infoprof</li>
          <li>• Untuk admin dashboard: Buka `/admin-dashboard`</li>
          <li>• Content akan update setelah deploy ulang</li>
        </ul>
      </div>

      {/* Links */}
      <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
        <h2 className="text-purple-800 font-bold mb-2">🔗 Quick Links</h2>
        <div className="space-y-2">
          <a 
            href="/admin/" 
            className="block text-purple-600 hover:text-purple-800 underline"
          >
            🎨 Netlify CMS
          </a>
          <a 
            href="/admin-dashboard" 
            className="block text-purple-600 hover:text-purple-800 underline"
          >
            📊 Admin Dashboard
          </a>
          <a 
            href="/infoprof" 
            className="block text-purple-600 hover:text-purple-800 underline"
          >
            💼 Info Karier
          </a>
        </div>
      </div>
    </div>
  )
}
