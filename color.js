let count = 0;
        var letters = '0123456789ABCDEF';
        var color = '#';

        const button = document.getElementById("clickbtn");
        const counter = document.getElementById("counter");
        const bodyColor = document.getElementById("body");
        button.addEventListener("click", function () {
            if (count == 100) {
              
                return;
            }
            for (var i = 0; i < 6; i++) {
                color += letters[Math.floor(Math.random() * 16)];
            }
            count++;
            counter.innerHTML = count;
            bodyColor.style.backgroundColor = color;
            color = "#";

        });