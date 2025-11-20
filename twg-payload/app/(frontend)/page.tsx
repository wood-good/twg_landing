import Hero from '@/components/Hero'
import FeatureGrid from '@/components/FeatureGrid'

export default function HomePage() {
  return (
    <>
      <Hero
        heading="Exceptional Design Meets Sustainable Manufacturing"
        subheading="Crafting the future of premium products with innovative practices"
        ctaText="Explore Our Work"
        ctaLink="/products"
      />

      <section className="py-24 px-6 max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-display font-bold mb-16 text-center">
          What We Do
        </h2>
        <FeatureGrid
          features={[
            {
              title: "Premium Products",
              description: "Meticulously crafted with attention to every detail",
              href: "/products"
            },
            {
              title: "Sustainable Manufacturing",
              description: "Pioneering eco-friendly production methods",
              href: "/manufacturing"
            },
            {
              title: "Innovation First",
              description: "Pushing boundaries in design and functionality",
              href: "/about"
            },
          ]}
        />
      </section>
    </>
  )
}
