'use client'

import { useState, useEffect } from 'react'
import { getInfoProfPosts, InfoProfPost } from '@/lib/static-data'

export default function AdminPageSimple() {
  const [activeTab, setActiveTab] = useState('overview')
  const [showInfoProfForm, setShowInfoProfForm] = useState(false)
  const [infoProfData, setInfoProfData] = useState<InfoProfPost[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [message, setMessage] = useState<{ type: 'success' | 'error', text: string } | null>(null)

  const tabs = [
    { id: 'overview', name: 'Overview', icon: '📊' },
    { id: 'infoprof', name: 'Info Karier', icon: '💼' },
    { id: 'cms', name: 'Netlify CMS', icon: '🎨' }
  ]

  // Load existing infoprof data
  const loadInfoProfData = async () => {
    setIsLoading(true)
    try {
      // Load data from static files instead of API
      const data = getInfoProfPosts()
      setInfoProfData(data)
    } catch (error) {
      console.error('Error loading infoprof data:', error)
      setMessage({ type: 'error', text: 'Gagal memuat data info karier' })
    } finally {
      setIsLoading(false)
    }
  }

  // Load data on component mount
  useEffect(() => {
    if (activeTab === 'infoprof') {
      loadInfoProfData()
    }
  }, [activeTab])

  // Handle form submission
  const handleInfoProfSubmit = async (formData: any) => {
    try {
      console.log('Form submission not available in static export mode')
      setMessage({ type: 'error', text: 'Form submission tidak tersedia dalam mode static export. Gunakan Netlify CMS untuk menambah konten.' })
      setShowInfoProfForm(false)
    } catch (error) {
      console.error('Error submitting form:', error)
      const errorMsg = error instanceof Error ? error.message : 'Terjadi kesalahan saat menyimpan data'
      setMessage({ type: 'error', text: errorMsg })
    }
  }

  // Clear message after 5 seconds
  useEffect(() => {
    if (message) {
      const timer = setTimeout(() => setMessage(null), 5000)
      return () => clearTimeout(timer)
    }
  }, [message])

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-xl font-semibold text-gray-900">
                🎯 ARCADE HIMAFI - Admin Dashboard
              </h1>
            </div>
            
            <div className="flex items-center space-x-4">
                <a 
                  href="/admin/" 
                  className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 transition"
                >
                  🎨 Netlify CMS
                </a>
                
                <a 
                  href="/" 
                  className="inline-flex items-center px-3 py-2 border border-gray-300 text-sm leading-4 font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 transition"
                >
                  🌐 View Site
                </a>
            </div>
          </div>
        </div>
      </header>

      {/* Message notification */}
      {message && (
        <div className={`fixed top-20 right-4 z-50 px-4 py-2 rounded-md shadow-lg ${
          message.type === 'success' ? 'bg-green-500 text-white' : 'bg-red-500 text-white'
        }`}>
          {message.text}
        </div>
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Admin Dashboard</h1>
          <p className="text-gray-600">Kelola website ARCADE HIMAFI ITB</p>
        </div>

        {/* Tabs */}
        <div className="border-b border-gray-200 mb-6">
          <nav className="-mb-px flex space-x-8">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`py-2 px-4 border-b-2 font-medium text-sm ${
                  activeTab === tab.id
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                {tab.icon} {tab.name}
              </button>
            ))}
          </nav>
        </div>

        {/* Content */}
        <div className="space-y-6">
          {activeTab === 'overview' && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white p-6 rounded-lg shadow">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 bg-blue-500 rounded-md flex items-center justify-center">
                      <span className="text-white text-sm font-bold">📄</span>
                    </div>
                  </div>
                  <div className="ml-5 w-0 flex-1">
                    <dl>
                      <dt className="text-sm font-medium text-gray-500 truncate">Total Content</dt>
                      <dd className="text-lg font-medium text-gray-900">{infoProfData.length}</dd>
                    </dl>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 bg-green-500 rounded-md flex items-center justify-center">
                      <span className="text-white text-sm font-bold">👀</span>
                    </div>
                  </div>
                  <div className="ml-5 w-0 flex-1">
                    <dl>
                      <dt className="text-sm font-medium text-gray-500 truncate">Active Info</dt>
                      <dd className="text-lg font-medium text-gray-900">{infoProfData.filter(item => !item.arsip).length}</dd>
                    </dl>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 bg-yellow-500 rounded-md flex items-center justify-center">
                      <span className="text-white text-sm font-bold">📁</span>
                    </div>
                  </div>
                  <div className="ml-5 w-0 flex-1">
                    <dl>
                      <dt className="text-sm font-medium text-gray-500 truncate">Archived</dt>
                      <dd className="text-lg font-medium text-gray-900">{infoProfData.filter(item => item.arsip).length}</dd>
                    </dl>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 bg-purple-500 rounded-md flex items-center justify-center">
                      <span className="text-white text-sm font-bold">⭐</span>
                    </div>
                  </div>
                  <div className="ml-5 w-0 flex-1">
                    <dl>
                      <dt className="text-sm font-medium text-gray-500 truncate">Latest Update</dt>
                      <dd className="text-lg font-medium text-gray-900">Today</dd>
                    </dl>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'infoprof' && (
            <div className="space-y-6">
              {/* Header with Add Button */}
              <div className="bg-white shadow rounded-lg">
                <div className="px-4 py-5 sm:p-6">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-lg leading-6 font-medium text-gray-900">
                      💼 Kelola Info Karier & Profesi
                    </h3>
                    <button
                      onClick={() => setShowInfoProfForm(true)}
                      className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
                    >
                      ➕ Tambah Info Baru
                    </button>
                  </div>
                  
                  <p className="text-sm text-gray-600 mb-6">
                    Kelola informasi karier, magang, beasiswa, dan kesempatan lainnya untuk mahasiswa fisika.
                  </p>

                  {/* Quick Stats */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                    <div className="text-center p-3 bg-blue-50 rounded-lg">
                      <div className="text-2xl font-bold text-blue-600">{infoProfData.filter(item => item.kategori === 'Magang').length}</div>
                      <div className="text-xs text-gray-600">Magang</div>
                    </div>
                    <div className="text-center p-3 bg-green-50 rounded-lg">
                      <div className="text-2xl font-bold text-green-600">{infoProfData.filter(item => item.kategori === 'Beasiswa').length}</div>
                      <div className="text-xs text-gray-600">Beasiswa</div>
                    </div>
                    <div className="text-center p-3 bg-yellow-50 rounded-lg">
                      <div className="text-2xl font-bold text-yellow-600">{infoProfData.filter(item => item.kategori === 'Lowongan').length}</div>
                      <div className="text-xs text-gray-600">Lowongan</div>
                    </div>
                    <div className="text-center p-3 bg-purple-50 rounded-lg">
                      <div className="text-2xl font-bold text-purple-600">{infoProfData.filter(item => item.kategori === 'Kompetisi').length}</div>
                      <div className="text-xs text-gray-600">Kompetisi</div>
                    </div>
                  </div>

                  {/* Data Table */}
                  {isLoading ? (
                    <div className="text-center py-8">
                      <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
                      <p className="mt-2 text-gray-600">Memuat data...</p>
                    </div>
                  ) : infoProfData.length === 0 ? (
                    <div className="text-center py-8">
                      <div className="text-gray-400 text-4xl mb-4">📝</div>
                      <h3 className="text-lg font-medium text-gray-900 mb-2">Belum ada data</h3>
                      <p className="text-gray-600 mb-4">Mulai tambahkan info karier pertama Anda.</p>
                      <button
                        onClick={() => setShowInfoProfForm(true)}
                        className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
                      >
                        ➕ Tambah Info Pertama
                      </button>
                    </div>
                  ) : (
                    <div className="overflow-x-auto">
                      <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                          <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                              Judul
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                              Kategori
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                              Tanggal
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                              Status
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                              Aksi
                            </th>
                          </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                          {infoProfData.map((item, index) => (
                            <tr key={index} className="hover:bg-gray-50">
                              <td className="px-6 py-4 whitespace-nowrap">
                                <div className="text-sm font-medium text-gray-900">{item.judul}</div>
                                <div className="text-sm text-gray-500">{item.sumber}</div>
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap">
                                <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                                  item.kategori === 'Magang' ? 'bg-blue-100 text-blue-800' :
                                  item.kategori === 'Beasiswa' ? 'bg-green-100 text-green-800' :
                                  item.kategori === 'Lowongan' ? 'bg-yellow-100 text-yellow-800' :
                                  item.kategori === 'Kompetisi' ? 'bg-purple-100 text-purple-800' :
                                  'bg-gray-100 text-gray-800'
                                }`}>
                                  {item.kategori}
                                </span>
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                {new Date(item.tanggal_post).toLocaleDateString('id-ID')}
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap">
                                <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                                  item.arsip ? 'bg-red-100 text-red-800' : 'bg-green-100 text-green-800'
                                }`}>
                                  {item.arsip ? 'Arsip' : 'Aktif'}
                                </span>
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                                <button className="text-blue-600 hover:text-blue-900 mr-3">
                                  Edit
                                </button>
                                <button className="text-red-600 hover:text-red-900">
                                  Hapus
                                </button>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}

          {activeTab === 'cms' && (
            <div className="bg-white shadow rounded-lg">
              <div className="px-4 py-5 sm:p-6">
                <h3 className="text-lg leading-6 font-medium text-gray-900 mb-4">Netlify CMS</h3>
                <div className="space-y-4">
                  <div className="border-l-4 border-purple-400 bg-purple-50 p-4">
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="text-sm text-purple-700">
                          <strong>Netlify CMS:</strong> Interface visual untuk mengelola konten
                        </p>
                        <p className="text-xs text-purple-600 mt-1">
                          Lebih mudah untuk non-technical users
                        </p>
                      </div>
                      <a
                        href="/admin/"
                        className="text-xs text-purple-600 hover:text-purple-800 bg-white px-3 py-1 rounded border"
                      >
                        Buka CMS →
                      </a>
                    </div>
                  </div>
                  <div className="border-l-4 border-blue-400 bg-blue-50 p-4">
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="text-sm text-blue-700">
                          <strong>Admin Dashboard:</strong> Interface custom untuk power users
                        </p>
                        <p className="text-xs text-blue-600 mt-1">
                          Lebih banyak fitur dan kontrol
                        </p>
                      </div>
                      <button
                        onClick={() => setActiveTab('infoprof')}
                        className="text-xs text-blue-600 hover:text-blue-800 bg-white px-3 py-1 rounded border"
                      >
                        Gunakan Dashboard →
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* InfoProf Form Modal */}
        {showInfoProfForm && (
          <div className="fixed inset-0 bg-gray-900 bg-opacity-60 overflow-y-auto h-full w-full z-50">
            <div className="relative top-20 mx-auto p-6 border w-11/12 max-w-4xl shadow-xl rounded-lg bg-white">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-bold text-gray-900">
                  ⚠️ Static Export Mode
                </h3>
                <button
                  onClick={() => setShowInfoProfForm(false)}
                  className="text-gray-500 hover:text-gray-700 text-2xl font-bold w-8 h-8 flex items-center justify-center"
                >
                  ✕
                </button>
              </div>
              
              <div className="text-center py-8">
                <div className="text-gray-400 text-4xl mb-4">🚫</div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">Form Tidak Tersedia</h3>
                <p className="text-gray-600 mb-4">
                  Dalam mode static export, form submission tidak tersedia. 
                  Gunakan Netlify CMS untuk menambah dan mengedit konten.
                </p>
                <a
                  href="/admin/"
                  className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700"
                >
                  🎨 Buka Netlify CMS
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
