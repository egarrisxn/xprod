// import EditProfileCard from "@/components/users/edit-profile-card";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Edit Profile",
  description: "Edit my profile.",
};

export default function EditProfilePage() {
  return (
    <section className="grid min-h-screen w-full place-items-center p-4 sm:p-6 lg:p-0">
      <div className="mx-auto space-y-4 text-center">
        <h2 className="mb-5 text-2xl font-semibold text-black md:text-4xl dark:text-white">
          Coming Soon..
        </h2>
        {/* <EditProfileCard /> */}
      </div>
    </section>
  );
}
