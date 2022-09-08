let clock = document.getElementById('clock');
let calendar = document.getElementById('calendar');

setInterval(() => {
    let d = new Date();

    let years = d.getFullYear();
    let months = d.getMonth() + 1;
    let days = d.getDate();

    calendar.innerHTML = `${years}/${months}/${days}`;

    let hours = d.getHours();
    let minutes = d.getMinutes();
    let seconds = d.getSeconds();

    clock.innerHTML = `${hours}:${minutes}:${seconds}`;
});


const myModal = new bootstrap.Modal(document.getElementById('logoutModal'));
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl));