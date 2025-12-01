'use client'

import { useTina } from 'tinacms/dist/react'
import Hero from '@/components/Hero'
import { BlockRenderer } from '@/components/blocks'
import type { TinaPageProps } from '@/lib/tina'

interface PageClientProps extends TinaPageProps {
  fallbackHero?: {
    heading: string
    subheading?: string
    size?: 'default' | 'small'
  }
}

export default function PageClient({ fallbackHero, ...props }: PageClientProps) {
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
  const heroHeading = content.hero?.heading || fallbackHero?.heading || content.title || 'Welcome'
  const heroSubheading = content.hero?.subheading || fallbackHero?.subheading || content.description
  const heroSize = fallbackHero?.size || 'default'

  return (
    <>
      <Hero
        heading={heroHeading}
        subheading={heroSubheading}
        size={heroSize}
        theme="light"
      />

      {/* Legacy content notice */}
      <section className="content-block bg-yellow-50 py-12">
        <div className="content-narrow text-center">
          <p className="text-yellow-800">
            This page is using legacy content format.
            Add blocks in the CMS admin ({`/admin`}) to use the new block-based layout.
          </p>
        </div>
      </section>
    </>
  )
}
