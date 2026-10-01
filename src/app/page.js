import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-950 text-white">
      <main className="mx-auto flex min-h-[calc(100vh-80px)] max-w-6xl flex-col items-center justify-center px-4 text-center">
        <div className="mb-6 rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-2 text-sm text-blue-400">
          ✨ Welcome to our platform
        </div>

        <h1 className="max-w-4xl text-4xl font-bold leading-tight sm:text-5xl md:text-6xl">
          Build Something
          <span className="block text-blue-500">Amazing Today.</span>
        </h1>

        <p className="mt-6 max-w-2xl text-base leading-7 text-gray-400 sm:text-lg">
          A modern platform designed to help you manage your projects, explore
          powerful features, and get things done faster and easier.
        </p>

        <div className="mt-8 flex flex-col gap-4 sm:flex-row">
          <Link
            href="/dashboard"
            className="rounded-xl bg-blue-600 px-7 py-3.5 font-medium transition hover:bg-blue-700"
          >
            Go to Dashboard →
          </Link>
          <Link
            href="/features"
            className="rounded-xl border border-gray-700 px-7 py-3.5 font-medium transition hover:border-blue-500 hover:bg-gray-900"
          >
            Explore Features
          </Link>
        </div>

        <div className="mt-16 grid w-full max-w-3xl grid-cols-1 gap-4 sm:grid-cols-3">
          <div className="rounded-2xl border border-gray-800 bg-gray-900/60 p-6">
            <h2 className="text-3xl font-bold">1K+</h2>
            <p className="mt-2 text-sm text-gray-400">Active Users</p>
          </div>
          <div className="rounded-2xl border border-gray-800 bg-gray-900/60 p-6">
            <h2 className="text-3xl font-bold">50+</h2>
            <p className="mt-2 text-sm text-gray-400">Powerful Features</p>
          </div>
          <div className="rounded-2xl border border-gray-800 bg-gray-900/60 p-6">
            <h2 className="text-3xl font-bold">99%</h2>
            <p className="mt-2 text-sm text-gray-400">User Satisfaction</p>
          </div>
        </div>
      </main>

      <section className="border-t border-gray-800 bg-gray-900/40 px-4 py-16">
        <div className="mx-auto max-w-6xl text-center">
          <h2 className="text-3xl font-bold">Everything in one place</h2>
          <p className="mx-auto mt-4 max-w-xl text-gray-400">
            Simple, powerful and easy to use. Start exploring everything our
            platform has to offer.
          </p>
        </div>
      </section>
    </div>
  );
}
