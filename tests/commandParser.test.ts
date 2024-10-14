import { parseCommand } from "../src/utils/commandParser";

describe("commandParser", () => {
  test("parse valid PLACE command", () => {
    expect(parseCommand("PLACE 0,0,NORTH")).toBe("PLACE 0,0,NORTH");
  });

  test("parse valid MOVE command", () => {
    expect(parseCommand("MOVE")).toBe("MOVE");
  });

  test("parse valid LEFT command", () => {
    expect(parseCommand("LEFT")).toBe("LEFT");
  });

  test("parse valid RIGHT command", () => {
    expect(parseCommand("RIGHT")).toBe("RIGHT");
  });

  test("parse valid REPORT command", () => {
    expect(parseCommand("REPORT")).toBe("REPORT");
  });

  test("return null for invalid command", () => {
    expect(parseCommand("INVALID")).toBeNull();
  });

  test("return null for invalid PLACE command", () => {
    expect(parseCommand("PLACE 0,0,INVALID")).toBeNull();
  });
});
