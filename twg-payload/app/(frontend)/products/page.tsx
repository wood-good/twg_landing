import { getPageProps } from '@/lib/tina'
import PageClient from '@/components/PageClient'

export default async function ProductsPage() {
  const props = await getPageProps('products')

  return (
    <PageClient
      {...props}
      fallbackHero={{
        heading: 'Our Products',
        subheading: 'Discover our collection of meticulously crafted designs',
        size: 'small',
      }}
    />
  )
}
