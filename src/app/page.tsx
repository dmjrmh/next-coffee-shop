'use client'
import Image from 'next/image'
import { useState, Suspense, lazy } from 'react'

const helloWorld: string = 'hello tok su'

const LocationPage = lazy(() => import('../components/location'))

export default function Home() {
  const [showLocation, setShowLocation] = useState(false)
  const [currentPage, setCurrentPage] = useState<'home' | 'location'>('home')
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <nav className="w-full flex justify-center space-x-4">
        <button
          className={`px-4 py-2 rounded-md ${currentPage === 'home' ? 'bg-black text-white' : 'bg-gray-200'}`}
          onClick={() => setCurrentPage('home')}>
          Home
        </button>
        <button
          className={`px-4 py-2 rounded-md ${currentPage === 'location' ? 'bg-black text-white' : 'bg-gray-200'}`}
          onClick={() => setCurrentPage('location')}>
          Location
        </button>
      </nav>
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        {currentPage === 'home' ? (
          <>
            <Image
              className="dark:invert"
              src="/next.svg"
              alt="Next.js logo"
              width={180}
              height={38}
              priority
            />
            <ol className="font-mono list-inside list-decimal text-sm/6 text-center sm:text-left">
              <li className="mb-2 tracking-[-.01em]">
                Get started by editing{' '}
                <code className="bg-black/[.05] dark:bg-white/[.06] font-mono font-semibold px-1 py-0.5 rounded">
                  src/app/page.tsx
                </code>
                .
              </li>
              <li className="tracking-[-.01em]">
                Save and see your changes instantly.
              </li>
            </ol>
            <div className="flex gap-4 items-center flex-col sm:flex-row">
              {/* Existing links */}
            </div>
          </>
        ) : (
          <Suspense
            fallback={<div className="text-2xl">Loading location page...</div>}>
            <LocationPage />
          </Suspense>
        )}
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer">
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer">
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer">
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          {helloWorld}
        </a>
      </footer>
    </div>
  )
}
