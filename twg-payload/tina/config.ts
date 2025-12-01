import { defineConfig, Template } from "tinacms";

const branch =
  process.env.TINA_BRANCH ||
  process.env.GITHUB_BRANCH ||
  process.env.VERCEL_GIT_COMMIT_REF ||
  process.env.HEAD ||
  "main";

// Block Templates for flexible page composition
const heroBlock: Template = {
  name: "hero",
  label: "Hero Section",
  ui: {
    defaultItem: {
      heading: "Your Headline Here",
      theme: "light",
      size: "default",
    },
  },
  fields: [
    {
      type: "string",
      name: "heading",
      label: "Heading",
      description: "Main headline text (5-10 words for impact)",
    },
    {
      type: "string",
      name: "subheading",
      label: "Subheading",
      ui: { component: "textarea" },
      description: "Supporting text below the headline",
    },
    {
      type: "image",
      name: "backgroundImage",
      label: "Background Image",
      description: "Full-screen background image (recommended: 1920x1080+)",
    },
    {
      type: "string",
      name: "videoSrc",
      label: "Background Video URL",
      description: "Path to video file (e.g., /videos/hero.mp4)",
    },
    {
      type: "string",
      name: "ctaText",
      label: "CTA Button Text",
      description: "Call-to-action button text (leave empty to hide)",
    },
    {
      type: "string",
      name: "ctaLink",
      label: "CTA Button Link",
      description: "URL for the CTA button",
    },
    {
      type: "string",
      name: "theme",
      label: "Theme",
      options: [
        { value: "light", label: "Light (dark text)" },
        { value: "dark", label: "Dark (light text)" },
      ],
      description: "Color theme for text visibility",
    },
    {
      type: "string",
      name: "size",
      label: "Size",
      options: [
        { value: "default", label: "Full Screen" },
        { value: "small", label: "Compact (70vh)" },
      ],
    },
    {
      type: "boolean",
      name: "glassEffect",
      label: "Glass Effect",
      description: "Add frosted glass effect behind content",
    },
  ],
};

const featuresGridBlock: Template = {
  name: "featuresGrid",
  label: "Features Grid",
  ui: {
    defaultItem: {
      columns: "3",
      items: [
        { title: "Feature 1", description: "Description here" },
        { title: "Feature 2", description: "Description here" },
        { title: "Feature 3", description: "Description here" },
      ],
    },
  },
  fields: [
    {
      type: "string",
      name: "heading",
      label: "Section Heading",
      description: "Optional heading above the grid",
    },
    {
      type: "string",
      name: "columns",
      label: "Columns",
      options: [
        { value: "2", label: "2 Columns" },
        { value: "3", label: "3 Columns" },
        { value: "4", label: "4 Columns" },
      ],
      description: "Number of columns on desktop",
    },
    {
      type: "object",
      name: "items",
      label: "Feature Items",
      list: true,
      ui: {
        itemProps: (item) => ({ label: item?.title || "Feature" }),
      },
      fields: [
        {
          type: "string",
          name: "title",
          label: "Title",
          required: true,
        },
        {
          type: "string",
          name: "description",
          label: "Description",
          ui: { component: "textarea" },
        },
        {
          type: "image",
          name: "image",
          label: "Image/Icon",
        },
        {
          type: "string",
          name: "link",
          label: "Link URL",
          description: "Optional link for the feature card",
        },
      ],
    },
  ],
};

const editorialTextBlock: Template = {
  name: "editorialText",
  label: "Editorial Text Section",
  fields: [
    {
      type: "string",
      name: "heading",
      label: "Heading",
    },
    {
      type: "string",
      name: "layout",
      label: "Layout",
      options: [
        { value: "single", label: "Single Column" },
        { value: "two-column", label: "Two Columns" },
      ],
    },
    {
      type: "rich-text",
      name: "contentLeft",
      label: "Content (Left/Main)",
      description: "Main text content or left column",
    },
    {
      type: "rich-text",
      name: "contentRight",
      label: "Content (Right)",
      description: "Right column content (only for two-column layout)",
    },
    {
      type: "string",
      name: "backgroundColor",
      label: "Background Color",
      options: [
        { value: "white", label: "White" },
        { value: "cream", label: "Cream" },
        { value: "black", label: "Black" },
      ],
    },
  ],
};

const imageSectionBlock: Template = {
  name: "imageSection",
  label: "Full-Width Image Section",
  fields: [
    {
      type: "image",
      name: "image",
      label: "Background Image",
      description: "Required unless using a video background",
    },
    {
      type: "string",
      name: "videoSrc",
      label: "Background Video URL",
      description: "Optional video instead of image",
    },
    {
      type: "string",
      name: "heading",
      label: "Overlay Heading",
    },
    {
      type: "string",
      name: "text",
      label: "Overlay Text",
      ui: { component: "textarea" },
    },
    {
      type: "string",
      name: "ctaText",
      label: "CTA Button Text",
    },
    {
      type: "string",
      name: "ctaLink",
      label: "CTA Button Link",
    },
    {
      type: "string",
      name: "overlayPosition",
      label: "Content Position",
      options: [
        { value: "center", label: "Center" },
        { value: "bottom-left", label: "Bottom Left" },
        { value: "bottom-right", label: "Bottom Right" },
      ],
    },
    {
      type: "string",
      name: "theme",
      label: "Theme",
      options: [
        { value: "light", label: "Light Glass" },
        { value: "dark", label: "Dark Glass" },
      ],
    },
  ],
};

