
        function openCard() {
            document.querySelector(".left-door").style.transform = "translateX(-100%)";
            document.querySelector(".right-door").style.transform = "translateX(100%)";
            setTimeout(() => {
                document.getElementById("welcome").style.display = "none";
                document.getElementById("card").classList.remove("hide");
            }, 1500);
        }

        // Hoa rơi
        function createFlower(){
            const flower = document.createElement("div");
            flower.classList.add("flower");
            flower.style.left = Math.random() * 100 + "vw";
            flower.style.animationDuration = (Math.random() * 3 + 3) + "s";
            document.body.appendChild(flower);
            setTimeout(() => flower.remove(), 6000);
        }
        setInterval(createFlower, 500);