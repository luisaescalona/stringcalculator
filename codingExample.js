/**
 * A robot is located in a 2 dimensional room. The robot moves in the room by interpreting a string of commands in English:
 * > L - Turn left, R - Turn right, F - Move forward
 * Example: `LFFRFRFRFF`
 * When all commands are executed the program reports which coordinate (x,y) the robot is located at and what direction the robot is facing.
 * When starting the robot is always facing north. The room could have 2 shapes, square or circular.
 * The x-axis is positive towards the right (east) and the y-axis is positive towards the down (south).
 * For a square room of 5x5 and the start position for the robot at (1,2), given the instructions RFRFFRFRF, the expected result is: 1 3 N
 * For a circular room with a radius of 10 ((0,0) is at the center of the circle). Given the starting position (0, 0) and the instructions RRFLFFLRF, the expected result is: 3 1 E
 * 
 */

/**
 * Class Board
 * @author Luisa Escalona <escalona.luisa@gmail.com>
 * @version 0.1
 * @param size - The side size for square shapes or the radius for circular shapes
 * @param shape - 'c' for Circular or 's' for Square
 * @constructor 
 */

 class Board {
  constructor(size, shape) {
    this.shape = shape
    this.size = parseInt(size);
  }
  
  /**
   * Validates if the current position is inside the board
   * @param {Integer} posX - x point
   * @param {Integer} posY - y point
   * @returns a boolean indicating if the given position (point x,y) is inside the board, depending on the shape.
   */
   isValidPosition(posX, posY) {
    if(this.shape == 's'){
      // If it's a square, it checks if the x and y points are smaller than the side size
      return (posX >= 0 && posX < this.size && posY >= 0 && posY < this.size)
    }
    else{
      // If it's a circle, it calculates the hypotenuse of the triangle formed by the triangle center and the x and y points.
      var h = Math.floor(Math.sqrt(Math.pow(posX, 2) + Math.pow(posY, 2))); //hypotenuse
      return h < this.size; // If the hypotenuse is smaller than the radius, the point is inside the circle
    }    
  }
}


/**
 * Class Robot
 * @author Luisa Escalona <escalona.luisa@gmail.com>
 * @version 0.1
 * @param {Integer} xPos - x point 
 * @param {Integer} yPos - y point 
 * @param {Char} shape - 'c' for Circular or 's' for Square
 * @param {Integer} size - The side size for square shapes or the radius for circular shapes
 * @constructor 
 */

 class Robot{
  constructor(xPos, yPos, shape, size) {  
    this.xPos = parseInt(xPos);
    this.yPos = parseInt(yPos);
    this.room = new Board(size, shape)
    this.directions = ['N', 'E', 'S', 'W']//Circular array
    this.currentDirPos = 0;
  }

  /**
   * Returns the current position and direction
   * @returns a string with the position and direction in this format: x y direction
   */
  getPositionDirection() {
    return this.xPos +"  "+ this.yPos +"  "+ this.directions[this.currentDirPos]
  }

  /**
   * Checks if the current position is valid
   * @returns a boolean indicating if the current Robot's position is inside the room
   */
  validateCurrentPosition() {
    return this.room.isValidPosition(this.xPos, this.yPos)
  }

  /**
   * Updates the direction of the Robot after a turn in english or swedish
   * @param {Char} turn - Indicates the turn that the robot is making: R|H to turn rigth and L|V to turn left
   * @returns a boolean indicating if the direction received is valid
   */
  changeDirection(turn) {
    var isValid = true;
    var cp = this.currentDirPos
    if(turn == 'R')
      this.currentDirPos = cp + 1 > 3 ? 0 : cp + 1 //Managing the circular array. After the last position comes the first one
    else if(turn == 'L')
      this.currentDirPos = cp - 1 < 0 ? 3 : cp - 1 //Before the first position comes the last one
    else
      isValid = false
    return isValid;
  }

  /**
   * Updates the current position of the Robot, point (x,y)
   * @returns a boolean indicating if the move done by the Robot is still inside of the board
   */
  moveForward(){
    switch(this.currentDirPos){
      case 0: // N
        this.yPos -= 1
        break;
      case 1: // E
        this.xPos += 1
        break;
      case 2: // S
        this.yPos += 1
        break;
      case 3: // W
        this.xPos -= 1
        break;
    }
    return this.validateCurrentPosition()
  }

  /**
   * Executes one by one the given commands and if one fails, return the error.
   * @param {String} commands - Char sequence with the commands to be done by the Robot: R|H to turn rigth, L|V to turn left, F|G to move forward
   * @returns a String with the first error or the final position and direction of the Robot in this format: x y direction
   */
  executeCommands(commands){
    var comm = commands.toUpperCase()    
    var i;
    for(i=0; i < comm.length; i++){
      if(comm.charAt(i) == 'F'){
        if(!this.moveForward()){          
          return "Move #"+(i+1)+" ("+comm.charAt(i)+") leads to an out of range position";
        }
      }
      else if(!this.changeDirection(comm.charAt(i))){
        return "Move #"+(i+1)+" ("+comm.charAt(i)+") is an invalid direction";
      }
    }
    return this.getPositionDirection();
  }
 }

 function main(){
  var robot = new Robot(0, 0, 'c', 10)//Circular shape, radius 10, starting at 0,0
  if(!robot.validateCurrentPosition()){
    console.log("The starting point is not valid")
  }
  else{
    console.log(robot.executeCommands("RRFLFFLRF"))
  }
  robot = new Robot(1, 2, 's', 5)//Square shape, side size 5, starting at 1,2
  if(!robot.validateCurrentPosition()){
    console.log("The starting point is not valid")
  }
  else{
    console.log(robot.executeCommands("RFRFFRFRF"))
  }
 }