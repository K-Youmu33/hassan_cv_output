

window.onresize = () => {
    if(window.location.pathname == "/"){
        // make same height
        // var landing_page_videos = document.getElementById("landing-page-video");
        // var padding_for_landgingpagevideo = document.getElementById("padding-for-landgingpagevideo")
        // padding_for_landgingpagevideo.style.height = (landing_page_videos.offsetHeight - 64)+ "px";
        playPauseVideo();
    }
}

window.onscroll = () => {
    if(window.location.pathname == "/"){
        playPauseVideo();
    }
};

function ScrollToId(id) {
    document.getElementById(id).scrollIntoView({behavior:'smooth'});
}
function ScrollToTop() {
    window.scrollTo({top: 0, behavior: 'smooth'});
}
function CheckIdExists(id) {
    if(document.getElementById(id)){
        return true;
    } else {
        return false;
    }
}
function playPauseVideo() {
    // We can only control playback without insteraction if video is mute
    var landing_page_videos = document.getElementById("landing-page-video");

    videoHeight = landing_page_videos.offsetHeight;
    scrollValue = document.documentElement.scrollTop
    if(scrollValue > videoHeight){
        landing_page_videos.pause()
    } else {
        landing_page_videos.play()
    }
}

