import Link from "next/link";
import { Facebook, Twitter, Instagram } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/menu", label: "Menu" },
  { href: "/about", label: "About" },
  { href: "/rewards", label: "Rewards" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="border-t bg-[#fefbf4]">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 py-10 sm:grid-cols-2 md:grid-cols-3">
          <div>
            <h3 className="text-sm font-semibold tracking-wide text-stone-700">
              Quick Links
            </h3>
            <ul className="mt-4 space-y-3 text-sm">
              {navLinks.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-starbuck hover:text-stone-900 hover:underline"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold tracking-wide text-stone-700">
              Contact
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-stone-700">
              <li>
                <a href="tel:+11234567890" className="hover:underline">
                  123-456-7890
                </a>
              </li>
              <li>
                <a href="mailto:info@coffeeshop.com" className="hover:underline">
                  info@coffeeshop.com
                </a>
              </li>
              <li>Meikarta, ID</li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold tracking-wide text-stone-700">
              Follow Us
            </h3>
            <div className="mt-4 flex gap-4">
              <a
                aria-label="Facebook"
                href="https://facebook.com"
                className="group inline-flex size-10 items-center justify-center rounded-full border border-stone-300 hover:bg-starbuck hover:text-[#fefbf4] transition"
              >
                <Facebook className="h-5 w-5 text-starbuck group-hover:text-[#fefbf4]" />
              </a>
              <a
                aria-label="Twitter"
                href="https://x.com"
                className="group inline-flex size-10 items-center justify-center rounded-full border border-stone-300 hover:bg-starbuck hover:text-[#fefbf4] transition"
              >
                <Twitter className="h-5 w-5 text-starbuck group-hover:text-[#fefbf4]" />
              </a>
              <a
                aria-label="Instagram"
                href="https://instagram.com"
                className="group inline-flex size-10 items-center justify-center rounded-full border border-stone-300 hover:bg-starbuck hover:text-[#fefbf4] transition"
              >
                <Instagram className="h-5 w-5 text-starbuck group-hover:text-[#fefbf4]" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-stone-200 py-5 text-sm text-stone-600">
          <div className="flex flex-col items-center justify-between gap-3 sm:flex-row">
            <p>© {new Date().getFullYear()} Your Coffee Shop. All rights reserved.</p>
            <div className="flex gap-4">
              <Link href="/privacy" className="hover:underline">Privacy</Link>
              <Link href="/terms" className="hover:underline">Terms</Link>
              <Link href="/sitemap" className="hover:underline">Sitemap</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
