import Image from "next/image";
import { createClient } from "@/utils/supabase/server";
import type { ProfileAvatarProps } from "@/utils/types";

export default async function DisplayAvatar({
  user,
  size = 40,
}: ProfileAvatarProps) {
  if (!user) return null;

  const supabase = await createClient();

  async function fetchAvatarUrl(userId: string) {
    const { data, error } = await supabase
      .from("profiles")
      .select("avatar_url")
      .eq("id", userId)
      .single();

    if (error || !data?.avatar_url) {
      return null;
    }

    const { data: publicUrlData } = supabase.storage
      .from("avatars")
      .getPublicUrl(data.avatar_url);

    return publicUrlData?.publicUrl || null;
  }

  const avatarUrl = await fetchAvatarUrl(user.id);

  return (
    <div
      className="relative overflow-hidden rounded-full border-2 shadow"
      style={{ width: size, height: size }}
    >
      <Image
        src={avatarUrl || "/svgs/default-avatar.svg"}
        alt="User Avatar"
        width={size}
        height={size}
        className="h-full w-full object-cover"
      />
    </div>
  );
}
