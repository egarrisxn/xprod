"use client";

import { useEffect } from "react";
import { Button } from "@/components/ui/button";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <html>
      <body>
        <section className="grid min-h-screen w-full place-items-center p-4 sm:p-6 lg:p-0">
          <div className="mx-auto space-y-4 text-center">
            <div className="mx-auto space-y-4 text-center">
              <h2 className="mb-5 text-2xl font-semibold text-black md:text-4xl dark:text-white">
                There seems to be a problem.
              </h2>
              <p>
                If you believe there is a mistake, please send me an email at egarrisxn@gmail.com.
              </p>
              <Button onClick={() => reset()}>Try Again</Button>
            </div>
          </div>
        </section>
      </body>
    </html>
  );
}
