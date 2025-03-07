import type { User } from "@/utils/types";
import { createClient } from "@/utils/supabase/server";

export default async function DisplayName({ user }: { user: User }) {
  const supabase = await createClient();

  async function getUsername(userId: string) {
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

  const username = user?.id ? await getUsername(user.id) : null;

  return <>{username || user?.email || "Guest"}</>;
}
