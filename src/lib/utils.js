import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

// Combine Tailwind classes with conflict resolution.
//   cn("p-2", isActive && "p-4") -> "p-4"
export function cn(...inputs) {
  return twMerge(clsx(inputs));
}
