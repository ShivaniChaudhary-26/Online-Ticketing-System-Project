// Sample event data
const events = [
  { id: 1, name: "Event 1", seats: 100, bookedSeats: 0 },
  { id: 2, name: "Event 2", seats: 200, bookedSeats: 0 },
  { id: 3, name: "Event 3", seats: 300, bookedSeats: 0 },
];

// Sample booking data
const bookings = [];

// Function to populate event list
function populateEventList() {
  const eventList = document.getElementById("event-list");
  events.forEach((event) => {
    const listItem = document.createElement("LI");
    listItem.textContent = `${event.name} - Available Seats: ${event.seats - event.bookedSeats}`;
    eventList.appendChild(listItem);
  });
}

// Function to populate event select options
function populateEventSelect() {
  const eventSelect = document.getElementById("event-select");
  events.forEach((event) => {
    const option = document.createElement("OPTION");
    option.value = event.id;
    option.textContent = event.name;
    eventSelect.appendChild(option);
  });
}

// Function to handle booking form submission
function handleBookingFormSubmission() {
  const bookingForm = document.getElementById("booking-form");
  const eventSelect = document.getElementById("event-select");
  const seatSelect = document.getElementById("seat-select");
  const bookButton = document.getElementById("book-button");

  bookButton.addEventListener("click", (e) => {
    e.preventDefault();
    const selectedEvent = events.find(
      (event) => event.id == eventSelect.value
    );
    const selectedSeats = parseInt(seatSelect.value);

    if (selectedEvent && selectedSeats > 0) {
      if (selectedEvent.seats - selectedEvent.bookedSeats >= selectedSeats) {
        selectedEvent.bookedSeats += selectedSeats;
        const booking = {
          event: selectedEvent.name,
          seats: selectedSeats,
        };
        bookings.push(booking);
        alert(`Booking successful! Event: ${booking.event}, Seats: ${booking.seats}`);
        populateEventList();
      } else {
        alert("Not enough seats available!");
      }
    } else {
      alert("Invalid selection!");
    }
  });
}

// Function to populate seat select options
function populateSeatSelect() {
  const seatSelect = document.getElementById("seat-select");
  for (let i = 1; i <= 100; i++) {
    const option = document.createElement("OPTION");
    option.value = i;
    option.textContent = i;
    seatSelect.appendChild(option);
  }
}

// Initialize the application
function init() {
  populateEventList();
  populateEventSelect();
  populateSeatSelect();
  handleBookingFormSubmission();
}

init();


