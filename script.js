// Elements
const openBtn = document.getElementById("openGift");
const welcome = document.getElementById("welcome");
const website = document.getElementById("website");
const wishBtn = document.getElementById("wishBtn");

// Open Gift
openBtn.addEventListener("click", () => {

    welcome.style.display = "none";
    website.style.display = "block";

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

    alert("🎉 Happy Birthday Fiza! 🎂💖");
});

// Make A Wish
wishBtn.addEventListener("click", () => {

    alert("✨ Your wish has been sent! 🤲\n\nMay Allah bless you with happiness, success and endless smiles. Ameen. 💖");

});

// Floating Hearts (Extra)
function createHeart(){

    const heart = document.createElement("div");

    heart.innerHTML = "💖";

    heart.style.position = "fixed";
    heart.style.left = Math.random()*100 + "vw";
    heart.style.top = "100vh";
    heart.style.fontSize = (20 + Math.random()*20) + "px";
    heart.style.pointerEvents = "none";
    heart.style.zIndex = "9999";

    heart.style.animation = "floatUp 6s linear forwards";

    document.body.appendChild(heart);

    setTimeout(()=>{
        heart.remove();
    },6000);

}

setInterval(createHeart,1200);

// Floating Animation
const style = document.createElement("style");

style.innerHTML = `
@keyframes floatUp{

0%{
transform:translateY(0);
opacity:1;
}

100%{
transform:translateY(-110vh);
opacity:0;
}

}
`;

document.head.appendChild(style);