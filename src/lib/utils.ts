import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const timeFormatterInHrsMins = (duration: number): string => {
  const milliseconds = duration;

  const minutes = Math.floor((milliseconds / 1000 / 60) % 60);

  const hours = Math.floor((milliseconds / 1000 / 60 / 60) % 24);

  const formattedTime = [
    `${hours.toString().padStart(2)} hr`,
    `${minutes.toString().padStart(2)} min`,
  ].join(" ");

  return formattedTime;
};

export const timeFormatterInMinSeconds = (duration: number): string => {
  const milliseconds = duration;

  const seconds = Math.floor((milliseconds / 1000) % 60);

  const minutes = Math.floor((milliseconds / 1000 / 60) % 60);

  const formattedTime = [
    `${minutes.toString()}`,
    `${seconds.toString().padStart(2, "0")}`,
  ].join(":");

  return formattedTime;
};
