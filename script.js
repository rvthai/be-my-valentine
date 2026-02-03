import { scenes } from "./scenes.js";

const title = document.getElementById("title");
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
}

acceptButton.addEventListener("click", () => {
  // final scene when proposal is accepted
  title.textContent = "YIPPEE! ❤️🥰";
  meme.src = "assets/cheer.gif";
  acceptButton.style.display = "none";
  rejectButton.style.display = "none";
});

rejectButton.addEventListener("click", () => {
  sceneIndex++;

  // Move through scenes on every rejection
  render(sceneIndex);

  // On the last scene, disable the reject button
  if (sceneIndex >= scenes.length) {
    rejectButton.style.disabled = true;
  }
});

// render initial scene
render(0);
