/* =========================
   ANIMAÇÃO DAS IMAGENS
   ========================= */

const paginas = document.querySelectorAll(".pagina");

const observador = new IntersectionObserver(
    (entradas) => {

        entradas.forEach((entrada) => {

            if (entrada.isIntersecting) {

                entrada.target.classList.add("visivel");

            }

        });

    },
    {
        threshold: 0.12
    }
);


paginas.forEach((pagina) => {

    observador.observe(pagina);

});