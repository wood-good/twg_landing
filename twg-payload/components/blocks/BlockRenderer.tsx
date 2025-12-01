'use client'

import type { Page } from '@/tina/__generated__/types'
import HeroBlock from './HeroBlock'
import FeaturesGridBlock from './FeaturesGridBlock'
import EditorialTextBlock from './EditorialTextBlock'
import ImageSectionBlock from './ImageSectionBlock'
import CTABlock from './CTABlock'
import StatsBlock from './StatsBlock'
import TestimonialBlock from './TestimonialBlock'

type PageBlock = NonNullable<Page['blocks']>[number]

interface BlockRendererProps {
  blocks: PageBlock[] | null | undefined
}

export default function BlockRenderer({ blocks }: BlockRendererProps) {
  if (!blocks || blocks.length === 0) {
    return null
  }

  return (
    <>
      {blocks.map((block, index) => {
        if (!block) return null

        const key = `block-${index}-${block.__typename}`

        switch (block.__typename) {
          case 'PageBlocksHero':
            return <HeroBlock key={key} data={block} />
          case 'PageBlocksFeaturesGrid':
            return <FeaturesGridBlock key={key} data={block} />
          case 'PageBlocksEditorialText':
            return <EditorialTextBlock key={key} data={block} />
          case 'PageBlocksImageSection':
            return <ImageSectionBlock key={key} data={block} />
          case 'PageBlocksCta':
            return <CTABlock key={key} data={block} />
          case 'PageBlocksStats':
            return <StatsBlock key={key} data={block} />
          case 'PageBlocksTestimonial':
            return <TestimonialBlock key={key} data={block} />
          default:
            console.warn(`Unknown block type: ${(block as any).__typename}`)
            return (
              <div key={key} className="p-8 bg-yellow-100 text-yellow-800">
                Unknown block type: {(block as any).__typename}
              </div>
            )
        }
      })}
    </>
  )
}
