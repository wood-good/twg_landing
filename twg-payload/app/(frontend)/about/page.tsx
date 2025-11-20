import Hero from '@/components/Hero'

export default function AboutPage() {
  return (
    <>
      <Hero
        heading="About Us"
        subheading="Our story of passion, innovation, and commitment to excellence"
        size="small"
      />

      <section className="py-24 px-6 max-w-4xl mx-auto">
        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-moooi-slate leading-relaxed mb-8">
            Founded with a vision to revolutionize the industry, we combine traditional craftsmanship
            with cutting-edge technology to create products that stand the test of time.
          </p>

          <h2 className="text-3xl font-display font-bold mt-16 mb-6">Our Values</h2>
          <div className="grid md:grid-cols-2 gap-8 mt-8">
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-2xl font-display font-bold mb-4">Quality</h3>
              <p className="text-moooi-slate">
                Every product is a testament to our unwavering commitment to excellence.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-2xl font-display font-bold mb-4">Sustainability</h3>
              <p className="text-moooi-slate">
                We believe in creating beautiful products without compromising our planet.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
