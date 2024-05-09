  const availableTimes = [
    "9:00 AM",
    "10:00 AM",
    "11:00 AM",
    "1:00 PM",
    "2:00 PM",
    "3:00 PM"
  ];
  
  function displayAvailableTimes(date) {
    const timeslotsDiv = document.getElementById("timeslots");
    timeslotsDiv.innerHTML = "";
    availableTimes.forEach(time => {
      const timeslotDiv = document.createElement("a");
      timeslotDiv.setAttribute("href" , "./to_be_sure.html")
      timeslotDiv.classList.add("list-group-item");
      timeslotDiv.classList.add("list-group-item-action");
      timeslotDiv.textContent = time;
      timeslotDiv.addEventListener("click", () => bookAppointment(date, time));
      timeslotsDiv.appendChild(timeslotDiv);
    });
  }

  function bookAppointment(date, time) {
    // alert(`You have booked an appointment with the doctor on ${date} at ${time}.`);
  }
  
  const datepicker = document.getElementById("datepicker");
  datepicker.addEventListener("change", function() {
    const selectedDate = this.value;
    displayAvailableTimes(selectedDate);
  });
