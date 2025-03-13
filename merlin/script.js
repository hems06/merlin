document.addEventListener("DOMContentLoaded", function () {
   const heartsContainer = document.querySelector(".hearts-container");

   function createHeart() {
       const heart = document.createElement("div");
       heart.classList.add("floating-heart");
       heart.innerHTML = "❤️"; 

       // Random positioning
       heart.style.left = Math.random() * 100 + "vw";
       heart.style.animationDuration = Math.random() * 3 + 2 + "s"; // 2s - 5s
       heart.style.opacity = Math.random(); 

       heartsContainer.appendChild(heart);

       // Remove the heart after animation ends
       setTimeout(() => {
           heart.remove();
       }, 5000);
   }

   // Create hearts continuously
   setInterval(createHeart, 400);
});
