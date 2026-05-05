function loadEvent() {
  let id = localStorage.getItem("eventId") || 4; 
  let event = events[id];

  if (!event) return;

  
  document.getElementById("event-title").innerHTML =
    event.title + `:<br><span class="italic-gold">${event.subtitle}</span>`;

  document.getElementById("event-description").innerText = event.description;

  
  document.getElementById("event-hero-img").src = event.image;
  document.getElementById("event-hero-img").alt = event.title;
  document.getElementById("event-date").innerHTML =
    `<i class="fa-regular fa-calendar"></i> ${event.date} <br><small>View Details Below</small>`;
  document.getElementById("event-location").innerHTML =
    `<i class="fa-regular fa-map"></i> ${event.location}`;


  const timeline = document.getElementById("event-timeline");
  timeline.innerHTML = "";
  event.itinerary.forEach((item, index) => {
    const div = document.createElement("div");
    div.className = "event" + (index === 0 ? " active" : "");
    div.innerHTML = `<strong>${item.time}</strong><p>${item.desc}</p>`;
    timeline.appendChild(div);
  });

  startCountdown(event.countdownDate);
}


function startCountdown(dateString) {
  const targetDate = new Date(dateString).getTime();
  const timeSpans = document.querySelectorAll('.countdown .time-box span');

  function updateTimer() {
    const now = new Date().getTime();
    const distance = targetDate - now;

    if (distance < 0) {
      document.querySelector(".countdown").innerHTML = "<h3>EVENT ENDED</h3>";
      return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    timeSpans[0].textContent = days;
    timeSpans[1].textContent = hours < 10 ? "0" + hours : hours;
    timeSpans[2].textContent = minutes < 10 ? "0" + minutes : minutes;
    timeSpans[3].textContent = seconds < 10 ? "0" + seconds : seconds;
  }

  setInterval(updateTimer, 1000);
  updateTimer();
}


loadEvent();
