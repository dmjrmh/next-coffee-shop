'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useRef } from 'react';

export type Product = {
  id: string;
  name: string;
  price: number;
  image: string;
  slug: string;
}

const specials: Product[] = [
  {
    id: "vanilla-latte",
    name: "Vanilla Latte",
    price: 17500,
    image: "/images/home/menu/vanilla.png",
    slug: "vanilla-latte",
  },
  {
    id: "cappuccino",
    name: "Cappuccino",
    price: 18000,
    image: "/images/home/menu/cappuccino.png",
    slug: "cappuccino",
  },
  {
    id: "matcha",
    name: "Matcha",
    price: 21000,
    image: "/images/home/menu/matcha.jpg",
    slug: "matcha",
  },
  {
    id: "almond-latte",
    name: "Almond Latte",
    price: 18000,
    image: "/images/home/menu/almond.jpg",
    slug: "almond-latte",
  },
  {
    id: "americano",
    name: "Americano",
    price: 19000,
    image: "/images/home/menu/americano.jpg",
    slug: "americano",
  },
]

function formatIDR(value: number) {
  return new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR", maximumFractionDigits: 0 }).format(value);
}

function ProductCard({ p }: { p: Product }) {
  return (
    <div className="w-[280px] shrink-0 snap-start rounded-2xl bg-[#faf6f1] p-3 shadow-sm ring-1 ring-black/5">
      <div className="overflow-hidden rounded-xl">
        <div className="relative aspect-[4/3] w-full">
          <Image
            src={p.image}
            alt={p.name}
            fill
            sizes="(max-width: 768px 80vw, 280px"
            className='object-cover'
            priority={false}
          />
        </div>
      </div>

      <div className="mt-3 space-y-1">
        <h3 className="text-lg font-semibold tracking-tight text-stone-9">
          {p.name}
        </h3>
        <p className="text-sm font-semibold text-stone-800">
          {formatIDR(p.price)}
        </p>
        <div className="pt-2">
          <Link
            href={`/menu/${p.slug}`}
            className="inline-flex items-center justify-center rounded-xl px-4 py-2 text-sm font-medium bg-starbuck text-white hover:bg-emerald-800 transition-colors"
          >
            Know More
          </Link>
        </div>
      </div>
    </div>
  )
}

export default function Carousel({
  title = "Daily Specials",
  items = specials,
}: {
  title?: string;
  items?: Product[];
  className?: string;
}) {
  const trackRef = useRef<HTMLDivElement>(null);

  const scrollBy = (dir: 1 | -1) => () => {
    const el = trackRef.current;
    if (!el) return;
    const card = el.querySelector<HTMLDivElement>("div[role='listitem']")
    const delta = (card?.offsetWidth || 280) + 16; // card width + gap
    el.scrollBy({ left: dir * delta, behavior: "smooth" });
  };

  if (!items?.length) return null

  return (
    <section className="px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-4 flex items-center justify-between gap-3">
          <h2 className="text-2xl font-semibold tracking-tight text-stone-900">{title}</h2>
          <div className="hidden items-center gap-2 sm:flex">
            <button
              onClick={scrollBy(-1)}
              className="h-9 w-9 rounded-full border border-stone-300 text-stone-700 hover:bg-stone-100"
            >
              ‹
            </button>
            <button
              onClick={scrollBy(1)}
              className="h-9 w-9 rounded-full border border-stone-300 text-stone-700 hover:bg-stone-100"
            >
              ›
            </button>
          </div>
        </div>

        <div className="relative">
          <div
            ref={trackRef}
            role="list"
            className="scrollbar-none -mx-4 flex snap-x gap-4 overflow-x-auto px-4 py-2"
          >
            {items.map((p) => (
              <div key={p.id} role="listitem">
                <ProductCard p={p} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}