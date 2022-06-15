const clockTitle = document.querySelector(".js-clock");

function getClock() {
  const now = new Date();
  const dDay = new Date(2022, 11, 25, 0, 0);
  const day = String(Math.floor((dDay - now) / 86400000)).padStart(3, "0");
  const hour = String(Math.floor(((dDay - now) % 86400000) / 3600000)).padStart(
    2,
    "0"
  );
  const minute = String(
    Math.floor((((dDay - now) % 86400000) % 3600000) / 60000)
  ).padStart(2, "0");
  const second = String(
    Math.floor(((((dDay - now) % 86400000) % 3600000) % 60000) / 1000)
  ).padStart(2, "0");

  clockTitle.innerText = `${day}D ${hour}h ${minute}m ${second}s`;
}

getClock();
setInterval(getClock, 1000);
