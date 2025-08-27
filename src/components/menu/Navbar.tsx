"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (open) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open])

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/menu", label: "Menu" },
    { href: "/rewards", label: "Rewards" },
    { href: "/stores", label: "Store Locator" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-neutral-200/60 bg-[#fefbf4] backdrop-blur supports-[backdrop-filter]:bg-[#fefbf4]/65 py-4">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 md:px-6">
        {/* Logo Brand */}
        <Link href="/" className="group inline-flex items-center gap-2 rounded-md focus:outline-none focus:ring-2 focus:ring-neutral-900/20 dark:focus:ring-white/20">
          <span className="grid w-15 h-15 place-items-center rounded-full">
            <Image src="/coffee-bean.svg" alt="Coffee bean" width={80} height={80} priority />
          </span>
          <span className="text-2xl font-semibold tracking-wide text-[#233724]">
            COFFEESHOP
          </span>
        </Link>

        {/* Navbar Desktop */}
        <nav className="hidden items-center gap-10 md:flex">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="text-lg font-medium text-black hover:text-white/90 hover:bg-[#233724] rounded-md py-2 px-4 transition">
              {item.label}
            </Link>
          ))}

          <Link href="/order" className="inline-flex items-center rounded-md border border-neutral-900 bg-[#233724] px-4 py-2 text-sm font-semibold text-white/90 transition hover:opacity-90 hover:bg-white/90 hover:text-[#233724] hover:border-[#233724]">
            Order Now
          </Link>
        </nav>
        {/* Mobile Hamburger */}
        <button type="button" onClick={() => setOpen(true)} aria-label="Open Menu" className="inline-flex items-center rounded-md border border-white bg-[#233724] px-4 py-2 text-sm font-semibold text-white transition hover:opacity-90 md:hidden">
          <svg width={20} height={20} viewBox="0 0 24 24" aria-hidden="true">
            <path d="M3 6h18M3 12h18M3 18h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="fixed inset-0 z-50 md:hidden" role="dialog">
          <div className="absolute inset-0 bg-white/90 backdrop-blur-sm" onClick={() => setOpen(false)}>
            {/* Panel */}
            <div className="absolute inset-x-0 top-0 rounded-b-2xl border-b border-neutral-200 bg-white/90 p-4 shadow-xl">
              <div className="mx-auto flex max-w-6xl items-center justify-between">
                <Link href="/" className="inline-flex items-center gap-2" onClick={() => setOpen(false)}>
                  <span className="grid w-10 h-10 place-items-center rounded-full text-white/90">
                    <Image src="/coffee-bean.svg" alt="Coffee bean" width={80} height={80} priority />
                  </span>
                  <span className="text-lg font-semibold text-[#233724]">
                    COFFEESHOP
                  </span>
                </Link>

                <button type="button" onClick={() => setOpen(false)} aria-label="Close Menu" className="inline-flex w-10 h-10 items-center justify-center rounded-md border border-white text-[#233724] hover:bg-[#233724] hover:text-white/90 transition">
                  <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M6 6l12 12M18 6l-12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                </button>
              </div>

              <div className="mx-auto mt-4 grid max-w-6xl gap-1 pb-4">
                {navItems.map((item) => (
                  <Link key={item.href} href={item.href} onClick={() => setOpen(false)} className="rounded-lg px-4 py-2 text-base font-medium text-[#233724] hover:text-white/90 hover:bg-[#233724] transition">
                    {item.label}
                  </Link>
                ))}

                <Link href="/order" onClick={() => setOpen(false)} className="mt-1 inline-flex items-center justify-center rounded-lg border border-white/90 bg-[#233724] px-4 py-3 text-base font-semibold text-white "
                >
                  Order Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}