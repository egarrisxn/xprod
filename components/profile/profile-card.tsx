/* eslint-disable react-hooks/purity */

import Link from "next/link";
import { ArrowRight, Quote as QuoteIcon } from "lucide-react";
import { ProfileCardProps } from "@/utils/types";
import quotes from "@/utils/xquotes.json";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import DisplayAvatar from "@/components/display-avatar";
import DisplayName from "@/components/display-name";

export default function ProfileCard({ user }: ProfileCardProps) {
  if (!user) {
    return <div>User not found or not authenticated</div>;
  }

  const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

  return (
    <div className="mx-auto mt-8 flex w-full max-w-xl flex-col items-center justify-center gap-8 px-2 sm:rounded-lg sm:border sm:bg-card sm:px-8 sm:py-12 sm:shadow-lg dark:border-foreground">
      <DisplayAvatar user={user} size={160} />
      <div className="space-y-4 text-center">
        <h1 className="text-2xl font-semibold sm:text-5xl">
          Welcome back,
          <br />
          <span className="bg-linear-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent">
            <DisplayName user={user} />
          </span>
        </h1>
        <p className="text-muted-foreground sm:text-lg">
          Ready to boost your productivity today?
        </p>
      </div>
      <Card className="max-w-xl">
        <CardContent className="pt-5 sm:pt-6">
          <div className="flex gap-3 sm:gap-4">
            <QuoteIcon className="size-6 shrink-0 text-indigo-500 sm:size-8" />
            <div className="flex flex-col gap-1 sm:gap-2">
              <p className="text-wrap italic sm:text-lg">
                {randomQuote.content}
              </p>
              <p className="text-sm text-wrap text-muted-foreground">
                ― {randomQuote.author}
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
      <div className="flex justify-center gap-3 sm:gap-4">
        <Link href="/dashboard">
          <Button
            size="lg"
            className="bg-linear-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600"
          >
            Go to Dashboard
            <ArrowRight className="ml-2 size-4" />
          </Button>
        </Link>
        <Button asChild variant="outline" size="lg">
          <Link href="/profile/edit">Edit Profile</Link>
        </Button>
      </div>
    </div>
  );
}
