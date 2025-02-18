export interface SiteConfig {
  name: string;
  description: string;
  url: string;
  ogImage: string;
  twitterImage: string;
  socialHandle: string;
  links: {
    twitter: string;
    github: string;
    website: string;
  };
}

export interface AuthFormProps {
  formType: "login" | "register";
}

export interface Quote {
  content: string;
  author: string;
}

export interface Timer {
  id: number;
  mode: "work" | "shortBreak" | "longBreak";
  duration: number;
  started_at: Date;
  is_complete: boolean;
  created_at: Date;
  user_id: string;
}

export interface Todo {
  id: number;
  task: string;
  is_complete: boolean;
  created_at: Date;
  user_id: string;
}

export interface Note {
  id: number;
  thought: string;
  created_at: Date;
  user_id: string;
}

export interface Event {
  id: number;
  date: string;
  time: string;
  title: string;
  description: string;
  created_at: Date;
  user_id: string;
}

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
