import type { CollectionConfig } from 'payload'

export const Pages: CollectionConfig = {
  slug: 'pages',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'slug', 'updatedAt'],
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
      admin: {
        description: 'URL path for this page (e.g., "about", "products")',
      },
    },
    {
      name: 'hero',
      type: 'group',
      fields: [
        {
          name: 'heading',
          type: 'text',
          required: true,
        },
        {
          name: 'subheading',
          type: 'textarea',
        },
        {
          name: 'backgroundImage',
          type: 'upload',
          relationTo: 'media',
        },
        {
          name: 'ctaText',
          type: 'text',
        },
        {
          name: 'ctaLink',
          type: 'text',
        },
      ],
    },
    {
      name: 'content',
      type: 'array',
      label: 'Page Content Blocks',
      fields: [
        {
          name: 'blockType',
          type: 'select',
          required: true,
          options: [
            { label: 'Text Block', value: 'text' },
            { label: 'Feature Grid', value: 'features' },
            { label: 'Image Gallery', value: 'gallery' },
            { label: 'Contact Form', value: 'contact' },
          ],
        },
        {
          name: 'heading',
          type: 'text',
        },
        {
          name: 'text',
          type: 'richText',
          admin: {
            condition: (_, siblingData) => siblingData?.blockType === 'text',
          },
        },
        {
          name: 'features',
          type: 'array',
          admin: {
            condition: (_, siblingData) => siblingData?.blockType === 'features',
          },
          fields: [
            {
              name: 'title',
              type: 'text',
            },
            {
              name: 'description',
              type: 'textarea',
            },
            {
              name: 'image',
              type: 'upload',
              relationTo: 'media',
            },
          ],
        },
        {
          name: 'images',
          type: 'array',
          admin: {
            condition: (_, siblingData) => siblingData?.blockType === 'gallery',
          },
          fields: [
            {
              name: 'image',
              type: 'upload',
              relationTo: 'media',
            },
            {
              name: 'caption',
              type: 'text',
            },
          ],
        },
      ],
    },
    {
      name: 'seo',
      type: 'group',
      fields: [
        {
          name: 'title',
          type: 'text',
        },
        {
          name: 'description',
          type: 'textarea',
        },
        {
          name: 'keywords',
          type: 'text',
        },
      ],
    },
  ],
}
