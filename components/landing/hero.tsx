import { Button } from "@/components/ui/button";
import Link from "next/link";

export function Hero() {
  return (
    <section className="relative isolate mt-14 xl:mt-16 xl:pt-2">
      <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
        <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"></div>
      </div>
      <div className="mx-auto flex max-w-7xl flex-col px-6 pt-24 sm:px-8 lg:grid lg:h-screen lg:place-items-center lg:pb-16 lg:pt-0">
        <div className="mx-auto text-center">
          <h1 className="mx-auto w-full max-w-[26rem] bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text py-1 text-4xl font-bold leading-none tracking-tighter text-transparent sm:max-w-[32rem] sm:text-6xl md:max-w-3xl lg:text-8xl xl:text-[7rem]">
            The Ultimate Productivity Companion
          </h1>
          <p className="mx-auto mt-4 w-full max-w-[20rem] leading-6 text-muted-foreground sm:max-w-[26rem] sm:text-lg sm:leading-7 md:max-w-3xl xl:mt-6 xl:text-2xl">
            Streamline your workflow with our <span className="text-primary">all-in-one</span>{" "}
            productivity solution. Manage your calendar, tasks, notes, and more all within one
            beautiful interface.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row lg:gap-6 xl:mt-12">
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600"
            >
              <Link href="/register">Get Started </Link>
            </Button>

            <Button asChild variant="ghost" size="lg">
              <Link href="#features">
                Learn more <span aria-hidden="true">→</span>{" "}
              </Link>
            </Button>
          </div>
        </div>
      </div>
      <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]">
        <div className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"></div>
      </div>
    </section>
  );
}
