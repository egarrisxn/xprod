import type { Metadata } from "next";
import { createClient } from "@/utils/supabase/server";
import EditProfile from "@/components/profile/edit-profile";

export const metadata: Metadata = {
  title: "Edit Profile",
  description: "Edit your XProd profile.",
};

export default async function EditProfilePage() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return <p className="text-center text-red-500">User not found.</p>;
  }

  const { data: profile } = await supabase
    .from("profiles")
    .select("full_name, username, website, avatar_url")
    .eq("id", user.id)
    .single();

  return (
    <section className="grid min-h-screen w-full place-items-center">
      <EditProfile user={user} profile={profile} />
    </section>
  );
}
