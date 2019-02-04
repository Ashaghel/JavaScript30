function playthekey(x) {
  const sound = document.querySelector(`audio[data-key="${x.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${x.keyCode}"]`);
  if (!sound) return;
  sound.currentTime = 0; //rewind it to the start
  sound.play();
  key.classList.add("playing");
}
function removeTransition(act) {
  if (act.propertyName !== "transform") return; //skip if it is not transform
  this.classList.remove("playing");
}
const keysall = document.querySelectorAll(".key");
keysall.forEach(key => key.addEventListener("transitionend", removeTransition));
window.addEventListener("keydown", playthekey);
