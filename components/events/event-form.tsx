"use client";

import React, { useState } from "react";
import { addEvent, updateEvent } from "@/app/actions/event";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import type { Event } from "@/utils/types";

export function EventForm({
  event,
  selectedDate,
  onEventSaved,
  onCancel,
}: {
  event?: Event;
  selectedDate: Date;
  onEventSaved: () => void;
  onCancel: () => void;
}) {
  const [title, setTitle] = useState(event?.title || "");
  const [description, setDescription] = useState(event?.description || "");
  const [time, setTime] = useState(event?.time || "12:00");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!title || !description || !time) return;

    setIsLoading(true);

    try {
      if (event) {
        await updateEvent(event.id, title, description, time);
      } else {
        await addEvent(
          title,
          description,
          time,
          selectedDate.toISOString().split("T")[0]
        );
      }
      onEventSaved();
    } catch (error) {
      console.error("Error saving event:", error);
    }

    setIsLoading(false);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="title">Title</Label>
        <Input
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Event title"
          required
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="time">Time</Label>
        <Input
          id="time"
          type="time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
          required
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="description">Description</Label>
        <Input
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Event description"
        />
      </div>
      <div className="flex justify-end space-x-2">
        <Button
          type="button"
          variant="outline"
          onClick={onCancel}
          disabled={isLoading}
        >
          Cancel
        </Button>
        <Button type="submit" disabled={isLoading}>
          {isLoading ? "Saving" : event ? "Update Event" : "Save Event"}
        </Button>
      </div>
    </form>
  );
}