const ctaBlock: Template = {
  name: "cta",
  label: "Call-to-Action Section",
  ui: {
    defaultItem: {
      heading: "Ready to Get Started?",
      buttonText: "Contact Us",
      buttonLink: "/contact",
      theme: "dark",
    },
  },
  fields: [
    {
      type: "string",
      name: "heading",
      label: "Heading",
    },
    {
      type: "string",
      name: "subheading",
      label: "Subheading",
      ui: { component: "textarea" },
    },
    {
      type: "string",
      name: "buttonText",
      label: "Button Text",
      required: true,
    },
    {
      type: "string",
      name: "buttonLink",
      label: "Button Link",
      required: true,
    },
    {
      type: "string",
      name: "theme",
      label: "Theme",
      options: [
        { value: "light", label: "Light Background" },
        { value: "dark", label: "Dark Background" },
      ],
    },
  ],
};

const statsBlock: Template = {
  name: "stats",
  label: "Statistics Section",
  fields: [
    {
      type: "string",
      name: "heading",
      label: "Section Heading",
    },
    {
      type: "object",
      name: "items",
      label: "Stats",
      list: true,
      ui: {
        itemProps: (item) => ({ label: item?.label || "Stat" }),
      },
      fields: [
        {
          type: "string",
          name: "value",
          label: "Value",
          description: "e.g., 500+, 99%, $1M",
          required: true,
        },
        {
          type: "string",
          name: "label",
          label: "Label",
          required: true,
        },
      ],
    },
    {
      type: "string",
      name: "backgroundColor",
      label: "Background Color",
      options: [
        { value: "white", label: "White" },
        { value: "cream", label: "Cream" },
        { value: "black", label: "Black" },
      ],
    },
  ],
};

const testimonialBlock: Template = {
  name: "testimonial",
  label: "Testimonial Section",
  fields: [
    {
      type: "string",
      name: "quote",
      label: "Quote",
      ui: { component: "textarea" },
      required: true,
    },
    {
      type: "string",
      name: "author",
      label: "Author Name",
      required: true,
    },
    {
      type: "string",
      name: "role",
      label: "Author Role/Company",
    },
    {
      type: "image",
      name: "authorImage",
      label: "Author Photo",
    },
    {
      type: "string",
      name: "backgroundColor",
      label: "Background Color",
      options: [
        { value: "white", label: "White" },
        { value: "cream", label: "Cream" },
        { value: "black", label: "Black" },
      ],
    },
  ],
};

export default defineConfig({
  branch,
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID,
  token: process.env.TINA_TOKEN,

  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },
  media: {
    tina: {
      mediaRoot: "uploads",
      publicFolder: "public",
    },
  },
  schema: {
    collections: [
      {
        name: "page",
        label: "Pages",
        path: "content/pages",
        format: "mdx",
        ui: {
          router: ({ document }) => {
            if (document._sys.filename === "home") return "/";
            return `/${document._sys.filename}`;
          },
        },
        fields: [
          {
            type: "string",
            name: "title",
            label: "Page Title",
            isTitle: true,
            required: true,
          },
          {
            type: "string",
            name: "description",
            label: "Page Description",
            description: "Brief description for internal reference",
          },
          // Flexible blocks for page composition
          {
            type: "object",
            name: "blocks",
            label: "Page Blocks",
            description: "Add and arrange content blocks to build your page",
            list: true,
            templates: [
              heroBlock,
              featuresGridBlock,
              editorialTextBlock,
              imageSectionBlock,
              ctaBlock,
              statsBlock,
              testimonialBlock,
            ],
          },
          // Legacy fields (kept for backward compatibility)
          {
            type: "object",
            name: "hero",
            label: "Hero Section (Legacy)",
            description: "Legacy field - use Page Blocks instead",
            fields: [
              { type: "string", name: "heading", label: "Heading" },
              { type: "string", name: "subheading", label: "Subheading", ui: { component: "textarea" } },
              { type: "image", name: "image", label: "Image" },
            ],
          },
          {
            type: "object",
            name: "seo",
            label: "SEO Settings",
            fields: [
              {
                type: "string",
                name: "title",
                label: "SEO Title",
                description: "50-60 characters recommended",
              },
              {
                type: "string",
                name: "description",
                label: "SEO Description",
                description: "150-160 characters recommended",
                ui: { component: "textarea" },
              },
              {
                type: "image",
                name: "ogImage",
                label: "Social Share Image",
                description: "Image for social media sharing (1200x630 recommended)",
              },
            ],
          },
          {
            type: "rich-text",
            name: "body",
            label: "Body Content (Legacy)",
            isBody: true,
            description: "Legacy field - use Page Blocks instead",
          },
        ],
      },
      {
        name: "settings",
        label: "Site Settings",
        path: "content/settings",
        format: "json",
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        fields: [
          {
            type: "string",
            name: "siteName",
            label: "Site Name",
          },
          {
            type: "string",
            name: "siteDescription",
            label: "Site Description",
            ui: { component: "textarea" },
          },
          {
            type: "image",
            name: "logo",
            label: "Site Logo",
          },
          {
            type: "object",
            name: "navigation",
            label: "Main Navigation",
            list: true,
            ui: {
              itemProps: (item) => ({ label: item?.label || "Nav Item" }),
            },
            fields: [
              { type: "string", name: "label", label: "Label", required: true },
              { type: "string", name: "href", label: "Link", required: true },
            ],
          },
          {
            type: "object",
            name: "footer",
            label: "Footer Settings",
            fields: [
              { type: "string", name: "copyright", label: "Copyright Text" },
              {
                type: "object",
                name: "socialLinks",
                label: "Social Links",
                list: true,
                fields: [
                  { type: "string", name: "platform", label: "Platform" },
                  { type: "string", name: "url", label: "URL" },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
});
