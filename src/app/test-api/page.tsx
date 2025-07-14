'use client'

import { useState, useEffect } from 'react'

export default function TestAPIPage() {
  const [healthData, setHealthData] = useState(null)
  const [infoprofData, setInfoprofData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function testAPIs() {
      try {
        setLoading(true)
        setError(null)

        // Test health endpoint
        const healthResponse = await fetch('/api/health')
        if (healthResponse.ok) {
          const healthResult = await healthResponse.json()
          setHealthData(healthResult)
        } else {
          throw new Error(`Health API failed: ${healthResponse.status}`)
        }

        // Test infoprof endpoint
        const infoprofResponse = await fetch('/api/content/infoprof')
        if (infoprofResponse.ok) {
          const infoprofResult = await infoprofResponse.json()
          setInfoprofData(infoprofResult)
        } else {
          console.warn(`InfoProf API failed: ${infoprofResponse.status}`)
        }
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Unknown error')
      } finally {
        setLoading(false)
      }
    }

    testAPIs()
  }, [])

  if (loading) return (
    <div className="p-8">
      <div className="flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
        <span className="ml-2">Testing APIs...</span>
      </div>
    </div>
  )

  if (error) return (
    <div className="p-8">
      <div className="bg-red-50 border border-red-200 rounded-lg p-4">
        <h2 className="text-red-800 font-bold mb-2">API Test Failed</h2>
        <p className="text-red-700">{error}</p>
        <p className="text-sm text-red-600 mt-2">
          Make sure you're running with API support: <code>npm run dev:api</code>
        </p>
      </div>
    </div>
  )

  return (
    <div className="p-8 space-y-8">
      <h1 className="text-2xl font-bold mb-4">API Test Results</h1>
      
      {/* Health Check */}
      <div className="bg-green-50 border border-green-200 rounded-lg p-4">
        <h2 className="text-green-800 font-bold mb-2">✅ Health Check API</h2>
        <pre className="bg-white p-4 rounded text-sm overflow-auto">
          {JSON.stringify(healthData, null, 2)}
        </pre>
      </div>

      {/* InfoProf API */}
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
        <h2 className="text-blue-800 font-bold mb-2">📋 InfoProf Content API</h2>
        <pre className="bg-white p-4 rounded text-sm overflow-auto">
          {JSON.stringify(infoprofData, null, 2)}
        </pre>
      </div>

      {/* Instructions */}
      <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
        <h2 className="text-gray-800 font-bold mb-2">📝 Instructions</h2>
        <ul className="text-sm text-gray-700 space-y-1">
          <li>• Health check should return success: true</li>
          <li>• InfoProf API should return content data or empty array</li>
          <li>• If APIs fail, run: <code>npm run dev:api</code></li>
          <li>• Check browser console for detailed errors</li>
        </ul>
      </div>
    </div>
  )
}
