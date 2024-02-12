// canvas
function draw() {
    let canvas = document.getElementById("canvas");
    if (canvas.getContext) {
        let ctx = canvas.getContext("2d");
        ctx.beginPath();
        ctx.lineWidth = 3;
        ctx.fillStyle = "pink";
        ctx.strokeRect(50,50,100,100)// Outer circle
        ctx.fillRect(50,50,100,100)// Outer circle
        ctx.moveTo(70,95);
        ctx.arc(95, 95, 25, 0, Math.PI, false); // Mouth (clockwise)
        ctx.moveTo(85,80);
        ctx.arc(80, 80, 5, 0, Math.PI * 2, true); // Left eye
        ctx.fill();
        ctx.moveTo(110,85);
        ctx.arc(110, 80, 5, 0, Math.PI * 2, true); // Right eye
        ctx.stroke();
    }
}
window.onload = draw;
//geolocation
let latlon = document.getElementById("test");
            function getLocation() {
                if (navigator.geolocation) {
                    navigator.geolocation.getCurrentPosition(showPosition, showError);
                } else {
                    latlon.innerHTML = "Geolocation is not supported by this browser.";
                }
            }
            function showPosition(position) {
                latlon.innerHTML = "Latitude: " + position.coords.latitude + "<br>Longitude: " + position.coords.longitude;
            }
            function showError(error) {
                switch (error.code) {
                    case error.PERMISSION_DENIED:
                        latlon.innerHTML = "User denied the request for Geolocation.";
                        break;
                    case error.POSITION_UNAVAILABLE:
                        latlon.innerHTML = "Location information is unavailable.";
                        break;
                    case error.TIMEOUT:
                        latlon.innerHTML = "The request to get user location timed out.";
                        break;
                    case error.UNKNOWN_ERROR:
                        latlon.innerHTML = "An unknown error occurred.";
                        break;
                }
            }
// Drag-and-Drop
function allowDrop(ev) {
    ev.preventDefault();
}
function drag(ev) {
    ev.dataTransfer.setData("Text", ev.target.id);
}
function drop(ev) {
    var data = ev.dataTransfer.getData("Text");
    ev.target.appendChild(document.getElementById(data));
    ev.preventDefault();
}
// Files
function handleFileSelect(e) {
    var files = e.target.files;
    var output = "";
    for (var i = 0, x = files.length; i < x; ++i) {
        var name = escape(files[i].name);
        var type = files[i].type || "n/a";
        var size = files[i].size;
        var lastModDate = files[i].lastModifiedDate ? files[i].lastModifiedDate.toLocaleDateString() : "n/a";
        output += "<li><strong>" + name + "</strong> (" + type + ") - " + size + " bytes, last modified: " + lastModDate + "</li>";
    }
    document.getElementById("list").innerHTML = "<ul>" + output + "</ul>";
}
document.getElementById("files").addEventListener("change", handleFileSelect);

