import { List } from "lucide-react";
import { getTodos, editTodo } from "@/app/actions/todo";
import type { Todo } from "@/utils/types";
import { AddTodo } from "./add-todo";
import { ClearTodos } from "./clear-todos";
import { TodoInput } from "./todo-input";
import { TodoCheckbox } from "./todo-checkbox";
import { DeleteTodo } from "./delete-todo";

async function Todo({ todo }: { todo: Todo }) {
  return (
    <div className="flex items-center gap-2">
      <form
        className="flex flex-1 items-center gap-2"
        action={async () => {
          "use server";
          await editTodo(todo);
        }}
      >
        <TodoCheckbox todo={todo} />
        <TodoInput todo={todo} />
      </form>
      <DeleteTodo id={todo.id} />
    </div>
  );
}

export default async function TodoList() {
  const todos = await getTodos();

  return (
    <section className="max-w-3xl p-2">
      <div className="flex flex-col rounded-lg border bg-card p-4 shadow-lg dark:border-foreground">
        <div className="flex items-center gap-4 pb-4">
          <List className="size-8 text-gray-500 dark:text-gray-400" />
          <h1 className="text-2xl font-semibold">To-Do List</h1>
        </div>
        <div className="flex-1 overflow-auto">
          <div className="flex flex-col">
            {todos &&
              todos
                .filter((todo) => !todo.is_complete)
                .map((todo) => <Todo key={todo.id} todo={todo} />)}
            {todos &&
              todos
                .filter((todo) => todo.is_complete)
                .map((todo) => <Todo key={todo.id} todo={todo} />)}
            <AddTodo />
          </div>
          <ClearTodos />
        </div>
      </div>
    </section>
  );
}
