import type { Metadata } from "next";
import PomodoroTimer from "@/components/timer/pomodoro-timer";
import QuickNotes from "@/components/notes/quick-notes";
import TodoList from "@/components/todos/todo-list";
import CalendarEvents from "@/components/events/calendar-events";

export const metadata: Metadata = {
  title: "Dashboard",
  description: "My dashboard.",
};

export default function DashboardPage() {
  return (
    <div className="container mx-auto grid min-h-screen w-full grid-cols-1 place-items-center">
      <div className="mx-auto flex flex-col justify-center gap-4 p-2 sm:p-6 xl:px-0">
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
