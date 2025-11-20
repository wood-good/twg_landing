import Hero from '@/components/Hero'
import ContactForm from '@/components/ContactForm'

export default function ContactPage() {
  return (
    <>
      <Hero
        heading="Get in Touch"
        subheading="Let's discuss how we can bring your vision to life"
        size="small"
      />

      <section className="py-24 px-6 max-w-4xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <h2 className="text-3xl font-display font-bold mb-6">Contact Information</h2>
            <div className="space-y-6">
              <div>
                <h3 className="font-bold mb-2">Address</h3>
                <p className="text-moooi-slate">
                  123 Design Street<br />
                  Innovation District<br />
                  City, Country 12345
                </p>
              </div>
              <div>
                <h3 className="font-bold mb-2">Email</h3>
                <p className="text-moooi-slate">hello@twg.com</p>
              </div>
              <div>
                <h3 className="font-bold mb-2">Phone</h3>
                <p className="text-moooi-slate">+1 (555) 123-4567</p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-display font-bold mb-6">Send a Message</h2>
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  )
}
