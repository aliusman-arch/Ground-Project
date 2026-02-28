import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-dvh items-center justify-center px-4">
      <div className="w-full max-w-md rounded-xl border border-zinc-200 bg-white p-6 shadow-sm">
        <div className="flex items-center justify-between">
          <p className="text-sm font-medium text-zinc-500">404</p>
          <span className="rounded-full border border-zinc-200 bg-zinc-50 px-2 py-1 text-xs text-zinc-700">
            Not Found
          </span>
        </div>

        <h1 className="mt-4 text-pretty text-2xl font-semibold tracking-tight text-zinc-900">
          This page doesn’t exist.
        </h1>
        <p className="mt-2 text-sm leading-6 text-zinc-600">
          The link may be incorrect, or the page may have been moved.
        </p>

        <div className="mt-6 flex flex-col gap-2 sm:flex-row">
          <Link
            href="/"
            className="inline-flex h-10 items-center justify-center rounded-md bg-indigo-600 px-4 text-sm font-medium text-white transition hover:bg-indigo-600/90"
          >
            Go to Home
          </Link>
          <Link
            href="/api/auth/signin"
            className="inline-flex h-10 items-center justify-center rounded-md border border-zinc-200 bg-white px-4 text-sm font-medium text-zinc-900 transition hover:bg-zinc-50"
          >
            Sign in
          </Link>
        </div>
      </div>
    </div>
  );
}
