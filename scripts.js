function updateClock() {
    const now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    // Formato de 2 dígitos para horas, minutos y segundos
    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;

    const currentTime = `${hours}:${minutes}:${seconds}`;
    document.getElementById('time').textContent = currentTime;
}

// Actualizar el reloj cada segundo
setInterval(updateClock, 1000);

// Ejecutar la función al cargar la página
updateClock();
