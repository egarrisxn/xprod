//! TYPES
// export interface Habit {
//   id: number;
//   mode: "filled" | "empty";
//   name: string;
//   is_complete: string[];
//   streak?: number;
//   created_at: Date;
//   user_id: string;
// }

// export interface HabitrProps {
//   defaultHabits: Habit[];
// }

// export interface Bookmark {
//   id: number;
//   user_id: string;
//   title: string;
//   url: string;
//   image_url: string;
//   inserted_at: Date;
// }

// export interface BookmarkRowProps {
//   bookmark: Bookmark;
//   // eslint-disable-next-line no-unused-vars
//   copyLink: (link: string) => void;
//   // eslint-disable-next-line no-unused-vars
//   editBookmark: (id: number, newTitle: string, newUrl: string) => void;
//   // eslint-disable-next-line no-unused-vars
//   deleteBookmark: (id: number) => void;
// }

// export interface BookmarksListProps {
//   defaultBookmarks: Bookmark[];
// }

//! HELPERS
// import { toast } from "react-hot-toast";

// export const getToday = (day: string) =>
//   day === new Date().toISOString().split("T")[0];

// export const getPreviousDay = (date: string) => {
//   const currentDate = new Date(date);
//   currentDate.setDate(currentDate.getDate() - 1);
//   return currentDate.toISOString().split("T")[0];
// };

// export const getLast365Days = () => {
//   const days = [];
//   const today = new Date();
//   for (let i = 0; i < 365; i++) {
//     const day = new Date(today);
//     day.setDate(today.getDate() - i);
//     const dayName = day.toLocaleString("en-US", { weekday: "short" });
//     const monthName = day.toLocaleString("en-US", { month: "short" });
//     days.push(
//       `${dayName}, ${day.getDate()} ${monthName}, ${day.getFullYear()}`,
//     );
//   }
//   return days;
// };

// export const groupDaysByMonth = (days: string[]) => {
//   const grouped: Record<string, string[]> = {};
//   days.forEach((day) => {
//     const month = new Date(day).toLocaleString("default", {
//       month: "short",
//       year: "2-digit",
//     });
//     if (!grouped[month]) {
//       grouped[month] = [];
//     }
//     grouped[month].push(day);
//   });
//   return grouped;
// };

// export function calculateStreak(completedDays: string[]): number {
//   if (!completedDays.length) return 0;
//   const sortedDays = [...completedDays].sort(
//     (a, b) => new Date(b).getTime() - new Date(a).getTime(),
//   );
//   let streak = 0;
//   let prevDate = new Date(sortedDays[0]);
//   for (const day of sortedDays) {
//     const currentDate = new Date(day);
//     const difference =
//       (prevDate.getTime() - currentDate.getTime()) / (1000 * 60 * 60 * 24);
//     if (difference === 1) {
//       streak++;
//     } else if (difference > 1) {
//       break;
//     }
//     prevDate = currentDate;
//   }

//   return streak + 1;
// }

// // eslint-disable-next-line @typescript-eslint/no-explicit-any
// export const getUrlMetadata = async (
//   url: any,
// ): Promise<{ title: string; favicon: string }> => {
//   const fallbackFaviconUrl = `https://s2.googleusercontent.com/s2/favicons?domain_url=${url}`;

//   try {
//     const response = await fetch(`/metadata/`, {
//       method: "POST",
//       body: JSON.stringify({ url: url }),
//     });
//     const { title, favicon } = await response.json();

//     return { title, favicon };
//   } catch (error) {
//     console.error(error);
//     return { title: url, favicon: fallbackFaviconUrl };
//   }
// };

// export const copyToClipboard = (link: string): void => {
//   navigator.clipboard
//     .writeText(link)
//     .then(() => {
//       toast.success("Copied to clipboard");
//     })
//     .catch((error) => {
//       toast.error("Unable to copy");
//       console.error(error);
//     });
// };

// export const isValidURL = (url: string): boolean => {
//   const urlRegex: RegExp =
//     /^(?:https?|ftp):\/\/(?:\w+:{0,1}\w*@)?(?:\S+)(?::\d+)?(?:\/|\/(?:[\w#!:.?+=&%@!\-/]))?$/;
//   return urlRegex.test(url);
// };
