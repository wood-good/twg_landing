import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import type { Page, PageQuery, PageQueryVariables } from '@/tina/__generated__/types'

export type PageContent = Page

export interface TinaPageProps {
  query: string
  variables: PageQueryVariables
  data: PageQuery
}

// Map _template names to __typename format expected by BlockRenderer
const templateToTypename: Record<string, string> = {
  hero: 'PageBlocksHero',
  featuresGrid: 'PageBlocksFeaturesGrid',
  editorialText: 'PageBlocksEditorialText',
  imageSection: 'PageBlocksImageSection',
  cta: 'PageBlocksCta',
  stats: 'PageBlocksStats',
  testimonial: 'PageBlocksTestimonial',
}

// Transform blocks array to include __typename
function transformBlocks(blocks: any[] | undefined) {
  if (!blocks || !Array.isArray(blocks)) return []

  return blocks.map((block) => {
    const template = block._template
    const typename = templateToTypename[template] || `PageBlocks${template?.charAt(0).toUpperCase()}${template?.slice(1)}`

    return {
      ...block,
      __typename: typename,
    }
  })
}

// Read MDX file directly from filesystem (works at build time and runtime)
function readMdxContent(slug: string) {
  const contentDir = path.join(process.cwd(), 'content', 'pages')
  const filePath = path.join(contentDir, `${slug}.mdx`)

  if (!fs.existsSync(filePath)) {
    return null
  }

  const fileContent = fs.readFileSync(filePath, 'utf-8')
  const { data, content } = matter(fileContent)

  // Transform blocks to include __typename
  const transformedData = {
    ...data,
    blocks: transformBlocks(data.blocks),
  }

  return {
    ...transformedData,
    body: content,
    _sys: {
      filename: slug,
      basename: `${slug}.mdx`,
      breadcrumbs: [slug],
      path: `content/pages/${slug}.mdx`,
      relativePath: `${slug}.mdx`,
      extension: '.mdx',
      template: '',
      collection: {} as any,
    },
    id: slug,
    _values: data,
  }
}

export async function getPageProps(slug: string): Promise<TinaPageProps> {
  const content = readMdxContent(slug)

  if (!content) {
    throw new Error(`Page not found: ${slug}`)
  }

  // Add required fields for Page type
  const pageContent = {
    __typename: 'Page' as const,
    ...content,
  }

  return {
    query: '',
    variables: { relativePath: `${slug}.mdx` },
    data: { page: pageContent } as unknown as PageQuery,
  }
}

export async function getPageContent(slug: string): Promise<PageContent> {
  const content = readMdxContent(slug)

  if (!content) {
    return {
      title: slug.charAt(0).toUpperCase() + slug.slice(1),
      _sys: {
        filename: slug,
        basename: `${slug}.mdx`,
        breadcrumbs: [slug],
        path: `content/pages/${slug}.mdx`,
        relativePath: `${slug}.mdx`,
        extension: '.mdx',
        template: '',
        collection: {} as any,
      },
      id: slug,
      _values: {},
    } as PageContent
  }

  return content as PageContent
}

export async function getAllPages() {
  const contentDir = path.join(process.cwd(), 'content', 'pages')

  if (!fs.existsSync(contentDir)) {
    return []
  }

  const files = fs.readdirSync(contentDir).filter(f => f.endsWith('.mdx'))

  return files.map(file => {
    const slug = file.replace('.mdx', '')
    return readMdxContent(slug)
  }).filter(Boolean)
}
