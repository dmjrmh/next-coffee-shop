import Image from "next/image";
import Link from "next/link";

export default function RewardsSection() {
  return (
    <section className="px-4 py-10 sm:px-6 md:py-14 lg:px-8">
      <div className="mx-auto max-w-6xl rounded-2xl bg-[#f9f7f3] p-6 flex flex-col items-center justify-between gap-6 sm:flex-row sm:gap-8">
        <div>
          <h2 className="text-4xl md:text-6xl font-semibold text-gray-900">Rewards</h2>
          <p className="mt-2 text-xl md:text-3xl text-gray-700">Earn Beans for Every Cup</p>
          <Link
            href="/rewards"
            className="mt-4 inline-block rounded-xl bg-starbuck px-4 py-2 text-white hover:bg-emerald-900 transition"
          >
            Join Rewards
          </Link>
        </div>

        <div className="relative w-100 h-[200px] shrink-0">
          <Image
            src="/images/home/reward-coffee.jpg"
            alt="Reward Coffee"
            fill
            className="object-cover rounded-2xl"
          />
        </div>
      </div>
    </section>
  );
}
