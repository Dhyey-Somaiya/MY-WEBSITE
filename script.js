// Mobile Menu Toggle
const menuToggle = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('.nav-menu');

menuToggle.addEventListener('click', () => {
  navMenu.classList.toggle('active');
});

// Form Validation
const feedbackForm = document.querySelector('.feedback-form');
if (feedbackForm) {
  feedbackForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Validate form
    let isValid = true;
    const inputs = this.querySelectorAll('input, textarea, select');
    
    inputs.forEach(input => {
      if (!input.value.trim()) {
        input.style.border = '1px solid red';
        isValid = false;
      } else {
        input.style.border = 'none';
      }
    });

    // Show success modal
    if (isValid) {
      const modal = document.querySelector('.modal');
      modal.style.display = 'flex';
      
      // Reset form
      this.reset();
    }
  });
}

// Close Modal
const modalClose = document.querySelector('.modal-close');
if (modalClose) {
  modalClose.addEventListener('click', () => {
    document.querySelector('.modal').style.display = 'none';
  });
}

function redirectToReserve(event) {
  event.preventDefault();
  window.location.href = "contact-success.html";
}
