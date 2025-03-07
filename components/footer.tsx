import GitHubIcon from "./icons/github";
import { TimeDisplay } from "./time-display";
import ThemeToggle from "./theme-toggle";

export default function Footer() {
  return (
    <footer className="w-full border-t border-slate-50 dark:border-slate-950">
      <div className="container mx-auto flex flex-col items-center justify-center gap-4 py-8 text-center text-sm text-muted-foreground md:flex-row md:justify-between md:p-6">
        <div className="order-2 flex flex-row items-center gap-3 md:order-1 md:gap-4">
          <a
            href="https://github.com/egarrisxn/xprod"
            className="hidden duration-200 hover:text-black md:block dark:hover:text-white"
          >
            <GitHubIcon className="size-5" />
          </a>
          <p>
            &copy; {new Date().getFullYear()} XProd by{" "}
            <a
              href="https://egxo.dev"
              className="font-medium text-primary underline-offset-4 hover:underline"
            >
              egxo.dev
            </a>
          </p>
        </div>

        <div className="order-1 flex flex-row items-center gap-3 md:order-2 md:gap-4">
          <div className="flex items-center gap-1">
            Time: <TimeDisplay />
          </div>
          <ThemeToggle />
        </div>
      </div>
    </footer>
  );
}
