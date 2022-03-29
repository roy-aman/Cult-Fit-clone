import navbar from "../components/navbar.js";

// navbar section
const header = document.querySelector("#navbar");
header.innerHTML = navbar();

const audio_unmute = document.querySelector(".audio_icon > img");

// video mute and unmute
audio_unmute.addEventListener("click", () => {
  const video = document.querySelector(".main_section_video");
  if (video.muted == true) {
    video.muted = false;
    audio_unmute.src =
      "https://static.cure.fit/assets/images/volume-up-outline.svg";
  } else {
    video.muted = true;
    audio_unmute.src =
      "https://static.cure.fit/assets/images/volume-off-outline.svg";
  }
});
