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


// =============================================
// === TECNICELL: Animaciones de scroll (ES) ===
// =============================================
// Muestra elementos con clase .fade-up cuando entren al viewport.
(function(){
  function handleScrollAnimation(){
    var items = document.querySelectorAll(".fade-up");
    var h = window.innerHeight || document.documentElement.clientHeight;
    for(var i=0;i<items.length;i++){
      var top = items[i].getBoundingClientRect().top;
      if(top < h - 100){ items[i].classList.add("show"); }
    }
  }
  window.addEventListener("scroll", handleScrollAnimation);
  document.addEventListener("DOMContentLoaded", handleScrollAnimation);
})();

// =============================================
// === TECNICELL: Botón "Volver arriba" (ES) ===
// =============================================
(function(){
  var btn = document.querySelector(".back-to-top");
  if(!btn){
    // Si no existe, lo creamos al vuelo
    btn = document.createElement("a");
    btn.href = "#";
    btn.className = "back-to-top";
    btn.setAttribute("aria-label","Volver al principio");
    btn.innerHTML = "↑";
    document.body.appendChild(btn);
  }
  function toggleBtn(){
    if(window.scrollY > 300){ btn.style.display="block"; }
    else{ btn.style.display="none"; }
  }
  window.addEventListener("scroll", toggleBtn);
  document.addEventListener("DOMContentLoaded", toggleBtn);
  btn.addEventListener("click", function(e){ e.preventDefault(); window.scrollTo({top:0, behavior:"smooth"}); });
})();
