import { Link } from '@tanstack/react-router'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'

export function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200/70 bg-white/80 backdrop-blur">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        {/* Brand */}
        <div className="flex items-center gap-3">
          <Link to="/" className="text-xl font-extrabold tracking-tight text-slate-900">
            Greyfoam
          </Link>
        </div>

        {/* Desktop Nav */}
        <div className="hidden items-center gap-1 md:flex">
          <NavLink to="/" hash="products" label="Shop" />
          <NavLink to="/" hash="why" label="About" />
          <NavLink to="/" hash="contact" label="Contact" />
        </div>

        {/* Mobile Toggle */}
        <button
          className="inline-flex items-center gap-2 rounded-md p-2 text-slate-700 hover:bg-slate-100 md:hidden"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {/* Mobile Panel */}
      {open ? (
        <div className="border-t border-slate-200/70 bg-white md:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-3 sm:px-6 lg:px-8">
            <MobileNavLink to="/" hash="products" label="Shop" onClick={() => setOpen(false)} />
            <MobileNavLink to="/" hash="why" label="About" onClick={() => setOpen(false)} />
            <MobileNavLink to="/" hash="contact" label="Contact" onClick={() => setOpen(false)} />
          </div>
        </div>
      ) : null}
    </header>
  )
}

type NavLinkProps = {
  to: '/'
  hash?: string
  label: string
}

function NavLink({ to, hash, label }: NavLinkProps) {
  return (
    <Link
      to={to}
      hash={hash}
      className="rounded-full px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100 hover:text-slate-900"
    >
      {label}
    </Link>
  )
}

type MobileNavLinkProps = NavLinkProps & {
  onClick?: () => void
}

function MobileNavLink({ to, hash, label, onClick }: MobileNavLinkProps) {
  return (
    <Link
      to={to}
      hash={hash}
      className="rounded-md px-3 py-2 text-base font-medium text-slate-800 hover:bg-slate-100"
      onClick={onClick}
    >
      {label}
    </Link>
  )
}
