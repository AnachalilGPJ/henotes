const fireSound = new Audio("/sounds/fire_soft.mp3");

export function playFireSound() {
  fireSound.volume = 0.3;
  fireSound.currentTime = 0;
  fireSound.play();
}
