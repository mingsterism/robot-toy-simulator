export type Direction = "NORTH" | "SOUTH" | "EAST" | "WEST";
export type Command =
  | "MOVE"
  | "LEFT"
  | "RIGHT"
  | "REPORT"
  | `PLACE ${number},${number},${Direction}`;
