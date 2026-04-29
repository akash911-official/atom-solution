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
        className="mx-auto flex min-h-[92px] w-full max-w-[1404px] items-center justify-between px-6 sm:px-8 xl:px-0"
      >
        <a href="/" className="flex items-center" aria-label="Atom homepage">
          <img src={logo} alt="Atom Technology Solution" className="h-[58px] w-auto" />
        </a>

        <div className="hidden items-center gap-12 lg:flex">
          {navLinks.map((link) => (
            <a
              className="text-lg font-medium text-ink transition hover:text-primary"
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
          className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-line text-ink lg:hidden"
          onClick={() => setIsOpen((current) => !current)}
          type="button"
        >
          {isOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </button>
      </nav>

      {isOpen ? (
        <div className="border-t border-line bg-white px-6 pb-6 lg:hidden">
          <div className="mx-auto flex max-w-[1404px] flex-col gap-2 pt-4">
            {navLinks.map((link) => (
              <a
                className="rounded-lg px-3 py-3 text-base font-semibold text-ink hover:bg-primary-soft hover:text-primary"
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
