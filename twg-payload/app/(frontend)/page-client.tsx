'use client'

import { useTina } from 'tinacms/dist/react'
import Hero from '@/components/Hero'
import { BlockRenderer } from '@/components/blocks'
import type { TinaPageProps } from '@/lib/tina'

export default function HomePageClient(props: TinaPageProps) {
  // useTina hook enables visual editing in the CMS
  const { data } = useTina({
    query: props.query,
    variables: props.variables,
    data: props.data,
  })

  const content = data.page

  // If blocks exist, render them using BlockRenderer
  if (content.blocks && content.blocks.length > 0) {
    return <BlockRenderer blocks={content.blocks} />
  }

  // Fallback to legacy hero-based rendering
  return (
    <>
      <Hero
        heading={content.hero?.heading || "Exceptional Design for Modern Living"}
        subheading={content.hero?.subheading || "Where innovation meets craftsmanship"}
        ctaText="Discover Our Work"
        ctaLink="/products"
        theme="light"
        glassEffect={false}
      />

      {/* Legacy content notice */}
      <section className="content-block bg-yellow-50 py-12">
        <div className="content-narrow text-center">
          <p className="text-yellow-800">
            This page is using legacy content format.
            Please add blocks in the CMS admin to use the new block-based layout.
          </p>
        </div>
      </section>
    </>
  )
}
