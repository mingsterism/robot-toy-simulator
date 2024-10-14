import { Direction } from '@/types';

export class Robot {
  private x: number | null = null;
  private y: number | null = null;
  private facing: Direction | null = null;

  place(x: number, y: number, facing: Direction): boolean {
    if (this.isValidPosition(x, y)) {
      this.x = x;
      this.y = y;
      this.facing = facing;
      return true;
    }
    return false;
  }

  move(): void {
    if (!this.isPlaced()) return;

    let newX = this.x!;
    let newY = this.y!;

    switch (this.facing) {
      case 'NORTH':
        newY++;
        break;
      case 'SOUTH':
        newY--;
        break;
      case 'EAST':
        newX++;
        break;
      case 'WEST':
        newX--;
        break;
    }

    if (this.isValidPosition(newX, newY)) {
      this.x = newX;
      this.y = newY;
    }
  }

  left(): void {
    if (!this.isPlaced()) return;

    const directions: Direction[] = ['NORTH', 'WEST', 'SOUTH', 'EAST'];
    const currentIndex = directions.indexOf(this.facing!);
    this.facing = directions[(currentIndex + 1) % 4];
  }

  right(): void {
    if (!this.isPlaced()) return;

    const directions: Direction[] = ['NORTH', 'EAST', 'SOUTH', 'WEST'];
    const currentIndex = directions.indexOf(this.facing!);
    this.facing = directions[(currentIndex + 1) % 4];
  }

  report(): string | null {
    if (!this.isPlaced()) return null;
    return `${this.x},${this.y},${this.facing}`;
  }

  private isPlaced(): boolean {
    return this.x !== null && this.y !== null && this.facing !== null;
  }

  private isValidPosition(x: number, y: number): boolean {
    return x >= 0 && x <= 4 && y >= 0 && y <= 4;
  }
}
