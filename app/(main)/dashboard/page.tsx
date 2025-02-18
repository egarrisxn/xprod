import PomodoroTimer from "@/components/timer/pomodoro-timer";
import QuickNotes from "@/components/notes/quick-notes";
import TodoList from "@/components/todos/todo-list";
import CalendarEvents from "@/components/events/calendar-events";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard",
  description: "My dashboard page.",
};

export default function DashboardPage() {
  return (
    <div className="container mx-auto grid min-h-screen w-full grid-cols-1 place-items-center">
      <div className="mx-auto flex flex-col justify-center gap-4 px-2 sm:px-6 xl:px-0">
        <CalendarEvents />
        <div className="flex flex-col lg:flex-row">
          <div className="flex flex-1 flex-col">
            <TodoList />
            <QuickNotes />
          </div>
          <div className="x">
            <PomodoroTimer />
          </div>
        </div>
      </div>
    </div>
  );
}
