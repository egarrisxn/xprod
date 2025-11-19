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

export interface ProfileData {
  full_name: string | null;
  username: string | null;
  website: string | null;
  avatar_url: string | null;
}

export interface User {
  id: string;
  email?: string;
  avatar_url?: string;
}

export interface ProfileAvatarProps {
  size?: number;
  user: User | null;
}

export interface ProfileCardProps {
  user: User | null;
}

export interface Quote {
  readonly content: string;
  readonly author: string;
}

export interface Todo {
  id: number;
  task: string;
  is_complete: boolean;
  inserted_at: Date;
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

export interface Timer {
  id: number;
  mode: "work" | "shortBreak" | "longBreak";
  duration: number;
  started_at: Date;
  is_complete: boolean;
  created_at: Date;
  user_id: string;
}
