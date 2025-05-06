document.addEventListener('DOMContentLoaded', function() {
  console.log('DOM fully loaded and parsed'); 
  
  const buttons = document.querySelectorAll('.interactive-button');
  console.log('Found buttons:', buttons.length); 
  
  buttons.forEach(button => {
    button.addEventListener('click', function() {
      console.log('Button clicked'); 
      const content = this.nextElementSibling;
      content.classList.toggle('hidden');
      
      if (content.classList.contains('hidden')) {
        this.textContent = 'Show Example';
      } else {
        this.textContent = 'Hide Example';
      }
    });
  });
});