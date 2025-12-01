import { getPageProps } from '@/lib/tina'
import HomePageClient from './page-client'

export default async function HomePage() {
  const props = await getPageProps('home')

  return <HomePageClient {...props} />
}
