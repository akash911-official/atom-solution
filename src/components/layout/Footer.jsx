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
const socials = ['in', 'x', 'f', 'ig']

function Footer() {
  return (
    <footer className="bg-navy text-white lg:min-h-[550px]">
      <div className="mx-auto w-full max-w-[1404px] px-4 py-5 sm:px-6 md:py-16 lg:px-8 lg:py-20 xl:py-5 2xl:px-0">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-16 xl:gap-20">
          <div>
            <a
              href="/"
              aria-label="Atom homepage"
              className="inline-flex rounded-lg bg-white px-4 py-3 sm:px-5"
            >
              <img
                src={logo}
                alt="Atom Technology Solution"
                className="h-10 w-auto sm:h-12 lg:h-14"
              />
            </a>
            <p className="mt-5 max-w-[320px] text-base leading-7 text-white/75 sm:mt-7 lg:text-lg lg:leading-8">
              Empowering businesses with strategic marketing and consulting
              services that drive measurable growth and lasting success.
            </p>
            <div className="mt-6 flex gap-3 sm:mt-8 sm:gap-4">
              {socials.map((social) => (
                <a
                  aria-label={`Atom social ${social}`}
                  className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-sm font-bold text-white transition hover:bg-primary"
                  href="#"
                  key={social}
                >
                  {social}
                </a>
              ))}
            </div>
          </div>
          <div className="grid  grid-cols-2 sm:grid-cols-2 lg:grid-cols-2 lg:gap-12 xl:gap-25 sm:gap-12 md:gap-16">
          <div>
            <h2 className="text-lg font-extrabold text-white lg:text-xl">
              Quick Links
            </h2>
            <ul className="mt-5 space-y-1 sm:mt-7 sm:space-y-4 pl-2">
              {quickLinks.map((link) => (
                <li key={link}>
                  <a
                    className="inline-flex min-h-10 items-center text-base text-white/70 transition hover:text-white lg:text-lg"
                    href="#"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-lg font-extrabold text-white lg:text-xl">
              Services
            </h2>
            <ul className="mt-5 space-y-1 sm:mt-7 sm:space-y-4">
              {footerServices.map((service) => (
                <li key={service}>
                  <a
                    className="inline-flex min-h-10 items-center text-base text-white/70 transition hover:text-white lg:text-lg"
                    href="#services"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          </div>
          <div>
            <h2 className="text-lg font-extrabold text-white lg:text-xl">
              Contact Us
            </h2>
            <ul className="mt-5 space-y-5 text-base leading-7 text-white/70 sm:mt-7 lg:space-y-6 lg:text-lg lg:leading-8">
              <li className="flex gap-4 sm:gap-5">
                <MapPin aria-hidden="true" className="mt-1 shrink-0 text-primary" />
                <span>
                  123 Business Avenue
                  <br />
                  New York, NY 10001
                </span>
              </li>
              <li className="flex gap-4 sm:gap-5">
                <Phone aria-hidden="true" className="mt-1 shrink-0 text-primary" />
                <a href="tel:+15551234567" className="transition hover:text-white">
                  +1 (555) 123-4567
                </a>
              </li>
              <li className="flex gap-4 sm:gap-5">
                <Mail aria-hidden="true" className="mt-1 shrink-0 text-primary" />
                <a
                  href="mailto:hello@atomtechnologyandsolutions.com"
                  className="break-all transition hover:text-white"
                >
                  hello@atomtechnologyandsolutions.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-5 lg:gap-20 border-t border-white/10 pt-6 text-sm text-white/65 sm:mt-12 sm:pt-8 md:flex-row md:items-center md:justify-between lg:mt-14 lg:text-base">
          <p>&copy; 2026 Atom Technology & Solutions. All rights reserved.</p>
          <div className="flex flex-col-1 gap-10 flex-auto sm:flex-row sm:flex-wrap sm:gap-8 md:gap-12">
            {legalLinks.map((link) => (
              <a
                className="inline-flex min-h-10 items-center transition hover:text-white"
                href="#"
                key={link}
              >
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
