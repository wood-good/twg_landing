import Hero from '@/components/Hero'

export default function ManufacturingPage() {
  return (
    <>
      <Hero
        heading="Manufacturing Excellence"
        subheading="Where traditional craftsmanship meets modern technology"
        size="small"
      />

      <section className="py-24 px-6 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center mb-24">
          <div>
            <h2 className="text-4xl font-display font-bold mb-6">Our Process</h2>
            <p className="text-lg text-moooi-slate leading-relaxed mb-6">
              Every piece undergoes rigorous quality control and is crafted by skilled artisans
              using state-of-the-art equipment.
            </p>
            <p className="text-lg text-moooi-slate leading-relaxed">
              We maintain the highest standards from material selection to final inspection.
            </p>
          </div>
          <div className="aspect-video bg-moooi-sand rounded-lg" />
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="text-5xl font-display font-bold text-moooi-gold mb-2">15+</div>
            <p className="text-moooi-slate">Years of Experience</p>
          </div>
          <div className="text-center">
            <div className="text-5xl font-display font-bold text-moooi-gold mb-2">100%</div>
            <p className="text-moooi-slate">Quality Guaranteed</p>
          </div>
          <div className="text-center">
            <div className="text-5xl font-display font-bold text-moooi-gold mb-2">500+</div>
            <p className="text-moooi-slate">Projects Delivered</p>
          </div>
        </div>
      </section>
    </>
  )
}
