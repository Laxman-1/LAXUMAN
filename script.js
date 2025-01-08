const menuIcon = document.getElementById('menu-icon');
const navbar = document.querySelector('.navbar');

// Toggle 'active' class on navbar when menu icon is clicked
menuIcon.addEventListener('click', function() {
    navbar.classList.toggle('active');
});




  emailjs.init('OEK3GwjKxkMKx1DRO'); // Initialize with your EmailJS User ID

  const btn = document.getElementById('button');
  document.getElementById('form')
    .addEventListener('submit', function (event) {
      event.preventDefault();

      btn.value = 'Sending...';

      const serviceID = 'default_service';
      const templateID = 'template_cmx0pge';

      emailjs.sendForm(serviceID, templateID, this)
        .then(() => {
          btn.value = 'Send Email';
          alert('Email sent successfully!');
        }, (err) => {
          btn.value = 'Send Email';
          alert('Failed to send email. Error: ' + JSON.stringify(err));
        });
    });
