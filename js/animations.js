document.addEventListener("scroll", function() {
    let elements = document.querySelectorAll(".fade-in");
    elements.forEach(el => {
        let position = el.getBoundingClientRect().top;
        let screenHeight = window.innerHeight;
        if (position < screenHeight - 100) {
            el.style.opacity = "1";
        }
    });
});