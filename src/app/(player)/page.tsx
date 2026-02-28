import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-dvh flex-col items-center justify-center px-4 py-16">
      <div className="w-full max-w-md text-center">
        <h1 className="text-4xl font-bold tracking-tight text-zinc-900">
          Local Grounds
        </h1>
        <p className="mt-4 text-lg text-zinc-600">
          Book your next sports session with ease.
        </p>
        <div className="mt-8 flex flex-col gap-4">
          <Link
            href="/book"
            className="inline-flex h-12 items-center justify-center rounded-md bg-indigo-600 px-6 text-sm font-medium text-white transition hover:bg-indigo-600/90"
          >
            Book Now
          </Link>
          <Link
            href="/grounds"
            className="inline-flex h-12 items-center justify-center rounded-md border border-zinc-200 bg-white px-6 text-sm font-medium text-zinc-900 transition hover:bg-zinc-50"
          >
            View Grounds
          </Link>
        </div>
      </div>
    </div>
  );
}
