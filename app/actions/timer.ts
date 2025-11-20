"use server";

import { createClient } from "@/utils/supabase/server";

//! Get xprod_timer sessions
export async function getSessions() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  const { data, error } = await supabase
    .from("xprod_timer")
    .select("*")
    .eq("user_id", user?.id)
    .order("started_at", { ascending: false });
  if (error) {
    throw new Error(error.message);
  }
  return data || [];
}

//! Add xprod_timer sessions
export async function addSession(
  mode: "work" | "shortBreak" | "longBreak",
  duration: number
) {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  const { data, error } = await supabase
    .from("xprod_timer")
    .insert([
      {
        user_id: user?.id,
        mode,
        duration,
        started_at: new Date(),
        is_complete: false,
      },
    ])
    .select();
  if (error) {
    console.error("Error adding session:", error);
    return null;
  }
  return data ? data[0] : null;
}

//! Complete xprod_timer session
export async function completeSession(id: number) {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  const { error } = await supabase
    .from("xprod_timer")
    .update({ is_complete: true })
    .eq("id", id)
    .eq("user_id", user?.id);
  if (error) {
    console.error("There was an error:", error);
    return false;
  }
  return true;
}

//! Delete xprod_timer session
export async function deleteSession(id: number) {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  const { error } = await supabase
    .from("xprod_timer")
    .delete()
    .eq("id", id)
    .eq("user_id", user?.id);
  if (error) {
    console.error("Error deleting session:", error);
    return false;
  }
  return true;
}
