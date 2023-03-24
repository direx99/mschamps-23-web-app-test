document.addEventListener("DOMContentLoaded", () => {
  const dateElement = document.getElementById("date");
  const timeElement = document.getElementById("time");
  const currentDate = new Date();
  const formattedDate = currentDate.toLocaleDateString(undefined, {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  dateElement.textContent = formattedDate;

  function updateTime() {
    const currentTime = new Date();
    const formattedTime = currentTime.toLocaleTimeString(undefined, {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    });
    timeElement.textContent = formattedTime;
  }

  updateTime();
  setInterval(updateTime, 1000);
});
