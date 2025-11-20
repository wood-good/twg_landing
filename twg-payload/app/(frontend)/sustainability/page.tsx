import Hero from '@/components/Hero'

export default function SustainabilityPage() {
  return (
    <>
      <Hero
        heading="Sustainability"
        subheading="Committed to a greener future through responsible practices"
        size="small"
      />

      <section className="py-24 px-6 max-w-6xl mx-auto">
        <div className="mb-24">
          <h2 className="text-4xl font-display font-bold mb-8">Our Commitment</h2>
          <p className="text-xl text-moooi-slate leading-relaxed max-w-3xl">
            We believe that exceptional design shouldn't come at the expense of our planet.
            That's why we've integrated sustainability into every aspect of our operations.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="bg-white p-10 rounded-lg">
            <h3 className="text-2xl font-display font-bold mb-4">Eco-Friendly Materials</h3>
            <p className="text-moooi-slate leading-relaxed">
              We source sustainable, recycled, and biodegradable materials whenever possible,
              ensuring minimal environmental impact.
            </p>
          </div>

          <div className="bg-white p-10 rounded-lg">
            <h3 className="text-2xl font-display font-bold mb-4">Carbon Neutral</h3>
            <p className="text-moooi-slate leading-relaxed">
              Our facilities operate on renewable energy, and we offset all remaining emissions
              through certified carbon credit programs.
            </p>
          </div>

          <div className="bg-white p-10 rounded-lg">
            <h3 className="text-2xl font-display font-bold mb-4">Waste Reduction</h3>
            <p className="text-moooi-slate leading-relaxed">
              Zero-waste manufacturing processes ensure that every scrap is recycled or repurposed,
              minimizing our environmental footprint.
            </p>
          </div>

          <div className="bg-white p-10 rounded-lg">
            <h3 className="text-2xl font-display font-bold mb-4">Ethical Sourcing</h3>
            <p className="text-moooi-slate leading-relaxed">
              We partner only with suppliers who share our values and maintain fair labor practices
              throughout the supply chain.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
