import { createClient } from "@/utils/supabase/server";
import ProfileCard from "@/components/profile/profile-card";

export default async function ProfilePage() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  return (
    <div className="grid min-h-screen w-full place-items-center">
      <ProfileCard user={user} />
    </div>
  );
}
