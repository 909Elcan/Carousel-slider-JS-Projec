let images = ["1.jpg.png", "2.jpg.png", "3.jpg.png", "4.jpg.png", "5.jpg.png", "6.jpg.png"];

let myimage = document.querySelector("#myimg");

let l = document.querySelector("#left");
let r = document.querySelector("#right");

let index = 1;
let min = 1;
let max = images.length;

l.style.display = "none";

function left() {
    if (index > min) {
        index--;
    }
    if (index == min) {
        l.style.display = "none";
    }
    else {
        l.style.display = "inline-block";
    }

    if (index < max) {
        r.style.display = "inline-block";
    }

    myimage.classList.remove('animate__fadeInLeft', 'animate__fadeInRight', 'animate__fadeIn');
    void myimage.offsetWidth; 
    myimage.src = `images/${images[index - 1]}`;
    myimage.classList.add('animate__fadeInLeft');
}

function right() {
    if (index < max) {
        index++;
    }

    if (index == max) {
        r.style.display = "none";
    }
    else {
        r.style.display = "inline-block";
    }

    if (index > min) {
        l.style.display = "inline-block";
    }

    myimage.classList.remove('animate__fadeInLeft', 'animate__fadeInRight', 'animate__fadeIn');
    void myimage.offsetWidth; 
    myimage.src = `images/${images[index - 1]}`;
    myimage.classList.add('animate__fadeInRight');
}

let myimages = document.querySelector("#myimg");

let items = document.querySelectorAll(".Cars_IMG_List img");
function Cars_IMG_List(CarsList) {

    CarsList.forEach(function(item, i) {

        item.addEventListener("mouseover", function() {

            myimages.classList.remove('animate__fadeInLeft', 'animate__fadeInRight', 'animate__fadeIn');
            void myimages.offsetWidth;
            
            myimages.src = this.src;
            myimages.classList.add('animate__fadeIn'); 

            index = i + 1;

            if (index == 1) {
                l.style.display = "none";
            }
            else {
                l.style.display = "inline-block";
            }

            if (index == CarsList.length) {
                r.style.display = "none";
            }
            else {
                r.style.display = "inline-block";
            }
        });

    });

}

Cars_IMG_List(items);

items.forEach(function(item) {

    item.addEventListener("dragstart", function() {
        console.log("Drag başladı");
    });

    item.addEventListener("dragend", function() {
        console.log("Drag bitdi");
    });

});