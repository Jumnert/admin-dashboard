"use client";
import React, { useState } from "react";
import { ScrollArea } from "./ui/scroll-area";
import { Card } from "./ui/card";
import { Checkbox } from "./ui/checkbox";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { Button } from "./ui/button";
import { Calendar1, CalendarIcon } from "lucide-react";
import { format, formatDate } from "date-fns";
import { Calendar } from "./ui/calendar";

const todoData = [
  { id: "todo_1", title: "Finish dashboard UI", completed: true },
  { id: "todo_2", title: "Fix Next/Image config issue", completed: false },
  { id: "todo_3", title: "Prepare project for submission", completed: true },
  { id: "todo_4", title: "Review API integration", completed: false },
  { id: "todo_5", title: "Refactor CardList component", completed: true },
  { id: "todo_6", title: "Optimize chart rendering", completed: false },
  { id: "todo_7", title: "Clean up unused imports", completed: true },
  { id: "todo_8", title: "Add dark mode toggle", completed: false },
  { id: "todo_9", title: "Update Tailwind config", completed: true },
  { id: "todo_10", title: "Test responsive layout", completed: false },
  { id: "todo_11", title: "Fix sidebar collapse state", completed: true },
  { id: "todo_12", title: "Add loading skeletons", completed: false },
  { id: "todo_13", title: "Polish mobile spacing", completed: true },
  { id: "todo_14", title: "Remove console.logs", completed: false },
  { id: "todo_15", title: "Prepare demo data", completed: true },
  { id: "todo_16", title: "Validate form inputs", completed: false },
  { id: "todo_17", title: "Check accessibility labels", completed: true },
  { id: "todo_18", title: "Deploy to Vercel", completed: false },
  { id: "todo_19", title: "Monitor build warnings", completed: true },
  { id: "todo_20", title: "Write short README", completed: false },
];

const TodoList = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [open, setOpen] = useState(false);
  return (
    <div className="">
      <h1 className="text-lg font-semibold mb-6">Todo-List</h1>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button className="w-full">
            <CalendarIcon />
            {date ? format(date, "MMM d, yyyy") : <span>Pick a date</span>}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="p-0 w-auto">
          <Calendar
            mode="single"
            selected={date}
            onSelect={(selectedDate: Date | undefined) => {
              setDate(selectedDate);
              setOpen(false);
            }}
          />
        </PopoverContent>
      </Popover>
      {/* List */}
      <ScrollArea className="max-h-[400px] overflow-y-auto mt-4">
        <div className="flex flex-col gap-2">
          {todoData.map((item) => (
            <Card key={item.id} className="p-4">
              <div className="flex items-center gap-4">
                <Checkbox id={item.id} checked={item.completed} />
                <label className="text-sm text-muted-foreground">
                  {item.title}
                </label>
              </div>
            </Card>
          ))}
        </div>
      </ScrollArea>
    </div>
  );
};

export default TodoList;
