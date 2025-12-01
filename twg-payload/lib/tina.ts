import client from '@/tina/__generated__/client'
import type { Page, PageQuery } from '@/tina/__generated__/types'

export type PageContent = Page

export async function getPageContent(slug: string): Promise<PageContent> {
  try {
    const result = await client.queries.page({ relativePath: `${slug}.mdx` })
    return result.data.page as PageContent
  } catch (error) {
    console.error(`Error fetching content for ${slug}:`, error)
    // Return minimal default content if fetch fails
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
}

export async function getAllPages() {
  try {
    const result = await client.queries.pageConnection()
    return result.data.pageConnection.edges?.map((edge) => edge?.node) || []
  } catch (error) {
    console.error('Error fetching all pages:', error)
    return []
  }
}
