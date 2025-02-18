import ProfileCard from "@/components/users/profile-card";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Profile | xprod",
  description: "Your profile page.",
};

export default function ProfilePage() {
  return (
    <section className="container space-y-3">
      <ProfileCard />
    </section>
  );
}
