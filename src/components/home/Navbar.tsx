'use client'
import { useState, useEffect, useMemo } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import ImgCoffeeBean from '@/assets/img_coffeeBean.png'
import { navbarConstant } from '@/constants/text'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    if (open) document.body.style.overflow = 'hidden'
    else document.body.style.overflow = ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  const navItems = useMemo(
    () => [
      {
        href: '/',
        label: navbarConstant.HOME,
        match: (p: string) => p === '/',
      },
      {
        href: '/menu',
        label: navbarConstant.MENU,
        match: (p: string) => p.startsWith('/menu'),
      },
      {
        href: '/rewards',
        label: navbarConstant.REWARDS,
        match: (p: string) => p.startsWith('/rewards'),
      },
      {
        href: '/location',
        label: navbarConstant.STORE_LOCATOR,
        match: (p: string) => p.startsWith('/location'),
      },
    ],
    []
  )

  const baseLink =
    'text-lg font-medium rounded-md py-2 px-4 transition focus:outline-none focus:ring-2 focus:ring-starbuck/20'

  const activeLink = 'bg-starbuck text-[#000000]'

  const inactiveLink =
    'text-black hover:text-[#000000] font-bold hover:bg-starbuck'

  return (
    <header className="sticky top-0 z-50 w-full border-b border-neutral-200/60 bg-[#fefbf4] backdrop-blur supports-[backdrop-filter]:bg-[#fefbf4]/65 py-4">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 md:px-6">
        {/* Logo Brand */}
        <Link
          href="/"
          className="group inline-flex items-center gap-2 rounded-md focus:outline-none focus:ring-2 focus:ring-neutral-900/20 dark:focus:ring-white/20">
          <span className="grid w-15 h-15 place-items-center rounded-full">
            <Image
              src={ImgCoffeeBean}
              alt="Coffee bean"
              width={80}
              height={80}
              priority
            />
          </span>
          <span className="text-2xl font-semibold tracking-wide text-starbuck">
            {navbarConstant.COFFESHOP}
          </span>
        </Link>

        {/* Navbar Desktop */}
        <nav className="hidden items-center gap-10 md:flex">
          {navItems.map(item => {
            const isActive = item.match(pathname || '/')
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`${baseLink} ${isActive ? activeLink : inactiveLink}`}>
                {item.label}
              </Link>
            )
          })}
          {/* <Link
            href="/order"
            className="inline-flex items-center rounded-md border border-neutral-900 bg-starbuck px-4 py-2 text-sm font-semibold text-white/90 transition hover:opacity-90 hover:bg-white/90 hover:text-starbuck hover:border-starbuck">
            {navbarConstant.ORDER_NOW}
          </Link> */}
        </nav>
        {/* Mobile Hamburger */}
        <button
          type="button"
          onClick={() => setOpen(true)}
          aria-label="Open Menu"
          className="inline-flex items-center rounded-md border border-white bg-starbuck px-4 py-2 text-sm font-semibold text-white transition hover:opacity-90 md:hidden">
          <svg width={20} height={20} viewBox="0 0 24 24" aria-hidden="true">
            <path
              d="M3 6h18M3 12h18M3 18h18"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="fixed inset-0 z-50 md:hidden" role="dialog">
          <div
            className="absolute inset-0 bg-white/90 backdrop-blur-sm"
            onClick={() => setOpen(false)}>
            {/* Panel */}
            <div className="absolute inset-x-0 top-0 rounded-b-2xl border-b border-neutral-200 bg-white/90 p-4 shadow-xl">
              <div className="mx-auto flex max-w-6xl items-center justify-between">
                <Link
                  href="/"
                  className="inline-flex items-center gap-2"
                  onClick={() => setOpen(false)}>
                  <span className="grid w-10 h-10 place-items-center rounded-full text-white/90">
                    <Image
                      src={ImgCoffeeBean}
                      alt="Coffee bean"
                      width={80}
                      height={80}
                      priority
                    />
                  </span>
                  <span className="text-lg font-semibold text-starbuck">
                    {navbarConstant.COFFESHOP}
                  </span>
                </Link>

                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  aria-label="Close Menu"
                  className="inline-flex w-10 h-10 items-center justify-center rounded-md border border-white text-starbuck hover:bg-starbuck hover:text-white/90 transition">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    aria-hidden="true">
                    <path
                      d="M6 6l12 12M18 6l-12 12"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                </button>
              </div>

              <div className="mx-auto mt-4 grid max-w-6xl gap-1 pb-4">
                {navItems.map(item => {
                  const isActive = item.match(pathname || '/')
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setOpen(false)}
                      aria-current={isActive ? 'page' : undefined}
                      className={`rounded-lg px-4 py-2 text-base font-medium transition ${isActive ? 'bg-starbuck text-white/90' : 'text-starbuck hover:text-white/90 hover:bg-starbuck'}`}>
                      {item.label}
                    </Link>
                  )
                })}
                <Link
                  href="/order"
                  onClick={() => setOpen(false)}
                  className="mt-1 inline-flex items-center justify-center rounded-lg border border-starbuck bg-white px-4 py-3 text-base font-semibold text-starbuck ">
                  {navbarConstant.ORDER_NOW}
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
