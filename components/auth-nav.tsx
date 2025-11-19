import Link from "next/link";
import { ChevronLeftCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import ModeToggle from "./theme-toggle";

export default function AuthNav() {
  return (
    <header className="absolute top-0 z-50 w-full">
      <div className="container flex items-center justify-between p-4 sm:px-6">
        <Button variant="outline" asChild>
          <Link href="/">
            <ChevronLeftCircle className="mr-2 size-4" />
            Back
          </Link>
        </Button>
        <ModeToggle />
      </div>
    </header>
  );
}
