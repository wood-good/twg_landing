import Hero from '@/components/Hero'

export default function ProductsPage() {
  return (
    <>
      <Hero
        heading="Our Products"
        subheading="Discover our collection of meticulously crafted designs"
        size="small"
      />

      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="group cursor-pointer">
              <div className="aspect-square bg-moooi-sand mb-4 overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-moooi-sand to-moooi-gold transform group-hover:scale-105 transition-transform duration-500" />
              </div>
              <h3 className="text-xl font-display font-bold mb-2">Product {i}</h3>
              <p className="text-moooi-slate">Exceptional design meets functionality</p>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
