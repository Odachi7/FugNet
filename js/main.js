var swiper = new Swiper(".mySwiper", {
    loop: true,
    spaceBetween: 16,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});

function toogleNavMobile() {
    let nav = document.getElementById("nav-mobile");
    let sombraH = document.getElementById("sombra-header");

    if (nav.classList.contains("hidden")) {
        nav.classList.remove("hidden"); // Torna visível
        setTimeout(() => {
            nav.classList.remove("opacity-0", "scale-95");
            nav.classList.add("opacity-100", "scale-100");
        }, 100);
    } else {
        nav.classList.remove("opacity-100", "scale-100");
        nav.classList.add("opacity-0", "scale-95");
        setTimeout(() => {
            nav.classList.add("hidden"); 
        }, 200);
    }

    sombraH.classList.toggle("h-[650px]");
}

document.addEventListener("DOMContentLoaded", () => {
    let links = document.querySelectorAll(".nav-link");

    links.forEach(link => {
        link.addEventListener("click", function() {
            // Remove a classe 'active' de todos os links
            links.forEach(l => l.classList.remove("active"));

            // Adiciona a classe 'active' no link clicado
            this.classList.add("active");
        });
    });
});