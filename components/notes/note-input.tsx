/* eslint-disable react-hooks/set-state-in-effect */
"use client";

import React, { useState, useEffect } from "react";
import { editNote } from "@/app/actions/note";
import { Input } from "@/components/ui/input";
import type { Note } from "@/utils/types";

export function NoteInput({ note }: { note: Note }) {
  const [description, setDescription] = useState(note.thought);

  const [typingTimeout, setTypingTimeout] = useState<NodeJS.Timeout | null>(
    null
  );

  useEffect(() => {
    setDescription(note.thought);
  }, [note.thought]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setDescription(newValue);

    if (typingTimeout) {
      clearTimeout(typingTimeout);
    }

    setTypingTimeout(
      setTimeout(async () => {
        await editNote({ ...note, thought: e.target.value });
      }, 2000)
    );
  };

  return (
    <Input
      className="border-none p-0 focus-visible:ring-transparent"
      value={description}
      onChange={handleInputChange}
    />
  );
}
