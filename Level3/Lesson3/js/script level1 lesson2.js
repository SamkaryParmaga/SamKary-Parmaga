/**
 * Toggles the visibility of an example element associated with a button
 * @param {HTMLElement} button - The button element that triggers the toggle
 */
function toggleExample(button) {
  // Get the example element immediately following the button in the DOM
  const example = button.nextElementSibling;
  
  // Toggle the 'hidden' class to show/hide the example
  example.classList.toggle('hidden');
  
  // Update the button text dynamically
  if (example.classList.contains('hidden')) {
    button.textContent = button.textContent.replace('Hide', 'Show');
  } else {
    button.textContent = button.textContent.replace('Show', 'Hide');
  }
}

// Add click event listeners to all interactive buttons when the DOM loads
document.addEventListener('DOMContentLoaded', function() {
  // Select all buttons with the 'interactive-button' class
  const buttons = document.querySelectorAll('.interactive-button');
  
  // Add click handler to each button
  buttons.forEach(button => {
    button.addEventListener('click', function() {
      // Pass the clicked button to the toggle function
      toggleExample(this);
    });
  });
});