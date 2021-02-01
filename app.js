//Movement animation to occur
const container = document.querySelector(".container");
const card = document.querySelector(".card");

//Adding animation to rest  of the items
const earthImg = document.querySelector(".Earth img");
const description = document.querySelector(".info h3"); 
const title = document.querySelector(".title");
const planetsButton = document.querySelector(".planets button");
const planetsImages = document.querySelectorAll(".planets img");
const habitat = document.querySelector(".habitat");


//Moving animation events
container.addEventListener("mousemove", (eve) => {
    //console.log(eve.pageX, eve.pageY);
    let xAxix = (window.innerWidth / 2 - eve.pageX) / 40;
    let yAxix = (window.innerHeight / 2 - eve.pageY) / 300;

    card.style.transform =`rotateY(${xAxix}deg) rotateX(${yAxix}deg)`;
});


//Animate In
container.addEventListener("mouseenter", (eve) => {
    card.style.transition = "none";

    //Popout
    title.style.transform = "translateZ(150px)";
    earthImg.style.transform = "translateZ(200px) rotate(-50deg)";
    description.style.transform = "translateZ(125px)";
    planetsButton.style.transform = "translateZ(100px)";
    habitat.style.transform = "translateZ(50px)";

    planetsImages.forEach((el) => {
        el.style.transform = "translateZ(75px) rotate(-5deg)";
    });
});

//Animate Out
container.addEventListener("mouseleave", (eve) => {
    card.style.transition = "all 0.5s ease";
    card.style.transform = `rotateY(0deg) rotateX(0deg)`;

    //Popback
    title.style.transform = "translateZ(150px)";
    earthImg.style.transform = "translateZ(0px) rotate(0deg)";
    description.style.transform = "translateZ(0px)";
    planetsButton.style.transform = "translateZ(0px)";
    habitat.style.transform = "translateZ(0px)";

    planetsImages.forEach((el) => {
        el.style.transform = "translateZ(0px) rotate(0deg)";
    });
});
