import type { Metadata } from "next";
import Link from "next/link";
import EmailAuth from "@/components/auth/email-auth";
import GitHubAuth from "@/components/auth/github-auth";
import GoogleAuth from "@/components/auth/google-auth";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export const metadata: Metadata = {
  title: "Register | xprod",
  description: "Register and get started with xprod.",
};

export default function RegisterPage() {
  return (
    <section className="mx-auto grid min-h-screen w-full place-items-center">
      <Card className="w-full max-w-md shadow-lg">
        <CardHeader className="space-y-1 text-center">
          <CardTitle className="text-2xl font-bold tracking-tight">
            Welcome in!
          </CardTitle>
          <CardDescription>Register your account to continue.</CardDescription>
        </CardHeader>
        <CardContent>
          <EmailAuth formType="register" />
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <Separator />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-background px-2 text-muted-foreground">
                Or continue with
              </span>
            </div>
          </div>
          <div className="flex flex-row items-center justify-center space-x-4 pt-4">
            <GitHubAuth />
            <GoogleAuth />
          </div>
        </CardContent>
        <CardFooter className="flex flex-row justify-center gap-1 text-center">
          <p>Already have an account?</p>
          <Link
            href="/login"
            className="text-primary underline-offset-4 hover:underline"
          >
            Sign in!
          </Link>
        </CardFooter>
      </Card>
    </section>
  );
}
