giving it an object oriented approach. the robot is able to move, however it's position on the table needs to be
tracked. However, if we can keep track of the robot's position just within it's own state, that will be good.
but if we can also have a global board state that would be good as well. fundamentally the robot keeping it's
own state will be sufficient for now. having a global state is fundamentally another good thing to do if we have
multiple robots moving around and we want to keep track of everything. a robot may not know what's infront of them
as they are only concerned with their coordinates and that their coordinates cannot move beyond the specific
boundaries. this can be done internally. having an external global state to coordinate the robots is workable
as well but it's easier to have each robot keep track of their own state.

for the robot,everytime it moves, it will check it's own coordinate position and double check if they can move
further or will they drop out of the board.

fundamental test cases would be to give the robot various positions and check if the robot will make the move
further to the next square or not.

to capture the logic of the board in the robot, we will place in the constraints of movement in the  robot.
constraints are that the coordinate cannot be beyond a specific number. that will make it easy for the constraints.

robotState = {
x_coordinate: int;
y_coordinate: int;
current_facing: NORTH | SOUTH | EAST | WEST;
}

the function can be firstly to verify if the steps will cause the robot to fall off the board.
second function is to simulate the robot moving and arrive at the final square. there might be algorithm shortcuts
to take to determine this final position.

verifying the steps to cause the robot to fall off the board is checking if the number of steps in any direction
is greater than the current coordinate of the robot where it's positioned.
fundamentally, the steps needs to cancel out each other in the opposite direction.

assuming robot starts from (0, 0), then we can just add up all the MOVE IN NORTH SOUTH, and EAST WEST. we net each outer out.
they cannot be greater than

NORTH, NORTH, NORTH, NORTH, NORTH, NORTH, SOUTH. this will cause the robot to fall because it's already greater than 5 in a single direction.
NORTH, NORTH, NORTH, NORTH, SOUTH, NORTH, NORTH, SOUTH. this is fine because eventhough it's 6 in one direction, it's never consecutively greater
NORTH, NORTH, NORTH, NORTH, NORTH, SOUTH, NORTH, NORTH, SOUTH. this is not fine because if you minus out SOUTH, NORTH, and you concat the enums together, you
get a count of NORTH that is still higher than 5. you get 6 month, as the last SOUTH does not net out because it happens after the addition
of SOUTH.

the above assumes (0,0). if we start from say (1, 2), then we need to add 2 to the counter of NORTH SOUTH and 1 for EAST WEST
so the algorithm to determine if robot falls off the board will be
Filter the moves into separate lists for NORTH/SOUTH and EAST/WEST.
Based on the initial coordinates, append corresponding directional moves to simulate the robot's starting position.
Iterate through each list (NORTH/SOUTH and EAST/WEST):
a. Keep a running count, incrementing for moves in one direction (e.g., NORTH or EAST) and decrementing for the opposite direction.
b. If at any point the absolute value of the count exceeds 5, the robot falls off.
If the robot hasn't fallen off after processing all moves, it's safe.
