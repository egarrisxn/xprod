"use client";
import { onCheckChange } from "@/app/actions/todo";
import { Checkbox } from "@/components/ui/checkbox";

import type { Todo } from "@/utils/types";

export function TodoCheckbox({ todo }: { todo: Todo }) {
  return (
    <Checkbox
      className="mt-0.5 h-5 w-5"
      id={todo?.id as unknown as string}
      checked={todo?.is_complete}
      onCheckedChange={() => onCheckChange(todo)}
    />
  );
}
