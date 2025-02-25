// "use server";
// import { createClient } from "@/utils/supabase/server";
// import { calculateStreak } from "@/utils/helpers";

// //! Get habits
// export async function getHabits() {
//   const supabase = await createClient();
//   const {
//     data: { user },
//   } = await supabase.auth.getUser();

//   const { data, error } = await supabase
//     .from("habits")
//     .select("*")
//     .eq("user_id", user?.id);
//   if (error) {
//     console.error("Error fetching habits:", error);
//     return [];
//   }
//   return data;
// }

// //! Add habits
// export async function addHabit(name: string) {
//   const supabase = await createClient();
//   const {
//     data: { user },
//   } = await supabase.auth.getUser();

//   const { data, error } = await supabase
//     .from("habits")
//     .insert([
//       {
//         user_id: user?.id,
//         name,
//         created_at: new Date().toISOString(),
//       },
//     ])
//     .select();
//   if (error) {
//     console.error("Error adding event:", error);
//     return null;
//   }
//   return data[0];
// }

// //! Delete habits
// export async function deleteHabit(id: number) {
//   const supabase = await createClient();
//   const {
//     data: { user },
//   } = await supabase.auth.getUser();

//   const { error } = await supabase
//     .from("habits")
//     .delete()
//     .eq("id", id)
//     .eq("user_id", user?.id);
//   if (error) {
//     console.error("Error deleting habit:", error);
//     return false;
//   }
//   return true;
// }

// export async function logHabitDay(id: number, date: string) {
//   const supabase = await createClient();

//   const { data: habit, error: fetchError } = await supabase
//     .from("habits")
//     .select("completed")
//     .eq("id", id)
//     .single();
//   if (fetchError || !habit) {
//     console.error("Error fetching habit:", fetchError);
//     return null;
//   }
//   const updatedCompleted = [...new Set([...habit.completed, date])];
//   const newStreak = calculateStreak(updatedCompleted);
//   const { error } = await supabase
//     .from("habits")
//     .update({ completed: updatedCompleted, streak: newStreak })
//     .eq("id", id);
//   if (error) {
//     console.error("Error logging habit:", error);
//     return null;
//   }
//   return updatedCompleted;
// }

// export async function unlogHabitDay(id: number, date: string) {
//   const supabase = await createClient();

//   const { data: habit, error: fetchError } = await supabase
//     .from("habits")
//     .select("completed")
//     .eq("id", id)
//     .single();
//   if (fetchError || !habit) {
//     console.error("Error fetching habit:", fetchError);
//     return null;
//   }
//   const updatedCompleted = habit.completed.filter((d: string) => d !== date);
//   const { error } = await supabase
//     .from("habits")
//     .update({ completed: updatedCompleted })
//     .eq("id", id);
//   if (error) {
//     console.error("Error unlogging habit:", error);
//     return null;
//   }
//   return updatedCompleted;
// }

// "use server";
// import { createClient } from "@/utils/supabase/server";
// import { getUrlMetadata } from "@/utils/helpers";

// //! Get bookmarks
// export async function getBookmarks() {
//   const supabase = await createClient();
//   const {
//     data: { user },
//   } = await supabase.auth.getUser();

//   const { data, error } = await supabase
//     .from("bookmarks")
//     .select()
//     .eq("user_id", user?.id)
//     .order("inserted_at", { ascending: false });
//   if (error) {
//     console.error("Error fetching bookmarks:", error);
//     return [];
//   }
//   return data || [];
// }

// //! Add bookmark
// export async function addBookmark(url: string) {
//   const supabase = await createClient();
//   const {
//     data: { user },
//   } = await supabase.auth.getUser();

//   const { title, favicon } = await getUrlMetadata(url);
//   const newBookmark = {
//     title,
//     url,
//     image_url: favicon,
//     user_id: user?.id,
//     inserted_at: new Date(),
//   };
//   const { data, error } = await supabase
//     .from("bookmarks")
//     .insert(newBookmark)
//     .select();
//   if (error) {
//     console.error("Error adding bookmark:", error);
//     throw new Error(error.message);
//   }
//   return data || [];
// }

// //! Update bookmark
// export async function updateBookmark(id: number, title: string, url: string) {
//   const supabase = await createClient();
//   const { error } = await supabase
//     .from("bookmarks")
//     .update({ title, url })
//     .eq("id", id);
//   if (error) {
//     console.error("Error updating bookmark:", error);
//     throw new Error(error.message);
//   }
//   return { success: true };
// }

// //! Delete bookmark
// export async function deleteBookmark(id: number) {
//   const supabase = await createClient();
//   const { error } = await supabase.from("bookmarks").delete().eq("id", id);
//   if (error) {
//     console.error("Error deleting bookmark:", error);
//     throw new Error(error.message);
//   }
//   return { success: true };
// }
