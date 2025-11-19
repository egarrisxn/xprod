"use server";

import { revalidatePath } from "next/cache";
import { createClient } from "@/utils/supabase/server";
import { profileSchema } from "@/utils/schema";

export async function getUserProfile() {
  const supabase = await createClient();
  const {
    data: { user },
    error,
  } = await supabase.auth.getUser();

  if (error || !user) {
    console.error("Auth Error or No User:", error);
    return null;
  }

  console.log("Authenticated User:", user);

  const { data: profile, error: profileError } = await supabase
    .from("profiles")
    .select("*")
    .eq("id", user.id)
    .single();

  if (profileError) {
    console.error("Profile Fetch Error:", profileError);
    return null;
  }

  console.log("Fetched Profile:", profile);

  return { ...user, ...profile };
}

export async function updateProfile(formData: FormData) {
  const supabase = await createClient();
  const {
    data: { user },
    error: authError,
  } = await supabase.auth.getUser();

  if (authError || !user) {
    return { error: "User not found." };
  }

  const rawData = Object.fromEntries(formData.entries());
  const parsedData = profileSchema.safeParse(rawData);

  if (!parsedData.success) {
    return { error: parsedData.error.format() };
  }

  const { full_name, username, website, avatar_url } = parsedData.data;

  const { error } = await supabase.from("profiles").upsert({
    user_id: user.id,
    full_name,
    username,
    website,
    avatar_url,
    updated_at: new Date().toISOString(),
  });

  if (error) {
    return { error: error.message };
  }

  revalidatePath("/profile");
  return { success: true };
}
