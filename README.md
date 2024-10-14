# Toy Robot Simulator

This project is a simulation of a toy robot moving on a square tabletop. The robot can be placed, moved, rotated, and can report its position.

## Prerequisites

- Docker

## Getting Started

Follow these steps to run the Toy Robot Simulator:

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/toy-robot-simulator.git
   cd toy-robot-simulator
   ```

2. Build the Docker image:
   ```bash
   docker build -t toy-robot-simulator .
   ```

3. Run the Docker container:
   ```bash
   docker run -it toy-robot-simulator
   ```

## Using the Simulator

Once the container is running, you can enter commands to control the robot. Here are the available commands:

- `PLACE X,Y,F`: Place the robot on the table at position (X,Y) facing direction F (NORTH, SOUTH, EAST, or WEST)
- `MOVE`: Move the robot one unit forward in the direction it is facing
- `LEFT`: Rotate the robot 90 degrees to the left
- `RIGHT`: Rotate the robot 90 degrees to the right
- `REPORT`: Output the current position and facing direction of the robot

Example usage:

```
> PLACE 0,0,NORTH
> MOVE
> RIGHT
> MOVE
> REPORT
Output: 1,1,EAST
```

To exit the simulator, use the `exit` command or press `Ctrl+C`.

## Running Tests

To run the test suite within the Docker container:

```bash
docker run -it toy-robot-simulator bun test
```

## Development

If you want to make changes to the code and test them:

1. Make your changes in the `src` directory
2. Rebuild the Docker image:
   ```bash
   docker build -t toy-robot-simulator .
   ```
3. Run the container with the new changes:
   ```bash
   docker run -it toy-robot-simulator
   ```
