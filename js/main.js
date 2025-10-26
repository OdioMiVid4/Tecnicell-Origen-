document.addEventListener("DOMContentLoaded", () => {

    // 🔹 Navbar dropdown con hover solo en desktop
    function updateNavbarBehavior() {
        const dropdowns = document.querySelectorAll(".navbar .dropdown");

        dropdowns.forEach(dd => {
            dd.removeEventListener("mouseenter", toggleOpen);
            dd.removeEventListener("mouseleave", toggleClose);

            if (window.innerWidth > 992) {
                dd.addEventListener("mouseenter", toggleOpen);
                dd.addEventListener("mouseleave", toggleClose);
            }
        });
    }

    function toggleOpen(e) {
        this.classList.add("show");
        this.querySelector(".dropdown-menu").classList.add("show");
    }

    function toggleClose(e) {
        this.classList.remove("show");
        this.querySelector(".dropdown-menu").classList.remove("show");
    }

    updateNavbarBehavior();
    window.addEventListener("resize", updateNavbarBehavior);


    // 🔹 Botón Back to Top (si existe)
    const backToTop = document.querySelector(".back-to-top");
    if (backToTop) {
        window.addEventListener("scroll", () => {
            backToTop.style.display = window.scrollY > 150 ? "flex" : "none";
        });

        backToTop.addEventListener("click", () => {
            window.scrollTo({ top: 0, behavior: "smooth" });
        });
    }


    // 🔹 Animación scroll: fade-up
    const fadeItems = document.querySelectorAll(".fade-up");

    function handleScrollAnimation() {
        fadeItems.forEach(item => {
            const position = item.getBoundingClientRect().top;
            if (position < window.innerHeight - 100) {
                item.classList.add("show");
            }
        });
    }

    handleScrollAnimation();
    window.addEventListener("scroll", handleScrollAnimation);

});
