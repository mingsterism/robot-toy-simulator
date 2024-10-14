import { Command } from "../types";

export function parseCommand(input: string): Command | null {
  const placeMatch = input.match(/^PLACE (\d+),(\d+),(NORTH|SOUTH|EAST|WEST)$/);
  if (placeMatch) {
    return input as Command;
  }

  if (["MOVE", "LEFT", "RIGHT", "REPORT"].includes(input)) {
    return input as Command;
  }

  return null;
}
