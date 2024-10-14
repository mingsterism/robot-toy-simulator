import { Simulator } from '@/Simulator';
import { parseCommand } from '@/utils/commandParser';

export async function startCLI() {
  const simulator = new Simulator();

  console.log('Toy Robot Simulator');
  console.log('Enter commands (PLACE X,Y,F | MOVE | LEFT | RIGHT | REPORT)');
  console.log("Enter 'exit' to quit the application");

  while (true) {
    const input = await prompt('> ');

    if (input === null) {
      console.log('Exiting Toy Robot Simulator. Goodbye!');
      process.exit(0);
    }

    if (input.toLowerCase() === 'exit') {
      console.log('Exiting Toy Robot Simulator. Goodbye!');
      process.exit(0);
    }

    const command = parseCommand(input);
    if (!command) {
      console.log('Invalid command. Please try again.');
      continue;
    }

    const result = simulator.executeCommands([command]);
    if (result.length > 0) {
      console.log(result[0]);
    }
  }
}
