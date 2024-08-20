
const clock = document.getElementById('clock');
const date = document.getElementById('date');


setInterval(function() {
    let d = new Date();
    clock.innerHTML = d.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });
    date.innerHTML = d.toLocaleDateString();
}, 1000);
