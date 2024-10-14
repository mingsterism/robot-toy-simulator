import { Robot } from '@/Robots';
import { Direction, Command } from '@/types';
import { parseCommand } from '@/utils/commandParser';

export class Simulator {
  private robot: Robot;

  constructor() {
    this.robot = new Robot();
  }

  executeCommands(commands: string[]): string[] {
    const output: string[] = [];

    for (const input of commands) {
      const command = parseCommand(input);
      if (!command) continue;

      if (command.startsWith('PLACE')) {
        const [x, y, facing] = command.split(' ')[1].split(',');
        this.robot.place(parseInt(x), parseInt(y), facing as Direction);
      } else if (command === 'MOVE') {
        this.robot.move();
      } else if (command === 'LEFT') {
        this.robot.left();
      } else if (command === 'RIGHT') {
        this.robot.right();
      } else if (command === 'REPORT') {
        const report = this.robot.report();
        if (report) output.push(report);
      }
    }

    return output;
  }
}
