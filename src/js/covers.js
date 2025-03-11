document.addEventListener("DOMContentLoaded", function () {
    const coversSection = document.querySelector(".covers");
    const marquee = document.querySelector(".marquee");
    const marqueeInner = document.querySelectorAll(".marqueeinner");

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
});
