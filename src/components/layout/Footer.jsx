import { Mail, MapPin, Phone } from 'lucide-react'
import logo from '../../assets/images/atom-logo.png'

const quickLinks = ['About Us', 'Our Team', 'Case Studies', 'Blog', 'Careers', 'Contact']
const footerServices = [
  'Growth Marketing',
  'Performance Ads',
  'Brand Strategy',
  'Business Consulting',
  'SEO & Content',
  'Analytics & Insights',
]
const legalLinks = ['Privacy Policy', 'Terms of Service', 'Cookie Policy']
const socials = ['in', 'x', 'f', '◎']

function Footer() {
  return (
    <footer className="min-h-[550px] bg-navy text-white">
      <div className="mx-auto w-full max-w-[1404px] px-6 py-20 sm:px-8 lg:py-24 xl:px-0">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-[1.45fr_1fr_1fr_1.65fr] lg:gap-20">
          <div>
            <a
              href="/"
              aria-label="Atom homepage"
              className="inline-flex rounded-lg bg-white px-5 py-3"
            >
              <img src={logo} alt="Atom Technology Solution" className="h-14 w-auto" />
            </a>
            <p className="mt-7 max-w-[320px] text-lg leading-8 text-white/75">
              Empowering businesses with strategic marketing and consulting
              services that drive measurable growth and lasting success.
            </p>
            <div className="mt-8 flex gap-4">
              {socials.map((social) => (
                <a
                  aria-label={`Atom social ${social}`}
                  className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-base font-bold text-white transition hover:bg-primary"
                  href="#"
                  key={social}
                >
                  {social}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-xl font-extrabold text-white">Quick Links</h2>
            <ul className="mt-7 space-y-4">
              {quickLinks.map((link) => (
                <li key={link}>
                  <a className="text-lg text-white/70 transition hover:text-white" href="#">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-extrabold text-white">Services</h2>
            <ul className="mt-7 space-y-4">
              {footerServices.map((service) => (
                <li key={service}>
                  <a className="text-lg text-white/70 transition hover:text-white" href="#services">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-extrabold text-white">Contact Us</h2>
            <ul className="mt-7 space-y-6 text-lg leading-8 text-white/70">
              <li className="flex gap-5">
                <MapPin aria-hidden="true" className="mt-1 shrink-0 text-primary" />
                <span>
                  123 Business Avenue
                  <br />
                  New York, NY 10001
                </span>
              </li>
              <li className="flex gap-5">
                <Phone aria-hidden="true" className="mt-1 shrink-0 text-primary" />
                <a href="tel:+15551234567" className="transition hover:text-white">
                  +1 (555) 123-4567
                </a>
              </li>
              <li className="flex gap-5">
                <Mail aria-hidden="true" className="mt-1 shrink-0 text-primary" />
                <a
                  href="mailto:hello@atomtechnologyandsolutions.com"
                  className="break-all transition hover:text-white"
                >
                  hello@atomtechnology&amp;solutions.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-7 border-t border-white/10 pt-8 text-base text-white/65 md:flex-row md:items-center md:justify-between">
          <p>© 2026 Atom Technology & Solutions. All rights reserved.</p>
          <div className="flex flex-wrap gap-8 md:gap-12">
            {legalLinks.map((link) => (
              <a className="transition hover:text-white" href="#" key={link}>
                {link}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
