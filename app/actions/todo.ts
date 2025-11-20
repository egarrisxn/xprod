"use server";

import { revalidatePath } from "next/cache";
import { createClient } from "@/utils/supabase/server";
import type { Todo } from "@/utils/types";

//! Get to-dos
export async function getTodos(): Promise<Todo[]> {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  const { data, error } = await supabase
    .from("xprod_todos")
    .select("*")
    .eq("user_id", user?.id);
  if (error) throw new Error(`Error fetching to-dos: ${error.message}`);
  return data || [];
}

//! Add to-do
export async function addTodo(formData: FormData) {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  const { error } = await supabase
    .from("xprod_todos")
    .insert([
      {
        task: formData.get("task") as string,
        is_complete: false,
        inserted_at: new Date(),
        user_id: user?.id,
      },
    ])
    .select();
  if (error) throw new Error(`Error adding to-do: ${error.message}`);
  revalidatePath("/dashboard");
}

//! Edit to-do
export async function editTodo(todo: Todo) {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  const { error } = await supabase
    .from("xprod_todos")
    .update({ task: todo.task })
    .eq("id", todo.id)
    .eq("user_id", user?.id)
    .select();
  if (error) throw new Error(`Error editing to-do: ${error.message}`);
}

//! Delete to-do
export async function deleteTodo(id: number) {
  const supabase = await createClient();
  const { error } = await supabase.from("xprod_todos").delete().eq("id", id);
  if (error) throw new Error(`Error deleting to-do: ${error.message}`);
  revalidatePath("/dashboard");
}

//! Delete completed to-dos
export async function deleteCompletedTodos() {
  const supabase = await createClient();
  const { error } = await supabase
    .from("xprod_todos")
    .delete()
    .eq("is_complete", true);
  if (error)
    throw new Error(`Error deleting completed to-dos: ${error.message}`);
  revalidatePath("/dashboard");
}

//! Delete all to-dos
export async function deleteAllTodos() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  const { error } = await supabase
    .from("xprod_todos")
    .delete()
    .eq("user_id", user?.id);
  if (error) throw new Error(`Error deleting all to-dos: ${error.message}`);
  revalidatePath("/dashboard");
}

export async function onCheckChange(todo: Todo) {
  const supabase = await createClient();
  const { error } = await supabase
    .from("xprod_todos")
    .update({ is_complete: !todo?.is_complete })
    .eq("id", todo?.id)
    .select();
  if (error) throw new Error(`Error: ${error.message}`);
  revalidatePath("/dashboard");
}
