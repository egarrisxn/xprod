"use server";

import { createClient } from "@/utils/supabase/server";

//! Get events
export async function getEvents(date: string) {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  const { data, error } = await supabase
    .from("events")
    .select("*")
    .eq("date", date)
    .eq("user_id", user?.id)
    .order("time", { ascending: true });
  if (error) throw new Error(`Error fetching evetns: ${error.message}`);
  return data || [];
}

//! Add event
export async function addEvent(
  title: string,
  description: string,
  time: string,
  date: string
) {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  const { data, error } = await supabase
    .from("events")
    .insert([
      {
        date,
        time,
        title,
        description,
        created_at: new Date(),
        user_id: user?.id,
      },
    ])
    .select();
  if (error) {
    console.error("Error adding event:", error);
    return null;
  }
  return data[0];
}

//! Update event
export async function updateEvent(
  id: number,
  title: string,
  description: string,
  time: string
) {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  const { data, error } = await supabase
    .from("events")
    .update({
      time,
      title,
      description,
    })
    .eq("id", id)
    .eq("user_id", user?.id)
    .select();
  if (error) {
    console.error("Error updating event:", error);
    return null;
  }
  return data[0];
}

//! Delete Event
export async function deleteEvent(id: number) {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  const { error } = await supabase
    .from("events")
    .delete()
    .eq("id", id)
    .eq("user_id", user?.id);
  if (error) {
    console.error("Error deleting event:", error);
    return false;
  }
  return true;
}
