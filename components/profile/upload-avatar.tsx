"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { createClient } from "@/utils/supabase/client";

export default function UploadAvatar({
  uid,
  url,
  size,
  onUpload,
}: {
  uid: string | null;
  url: string | null;
  size: number;
  onUpload: (url: string) => void;
}) {
  const supabase = createClient();
  const [avatarUrl, setAvatarUrl] = useState<string | null>(null);
  const [uploading, setUploading] = useState(false);

  useEffect(() => {
    async function getPublicUrl(path: string) {
      try {
        const { data } = supabase.storage.from("avatars").getPublicUrl(path);
        if (data) {
          setAvatarUrl(data.publicUrl);
        }
      } catch (error) {
        console.log("Error getting public url: ", error);
      }
    }

    if (url) getPublicUrl(url);
  }, [url, supabase]);

  const uploadAvatar: React.ChangeEventHandler<HTMLInputElement> = async (
    event,
  ) => {
    try {
      setUploading(true);

      if (!event.target.files || event.target.files.length === 0) {
        throw new Error("You must select an image to upload.");
      }

      const file = event.target.files[0];
      const fileExt = file.name.split(".").pop();
      const filePath = `${uid}-${Math.random()}.${fileExt}`;

      const { error: uploadError } = await supabase.storage
        .from("avatars")
        .upload(filePath, file);

      if (uploadError) {
        throw uploadError;
      }

      onUpload(filePath);
    } catch (error) {
      alert("Error uploading avatar!");
    } finally {
      setUploading(false);
    }
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
