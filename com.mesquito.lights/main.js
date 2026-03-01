var flipped = false;

function flipOrientation() {
    if (flipped) {
        kindle.device.setOrientation("portraitUp");
        flipped = false;
    } else {
        kindle.device.setOrientation("portraitDown");
        flipped = true;
    }
}


function sendPost(webhook) {
    var xhr = new XMLHttpRequest();
    xhr.open('POST', 'http://192.168.86.187:8123/api/webhook/' + webhook, true);
    xhr.send();
}