function updateClock() {
    const now = new Date();
    const options = { timeZone: 'Africa/Douala', weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit' };
    const timeString = now.toLocaleString('fr-FR', options);
    document.getElementById('clock').textContent = timeString;
}

setInterval(updateClock, 1000);
updateClock(); // initial call to display clock immediately