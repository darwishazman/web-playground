function updateTime() {
    document.getElementById('date').innerText = new Date().toDateString();
    document.getElementById('time').innerText = new Date().toLocaleTimeString();
}

setInterval(updateTime, 1000)