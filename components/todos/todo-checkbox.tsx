"use client";

import { onCheckChange } from "@/app/actions/todo";
import type { Todo } from "@/utils/types";
import { Checkbox } from "@/components/ui/checkbox";

export function TodoCheckbox({ todo }: { todo: Todo }) {
  return (
    <Checkbox
      className="mt-0.5 size-5"
      id={todo?.id as unknown as string}
      checked={todo?.is_complete}
      onCheckedChange={() => onCheckChange(todo)}
    />
  );
}
