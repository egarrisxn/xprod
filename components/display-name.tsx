import { createClient } from "@/utils/supabase/server";

export default async function DisplayName({ user }: { user: any }) {
  const supabase = await createClient();

  async function getUsername(userId: string, supabase: any) {
    const { data, error } = await supabase
      .from("profiles")
      .select("username")
      .eq("id", userId)
      .single();

    if (error) {
      console.error("Error fetching username:", error);
      return null;
    }
    return data?.username || null;
  }

  const username = user?.id ? await getUsername(user.id, supabase) : null;

  return <>{username || user?.email || "Guest"}</>;
}
