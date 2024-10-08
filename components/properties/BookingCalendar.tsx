"use client";

import { useState } from "react";
import { DateRange } from "react-day-picker";
import { Calendar } from "../ui/calendar";

export default function BookingCalendar() {
  const currentDate = new Date();
  const defaultSelected: DateRange = {
    from: currentDate,
    to: currentDate,
  };

  const [range, setRange] = useState<DateRange | undefined>(defaultSelected);
  return (
    <Calendar
      mode="range"
      defaultMonth={currentDate}
      selected={range}
      onSelect={setRange}
    />
  );
}
