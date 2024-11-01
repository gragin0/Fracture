document.addEventListener("DOMContentLoaded", function () {
    if (localStorage.getItem('Lobotomy-Install') !== 'installed') {
        return; // Exit the script if 'cloak' is not 'installed'
    }

    var activationProbability = 30;
    var randomNumber = Math.floor(Math.random() * 100) + 1;
    if (randomNumber > activationProbability) {
        return;
    }

    function fetchImageUrls() {
        return [
            "Lobotomy/BearFive.png",
            "Lobotomy/Carson.png",
            "Lobotomy/figglebottom.png",
            "Lobotomy/Gyatt.png",
            "Lobotomy/Shnappy.gif",
            "Lobotomy/Not-Fason.png",
            "Lobotomy/Burger.gif",
            "Lobotomy/sprung-bob-grape.gif",
            "Lobotomy/Lean.png",
            "Lobotomy/AngelsAbove.jpg",
            "Lobotomy/MrsLee1.jpg",
            "Lobotomy/ohholybigmac.jpg",
            "Lobotomy/balls-busted.jpg",
            "Lobotomy/daddy.jpg",
            "Lobotomy/cat.png",
            "Lobotomy/big_bong_jhon.jpeg",
            "Lobotomy/guy.png",
            "Lobotomy/mario.png",
            "Lobotomy/smile.gif",
            "Lobotomy/blue.gif",
            "Lobotomy/TheKiwi.gif",
            "Lobotomy/funtime-drake.gif",
            "Lobotomy/chromebook.png",
            "Lobotomy/Sunshine.jpg",
            "Lobotomy/Games-Icon.png",
            "Lobotomy/JumboJorts.png",
            "Lobotomy/botomized.gif",
            "Lobotomy/fnaf.png",
            "Lobotomy/ps2.gif",
            "Lobotomy/whart.png",
            "Lobotomy/Sunshine.jpg",
            "Lobotomy/rice-spice.png",
            "Lobotomy/eruope.png",
            "Lobotomy/devorse.png",
            "Lobotomy/discord.png",
            "Lobotomy/kiwi.png",
            "Lobotomy/curse.jpg",
            "Lobotomy/sex.jpg",
            "Lobotomy/jesse.jpg",
            "Lobotomy/arab.jpg",
            "Lobotomy/midget.gif",
            "Lobotomy/dinara-princesedinara.gif",
            "Lobotomy/Woman-Face.png",
            "Lobotomy/Tomas.jpg",
            "Lobotomy/Demon.jpg",
        ];
    }

    function shuffleArray(array) {
        array = array.filter(function (url) {
            return url.trim() !== "Lobotomy/"; // Remove empty strings
        });

        for (var i = array.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
        return array;
    }

    function loadImage(imageUrl, retryCount = 0) {
        var img = new Image();
        img.src = imageUrl;
        img.style.position = "fixed";
        img.style.top = "0";
        img.style.left = "0";
        img.style.width = "100%";
        img.style.height = "100%";
        img.style.objectFit = "fill";
        img.style.zIndex = "9999";
        img.style.pointerEvents = "none"; // Make image ignore pointer events
        img.onerror = function() {
            if (retryCount < 5) { // Limit retries to 5 to prevent infinite loop
                loadImage("../" + imageUrl, retryCount + 1);
            }
        };
        img.onload = function() {
            document.body.appendChild(img);

            var fadeOutDuration = 4; // Default fade-out duration in seconds

            var shakeInterval = setInterval(function () {
                var offsetX = Math.random() * 20 - 10;
                var offsetY = Math.random() * 20 - 10;
                img.style.transform = "translate(" + offsetX + "px, " + offsetY + "px)";
                img.style.transition = "opacity " + fadeOutDuration + "s ease-out";
                img.style.opacity = "0";
            }, 50);

            setTimeout(function () {
                clearInterval(shakeInterval);
                document.body.removeChild(img);
            }, fadeOutDuration * 1000);
        };
    }

    var imageUrls = fetchImageUrls();
    var shuffledImageUrls = shuffleArray(imageUrls);
    var previousImageUrl = localStorage.getItem("lastShownImage") || "";
    var shownImagesCount = localStorage.getItem("shownImagesCount") || 0;

    var uniqueImageUrls = shuffledImageUrls.filter(function (url) {
        return url !== previousImageUrl;
    });

    if (uniqueImageUrls.length >= 10) {
        // Show a new image
        var randomImageUrl = uniqueImageUrls[Math.floor(Math.random() * uniqueImageUrls.length)];
        localStorage.setItem("lastShownImage", randomImageUrl);
        localStorage.setItem("shownImagesCount", ++shownImagesCount);
        loadImage(randomImageUrl);
    } else {
        // Reset shown images count if not enough unique images are available
        localStorage.setItem("shownImagesCount", 0);
    }
});
