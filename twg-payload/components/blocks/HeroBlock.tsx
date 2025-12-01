'use client'

import type { PageBlocksHero } from '@/tina/__generated__/types'
import Hero from '@/components/Hero'

interface HeroBlockProps {
  data: PageBlocksHero
}

export default function HeroBlock({ data }: HeroBlockProps) {
  return (
    <Hero
      heading={data.heading || 'Welcome'}
      subheading={data.subheading || undefined}
      ctaText={data.ctaText || undefined}
      ctaLink={data.ctaLink || undefined}
      videoSrc={data.videoSrc || undefined}
      backgroundImage={data.backgroundImage || undefined}
      size={(data.size as 'default' | 'small') || 'default'}
      theme={(data.theme as 'light' | 'dark') || 'light'}
      glassEffect={data.glassEffect || false}
    />
  )
}
