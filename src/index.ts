import { startCLI } from './cli';
import { runStressTest } from './stressTest';

const args = process.argv.slice(2);

if (args.includes('--stress-test')) {
  const numCommands =
    parseInt(args[args.indexOf('--stress-test') + 1]) || 10000;
  runStressTest(numCommands);
} else {
  startCLI();
}

// If you want to make this module importable, add:
export { startCLI, runStressTest };
