console.log("INSIDE VIDEO CONTROLS");
let video = document.getElementById("playVideo");
let progress = document.querySelector(".progress");
progress.style.width = (video.currentTime/video.duration)*100 * (80/100);