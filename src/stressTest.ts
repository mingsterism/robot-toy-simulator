import { Simulator } from '@/Simulator';
import { Direction, Command } from '@/types';

function generateRandomCommand(): Command {
  const commands: Command[] = ['MOVE', 'LEFT', 'RIGHT', 'REPORT'];
  const directions: Direction[] = ['NORTH', 'SOUTH', 'EAST', 'WEST'];
  const randomIndex = Math.floor(Math.random() * (commands.length + 1));

  if (randomIndex === commands.length) {
    const x = Math.floor(Math.random() * 5);
    const y = Math.floor(Math.random() * 5);
    const facing = directions[Math.floor(Math.random() * directions.length)];
    return `PLACE ${x},${y},${facing}` as Command;
  }

  return commands[randomIndex];
}

export function runStressTest(numCommands: number = 10000) {
  const simulator = new Simulator();
  const commands: Command[] = [];

  console.log(`Running stress test with ${numCommands} random commands...`);

  for (let i = 0; i < numCommands; i++) {
    commands.push(generateRandomCommand());
  }

  const result = simulator.executeCommands(commands);

  console.log(
    `Stress test completed. Final robot position: ${result[result.length - 1] || 'Not placed'}`,
  );
  console.log(`Total REPORT commands executed: ${result.length}`);
}
