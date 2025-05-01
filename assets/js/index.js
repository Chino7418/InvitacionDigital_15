
// Fecha del evento
const targetDate = new Date("August 23, 2025 21:00:00").getTime();

const countdown = document.getElementById("countdown");

const interval = setInterval(() => {
    const now = new Date().getTime();
    const distance = targetDate - now;

    if (distance <= 0) {
        clearInterval(interval);
        countdown.innerHTML = "¡Llegó el gran día! 🎉";
        return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    countdown.innerHTML = `${days} dias | ${hours} horas <br> ${minutes} minutos | ${seconds} segundos`;
}, 1000)


const cambiaMapa = document.getElementById("mapa");
function muestraMapa() {
    cambiaMapa.innerHTML = `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3403.5481830227895!2d-64.22152882459687!3d-31.454103274244403!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9432a343f0128009%3A0xab7f3422a7366786!2sLa%20Cayetana!5e0!3m2!1ses!2sar!4v1744612398766!5m2!1ses!2sar" width="350" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`;
}

document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("formConfirmacion");

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const nombre = document.getElementById("nombre").value.trim();
        const mayores = document.getElementById("mayores").value.trim();
        const menores13_17 = document.getElementById("menores13-17").value.trim();
        const menores3_12 = document.getElementById("menores3-12").value.trim();

        const numeroWhatsApp = "5493513074372"; // <-- poné el número real acá

        const mensaje = `Hola! Soy ${nombre}. Confirmo asistencia al cumple de Pilar 🎉.
        👨‍👩‍👧‍👦 Mayores: ${mayores}
        🧑‍🎓 Menores de 13 a 17 años: ${menores13_17}
        🧒 Menores de 3 a 12 años: ${menores3_12}`;

        const url = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensaje)}`;
        window.open(url, "_blank");

        // Cierra el modal si querés
        const modal = bootstrap.Modal.getInstance(document.getElementById('modalPresencia'));
        if (modal) modal.hide();
    });
});
