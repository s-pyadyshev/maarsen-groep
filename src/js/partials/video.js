var video = document.querySelectorAll("video");

function addSourceToVideo(element, src) {
    var source = document.createElement("source");
    source.src = src;
    source.type = "video/mp4";
    element.appendChild(source);
}
function replaceVideo(element, src) {
    var windowWidth = window.innerWidth ? window.innerWidth : $(window).width();
    if (windowWidth > 768) {
        addSourceToVideo(element, src.dataset.desktopVideo);
    } else {
        addSourceToVideo(element, src.dataset.mobileVideo);
    }
}

function videoSize() {
    if (video !== undefined) {
        video.forEach(function (element) {
            replaceVideo(element, element);
        });
    }
}

videoSize();
