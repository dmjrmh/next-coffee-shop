import Image from "next/image"
import Link from "next/link"

export default function HeroSection() {
  return (
    <section className="px-4 py-10 sm:px-6 lg:px-8">
      <div className="relative mx-auto max-w-6xl overflow-hidden rounded-2xl shadow-lg">
        <div className="relative h-[300px] w-full sm:h-[360px] md:h-[420px]">
          <Image
            src="/images/home/coffee-cup.jpg"
            alt="Cup of coffee"
            fill
            sizes="(min-width: 768px) 50vw, 100vw"
            className="object-cover"
            priority
          />
        </div>
        <div className="absolute inset-0 rounded-2xl bg-[linear-gradient(to_right,rgba(0,0,0,0.55),rgba(0,0,0,0.25)_45%,transparent_70%)]" />

        <div className="pointer-events-none absolute inset-0 flex items-center">
          <div className="pointer-events-auto px-6 sm:px-10 md:px-14">
            <h1 className="max-w-xl text-4xl font-semibold leading-tight text-white sm:text-5xl">
              <span className="block">Brewed</span>
              <span className="block">for Your</span>
              <span className="block">Moments.</span>
            </h1>

            <Link href="/menu" className="mt-6 inline-flex items-center rounded-lg bg-starbuck px-4 py-2 text-sm font-medium text-white shadow hover:opacity-90 focus:outline-none focus-visible:ring">
              Explore Menu
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
};
