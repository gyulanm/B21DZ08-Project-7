const video=document.querySelector("#video");
const videoBtn=document.querySelector("#video-btn");
const videoBtnImg=videoBtn.querySelector("img");

let isVideoPlay = false;

videoBtn.addEventListener("click",() => {
    if (isVideoPlay) {
        video.pause();
        videoBtnImg.src="./img/play.svg";
        isVideoPlay=false;
    } else {
        video.play();
        videoBtn.style.display="none"
        videoBtnImg.src="./img/pause.svg";
        isVideoPlay=true;
    }
});

videoBtn.parentElement.addEventListener("mouseover", () =>{
    if (isVideoPlay) {
        videoBtn.style.display="block";
    }
});
videoBtn.parentElement.addEventListener("mouseleave", () =>{
    if (isVideoPlay) {
        videoBtn.style.display="none";
    }
});


