document.addEventListener("DOMContentLoaded", function () {
    const coversSection = document.querySelector(".covers");
    const marquee = document.querySelector(".marquee");

    if (!coversSection || !marquee) return; 

    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return rect.top < window.innerHeight && rect.bottom > 0;
    }

    function checkAnimation() {
        if (isInViewport(coversSection)) {
            marquee.classList.add("marquee-active");
        } else {
            marquee.classList.remove("marquee-active");
        }
    }
    checkAnimation();
    
    window.addEventListener("scroll", checkAnimation);
});

