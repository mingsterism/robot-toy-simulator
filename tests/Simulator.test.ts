import { Simulator } from "../src/Simulator";

describe("Simulator", () => {
  let simulator: Simulator;

  beforeEach(() => {
    simulator = new Simulator();
  });

  test("execute single command", () => {
    const result = simulator.executeCommands(["PLACE 0,0,NORTH", "REPORT"]);
    expect(result).toEqual(["0,0,NORTH"]);
  });

  test("execute multiple commands", () => {
    const result = simulator.executeCommands([
      "PLACE 1,2,EAST",
      "MOVE",
      "MOVE",
      "LEFT",
      "MOVE",
      "REPORT",
    ]);
    expect(result).toEqual(["3,3,NORTH"]);
  });

  test("ignore commands before valid PLACE", () => {
    const result = simulator.executeCommands([
      "MOVE",
      "LEFT",
      "REPORT",
      "PLACE 0,0,NORTH",
      "MOVE",
      "REPORT",
    ]);
    expect(result).toEqual(["0,1,NORTH"]);
  });

  test("handle multiple PLACE commands", () => {
    const result = simulator.executeCommands([
      "PLACE 0,0,NORTH",
      "MOVE",
      "PLACE 2,2,EAST",
      "MOVE",
      "REPORT",
    ]);
    expect(result).toEqual(["3,2,EAST"]);
  });
});
