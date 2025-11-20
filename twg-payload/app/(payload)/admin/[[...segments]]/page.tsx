import { generatePageMetadata } from '@payloadcms/next/utilities'
import config from '@/payload.config'
import { RootPage, generateMetadata } from '@payloadcms/next/views'

export const metadata = generatePageMetadata({ config })

const Page = RootPage

export default Page
