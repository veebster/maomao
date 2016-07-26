var canvas = document.querySelector('canvas');
var movementXchange = 0;
var movementYchange = 0;

canvas.requestPointerLock = canvas.requestPointerLock ||
           canvas.mozRequestPointerLock ||
           canvas.webkitRequestPointerLock;

document.exitPointerLock = document.exitPointerLock ||
         document.mozExitPointerLock ||
         document.webkitExitPointerLock;
//document.exitPointerLock();

canvas.onclick = function() {
  canvas.requestPointerLock();
}

document.addEventListener('pointerlockchange', lockChangeAlert, false);
document.addEventListener('mozpointerlockchange', lockChangeAlert, false);
document.addEventListener('webkitpointerlockchange', lockChangeAlert, false);

function lockChangeAlert() {
  if(document.pointerLockElement === canvas ||
  document.mozPointerLockElement === canvas ||
  document.webkitPointerLockElement === canvas) {
    console.log('The pointer lock status is now locked');
    document.addEventListener("mousemove", get_mouse_look, false);
  } else {
    console.log('The pointer lock status is now unlocked');
    document.removeEventListener("mousemove", get_mouse_look, false);
  }
}

function get_mouse_look(e) {
  movementXchange = e.movementX ||
      e.mozMovementX          ||
      e.webkitMovementX       ||
      0;
  
  movementYchange = e.movementY ||
      e.mozMovementY          ||
      e.webkitMovementY       ||
      0;
}

function mouse_x_change() {
  return movementXchange;
}

function mouse_y_change() {
  return movementYchange;
}

function clear_change() {
  movementXchange=0;
  movementYchange=0;
}