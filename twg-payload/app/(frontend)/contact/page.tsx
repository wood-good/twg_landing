import { getPageProps } from '@/lib/tina'
import PageClient from '@/components/PageClient'

export default async function ContactPage() {
  const props = await getPageProps('contact')

  return (
    <PageClient
      {...props}
      fallbackHero={{
        heading: 'Get in Touch',
        subheading: "Let's discuss how we can bring your vision to life",
        size: 'small',
      }}
    />
  )
}
