function playSound(event) {
  const audio = document.querySelector(`audio[data-key='${event.keyCode}']`);
  const key = document.querySelector(`.key[data-key='${event.keyCode}']`);

  if (!audio) return;

  audio.currentTime = 0;
  audio.play();
  key.classList.add("playing");
}

function removeTransition(event) {
  if (event.propertyName !== "transform") return;
  this.classList.remove("playing");
}

const keys = document.querySelectorAll(".key");
keys.forEach((key) => key.addEventListener("transitionend", removeTransition));

window.addEventListener("keydown", playSound);

// ArepawithCheese
// 2 года назад
// ​ @Hector Espinoza   I did it without using a querySelector for each of the keys. This what I added to the script:

keys.forEach((key) => key.addEventListener("click", clickTransition)); //Click Event Listener for each key

function clickTransition() {
  const audio = document.querySelector(
    `audio[data-key="${this.getAttribute("data-key")}"]`
  );
  if (!audio) return;

  audio.currentTime = 0; //Rewind the audio
  audio.play();
  this.classList.add("playing");
}

// With this.getAttribute('data-key'), I can obtain the data-key of the clicked key(div) and pass it to the template literal.
// The rest is the same.

// And we don't have to use a classList.remove because this is already being handled by the removeTransition function.
