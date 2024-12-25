import "@lottiefiles/lottie-player";
import {create} from '@lottiefiles/lottie-interactivity';

function initializeLoading() {
    const preloader = document.getElementById("preloader");
    window.addEventListener("load", () => {
        const animation = preloader.animate([
            { opacity: 1 },
            { opacity: 0 }
        ], {
            duration: 250,
            fill: "forwards",
            easing: "ease-out"
        });
        animation.addEventListener("finish", () => {
            preloader.style.display = "none";
        }, { once: true });
    }, { once: true });
}

function initializeLottie() {
    const instagram = document.getElementById("instagram");
    instagram.onload = (e) => {
        create({
            player:'#instagram',
            mode:"cursor",
            actions: [{type: "hold"}]
        });
    }
}

function initilizeVideoPlayer() {
    const video = document.getElementById("video");
    const videoContainer = document.getElementById("video-container");
    const playButton = document.getElementById("play-button");
    videoContainer.onclick = () => {
        if(video.paused) {
            video.play();
            playButton.classList.remove("paused");
            playButton.classList.add("playing");
        } else {
            video.pause();
            playButton.classList.remove("playing");
            playButton.classList.add("paused");
        }
    };
}

function init() {
    initializeLoading();
    initializeLottie();
    initilizeVideoPlayer();
}

init();