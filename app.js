const socials = [document.getElementById("facebook"), document.getElementById("twitter"), document.getElementById("url")];

socials.forEach(element => {
    element.addEventListener("mouseenter", (e) => {
        element.value = element.getAttribute("data");
    });

    element.addEventListener("mouseleave", (e) => {
        element.value = "";
    });
});

const gallery = document.getElementById("gallery");
let img = document.querySelector(".img");
let clone = img.cloneNode(true);
const width = img.clientWidth;
let i = width;

gallery.appendChild(clone);

cloneImg = () => {
    img = img.nextSibling;
    clone = img.cloneNode(true);
    gallery.appendChild(clone);
}

next = () => {
    setTimeout(() => {
        gallery.scrollLeft += 2;
        if (i <= 2) {
            i = width;
            cloneImg();
            cloneImg();
            return;
        }
        i -= 2;
        next ();
    }, 1);
}


//383 2000