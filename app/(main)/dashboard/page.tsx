import type { Metadata } from "next";
import PomodoroTimer from "@/components/timer/pomodoro-timer";
import QuickNotes from "@/components/notes/quick-notes";
import TodoList from "@/components/todos/todo-list";
import CalendarEvents from "@/components/events/calendar-events";

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Private Dashboard on XProd.",
};

export default function DashboardPage() {
  return (
    <div className="mx-auto grid min-h-screen w-full">
      <div className="mx-auto flex w-full max-w-4xl flex-col items-center justify-center gap-4 px-2 pt-40 pb-28 sm:px-6 xl:px-0">
        <div className="mx-auto flex lg:w-full">
          <CalendarEvents />
        </div>
        <div className="mx-auto flex flex-col lg:w-full lg:flex-row lg:gap-2">
          <div className="order-2 flex flex-1 flex-col lg:order-1">
            <TodoList />
            <QuickNotes />
          </div>
          <div className="order-1 flex lg:order-2">
            <PomodoroTimer />
          </div>
        </div>
      </div>
    </div>
  );
}
