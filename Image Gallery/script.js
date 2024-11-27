var thumbnails = document.querySelectorAll(".thumbnail");
var main = document.querySelector("#main_image");

for (var i = 0; i < thumbnails.length; i++) {
    thumbnails[i].addEventListener("click", function() {
        main.src = this.src;
    });
}
