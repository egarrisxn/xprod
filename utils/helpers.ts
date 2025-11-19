export const formatSessionHistory = (duration: number) => {
  return new Date(duration * 1000).toISOString().substring(14, 19);
};

export const formatSessionTimer = (seconds: number) => {
  const minutes = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return `${minutes}:${secs.toString().padStart(2, "0")}`;
};

export const formatCalendarDate = (date: Date, dateFormat = "MMMM d, yyyy") => {
  const options: Intl.DateTimeFormatOptions = {};
  if (dateFormat.includes("MMMM")) {
    options.month = "long";
  } else if (dateFormat.includes("MMM")) {
    options.month = "short";
  } else if (dateFormat.includes("MM")) {
    options.month = "2-digit";
  }
  if (dateFormat.includes("d")) {
    options.day = "numeric";
  }
  if (dateFormat.includes("yyyy")) {
    options.year = "numeric";
  } else if (dateFormat.includes("yy")) {
    options.year = "2-digit";
  }
  return date.toLocaleDateString("en-US", options);
};
