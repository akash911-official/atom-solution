import { Menu, X } from 'lucide-react'
import { useState } from 'react'
import logo from '../../assets/images/atom-logo.png'
import { navLinks } from '../../data/navLinks'
import PrimaryButton from '../ui/PrimaryButton'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-white">
      <nav
        aria-label="Primary navigation"
        className="mx-auto flex min-h-16 w-full max-w-[1404px] items-center justify-between px-4 sm:min-h-20 sm:px-6 lg:min-h-[92px] lg:px-8 2xl:px-0"
      >
        <a href="/" className="flex items-center" aria-label="Atom homepage">
          <img
            src={logo}
            alt="Atom Technology Solution"
            className="h-10 w-auto sm:h-12 lg:h-[58px]"
          />
        </a>

        <div className="hidden items-center gap-8 lg:flex xl:gap-12">
          {navLinks.map((link) => (
            <a
              className="text-base font-medium text-ink transition hover:text-primary xl:text-lg"
              href={link.href}
              key={link.label}
            >
              {link.label}
            </a>
          ))}
        </div>

        <PrimaryButton href="#cta" size="sm" className="hidden lg:inline-flex">
          Book Free Consultation
        </PrimaryButton>

        <button
          aria-expanded={isOpen}
          aria-label="Toggle navigation"
          className="inline-flex h-12 w-12 items-center justify-center rounded-lg border border-line text-ink transition hover:border-primary hover:text-primary lg:hidden"
          onClick={() => setIsOpen((current) => !current)}
          type="button"
        >
          {isOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </button>
      </nav>

      {isOpen ? (
        <div className="border-t border-line bg-white px-4 pb-5 shadow-soft sm:px-6 lg:hidden">
          <div className="mx-auto flex max-w-[1404px] flex-col gap-2 pt-4">
            {navLinks.map((link) => (
              <a
                className="flex min-h-12 items-center rounded-lg px-3 text-base font-semibold text-ink hover:bg-primary-soft hover:text-primary"
                href={link.href}
                key={link.label}
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <PrimaryButton href="#cta" size="sm" className="mt-3 w-full">
              Book Free Consultation
            </PrimaryButton>
          </div>
        </div>
      ) : null}
    </header>
  )
}

export default Navbar
