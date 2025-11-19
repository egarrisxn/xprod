"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import { createClient } from "@/utils/supabase/client";

type UploadAvatarProps = {
  uid: string | null;
  url: string | null;
  size: number;
  onUpload: (url: string) => void;
};

export default function UploadAvatar({
  uid,
  url,
  size,
  onUpload,
}: UploadAvatarProps) {
  const supabase = createClient();
  const [uploading, setUploading] = useState(false);

  // 🟢 derive avatarUrl instead of storing it in state
  const avatarUrl =
    url && supabase.storage.from("avatars").getPublicUrl(url).data?.publicUrl
      ? supabase.storage.from("avatars").getPublicUrl(url).data!.publicUrl
      : null;

  const uploadAvatar: React.ChangeEventHandler<HTMLInputElement> = async (
    event
  ) => {
    setUploading(true);

    const files = event.target.files;
    if (!files || files.length === 0) {
      alert("You must select an image to upload.");
      setUploading(false);
      return;
    }

    const file = files[0];
    const fileExt = file.name.split(".").pop();
    const filePath = `${uid ?? "anonymous"}-${Math.random()}.${fileExt}`;

    const { error: uploadError } = await supabase.storage
      .from("avatars")
      .upload(filePath, file);

    if (uploadError) {
      console.error(uploadError);
      alert("Error uploading avatar!");
      setUploading(false);
      return;
    }

    // let the parent know the new path; parent updates `url` prop
    onUpload(filePath);
    setUploading(false);
  };

  return (
    <div className="flex flex-col items-center">
      <div
        className="relative rounded-full border-2 shadow"
        style={{ width: size, height: size }}
      >
        {avatarUrl ? (
          <Image
            src={avatarUrl}
            alt="User Avatar"
            width={size}
            height={size}
            className="rounded-full object-cover"
            style={{ height: size, width: size }}
          />
        ) : (
          <div
            className="rounded-full bg-gray-300 object-cover"
            style={{ height: size, width: size }}
          />
        )}
      </div>
      <label className="mt-2 cursor-pointer text-blue-500 hover:underline">
        {uploading ? "Uploading..." : "Upload"}
        <input
          className="hidden"
          type="file"
          id="single"
          accept="image/*"
          onChange={uploadAvatar}
          disabled={uploading}
        />
      </label>
    </div>
  );
}
