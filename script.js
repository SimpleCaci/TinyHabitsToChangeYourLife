
// Select all buttons
const habitButtons = document.querySelectorAll(".habitTask");

// Add click event to each button
habitButtons.forEach(button => {
  button.addEventListener("click", () => {
    button.classList.toggle("done"); // Toggles the 'done' class on/off
  });
});
