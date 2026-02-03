import { scenes } from "./scenes.js";

const title = document.getElementById("title");
const subtitle = document.getElementById("subtitle");
const meme = document.getElementById("meme");
const acceptButton = document.getElementById("acceptBtn");
const rejectButton = document.getElementById("rejectBtn");

let sceneIndex = 0;

function render(step) {
  const scene = scenes[step];
  title.textContent = scene.title;
  meme.src = scene.meme;
  acceptButton.textContent = scene.acceptText;
  rejectButton.textContent = scene.rejectText;

  // no subtitle until final scene
  subtitle.style.display = "none";

  // disable reject button on second to last scene
  if (step >= scenes.length - 1) {
    rejectButton.disabled = true;
  }
}

acceptButton.addEventListener("click", () => {
  // final scene when proposal is accepted
  title.textContent = "YIPPEE!!! ❤️🥰";
  meme.src = "assets/cheer.gif";
  acceptButton.style.display = "none";
  rejectButton.style.display = "none";
  subtitle.style.display = "block";
});

rejectButton.addEventListener("click", () => {
  // Move through scenes on every rejection
  if (sceneIndex < scenes.length - 1) sceneIndex++;
  render(sceneIndex);
});

// render initial scene
render(0);
