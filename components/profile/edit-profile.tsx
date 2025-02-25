"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Mail, User as UserIcon, Globe, AtSign } from "lucide-react";
import { createClient } from "@/utils/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import UploadAvatar from "./upload-avatar";
import toast from "react-hot-toast";

import type { User } from "@supabase/supabase-js";
import type { ProfileData } from "@/utils/types";

export default function EditProfile({
  user,
  profile,
}: {
  user: User;
  profile: ProfileData | null;
}) {
  const router = useRouter();
  const supabase = createClient();

  const [loading, setLoading] = useState(false);
  const [fullname, setFullname] = useState(profile?.full_name || "");
  const [username, setUsername] = useState(profile?.username || "");
  const [website, setWebsite] = useState(profile?.website || "");
  const [avatarUrl, setAvatarUrl] = useState(profile?.avatar_url || "");

  async function updateProfile() {
    setLoading(true);
    try {
      const { error } = await supabase.from("profiles").upsert({
        id: user.id,
        full_name: fullname,
        username,
        website,
        avatar_url: avatarUrl,
        updated_at: new Date().toISOString(),
      });
      if (error) throw error;
      toast.success("Profile updated successfully!");
    } catch (error) {
      toast.error("Error updating profile.");
      console.error(error);
    } finally {
      setLoading(false);
      router.push("/profile");
    }
  }

  return (
    <div className="mx-auto mb-16 flex max-w-4xl flex-col items-center justify-center gap-4 px-2 sm:rounded-lg sm:border sm:bg-card sm:px-12 sm:py-8 sm:shadow-lg dark:border-foreground">
      <h1 className="text-center text-2xl font-bold">Edit Profile</h1>
      <form className="mx-auto mb-16 flex max-w-4xl flex-col items-center justify-center gap-8 px-2 sm:rounded-lg sm:bg-card sm:px-8 sm:pt-4">
        <UploadAvatar
          uid={user?.id ?? null}
          url={avatarUrl}
          size={160}
          onUpload={setAvatarUrl}
        />
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email" className="text-sm font-medium">
              Email
            </Label>
            <div className="relative">
              <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input
                id="email"
                type="text"
                value={user?.email}
                disabled
                className="pl-10"
              />{" "}
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="fullName" className="text-sm font-medium">
              Name
            </Label>
            <div className="relative">
              <UserIcon className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input
                id="fullName"
                type="text"
                value={fullname || ""}
                onChange={(e) => setFullname(e.target.value)}
                className="pl-10"
              />{" "}
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="username" className="text-sm font-medium">
              Username
            </Label>
            <div className="relative">
              <AtSign className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input
                id="username"
                type="text"
                value={username || ""}
                onChange={(e) => setUsername(e.target.value)}
                className="pl-10"
              />{" "}
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="website" className="text-sm font-medium">
              Website
            </Label>
            <div className="relative">
              <Globe className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input
                id="website"
                type="url"
                value={website || ""}
                onChange={(e) => setWebsite(e.target.value)}
                className="pl-10"
              />{" "}
            </div>
          </div>
          <Button
            className="w-full bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600"
            onClick={updateProfile}
            disabled={loading}
          >
            {loading ? "Updating..." : "Update Profile"}
          </Button>
        </div>
      </form>
    </div>
  );
}
