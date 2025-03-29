"use client";
import { Button } from "@/components/ui/button";
import { ArrowLeft, RefreshCw } from "lucide-react";
import Link from "next/link";

// Error boundaries must be Client Components
export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    // global-error must include html and body tags
    <html>
      <body className="bg-gray-50 min-h-screen flex items-center justify-center p-4">
        <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8 text-center">
          <div className="flex justify-center mb-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 200 200"
              className="w-40 h-40"
            >
              <circle cx="100" cy="100" r="90" fill="#FEE2E2" />
              <circle cx="100" cy="100" r="70" fill="#FEF2F2" />
              <path
                d="M100 40 L100 120"
                stroke="#EF4444"
                strokeWidth="12"
                strokeLinecap="round"
              />
              <circle cx="100" cy="150" r="6" fill="#EF4444" />
              <path
                d="M40 170 L160 170"
                stroke="#EF4444"
                strokeWidth="8"
                strokeLinecap="round"
              />
            </svg>
          </div>

          <h1 className="text-2xl font-bold text-gray-900 mb-2">
            Oops! Something went wrong
          </h1>

          <p className="text-gray-600 mb-8">
            The system encountered an unexpected error while processing your
            request. Please try again or return to the homepage.
          </p>

          {error.digest && (
            <div className="text-xs text-gray-500 mb-4 bg-gray-100 p-2 rounded">
              Error code: {error.digest}
            </div>
          )}

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button
              variant="default"
              onClick={() => reset()}
              className="flex items-center justify-center gap-2"
            >
              <RefreshCw size={16} />
              Try again
            </Button>

            <Link href="/">
              <Button
                variant="secondary"
                className="flex items-center justify-center gap-2"
              >
                <ArrowLeft size={16} />
                Back to home
              </Button>
            </Link>
          </div>
        </div>
      </body>
    </html>
  );
}
