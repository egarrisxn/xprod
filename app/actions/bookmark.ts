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
