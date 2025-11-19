import type { Metadata } from "next";
import { createClient } from "@/utils/supabase/server";
import ProfileCard from "@/components/profile/profile-card";

export const metadata: Metadata = {
  title: "User Profile",
  description: "View your XProd profile.",
};

export default async function ProfilePage() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  return (
    <section className="grid min-h-screen w-full place-items-center">
      <ProfileCard user={user} />
    </section>
  );
}
