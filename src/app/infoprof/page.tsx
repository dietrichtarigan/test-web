import { getAllInfoProfPosts, InfoProfPost } from '@/lib/cms-data'
import InfoProfClient from './InfoProfClient'

export default async function InfoProfPage() {
  // This runs at build time on the server
  let allInfo: InfoProfPost[] = []
  
  try {
    allInfo = getAllInfoProfPosts()
    console.log(`Loaded ${allInfo.length} InfoProf posts`)
  } catch (error) {
    console.error('Error loading InfoProf content:', error)
    allInfo = []
  }

  return <InfoProfClient initialData={allInfo} />
}
