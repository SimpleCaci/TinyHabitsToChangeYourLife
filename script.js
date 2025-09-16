const habitButtons = document.querySelectorAll(".habitTask");

habitButtons.forEach(button => {
  // Save the original label right away
  if (!button.dataset.label) {
    button.dataset.label = button.innerText;
  }

  const maxSteps = parseInt(button.dataset.steps) || 1;
  let currentStep = 0;

  button.addEventListener("click", () => {
    currentStep = (currentStep + 1) % (maxSteps + 1);

    // Reset classes
    button.className = "habitTask";

    if (currentStep > 0) {
      // Calculate progress color: red → green
      const progress = currentStep / maxSteps;
      const hue = 0 + (120 * progress); // 0° = red, 120° = green
      button.style.backgroundColor = `hsl(${hue}, 70%, 50%)`;

      // Show progress fraction + original label
      button.innerText = `${currentStep}/${maxSteps} ${button.dataset.label}`;
    } else {
      // Reset background + text
      button.style.backgroundColor = "";
      button.innerText = button.dataset.label;
    }
  });
});
