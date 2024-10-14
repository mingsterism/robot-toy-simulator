import { Robot } from '@/Robots';

describe('Robot', () => {
  let robot: Robot;

  beforeEach(() => {
    robot = new Robot();
  });

  test('place robot on valid position', () => {
    expect(robot.place(0, 0, 'NORTH')).toBe(true);
    expect(robot.report()).toBe('0,0,NORTH');
  });

  test('ignore invalid placement', () => {
    expect(robot.place(-1, 0, 'NORTH')).toBe(false);
    expect(robot.report()).toBeNull();
  });

  test('move robot', () => {
    robot.place(0, 0, 'NORTH');
    robot.move();
    expect(robot.report()).toBe('0,1,NORTH');
  });

  test('rotate robot left', () => {
    robot.place(0, 0, 'NORTH');
    robot.left();
    expect(robot.report()).toBe('0,0,WEST');
  });

  test('rotate robot right', () => {
    robot.place(0, 0, 'NORTH');
    robot.right();
    expect(robot.report()).toBe('0,0,EAST');
  });

  test('ignore move that would cause fall', () => {
    robot.place(0, 0, 'SOUTH');
    robot.move();
    expect(robot.report()).toBe('0,0,SOUTH');
  });
});
