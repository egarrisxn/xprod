import Link from "next/link";
import Image from "next/image";
import { signOut } from "@/app/actions/auth";
import { createClient } from "@/utils/supabase/server";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import DisplayAvatar from "./display-avatar";
import DisplayName from "@/components/display-name";

export default async function MainNav() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  return (
    <header className="absolute top-0 z-50 w-full">
      <div className="container mx-auto flex flex-row items-center justify-between p-4 sm:px-6">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/svgs/logo.svg"
            alt="nav-icon"
            width={48}
            height={48}
            className="size-8 sm:size-12"
          />
        </Link>

        <div className="flex items-center gap-3">
          {user ? (
            <>
              <Button asChild variant="link">
                <Link href="/">Home</Link>
              </Button>
              <Button asChild variant="link">
                <Link href="/dashboard">Dashboard</Link>
              </Button>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    size="icon"
                    variant="ghost"
                    className="size-10 rounded-full border-none bg-transparent"
                  >
                    <DisplayAvatar user={user} size={40} />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent sideOffset={5}>
                  <DropdownMenuLabel>
                    <DisplayName user={user} />
                  </DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem asChild>
                    <Link className="cursor-pointer" href="/profile/edit">
                      Edit Profile
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem asChild>
                    <Link className="cursor-pointer" href="/profile">
                      View Profile
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem className="p-0" asChild>
                    <form action={signOut}>
                      <Button
                        size="sm"
                        className="w-full rounded-sm bg-linear-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600"
                        type="submit"
                      >
                        Sign Out
                      </Button>
                    </form>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </>
          ) : (
            <>
              <Button asChild variant="link">
                <Link href="/">Home</Link>
              </Button>
              <Button asChild variant="link">
                <Link href="/login">Login</Link>
              </Button>
              <Button
                asChild
                className="bg-linear-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600"
              >
                <Link href="/register">Sign Up!</Link>
              </Button>
            </>
          )}
        </div>
      </div>
    </header>
  );
}
