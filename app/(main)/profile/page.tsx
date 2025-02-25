import { createClient } from "@/utils/supabase/server";
import ProfileCard from "@/components/profile/profile-card";

export default async function ProfilePage() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  return (
    <section className="grid min-h-screen w-full place-items-center p-4 sm:p-6 lg:px-0">
      <ProfileCard user={user} />
    </section>
  );
}
