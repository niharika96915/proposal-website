document.getElementById("yesBtn").addEventListener("click", function() {
    document.getElementById("responseMessage").innerHTML = "Yay! You made me the happiest person in the world! 💖🥰";
});

document.getElementById("noBtn").addEventListener("click", function() {
    let btn = document.getElementById("noBtn");
    btn.style.position = "absolute";
    btn.style.left = Math.random() * window.innerWidth + "px";
    btn.style.top = Math.random() * window.innerHeight + "px";
});
