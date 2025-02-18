"use server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { createClient } from "@/utils/supabase/server";

import type { FormValueType } from "@/utils/schema";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL!;

//! Sign out user
export async function signOut() {
  const supabase = await createClient();
  await supabase.auth.signOut();
  revalidatePath("/", "layout");
  redirect("/");
}

//! Sign up user with email
export async function signUpWithEmail(values: FormValueType) {
  const supabase = await createClient();
  const { error } = await supabase.auth.signUp({ ...values });
  if (error) {
    console.log(error);
    redirect("/auth-error");
  }
  revalidatePath("/", "layout");
  redirect("/auth-verify");
}

//! Sign in user with email
export async function signInWithEmail(values: FormValueType) {
  const supabase = await createClient();
  const { error } = await supabase.auth.signInWithPassword({ ...values });
  if (error) {
    console.log(error);
    redirect("/auth-error");
  }
  revalidatePath("/", "layout");
  redirect("/dashboard");
}

//! Sign in user with GitHub
export async function authWithGitHub() {
  const supabase = await createClient();
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: "github",
    options: {
      redirectTo: `${baseUrl}/api/auth/callback`,
    },
  });
  if (error) throw new Error(`Error signing in: ${error.message}`);
  if (data.url) {
    redirect(data.url);
  }
}

//! Sign in user with Google
export async function authWithGoogle() {
  const supabase = await createClient();
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: "google",
    options: {
      redirectTo: `${baseUrl}/api/auth/callback`,
    },
  });
  if (error) throw new Error(`Error signing in: ${error.message}`);
  if (data.url) {
    redirect(data.url);
  }
}
