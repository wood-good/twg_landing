import { getPageProps } from '@/lib/tina'
import PageClient from '@/components/PageClient'

export default async function SustainabilityPage() {
  const props = await getPageProps('sustainability')

  return (
    <PageClient
      {...props}
      fallbackHero={{
        heading: 'Sustainability',
        subheading: 'Committed to a greener future through responsible practices',
        size: 'small',
      }}
    />
  )
}
