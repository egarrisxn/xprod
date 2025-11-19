"use server";

import { createClient } from "@/utils/supabase/server";

//! Get timer sessions
export async function getSessions() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  const { data, error } = await supabase
    .from("timer")
    .select("*")
    .eq("user_id", user?.id)
    .order("started_at", { ascending: false });
  if (error) {
    throw new Error(error.message);
  }
  return data || [];
}

//! Add timer sessions
export async function addSession(
  mode: "work" | "shortBreak" | "longBreak",
  duration: number
) {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  const { data, error } = await supabase
    .from("timer")
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

//! Complete timer session
export async function completeSession(id: number) {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  const { error } = await supabase
    .from("timer")
    .update({ is_complete: true })
    .eq("id", id)
    .eq("user_id", user?.id);
  if (error) {
    console.error("There was an error:", error);
    return false;
  }
  return true;
}

//! Delete timer session
export async function deleteSession(id: number) {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  const { error } = await supabase
    .from("timer")
    .delete()
    .eq("id", id)
    .eq("user_id", user?.id);
  if (error) {
    console.error("Error deleting session:", error);
    return false;
  }
  return true;
}
